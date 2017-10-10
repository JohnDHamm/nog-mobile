import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import values from '../styles/values';

function selectSong(songId, {navigation}) {
	const selectedSong = navigation.state.params.songs[songId];
	console.log("selectedSong", selectedSong);
	// navigation.navigate('PlaySong', selectedSong ); //need new component for handling playback of songs
}

function renderList({navigation}) {
	const { songs } = navigation.state.params;
	return _.map(songs, song => {
		return (
			<TouchableOpacity
				key={song.songId}
				style={styles.listItem}
				onPress={() => selectSong(song.songId, {navigation})} >
				<View>
					<Text style={styles.name}>{song.name}</Text>
				</View>
				<View>
					<Text style={styles.description}>{song.description}</Text>
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
		paddingLeft: 15,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: values.nogGreen,
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
