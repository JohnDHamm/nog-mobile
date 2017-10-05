import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const testList = {
	1: {
		name: 'test 01',
		userId: 1,
		singleColor: false,
		description: 'testing desc 1',
		defaultSpeed: 50
	},
	2: {
		name: 'test 02',
		userId: 1,
		singleColor: false,
		description: 'testing desc 2',
		defaultSpeed: 75
	},
	3: {
		name: 'test 03',
		userId: 1,
		singleColor: false,
		description: 'testing desc 3',
		defaultSpeed: 82
	}
};

export default class PatternList extends React.Component {
	static navigationOptions = {
    tabBarLabel: 'Patterns'
  };

	renderList() {
		return _.map(testList, pattern => {
			return (
				<TouchableOpacity
					key={pattern.name}
					style={styles.listItem}
					onPress={() => this.props.navigation.navigate('PatternMultiColor')} >
					<View>
						<Text style={styles.name}>{pattern.name}</Text>
					</View>
					<View>
						<Text style={styles.description}>{pattern.description}</Text>
					</View>
				</TouchableOpacity>
			)
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View>
						{this.renderList()}
					</View>
				</ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	listItem: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#666',
	},
	name: {
		fontSize: 25,
		color: '#000'
	},
	description: {
		fontSize: 15,
		color: '#666'
	}
})
