import { ReactNode } from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
	children: ReactNode;
	onPress?: () => void;
};

export default function PrimaryButton({ children, onPress }: Props) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: '#640233' }}
				style={({ pressed }) => [styles.buttonInnerContainer, pressed && Platform.OS === 'ios' && styles.pressed]}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		margin: 4,
		borderRadius: 28,
		overflow: 'hidden',
	},

	buttonInnerContainer: {
		backgroundColor: '#72063c',
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 2,
	},

	buttonText: {
		color: 'white',
		textAlign: 'center',
	},

	pressed: {
		opacity: 0.75,
	},
});
