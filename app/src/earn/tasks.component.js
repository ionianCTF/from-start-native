import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../../style';

export default class Tasks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        }
    }
    render() {
        var task = [], background;
        if (this.props.title==='Facebook') {
            background = styles.mediaF;
        } else if (this.props.title==='Instagram') {
            background = styles.mediaI;
        } else if (this.props.title==='Youtube') {
            background = styles.mediaY;
        }
        for (let i=0; i<=25; i++) {
            task.push(
                <Pressable style={[this.props.style, background]} disabled={!this.props.enabled} onPress={()=>alert('12')}>
                    <Image style={styles.mediaIcon} source={require('../../assets/earn/'+this.props.title+'.png')}/>
                    <Text style={styles.mediaTitle}>{this.props.title}-Like  +{this.props.plus}</Text>
                    <Pressable style={styles.mediaReceive}>
                        <Text style={styles.mediaReceiveText}>{this.props.lang==='en'? 'Receive': 'Απέκτησε'}</Text>
                    </Pressable>
                </Pressable>
            )
        }
        return(
            task
        );
    }
}