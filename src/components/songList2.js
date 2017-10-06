import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const testSongList = {
	1: {
		name: 'song 1',
		description: 'song 01 description',
		userId: 1,
		songId: 1
	},
	2: {
		name: 'song 2',
		description: 'song 02 description',
		userId: 1,
		songId: 2
	}
}

function renderList({navigation}) {
	return _.map(testSongList, pattern => {
		return (
			<TouchableOpacity
				key={pattern.name}
				style={styles.listItem}
				onPress={() => navigation.navigate('PatternMultiColor')} >
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

const SongList2 = ({navigation}) => (
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
})

export default SongList2;
