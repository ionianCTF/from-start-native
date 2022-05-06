import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Navigator from './navigator.component';
import Level from './level.component';
import styles from '../style';

export default class Vip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLevel: 1,
        }
    }
    render() {
        var levels = [];
        for (let i=1; i<this.props.vip.length; i++) {
            levels.push(<Level userData={this.props.userData} lang={this.props.lang} level={i+1} value={this.props.vip[i][0]} daily={this.props.vip[i][1]} buy={this.props.vip[i][2]}></Level>)   
        }
        return(
            <View style={styles.container}>
                {levels}
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='vip'/>
            </View>
        );
    }
}