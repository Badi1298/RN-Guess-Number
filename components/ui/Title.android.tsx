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
		borderWidth: 0,
		padding: 12,
		maxWidth: '80%',
		width: 300,
	},
});
