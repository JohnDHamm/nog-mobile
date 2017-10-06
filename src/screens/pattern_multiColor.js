import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Slider } from 'react-native';

export default class PatternMultiColor extends React.Component {

	componentDidMount() {
		// console.log("this.props.navigation.state.params", this.props.navigation.state.params);
	}

	sliderchange(val) {
		console.log("slider val", val);
	}

	render() {
		const pattern = this.props.navigation.state.params;

		return (
			<View>
				{pattern.singleColor ?
					<Text>single color</Text> : <Text>multi-color</Text>}
				<Text>{pattern.description}</Text>
				<Slider
					minimumValue={1}
					maximumValue={100}
					step={1}
					value={pattern.defaultSpeed}
					onValueChange={this.sliderchange}
					/>
				<Button
					onPress={() => this.props.navigation.navigate('NogSelect')}
					title='Play' />
			</View>
		)
	}
}
