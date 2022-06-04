import React from 'react';
import { View, Text } from 'react-native';
import Navigator from './navigator.component';
import Media from './media.component';
import styles from '../style';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loading: false,
        }
        this.setMedia = this.setMedia.bind(this);
        
    }
    setMedia() {
        this.props.setPage('earn');
    }
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.homeMedia}>
                    <Text style={styles.homeMediaText}>Task list</Text>
                    <Media setMedia={this.setMedia} enabled={true} style={[styles.media, styles.mediaF]} title={'Facebook'}></Media>
                    <Media setMedia={this.setMedia} enabled={true} style={[styles.media, styles.mediaI]} title={'Instagram'}></Media>
                    <Media setMedia={this.setMedia} enabled={true} style={[styles.media, styles.mediaY]} title={'Youtube'}></Media>
                </View>
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='home'/>
            </View>
        );
    }
}