import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, Dimensions } from 'react-native';

import HomeBtn from '../components/homeBtn';

import TestUser from '../../testData/testUser';
import TestPatterns from '../../testData/testPatterns';
import TestSongs from '../../testData/testSongs';
import values from '../styles/values';

export default class Home extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			connected: false
		}
	}

	toggleConnect() {
		this.setState({connected: !this.state.connected});
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
					onPress={() => this.toggleConnect()} >
					{ !this.state.connected ?
						<HomeBtn
							color={values.nogDisabled}
							height={65}
							label={'connect to nog'}
							iconImgSrc={require('../img/homeBtnIcons/bluetooth_icon_disabled.png')}
							optionImgSrc={null} />
						:
						<HomeBtn
							color={values.nogGreen}
							height={65}
							label={'connected'}
							iconImgSrc={require('../img/homeBtnIcons/bluetooth_icon_connected.png')}
							optionImgSrc={require('../img/homeBtnIcons/cancel_outline_nogRed.png')} />
					}
				</TouchableOpacity>

				{ !this.state.connected ?
					<HomeBtn
						color={values.nogDisabled}
						height={65}
						label={'play'}
						iconImgSrc={require('../img/homeBtnIcons/homeBtnIcon_play_disabled.png')}
						optionImgSrc={null} />
					:
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('Playlist', { patterns: TestPatterns, songs: TestSongs })} >
						<HomeBtn
							color={values.nogGreen}
							height={65}
							label={'play'}
							iconImgSrc={require('../img/homeBtnIcons/homeBtnIcon_play.png')}
							optionImgSrc={null} />
					</TouchableOpacity>
				}

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Create')} >
					<HomeBtn
						color={values.nogGreen}
						height={65}
						label={'create'}
						iconImgSrc={require('../img/homeBtnIcons/homeBtnIcon_play.jpg')}
						optionImgSrc={null} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Community')} >
					<HomeBtn
						color={values.nogGreen}
						height={65}
						label={'community'}
						iconImgSrc={require('../img/homeBtnIcons/homeBtnIcon_play.jpg')}
						optionImgSrc={require('../img/homeBtnIcons/homeBtnIcon_play.jpg')} />
				</TouchableOpacity>

			</View>
		)
	}
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const nogTitleAspect = 813 / 627;
let nogTitleHeight = screenHeight - 445;
nogTitleHeight * nogTitleAspect > screenWidth * .75 ? nogTitleHeight = screenWidth * .75 / nogTitleAspect : null;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: values.nogRed,
		paddingLeft: 20,
		paddingRight: 20,
		paddingTop: 30
	},
	nogTitle: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	nogLogo: {
		width: nogTitleAspect * nogTitleHeight,
		height: nogTitleHeight,
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
