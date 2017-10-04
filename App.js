import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/home';
import NogSelect from './src/screens/nogSelect';
import Playlist from './src/screens/playlist';
import Community from './src/screens/community';
import Create from './src/screens/create';

// const StackNavigatorConfig = {
	// headerMode: 'none',
// 	cardStyle: {
// 		opacity: 1
// 	}
// }

const MainScreenNavigator = StackNavigator({
	Home: { screen: Home },
	NogSelect: { screen: NogSelect },
	Playlist: { screen: Playlist },
	Community: { screen: Community },
	Create: { screen: Create }
});

export default class App extends React.Component {
	render() {
		return (
			<MainScreenNavigator />
		);
	}
}
