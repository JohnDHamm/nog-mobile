import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Slider } from 'react-native';

export default class PatternMultiColor extends React.Component {

	componentDidMount() {
		// console.log("this.props.navigation.state.params", this.props.navigation.state.params);
	}

	speedSliderChange(val) {
		console.log("speed slider val", val);
	}

	colorSliderChange(val) {
		console.log("color slider val", val);
	}

	startPattern() {
		console.log("start the magic via bluetooth");
	}

	render() {
		const pattern = this.props.navigation.state.params;

		return (
			<View>
				{pattern.singleColor ?
					<Text>single color</Text> : <Text>multi-color</Text>}
				<Text>{pattern.description}</Text>
				<View>
					<Text>speed</Text>
					<Slider
						minimumValue={1}
						maximumValue={100}
						step={1}
						value={pattern.defaultSpeed}
						onValueChange={this.speedSliderChange}
						/>
				</View>
				{pattern.singleColor &&
					<View>
						<Text>color</Text>
						<Slider
							minimumValue={1}
							maximumValue={100}
							step={1}
							value={pattern.defaultColor}
							onValueChange={this.colorSliderChange}
							/>
					</View>}
				<Button
					onPress={this.startPattern}
					title='Play' />
			</View>
		)
	}
}
