import React from 'react';
import { View, Text } from 'react-native';
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
                <Text>USERSCREEN</Text>
                <Navigator setPage={this.props.setPage} page='account'/>
            </View>
        );
    }
}