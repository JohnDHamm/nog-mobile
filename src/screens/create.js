import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Create extends React.Component {
	static navigationOptions = {
		title: 'Create/Edit',
	}

	render() {
		return (
			<View>
				<Text>this is where you will create new patterns or edit existing ones</Text>
			</View>
		)
	}
}
