import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import style from '../style';
import styles from '../style';

export default class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loading: false,
            style: {
                home: style.navPressable,
                earn: style.navPressableFaded,
                vip: style.navPressableFaded,
                task: style.navPressableFaded,
                account: style.navPressableFaded,
            },
        }
    }

    componentDidMount() {
        if (this.props.page === 'home') {
            this.setState({
                style: {
                    home: style.navPressable,
                    earn: style.navPressableFaded,
                    vip: style.navPressableFaded,
                    task: style.navPressableFaded,
                    account: style.navPressableFaded,
                }
            });
        } else if (this.props.page === 'earn') {
            this.setState({
                style: {
                    home: style.navPressableFaded,
                    earn: style.navPressable,
                    vip: style.navPressableFaded,
                    task: style.navPressableFaded,
                    account: style.navPressableFaded,
                }
            });
        } else if (this.props.page === 'vip') {
            this.setState({
                style: {
                    home: style.navPressableFaded,
                    earn: style.navPressableFaded,
                    vip: style.navPressable,
                    task: style.navPressableFaded,
                    account: style.navPressableFaded,
                }
            });
        } else if (this.props.page === 'task') {
            this.setState({
                style: {
                    home: style.navPressableFaded,
                    earn: style.navPressableFaded,
                    vip: style.navPressableFaded,
                    task: style.navPressable,
                    account: style.navPressableFaded,
                }
            });
        } else if (this.props.page === 'account') {
            this.setState({
                style: {
                    home: style.navPressableFaded,
                    earn: style.navPressableFaded,
                    vip: style.navPressableFaded,
                    task: style.navPressableFaded,
                    account: style.navPressable,
                }
            });
        }
    }

    render() {
        return(
            <View style={styles.navigator}>
                <Pressable style={ this.state.style.home } onPress={() => this.props.setPage('home')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/home.png')}/>
                    <Text style={styles.navPressableText}>Home</Text>
				</Pressable>
                <Pressable style={this.state.style.earn} onPress={() => this.props.setPage('earn')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/money.png')}/>
                    <Text style={styles.navPressableText}>Earn</Text>
				</Pressable>
                <Pressable style={this.state.style.vip} onPress={() => this.props.setPage('vip')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/crown.png')}/>
                    <Text style={styles.navPressableText}>VIP</Text>
				</Pressable>
                <Pressable style={this.state.style.task} onPress={() => this.props.setPage('task')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/task.png')}/>
                    <Text style={styles.navPressableText}>Task</Text>
				</Pressable>
                <Pressable style={this.state.style.account} onPress={() => this.props.setPage('account')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/user.png')}/>
                    <Text style={styles.navPressableText}>Account</Text>
				</Pressable>
            </View>
        );
    }
}