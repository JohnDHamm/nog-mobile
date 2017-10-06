import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function selectPattern(patternId, {navigation}) {
	const selectedPattern = navigation.state.params.patterns[patternId];
	navigation.navigate('PatternPlayback', selectedPattern );
}

function renderList({navigation}) {
	const { patterns } = navigation.state.params;
	return _.map(patterns, pattern => {
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
