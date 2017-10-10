import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import values from '../styles/values';

function selectPattern(patternId, {navigation}) {
	const selectedPattern = navigation.state.params.patterns[patternId];
	navigation.navigate('PatternPlayback', selectedPattern );
}

function truncDesc(desc) {
	return (desc.length > 97) ? desc.slice(0, 98) + "..." : desc;
	// return trunc;
}

function renderList({navigation}) {
	const { patterns } = navigation.state.params;
	return _.map(patterns, pattern => {
		// const truncDescText = truncDesc(pattern.description);
		return (
			<TouchableOpacity
				key={pattern.patternId}
				style={styles.listItem}
				onPress={() => selectPattern(pattern.patternId, {navigation})} >
				<View>
					<Text style={styles.name}>{pattern.name}</Text>
				</View>
				<View>
					<Text style={styles.description}>{truncDesc(pattern.description)}</Text>
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
		flex: 1,
		paddingTop: 5
	},
	listItem: {
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 15,
		// borderBottomWidth: 1,
		// borderStyle: 'solid',
		// borderColor: values.nogGreen,
	},
	name: {
		fontSize: 25,
		color: '#000'
	},
	description: {
		fontSize: 15,
		color: values.nogGrayText
	}
});

export default PatternList;
