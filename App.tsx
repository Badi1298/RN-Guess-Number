import { useState } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StatusBar } from 'expo-status-bar';

import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import StartGameScreen from './screens/StartGameScreen';
import BackgroundOverlay from './components/BackgroundOverlay';

export type RootStackParamList = {
	Home: undefined;
	Game: { currentNumber: number };
	GameOver: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
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
						/>
						<RootStack.Screen
							name="Game"
							component={GameScreen}
						/>
						<RootStack.Screen
							name="GameOver"
							options={{ title: 'Game Over' }}
							component={GameOverScreen}
						/>
					</RootStack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
			<StatusBar style="auto" />
		</BackgroundOverlay>
	);
}
