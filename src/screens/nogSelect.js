import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class NogSelect extends React.Component {
	static navigationOptions = {
		title: 'Play',
	}

	render() {
		return (
			<View>
				<Text>Select your nog:</Text>
				<Button
					onPress={() => this.props.navigation.navigate('Playlist')}
					title='Snowflake' />
				<Button
					onPress={() => console.log("selected tree nog type")}
					title='Tree' />
			</View>
		)
	}
}
