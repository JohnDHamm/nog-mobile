import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PatternList from './patternList';
import SongList from './songList';

const PlaylistTabNavigator = TabNavigator({
  PatternList: {
    screen: PatternList,
  },
  SongList: {
    screen: SongList,
  },
}, {
  // tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default class Playlist extends React.Component {
	static navigationOptions = {
		title: 'Playlist',
	}

	render() {
		return (
			<PlaylistTabNavigator />
		);
	}
}
