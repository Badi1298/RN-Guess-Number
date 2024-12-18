import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

import Colors from '../constants/colors';
import BaseButton from '../components/ui/BaseButton';

type Props = NativeStackScreenProps<RootStackParamList, 'GameOver'>;

export default function GameOverScreen({ route, navigation }: Props) {
	const { currentNumber, rounds } = route.params;

	return (
		<View style={{ marginTop: 46, padding: 24, alignItems: 'center' }}>
			<View style={styles.inputContainer}>
				<Image
					style={{ width: '100%', height: '100%' }}
					source={require('../assets/images/success.png')}
				/>
			</View>
			<Text style={styles.text}>
				Your phone needed <Text style={styles.emphasisText}>{rounds}</Text> rounds to guess the number
				<Text style={styles.emphasisText}> {currentNumber}</Text>.
			</Text>
			<BaseButton
				style={{ marginTop: 40 }}
				onPress={() => navigation.dispatch(CommonActions.reset({ index: 0, routes: [{ name: 'Home' }] }))}
			>
				<Text style={{ fontSize: 20, fontFamily: 'open-sans' }}>Start New Game</Text>
			</BaseButton>
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
		fontSize: 24,
		fontFamily: 'open-sans',
		textAlign: 'center',
	},

	emphasisText: {
		color: Colors.primary500,
		fontFamily: 'open-sans-bold',
	},
});
