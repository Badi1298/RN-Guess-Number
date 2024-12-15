import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

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

	const initialGuess = generateRandomBetween(1, 100, currentNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentNumber === currentNumber) {
			Alert.alert('Yay', `You did it you son of a gun! The number was ${currentNumber}.`, [{ text: 'Yuppi!', style: 'default' }]);
			navigation.replace('GameOver');
			return;
		}
	}, [currentGuess, currentNumber]);

	function nextGuessHandler(operant: '+' | '-'): void {
		if ((operant === '-' && currentGuess < currentNumber) || (operant === '+' && currentGuess > currentNumber)) {
			Alert.alert("Don't lie", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
			return;
		}

		if (operant === '-') {
			max = currentGuess;
		} else {
			min = currentGuess + 1;
		}

		const newRandomNumber = generateRandomBetween(min, max, currentGuess);

		setCurrentGuess(newRandomNumber);
	}

	return (
		<View style={styles.screen}>
			<Title>Oppeonent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<View>
					<BaseButton onPress={() => nextGuessHandler('+')}>+</BaseButton>
					<BaseButton onPress={() => nextGuessHandler('-')}>-</BaseButton>
				</View>
			</View>
			<View></View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		marginTop: 58,
	},
});
