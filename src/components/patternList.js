import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import PatternColorIcon from './patternColorIcon';
import values from '../styles/values';

function selectPattern(name, {navigation}) {
	const selectedPattern = navigation.state.params.patterns[name];
	navigation.navigate('PatternPlayback', selectedPattern );
}

function selectGiftPattern(patternId, {navigation}) {
	const selectedPattern = navigation.state.params.giftPatterns[patternId];
	navigation.navigate('PatternPlayback', selectedPattern );
}

function truncDesc(desc) {
	return (desc.length > 97) ? desc.slice(0, 97) + "..." : desc;
}

function renderList({navigation}) {
	const { patterns } = navigation.state.params;
	return _.map(patterns, pattern => {
		return (
			<TouchableOpacity
				key={pattern._id}
				style={styles.listItem}
				onPress={() => selectPattern(pattern.name, {navigation})} >
				<View style={styles.topBlock}>
					<Text style={styles.name}>{pattern.name}</Text>
					{ pattern.singleColor ?
						<PatternColorIcon
							imgSrc={require('../img/patterns/singleColor_icon.png')}
							height={12} />
						:
						<PatternColorIcon
							imgSrc={require('../img/patterns/multiColor_icon.png')}
							height={12} />
					}
				</View>
				<View>
					<Text style={styles.description}>{truncDesc(pattern.description)}</Text>
				</View>
			</TouchableOpacity>
		)
	})
}

function renderGiftList({navigation}) {
	const { giftPatterns } = navigation.state.params;
	return _.map(giftPatterns, pattern => {
		return (
			<TouchableOpacity
				key={pattern.patternId}
				style={styles.listItem}
				onPress={() => selectGiftPattern(pattern.patternId, {navigation})} >
				<View style={styles.topBlock}>
					<Text style={styles.name}>{pattern.name}</Text>
					{ pattern.singleColor ?
						<PatternColorIcon
							imgSrc={require('../img/patterns/singleColor_icon.png')}
							height={12} />
						:
						<PatternColorIcon
							imgSrc={require('../img/patterns/multiColor_icon.png')}
							height={12} />
					}
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
				{renderList( {navigation} )}
			</View>
			<View style={styles.giftTitle}>
				<Text style={styles.tempText}>from: Santa</Text>
			</View>
			<View>
				{renderGiftList( {navigation} )}
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
	},
	topBlock: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	name: {
		fontSize: 25,
		color: '#000',
		paddingRight: 5
	},
	colorIcon: {
		height: 25,
		width: 50
	},
	description: {
		fontSize: 15,
		color: values.nogGrayText
	},
	giftTitle: {
		backgroundColor: values.nogGreen,
	},
	tempText: {
		fontSize: 25,
		color: 'white'
	}
});

export default PatternList;
