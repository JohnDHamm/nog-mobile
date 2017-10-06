import React from 'react';
import { View, Text, StyleSheet, Button, Picker } from 'react-native';
import TestPatterns from '../../testData/testPatterns';


export default class NogSelect extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedNogType: 'snowflake'
		}
	}

	static navigationOptions = {
		title: 'Connect to Nog',
	}

	render() {
		let btnTxt = 'Select ' + this.state.selectedNogType;
		return (
			<View>
				<Text>Select your nog:</Text>
				<Picker
				  selectedValue={this.state.selectedNogType}
				  onValueChange={(itemValue, itemIndex) => this.setState({selectedNogType: itemValue})}>
				  <Picker.Item label="Snowflake" value="snowflake" />
				  <Picker.Item label="Tree" value="tree" />
				</Picker>
				<Button
					onPress={() => this.props.navigation.navigate('Playlist', { patterns: TestPatterns })}
					title={btnTxt} />
			</View>
		)
	}
}
