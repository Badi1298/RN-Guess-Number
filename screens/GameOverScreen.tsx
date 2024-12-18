import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

import Card from '../components/ui/Card';
import Colors from '../constants/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'GameOver'>;

export default function GameOverScreen({ route }: Props) {
	const { currentNumber, rounds } = route.params;

	return (
		<View style={{ marginTop: 70, alignItems: 'center' }}>
			<View style={styles.inputContainer}>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={require('../assets/images/success.png')}
				/>
			</View>
			<Card>
				<Text style={styles.text}>Number was: {currentNumber}</Text>
				<Text style={styles.text}>Number of rounds: {rounds}</Text>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		height: 300,
		width: 300,
		borderRadius: 150,
		borderWidth: 3,
		borderColor: Colors.primary800,
		overflow: 'hidden',
		margin: 36,
	},

	text: {
		color: 'white',
		fontSize: 20,
		fontFamily: 'open-sans-bold',
	},
});
