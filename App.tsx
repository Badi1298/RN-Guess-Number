import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
	return (
		<LinearGradient
			style={styles.rootScreen}
			colors={['#4e0329', '#ddb52f']}
		>
			<ImageBackground
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
				source={require('./assets/images/background.png')}
			>
				<StartGameScreen />
			</ImageBackground>
			<StatusBar style="light" />
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
