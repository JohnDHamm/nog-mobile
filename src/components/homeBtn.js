import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class HomeBtn extends React.Component {

	render() {

		const { color, label, height, option } = this.props;

		const styles = StyleSheet.create({
			container: {
				height: height,
				backgroundColor: 'white',
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				marginTop: 15,
				borderRadius: 5
			},
			main: {
				flexDirection: 'row',
				justifyContent: 'flex-start',
				alignItems: 'center',
			},
			icon: {
				paddingLeft: 3,
			},
			img: {
				width: height - 6,
				height: height - 6,
				borderRadius: 3
			},
			label: {
				color: color,
				fontSize: 25,
				paddingLeft: 15,
				paddingBottom: 5
			},
			optionIcon: {
				justifyContent: 'center',
				alignItems: 'center',
				height: height / 2,
				width: height / 2,
				marginRight: 10,
			}
		});

		// let iconUrl = '';
		// let optionIconUrl = '';
		// switch (label) {
		// 	case 'connect to nog':
		// 		// iconUrl = require('../img/homeBtnIcons/disconnected.png');
		// 		iconUrl = require('../img/homeBtnIcons/homeBtnIcon_play.jpg');
		// 		break;
		// 	case 'connected':
		// 		iconUrl = require('../img/homeBtnIcons/homeBtnIcon_play.jpg');
		// 		// iconUrl = require('../img/homeBtnIcons/connected.png');
		// 		break;
		// 	case 'play':
		// 		iconUrl = require('../img/homeBtnIcons/homeBtnIcon_play.jpg');
		// 		break;
		// 	case 'create':
		// 		iconUrl = require('../img/homeBtnIcons/homeBtnIcon_play.jpg');
		// 		break;
		// 	case 'community':
		// 		iconUrl = require('../img/homeBtnIcons/homeBtnIcon_play.jpg');
		// 		optionIconUrl = require('..img/homeBtnIcons/homeBtnIcon_play.jpg');
		// 		break;
		// };


		return (
			<View style={styles.container}>
				<View style={styles.main}>
					<View style={styles.icon}>
						<Image
							style={styles.img}
							source={require('../img/homeBtnIcons/homeBtnIcon_play.jpg')} />
					</View>
					<Text style={styles.label}>{label}</Text>
				</View>
				{ option &&
					<Image
						style={styles.optionIcon}
						source={require('../img/homeBtnIcons/homeBtnIcon_play.jpg')} />
				}
			</View>
		)
	}
};
