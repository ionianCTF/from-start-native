import React from 'react';
import { View, Text, Image } from 'react-native';
import Navigator from './navigator.component';
import Top from './earn/top.component';
import EarnNavigator from './earn/earnNavigator.component';
import Media from './earn/media.component';
import Level from './level.component';
import styles from '../style';

export default class Earn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
        }
        this.setPage = this.setPage.bind(this);
    }
    setPage(p) {
        this.setState({page: p})
    }
    render() {
        var enabled= (this.props.userData.vip === this.state.page);
        return(
            <View style={styles.container}>
                <Top userData={this.props.userData} vip={this.props.vip} lang={this.props.lang}></Top>
                <EarnNavigator setPage={this.setPage} vip={this.props.vip} userData={this.props.userData} lang={this.props.lang}></EarnNavigator>
                <Level userData={this.props.userData} lang={this.props.lang} level={this.state.page} value={this.props.vip[this.state.page-1][0]} daily={this.props.vip[this.state.page-1][1]} buy={this.props.vip[this.state.page-1][2]}></Level>
                <Media enabled={enabled} style={[styles.media, styles.mediaF]} title={'Facebook'}></Media>
                <Media enabled={enabled} style={[styles.media, styles.mediaI]} title={'Instagram'}></Media>
                <Media enabled={enabled} style={[styles.media, styles.mediaY]} title={'Youtube'}></Media>
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='earn'/>
            </View>
        );
    }
}