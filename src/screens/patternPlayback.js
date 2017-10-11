import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Slider, Image } from 'react-native';
import values from '../styles/values';

export default class PatternMultiColor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			playing: false
		}
	}

	componentDidMount() {
		// console.log("this.props.navigation.state.params", this.props.navigation.state.params);
	}

	speedSliderChange(val) {
		console.log("speed", val);
	}

	hueSliderChange(val) {
		console.log("color hue", val);
	}

	valueSliderChange(val) {
		console.log("color value", val);
	}

	togglePlayPause() {
		this.state.playing ? console.log("playing via bluetooth") : console.log("paused");
		this.setState({ playing: !this.state.playing })
	}

	render() {
		const pattern = this.props.navigation.state.params;

		return (
			<View style={styles.container}>
				<View style={styles.topBlock}>
					<Text style={styles.description}>{pattern.description}</Text>
					<View>
						<Text style={styles.label}>speed</Text>
						<Slider
							minimumValue={1}
							maximumValue={100}
							step={1}
							value={pattern.defaultSpeed}
							minimumTrackTintColor={values.nogGreen}
							onSlidingComplete={this.speedSliderChange}
							/>
					</View>
					{pattern.singleColor &&
						<View>
							<Text style={styles.label}>color</Text>
							<Slider
								minimumValue={1}
								maximumValue={100}
								step={1}
								value={pattern.defaultColor}
								minimumTrackTintColor={values.nogGreen}
								onSlidingComplete={this.hueSliderChange}
								/>
							<Slider
								minimumValue={1}
								maximumValue={100}
								step={1}
								value={pattern.defaultColor}
								minimumTrackTintColor={values.nogGreen}
								onSlidingComplete={this.valueSliderChange}
								/>
						</View>}
				</View>

				<View style={styles.bottomBlock}>
					{ !this.state.playing ?
						<TouchableOpacity
							onPress={() => this.togglePlayPause()} >
							<Image
								source={require('../img/playBtn.png')}
								style={styles.playBtn} />
						</TouchableOpacity>
						:
						<TouchableOpacity
							onPress={() => this.togglePlayPause()} >
							<Image
								source={require('../img/pauseBtn.png')}
								style={styles.playBtn} />
						</TouchableOpacity>
					}
				</View>

			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 10,
		paddingLeft: 15,
		paddingRight: 15,
		paddingBottom: 10
	},
	topBlock: {

	},
	description: {
		fontSize: 20,
		paddingBottom: 10
	},
	label: {
		fontSize: 15,
		color: values.nogGrayText,
		fontStyle: 'italic'
	},
	bottomBlock: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	playBtn: {
		width: 100,
		height: 100
	}


})








