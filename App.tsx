import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, DefaultTheme, StaticParamList } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import BackgroundOverlay from './components/BackgroundOverlay';

const RootStack = createNativeStackNavigator({
	screens: {
		StartGame: {
			screen: StartGameScreen,
			options: {
				title: 'Dice Game',
			},
		},
		Game: GameScreen,
	},
	screenOptions: {
		animation: 'slide_from_right',
		headerTransparent: true,
		contentStyle: { backgroundColor: 'transparent' },
	},
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}

const Navigation = createStaticNavigation(RootStack);

export default function App() {
	return (
		<BackgroundOverlay>
			<Navigation />
			<StatusBar style="auto" />
		</BackgroundOverlay>
	);
}
