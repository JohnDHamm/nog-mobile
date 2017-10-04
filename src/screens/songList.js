import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';


const testSongList = {
	1: {
		name: 'song 01',
		userId: 1,
		songId: 1
	},
	2: {
		name: 'song 02',
		userId: 1,
		songId: 2
	}
}

export default class SongList extends React.Component {
	static navigationOptions = {
    tabBarLabel: 'Songs'
  };

	renderList() {
		return _.map(testSongList, pattern => {
			return (
				<View key={pattern.name} style={styles.listItem}>
					<View>
						<Text style={styles.name}>{pattern.name}</Text>
					</View>
					<View>
						<Text style={styles.description}>{pattern.description}</Text>
					</View>
				</View>
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
