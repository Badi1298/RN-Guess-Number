import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen';

import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';
import BackgroundOverlay from './components/BackgroundOverlay';

export type RootStackParamList = {
	Home: undefined;
	Game: { currentNumber: number };
	GameOver: { currentNumber: number; rounds: number };
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

SplashScreen.preventAutoHideAsync()
	.then((result: boolean) => console.log(`SplashScreen.preventAutoHideAsync() succeeded: ${result}`))
	.catch(console.warn); // it's good to explicitly catch and inspect any error

export default function App() {
	const [fontsLoaded] = useFonts({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
	});

	if (fontsLoaded) {
		hideSplashScreen();
	}

	async function hideSplashScreen() {
		await SplashScreen.hideAsync();
	}

	return (
		<BackgroundOverlay>
			<SafeAreaView style={{ flex: 1 }}>
				<NavigationContainer>
					<RootStack.Navigator
						initialRouteName="Home"
						screenOptions={{
							animation: 'slide_from_right',
							contentStyle: { backgroundColor: 'transparent' },
							headerTransparent: true,
						}}
					>
						<RootStack.Screen
							name="Home"
							component={StartGameScreen}
							options={{
								title: 'Guess My Number',
								headerTitleStyle: { fontSize: 24, color: 'white' },
								headerTitleAlign: 'center',
							}}
						/>
						<RootStack.Screen
							name="Game"
							component={GameScreen}
							options={{ headerShown: false }}
						/>
						<RootStack.Screen
							name="GameOver"
							options={{
								title: 'Game Over',
								headerTitleStyle: { fontSize: 24, color: 'white' },
								headerTitleAlign: 'center',
							}}
							component={GameOverScreen}
						/>
					</RootStack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
			<StatusBar style="auto" />
		</BackgroundOverlay>
	);
}
