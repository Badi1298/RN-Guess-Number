import React from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { CommonActions } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../App';

import Colors from '../constants/colors';
import BaseButton from '../components/ui/BaseButton';

type Props = NativeStackScreenProps<RootStackParamList, 'GameOver'>;

export default function GameOverScreen({ route, navigation }: Props) {
	const { currentNumber, rounds } = route.params;

	const { width, height } = useWindowDimensions();

	const imageContainerStyle = {
		height: width < height ? width * 0.79 : height * 0.3,
		width: width < height ? width * 0.79 : height * 0.3,
		borderRadius: width < height ? (width * 0.79) / 2 : (height * 0.3) / 2,
	};

	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={{ marginTop: width > 500 ? 'auto' : 24, padding: 24, alignItems: 'center' }}>
				<View style={[styles.inputContainer, imageContainerStyle]}>
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
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
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
