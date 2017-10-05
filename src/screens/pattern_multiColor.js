import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Slider } from 'react-native';

export default class PatternMultiColor extends React.Component {
	static navigationOptions = {
		title: 'pattern',
	}

	sliderchange(e, val) {
		console.log("slider val", val);
	}

	render() {
		const testPattern = {
			name: 'test pattern',
			description: 'this is the description of the test pattern for testing layout in the pattern screen. this is only a test',
			singlecolor: false,
			defaultSpeed: 50
		}

		return (
			<View>
				<Text>{testpattern.name}</Text>
				<Text>{testpattern.description}</Text>
				<Slider
					minimumValue='1'
					maximumValue='100'
					step='1'
					value={testPattern.defaultSpeed}
					onValueChange={this.sliderchange}
					/>
				<Button
					onPress={() => this.props.navigation.navigate('NogSelect')}
					title='Play' />
			</View>
		)
	}
}
