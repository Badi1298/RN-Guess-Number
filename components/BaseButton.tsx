import { ReactNode } from 'react';
import { Platform, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

import Colors from '../constants/colors';

type Props = {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
	onPress?: () => void;
};

export default function BaseButton({ children, onPress, style }: Props) {
	return (
		<View style={[styles.buttonOuterContainer, style]}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: Colors.primary600 }}
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
		elevation: 2,
		paddingVertical: 8,
		paddingHorizontal: 16,
		backgroundColor: Colors.primary500,
	},

	buttonText: {
		color: 'white',
		textAlign: 'center',
	},

	pressed: {
		opacity: 0.75,
	},
});
