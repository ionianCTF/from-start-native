import React from 'react';
import { View, Text, Image } from 'react-native';
import Navigator from './navigator.component';
import styles from '../style';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loading: false
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.accountPic} source={require('../assets/125.jpg')}/>
                <Text>USERSCREEN</Text>
                <Navigator setPage={this.props.setPage} page='account'/>
            </View>
        );
    }
}