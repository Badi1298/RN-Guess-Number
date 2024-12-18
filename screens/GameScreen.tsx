import React from 'react';
import { useEffect, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Alert, useWindowDimensions } from 'react-native';

import { RootStackParamList } from '../App';

import Colors from '../constants/colors';

import Ionicons from '@expo/vector-icons/Ionicons';

import Card from '../components/ui/Card';
import Title from '../components/ui/Title';
import BaseButton from '../components/ui/BaseButton';
import NumberContainer from '../components/game/NumberContainer';

function generateRandomBetween(min: number, max: number, exclude: number): number {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let min = 1;
let max = 100;

type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

export default function GameScreen({ route, navigation }: Props) {
	const { currentNumber } = route.params;
	const [rounds, setRounds] = useState(0);

	const initialGuess = generateRandomBetween(1, 100, currentNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	const { width, height } = useWindowDimensions();

	useEffect(() => {
		if (currentGuess !== currentNumber) return;

		navigation.replace('GameOver', { currentNumber, rounds });
	}, [currentGuess, currentNumber]);

	useEffect(() => {
		min = 1;
		max = 100;
	}, []);

	function nextGuessHandler(operant: '+' | '-'): void {
		const isLie = (operant === '-' && currentGuess < currentNumber) || (operant === '+' && currentGuess > currentNumber);

		if (isLie) {
			Alert.alert("Don't lie", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
			return;
		}

		// Update bounds based on the operator
		if (operant === '-') {
			max = currentGuess;
		} else {
			min = currentGuess + 1;
		}

		// Generate and set the new random number
		const newRandomNumber = generateRandomBetween(min, max, currentGuess);
		setCurrentGuess(newRandomNumber);
		setRounds((prev) => prev + 1);
	}

	let content = (
		<>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Text style={styles.instructionText}>Higher or lower?</Text>
				<View style={{ flexDirection: 'row' }}>
					<BaseButton
						style={{ flex: 1 }}
						onPress={() => nextGuessHandler('-')}
					>
						<Ionicons
							name="remove"
							size={16}
						/>
					</BaseButton>
					<BaseButton
						style={{ flex: 1 }}
						onPress={() => nextGuessHandler('+')}
					>
						<Ionicons
							name="add"
							size={16}
						/>
					</BaseButton>
				</View>
			</Card>
		</>
	);

	if (width > 500) {
		content = (
			<View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
				<Text style={styles.instructionText}>Higher or lower?</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<BaseButton onPress={() => nextGuessHandler('-')}>
						<Ionicons
							name="remove"
							size={16}
						/>
					</BaseButton>
					<NumberContainer>{currentGuess}</NumberContainer>
					<BaseButton onPress={() => nextGuessHandler('+')}>
						<Ionicons
							name="add"
							size={16}
						/>
					</BaseButton>
				</View>
			</View>
		);
	}

	return (
		<View style={styles.screen}>
			<Title>Oppeonent's Guess</Title>
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		alignItems: 'center',
	},

	instructionText: {
		color: Colors.accent500,
		fontSize: 20,
		fontFamily: 'open-sans',
		marginBottom: 12,
	},
});
