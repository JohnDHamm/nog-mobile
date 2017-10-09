import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';

import TestUser from '../../testData/testUser';
import values from '../styles/values';

export default class Home extends React.Component {
	static navigationOptions = {
	// 	title: 'Nog',
		header: null
	};

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.nogTitle}>
					<Image
						style={styles.nogLogo}
						source={require('../img/nog_logo_whiteOnRed.png')} />
				</View>
				<View>
					<Text style={styles.userName}>{TestUser.name}</Text>
					<Image
						style={styles.profileImg}
						resizeMode={'contain'}
						source={require('../img/buddy_elf.png')} />
				</View>
				<Button
					onPress={() => this.props.navigation.navigate('NogSelect')}
					title='Play' />
				<Button
					onPress={() => this.props.navigation.navigate('Community')}
						title='Community' />
				<Button
					onPress={() => this.props.navigation.navigate('Create')}
					title='Create' />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: values.nogRed
	},
	nogTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: 200
	},
	nogLogo: {
		// height: 200,
	},
	userName: {
		color: 'white',
		fontSize: 20
	},
	profileImg: {
		width: 50,
		height: 50
	},
});
