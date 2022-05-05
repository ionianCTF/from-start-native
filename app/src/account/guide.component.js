import React from 'react';
import { View, Text, Pressable, Image, Linking } from 'react-native';
import styles from '../../style';

export default class Support extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: []
        }
    }
    componentDidMount() {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
        }
        fetch('http://localhost:8010/proxy/guide', requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState({loading: false});
                if (data.success === false) {
                    this.setState({text: data});
                    alert(this.props.lang=='en'? 'There was an error.': 'Σφάλμα.')
                } else {
                    data.paragraphs.forEach(element => {
                        this.setState({text: [...this.state.text, <Text style={styles.guideParagraph}>{element}</Text>]})
                    });
                }
            })
            .catch(e => alert(e))
    }
    render() {
        return(
            <View style={styles.optionContainer}>
                <Text style={styles.guideTitle}>{this.props.lang=='en'?'User Guide': 'Οδηγίες χρήσης'}</Text>
                {this.state.text}
            </View>
        );
    }
}