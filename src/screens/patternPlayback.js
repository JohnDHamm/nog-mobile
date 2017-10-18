import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, Platform, Dimensions } from 'react-native';
import Slider from 'react-native-slider';
import values from '../styles/values';

import axios from 'axios';
const ROOT_URL = 'https://nog-server.herokuapp.com/api/m';


export default class PatternMultiColor extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			dataLoaded: false,
			patternData: [],
			playing: false,
		}
	}

	componentDidMount() {
		// console.log("this.props.navigation.state.params", this.props.navigation.state.params);
		const patternId = this.props.navigation.state.params._id;
		axios.get(`${ROOT_URL}/userpatterndata/${patternId}`)
			.then((response) => {
				// console.log("data instances", response.data[0].instances);
				this.setState({ patternData: response.data[0].instances });
				this.setState({ dataLoaded: true });
			})
			.catch(function (error) {
				console.log(error);
			});
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
		// !this.state.playing ? console.log("playing via bluetooth") : console.log("paused");
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
						<View style={styles.sliderView}>
							<Slider
								minimumValue={1}
								maximumValue={100}
								step={1}
								value={pattern.defaultSpeed}
								minimumTrackTintColor={values.nogGreen}
								thumbStyle={styles.sliderThumb}
								onSlidingComplete={this.speedSliderChange}
								/>
						</View>
					</View>

				{pattern.singleColor &&
					<View>
						<Text style={styles.label}>color</Text>
						<View style={styles.gradientView}>
							<Image
								source={require('../img/playback/colorHueGradient.png')}
								resizeMode={'contain'}
								style={styles.gradientImg} />
						</View>
						<View style={styles.sliderView}>
							<Slider
								minimumValue={0}
								maximumValue={360}
								step={1}
								value={180}
								minimumTrackTintColor={values.nogGreen}
								thumbStyle={styles.sliderThumb}
								onSlidingComplete={this.hueSliderChange}
								/>
						</View>
						<View style={styles.gradientView}>
							<Image
								source={require('../img/playback/colorValueGradient.png')}
								resizeMode={'contain'}
								style={styles.gradientImg} />
						</View>
						<View style={styles.sliderView}>
							<Slider
								minimumValue={0}
								maximumValue={100}
								step={1}
								value={50}
								minimumTrackTintColor={values.nogGreen}
								thumbStyle={styles.sliderThumb}
								onSlidingComplete={this.valueSliderChange}
								/>
						</View>
					</View>}
				</View>

			{!this.state.dataLoaded &&
				<View style={styles.bottomBlock}>
					<Text>loading data...</Text>
				</View>
			}

			{this.state.dataLoaded &&
				<View style={styles.bottomBlock}>
					{ !this.state.playing ?
						<TouchableOpacity
							onPress={() => this.togglePlayPause()} >
							<Image
								source={require('../img/playback/playBtn.png')}
								style={styles.playBtn} />
						</TouchableOpacity>
						:
						<TouchableOpacity
							onPress={() => this.togglePlayPause()} >
							<Image
								source={require('../img/playback/pauseBtn.png')}
								style={styles.playBtn} />
						</TouchableOpacity>
					}
				</View>
			}

			</View>
		)
	}
}

const sliderGradientWidth = Dimensions.get('window').width - 80;
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
	sliderView: {
		paddingLeft: 10,
		paddingRight: 10,
	},
	sliderThumb: {
		height: 30,
		width: 30,
		borderRadius: 30 / 2,
		borderWidth: 2,
		borderColor: values.nogRed,
		backgroundColor: 'white',
	},
	gradientView: {
		flex: 1,
		alignItems: 'center',
		marginBottom: 20,
		marginTop: 5
	},
	gradientImg: {
		width: sliderGradientWidth,
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

