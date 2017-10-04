import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import Tab1 from './src/screens/tab1';
// import Tab2 from './src/screens/tab2';

class Tab1 extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'tab1'
  };

  render() {
    return (
      <View>
      	<Text>this is tab 1 screen</Text>
    	</View>
    );
  }
}

class Tab2 extends React.Component {
	static navigationOptions = {
		tabBarLabel: 'tab2'
	};

	render() {
		return (
      <View>
      	<Text>this is tab 2 screen</Text>
    	</View>
		)
	}
}


const TestTabNavigator = TabNavigator({
  Tab1: {
    screen: Tab1,
  },
  Tab2: {
    screen: Tab2,
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});

export default class TestTabNav extends React.Component {
	static navigationOptions = {
		title: 'PlaylistTest',
	}

	render() {
		return (
			<TestTabNavigator />
		);
	}
}
