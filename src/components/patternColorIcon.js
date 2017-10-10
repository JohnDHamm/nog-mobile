import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import values from '../styles/values';

export default class PatternColorIcon extends React.Component {

	render() {
		const { imgSrc, height } = this.props;
		const styles = StyleSheet.create({
			container: {
			},
			icon: {
				height: height,
				width: height * 2
			}
		})

		return (
			<View style={styles.container}>
				<Image
					source={imgSrc}
					style={styles.icon} />
			</View>
		)
	}
}
