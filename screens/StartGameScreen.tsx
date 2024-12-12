import { StyleSheet, TextInput, View } from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

type Props = {};

export default function StartGameScreen({}: Props) {
	return (
		<View>
			<TextInput />
			<View>
				<PrimaryButton>Reset</PrimaryButton>
				<PrimaryButton>Confirm</PrimaryButton>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
