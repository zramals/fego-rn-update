import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Style } from '../common'

export default class World extends Component {
	render() {
		return (
			<View style={[Style.container, { alignItems: 'center', justifyContent: 'center' }]} >
				<Text>第二个rn页面</Text>
			</View>
		)
	}
}
AppRegistry.registerComponent('Second', () => World);
