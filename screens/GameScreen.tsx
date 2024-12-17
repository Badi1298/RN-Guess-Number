import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

import Title from '../components/ui/Title';
import BaseButton from '../components/ui/BaseButton';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import Colors from '../constants/colors';

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

	const initialGuess = generateRandomBetween(1, 100, currentNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === currentNumber) {
			Alert.alert('Yay', `You did it you son of a gun! The number was ${currentNumber}.`, [{ text: 'Yuppi!', style: 'default' }]);
			navigation.replace('GameOver');
			return;
		}
	}, [currentGuess, currentNumber]);

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
	}

	return (
		<View style={styles.screen}>
			<Title>Oppeonent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Text style={styles.instructionText}>Higher or lower?</Text>
				<View style={{ flexDirection: 'row' }}>
					<BaseButton
						style={{ flex: 1 }}
						onPress={() => nextGuessHandler('+')}
					>
						-
					</BaseButton>
					<BaseButton
						style={{ flex: 1 }}
						onPress={() => nextGuessHandler('-')}
					>
						+
					</BaseButton>
				</View>
			</Card>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
	},

	instructionText: {
		color: Colors.accent500,
		fontSize: 20,
		fontWeight: '500',
		marginBottom: 12,
	},
});
