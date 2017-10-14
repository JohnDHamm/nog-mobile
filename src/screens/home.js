import _ from 'lodash';

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, Dimensions } from 'react-native';

import HomeBtn from '../components/homeBtn';
import TestUser from '../../testData/testUser';
import TestPatterns from '../../testData/testPatterns';
import TestGiftPatterns from '../../testData/testGiftPatterns';
import TestSongs from '../../testData/testSongs';
import values from '../styles/values';

import axios from 'axios';
const ROOT_URL = 'https://nog-server.herokuapp.com/api/m';


export default class Home extends React.Component {
	static navigationOptions = {
		header: null
	};

	constructor(props) {
		super(props);
		this.state = {
			BLE_connected: false,
			dataLoaded: false,
			patterns: {},
			giftPatterns: {},
			songs: {}
		}
	};

	componentDidMount() {
		// let pause = setTimeout(this.updateData.bind(this), 1000);
		// get gift patterns
		// get user's patterns
		axios.get(`${ROOT_URL}/userpatterns/${TestUser._id}`)
			.then((response) => {
		  	this.transformData(response.data);
		  	this.setState({dataLoaded: true})

		  })
		  .catch(function (error) {
		    console.log(error);
		  });
	};

	transformData(dataArray) {
		const newDataObj = _.mapKeys(dataArray, 'name');
		this.setState({ patterns: newDataObj });
	};

	toggleConnect() {
		this.setState({BLE_connected: !this.state.BLE_connected});
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

			{!this.state.dataLoaded &&
				<View style={styles.loaderView}>
					<Text style={styles.loaderText}>loading data...</Text>
				</View>
			}

			{this.state.dataLoaded && <View>
				<TouchableOpacity
					onPress={() => this.toggleConnect()} >
					{ !this.state.BLE_connected ?
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

				{ !this.state.BLE_connected ?
					<HomeBtn
						color={values.nogDisabled}
						height={65}
						label={'play'}
						iconImgSrc={require('../img/homeBtnIcons/homeBtnIcon_play_disabled.png')}
						optionImgSrc={null} />
					:
					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('Playlist', { patterns: this.state.patterns, giftPatterns: TestGiftPatterns, songs: TestSongs })} >
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
						iconImgSrc={require('../img/homeBtnIcons/homeBtnIcon_create.png')}
						optionImgSrc={null} />
				</TouchableOpacity>

				<TouchableOpacity
					onPress={() => this.props.navigation.navigate('Community')} >
					<HomeBtn
						color={values.nogGreen}
						height={65}
						label={'community'}
						iconImgSrc={require('../img/homeBtnIcons/homeBtnIcon_community.png')}
						optionImgSrc={require('../img/homeBtnIcons/notification_3.png')} />
				</TouchableOpacity>
			</View> }

			</View>
		)
	}
};

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
	loaderView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	loaderText: {
		fontSize: 20,
		color: 'white'
	}
});
