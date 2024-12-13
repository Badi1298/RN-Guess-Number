import { LinearGradient } from 'expo-linear-gradient';
import { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

type Props = {
	children: ReactNode;
};

export default function BackgroundOverlay({ children }: Props) {
	return (
		<LinearGradient
			style={styles.rootScreen}
			colors={['#4e0329', '#ddb52f']}
		>
			<ImageBackground
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
				source={require('../assets/images/background.png')}
			>
				{children}
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},

	backgroundImage: {
		opacity: 0.2,
	},
});
