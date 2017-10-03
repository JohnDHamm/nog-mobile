import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Playlist extends React.Component {
	static navigationOptions = {
		title: 'Playlist',
	}

	render() {
		return (
			<View>
				<Text>List of patterns + songs:</Text>
			</View>
		)
	}
}
