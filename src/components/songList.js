import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const testSongList = {
	1: {
		name: 'song 1',
		description: 'song description',
		userId: 1,
		songId: 1
	},
	2: {
		name: 'song 2',
		description: 'song description',
		userId: 1,
		songId: 2
	},
	3: {
		name: 'song 3',
		description: 'song description',
		userId: 1,
		songId: 3
	},
	4: {
		name: 'song 4',
		description: 'song description',
		userId: 1,
		songId: 4
	},
	5: {
		name: 'song 5',
		description: 'song description',
		userId: 1,
		songId: 5
	},
	6: {
		name: 'song 6',
		description: 'song description',
		userId: 1,
		songId: 6
	},
	7: {
		name: 'song 7',
		description: 'song description',
		userId: 1,
		songId: 7
	},
	8: {
		name: 'song 8',
		description: 'song description',
		userId: 1,
		songId: 8
	},
	9: {
		name: 'song 9',
		description: 'song description',
		userId: 1,
		songId: 9
	},
	10: {
		name: 'song 10',
		description: 'song description',
		userId: 1,
		songId: 10
	},
}

function renderList({navigation}) {
	return _.map(testSongList, pattern => {
		return (
			<TouchableOpacity
				key={pattern.songId}
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

const SongList = ({navigation}) => (
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

export default SongList;
