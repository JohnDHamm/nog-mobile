import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const testList = {
	1: {
		patternId: 1,
		name: 'test 1',
		singleColor: false,
		description: 'testing desc 1',
		defaultSpeed: 50
	},
	2: {
		patternId: 2,
		name: 'test 2',
		singleColor: false,
		description: 'testing desc 2',
		defaultSpeed: 75
	},
	3: {
		patternId: 3,
		name: 'test 3',
		singleColor: false,
		description: 'testing desc 3',
		defaultSpeed: 25
	}
};

function selectPattern(patternId, {navigation}) {
	const selectedPattern = testList[patternId];
	navigation.navigate('PatternMultiColor', selectedPattern );
}

function renderList({navigation}) {
	return _.map(testList, pattern => {
		return (
			<TouchableOpacity
				key={pattern.patternId}
				style={styles.listItem}
				onPress={() => selectPattern(pattern.patternId, {navigation})} >
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

const PatternList = ({navigation}) => (
	<View style={styles.container}>
		<ScrollView>
			<View>
				{renderList({navigation})}
			</View>
		</ScrollView>
	</View>
)

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
});

export default PatternList;
