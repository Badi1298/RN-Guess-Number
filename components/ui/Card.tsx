import { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import Colors from '../../constants/colors';

type Props = {
	children: ReactNode;
	style?: StyleProp<ViewStyle>;
};

export default function Card({ children, style }: Props) {
	return <View style={[styles.card, style]}>{children}</View>;
}

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
		rowGap: 16,
		padding: 16,
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
});
