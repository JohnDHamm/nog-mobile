import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import PatternColorIcon from './patternColorIcon';
import values from '../styles/values';

function selectPattern(name, {navigation}) {
	const selectedPattern = navigation.state.params.patterns[name];
	navigation.navigate('PatternPlayback', selectedPattern );
}

function selectGiftPattern(name, {navigation}) {
	const selectedPattern = navigation.state.params.giftPatterns[name];
	navigation.navigate('PatternPlayback', selectedPattern );
}

function truncDesc(desc) {
	return (desc.length > 87) ? desc.slice(0, 87) + "..." : desc;
}

function renderList({navigation}) {
	const { patterns } = navigation.state.params;
	return _.map(patterns, pattern => {
		return (
			<View key={pattern._id}>
				<TouchableOpacity
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
				<View style={styles.sectionLine} />
			</View>
		)
	})
}

function renderGiftList({navigation}) {
	const { giftPatterns } = navigation.state.params;
	return _.map(giftPatterns, pattern => {
		return (
			<View key={pattern.name}>
				<TouchableOpacity
					style={styles.listItem}
					onPress={() => selectGiftPattern(pattern.name, {navigation})} >
					<View style={styles.topBlock}>
						<Text style={styles.giftName}>{pattern.name}</Text>
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
				<View style={styles.sectionLine} />
			</View>
		)
	})
}

const PatternList = ({navigation}) => (
	<View style={styles.container}>
		<ScrollView>
			<View>
				{renderList( {navigation} )}
			</View>
			<View style={styles.giftTag}>
				<Image
					source={require('../img/santaGiftTag.png')}
					resizeMode={'contain'}
					style={styles.giftTagImg} />
			</View>
			<View>
				{renderGiftList( {navigation} )}
			</View>
			<View style={styles.bottomPad} />
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
		paddingLeft: 15,
		paddingRight: 15
	},
	sectionLine: {
		borderTopWidth: 1,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10,
		borderTopColor: values.nogLightGray
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
	giftName: {
		fontSize: 25,
		color: values.nogGreen,
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
	giftTag: {
		marginTop: 15,
		marginBottom: 5,
		paddingLeft: 10,
	},
	giftTagImg:{
		width: Dimensions.get('window').width - 20,
		height: (Dimensions.get('window').width - 20) / 5.4
	},
	bottomPad: {
		height: 25
	}
});

export default PatternList;
