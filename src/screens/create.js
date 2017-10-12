import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import values from '../styles/values';

export default class Create extends React.Component {
	static navigationOptions = {
		title: 'Create/Edit',
		headerStyle: {
			backgroundColor: values.nogBackground
		},
		headerTitleStyle: {
			color: 'white'
		},
		headerTintColor: 'white'
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.title}>Coming Soon</Text>
				<Text style={styles.text}>Create new patterns and songs or edit existing ones.</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		paddingTop: 15,
		paddingLeft: 10,
		paddingRight: 10
	},
	title: {
		fontSize: 30,
		color: values.nogBackground,
		paddingBottom: 10
	},
	text: {
		fontSize: 20,
		fontStyle: 'italic',
		color: values.nogGrayText
	}
})
