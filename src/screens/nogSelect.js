import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class NogSelect extends React.Component {
	static navigationOptions = {
		title: 'Connect to Nog',
	}

	render() {
		return (
			<View>
				<Text>Select your nog:</Text>
				<Button
					onPress={() => this.props.navigation.navigate('Playlist')}
					title='Snowflake' />
				<Button
					onPress={() => this.props.navigation.navigate('TestTabNav')}
					title='Tree' />
			</View>
		)
	}
}
