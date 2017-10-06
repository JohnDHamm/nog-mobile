import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './src/screens/home';
import NogSelect from './src/screens/nogSelect';
import PatternPlayback from './src/screens/patternPlayback';
import Community from './src/screens/community';
import Create from './src/screens/create';
import PatternList from './src/components/patternList';
import SongList from './src/components/songList';

// const StackNavigatorConfig = {
	// headerMode: 'none',
// 	cardStyle: {
// 		opacity: 1
// 	}
// }
const PlaylistTabNav = TabNavigator({
	PatternList: {
    screen: PatternList,
    navigationOptions: {
      tabBarLabel: 'Patterns'
    }
  },
  SongList: {
    screen: SongList,
    navigationOptions: {
      tabBarLabel: 'Songs'
    }
  },
}, {
  // tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

const MainScreenNavigator = StackNavigator({
	Home: { screen: Home },
	NogSelect: { screen: NogSelect },
	Playlist: { screen: PlaylistTabNav },
	PatternPlayback: {
		screen: PatternPlayback,
		navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name,
    }) },
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
