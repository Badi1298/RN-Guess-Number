import { ReactNode } from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

type Props = {
	children: ReactNode;
};

export default function Title({ children }: Props) {
	return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: 'white',
		textAlign: 'center',
		// borderWidth: Platform.OS === 'ios' ? 2 : 0,
		borderWidth: Platform.select({ ios: 2, android: 0 }),
		borderColor: 'white',
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
});
