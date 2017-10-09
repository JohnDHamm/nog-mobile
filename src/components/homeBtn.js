import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default class HomeBtn extends React.Component {

	render() {

		const { color, label, height, option, iconImgSrc, optionImgSrc } = this.props;

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

		return (
			<View style={styles.container}>
				<View style={styles.main}>
					<View style={styles.icon}>
						<Image
							style={styles.img}
							source={iconImgSrc} />
					</View>
					<Text style={styles.label}>{label}</Text>
				</View>
				{ optionImgSrc !== null &&
					<Image
						style={styles.optionIcon}
						source={optionImgSrc} />
				}
			</View>
		)
	}
};
