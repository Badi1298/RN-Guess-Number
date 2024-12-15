import { SafeAreaView } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';

import { StatusBar } from 'expo-status-bar';

import Colors from './constants/colors';

import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
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
		headerTitleStyle: {
			color: Colors.accent500,
		},
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
			<SafeAreaView style={{ flex: 1 }}>
				<Navigation />
			</SafeAreaView>
			<StatusBar style="auto" />
		</BackgroundOverlay>
	);
}
