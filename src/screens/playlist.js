import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PatternList from '../components/patternList';
import SongList2 from '../components/songList2';

const PlaylistTabNavigator = TabNavigator({
  PatternList: {
    screen: PatternList,
    navigationOptions: {
      tabBarLabel: 'Patterns'
    }
  },
  SongList2: {
    screen: SongList2,
    navigationOptions: {
      tabBarLabel: 'Songs2'
    }
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
