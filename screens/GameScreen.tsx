import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Game'>;

export default function GameScreen({ route }: Props) {
	const { currentNumber } = route.params;

	const initialGuess = generateRandomBetween(1, 100, currentNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	return (
		<View style={styles.screen}>
			<Title>Oppeonent's Guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<View>
				<Text>Higher or lower?</Text>
				<BaseButton>+</BaseButton>
				<BaseButton>-</BaseButton>
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
