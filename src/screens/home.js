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
				<View style={styles.userView}>
					<Image
						style={styles.profileImg}
						resizeMode={'contain'}
						source={require('../img/buddy_elf.png')} />
					<Text style={styles.userName}>{TestUser.name}</Text>
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
		backgroundColor: values.nogRed,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 40
	},
	nogTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	nogLogo: {
		//orig size - 813x627@300ppi
		width: 813 / 627 * 150,
		height: 150,
	},
	userView: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 20
	},
	userName: {
		color: 'white',
		fontSize: 25,
		paddingLeft: 10
	},
	profileImg: {
		width: 50,
		height: 50
	},
});
