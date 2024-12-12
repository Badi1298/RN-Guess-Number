import { StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

type Props = {};

export default function StartGameScreen({}: Props) {
	return (
		<View style={styles.inputContainer}>
			<TextInput />
			<View>
				<PrimaryButton>Reset</PrimaryButton>
				<PrimaryButton>Confirm</PrimaryButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: '#72063c',
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
});
