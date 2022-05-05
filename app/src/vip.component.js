import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Navigator from './navigator.component';
import Level from './vip/level.component';
import styles from '../style';

export default class Vip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userLevel: 1
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Level lang={this.props.lang} level={2} value={0.8} daily={5} buy={100}></Level>
                <Level lang={this.props.lang} level={3} value={1.5} daily={8} buy={300}></Level>
                <Level lang={this.props.lang} level={4} value={1.7} daily={15} buy={600}></Level>
                <Level lang={this.props.lang} level={5} value={2} daily={22} buy={1000}></Level>
                <Level lang={this.props.lang} level={6} value={2.3} daily={60} buy={3000}></Level>
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='vip'/>
            </View>
        );
    }
}