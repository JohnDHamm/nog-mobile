import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Home from './src/screens/home';
import NogSelect from './src/screens/nogSelect';
import PatternPlayback from './src/screens/patternPlayback';
import Community from './src/screens/community';
import Create from './src/screens/create';
import PatternList from './src/components/patternList';
import SongList from './src/components/songList';
import values from './src/styles/values';


const StackNavigatorConfig = {
	headerMode: 'screen',
// 	cardStyle: {
// 		opacity: 1
// 	}
}

const PlaylistTabNav = TabNavigator({
	PatternList: {
    screen: PatternList,
    navigationOptions: {
      tabBarLabel: 'Patterns',
      // tabBarIcon: {}
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
    activeTintColor: (Platform.OS === 'ios') ? values.nogRed : values.nogHighlight,
    indicatorStyle: {
    	backgroundColor: values.nogHighlight
    },
    style: {
    	backgroundColor: (Platform.OS === 'ios') ? 'white' : values.nogGreen
    }


  },
});

const MainScreenNavigator = StackNavigator({
	Home: { screen: Home },
	// NogSelect: { screen: NogSelect },
	Playlist: { screen: PlaylistTabNav,
		navigationOptions: {
			title: 'Playlist',
			headerTitleStyle: {
				color: 'white'
			},
			headerStyle: {
				backgroundColor: values.nogRed
			},
			headerTintColor: 'white'
		}
	},
	PatternPlayback: {
		screen: PatternPlayback,
		navigationOptions: ({navigation}) => ({
      title: navigation.state.params.name,
      headerTitleStyle: {
				color: 'white'
			},
			headerStyle: {
				backgroundColor: values.nogRed
			},
			headerTintColor: 'white'
    }) },
	Community: { screen: Community },
	Create: { screen: Create }
}, StackNavigatorConfig);

export default class App extends React.Component {
	render() {
		return (
			<MainScreenNavigator />
		);
	}
}
