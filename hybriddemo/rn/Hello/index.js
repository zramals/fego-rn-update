import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';
import { Style } from '../common'

export default class Hello extends Component {
	render() {
		return (
			<View style={[Style.container, { alignItems: 'center', justifyContent: 'center' }]}>
				<Text>第一个rn页面</Text>
				<Text>我更新了</Text>
				<Text>我要单独更新了</Text>
			</View>
		)
	}
}
AppRegistry.registerComponent('First', () => Hello);
