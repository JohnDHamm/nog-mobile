import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';

import HomeBtn from '../components/homeBtn';

import TestUser from '../../testData/testUser';
import TestPatterns from '../../testData/testPatterns';
import TestSongs from '../../testData/testSongs';
import values from '../styles/values';

export default class Home extends React.Component {
	static navigationOptions = {
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

				<TouchableOpacity
					onPress={() => console.log("connect")} >
					<HomeBtn
						color={values.nogRed}
						height={65}
						label={'connect to nog'}
						option={false} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Playlist', { patterns: TestPatterns, songs: TestSongs })} >
					<HomeBtn
						color={values.nogGreen}
						height={65}
						label={'play'}
						option={false} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Create')} >
					<HomeBtn
						color={values.nogGreen}
						height={65}
						label={'create'}
						option={false} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Community')} >
					<HomeBtn
						color={values.nogGreen}
						height={65}
						label={'community'}
						option={true} />
				</TouchableOpacity>

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
