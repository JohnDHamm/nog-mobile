import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

export default class Home extends React.Component {
	static navigationOptions = {
		title: 'Nog',
	}

	render() {
		return (
			<View>
				<Button
					onPress={() => this.props.navigation.navigate('NogSelect')}
					title='Play' />
				<Button
					onPress={() => console.log("go to community")}
					title='Community' />
				<Button
					onPress={() => console.log("go to create/edit")}
					title='Create' />
			</View>
		)
	}
}
