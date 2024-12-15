import { useState } from 'react';
import { StyleSheet, TextInput, View, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Colors from '../constants/colors';

import { RootStackParamList } from '../App';

import BaseButton from '../components/ui/BaseButton';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function StartGameScreen({ navigation }: Props) {
	const [number, setNumber] = useState('');

	const numberInputHandler = (text: string): void => {
		setNumber(text);
	};

	const resetInputHandler = () => {
		setNumber('');
	};

	const confirmHandler = () => {
		const chosenNumber = parseInt(number);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid number', 'Number has to be a number between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
			return;
		}

		navigation.navigate('Game', { currentNumber: parseInt(number) });
	};

	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={number}
				maxLength={2}
				autoCorrect={false}
				autoCapitalize="none"
				keyboardType="number-pad"
				style={styles.numberInput}
				onChangeText={numberInputHandler}
			/>
			<View style={styles.buttonsContainer}>
				<BaseButton
					style={{ flex: 1 }}
					onPress={resetInputHandler}
				>
					Reset
				</BaseButton>
				<BaseButton
					style={{ flex: 1 }}
					onPress={confirmHandler}
				>
					Confirm
				</BaseButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		alignItems: 'center',
		rowGap: 16,
		padding: 16,
		marginTop: 70,
		marginHorizontal: 24,
		backgroundColor: Colors.primary800,
		borderRadius: 8,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.23,
		shadowRadius: 2.62,
		elevation: 4,
	},

	numberInput: {
		height: 50,
		width: 50,
		fontSize: 24,
		borderBottomWidth: 2,
		borderBottomColor: Colors.accent500,
		color: Colors.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},

	buttonsContainer: {
		flexDirection: 'row',
	},
});
