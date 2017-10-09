import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class HomeBtn extends React.Component {

	render() {

		const { color, label, height } = this.props;

		const styles = StyleSheet.create({
			container: {
				height: height,
				backgroundColor: 'white',
				flexDirection: 'row',
				alignItems: 'center',
				marginTop: 15,
				borderRadius: 5
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
				fontSize: 30,
				paddingLeft: 15,
				paddingBottom: 5
			}
		});

		// const iconUrl


		return (
			<View style={styles.container}>
				<View style={styles.icon}>
					<Image
						style={styles.img}
						source={require('../img/homeBtnIcons/homeBtnIcon_play.jpg')} />
				</View>
				<Text style={styles.label}>{label}</Text>
			</View>
		)
	}
};
