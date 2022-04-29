import React from "react";
import { View, Image, Pressable, Text } from 'react-native';
import styles from '../style';

export default class Welcome extends React.Component {
    render() {
        return(
            <View >
                <Image style={styles.welcomeLogo} source={require('../assets/logo.png')}/>
				<Text style={styles.welcomeTitle}>SpotFox</Text>
				<Pressable style={styles.menuPressable} onPress={() => { this.props.setPage('login') }}>
					<Text style={styles.textPressable}>Log In</Text>
				</Pressable>
				<Pressable style={styles.menuPressable} onPress={() => { this.props.setPage('signup') }}>
					<Text style={styles.textPressable}>Sign Up</Text>
				</Pressable>
            </View>
        );
    }
}