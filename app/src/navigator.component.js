import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import styles from '../style';

export default class Navigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            style: {
                home: styles.navPressable,
                earn: styles.navPressableFaded,
                vip: styles.navPressableFaded,
                task: styles.navPressableFaded,
                account: styles.navPressableFaded,
            },
        }
    }

    componentDidMount() {
        if (this.props.page === 'home') {
            this.setState({
                style: {
                    home: styles.navPressable,
                    earn: styles.navPressableFaded,
                    vip: styles.navPressableFaded,
                    task: styles.navPressableFaded,
                    account: styles.navPressableFaded,
                }
            });
        } else if (this.props.page === 'earn') {
            this.setState({
                style: {
                    home: styles.navPressableFaded,
                    earn: styles.navPressable,
                    vip: styles.navPressableFaded,
                    task: styles.navPressableFaded,
                    account: styles.navPressableFaded,
                }
            });
        } else if (this.props.page === 'vip') {
            this.setState({
                style: {
                    home: styles.navPressableFaded,
                    earn: styles.navPressableFaded,
                    vip: styles.navPressable,
                    task: styles.navPressableFaded,
                    account: styles.navPressableFaded,
                }
            });
        } else if (this.props.page === 'task') {
            this.setState({
                style: {
                    home: styles.navPressableFaded,
                    earn: styles.navPressableFaded,
                    vip: styles.navPressableFaded,
                    task: styles.navPressable,
                    account: styles.navPressableFaded,
                }
            });
        } else if (this.props.page === 'account') {
            this.setState({
                style: {
                    home: styles.navPressableFaded,
                    earn: styles.navPressableFaded,
                    vip: styles.navPressableFaded,
                    task: styles.navPressableFaded,
                    account: styles.navPressable,
                }
            });
        }
    }

    render() {
        return(
            <View style={styles.navigator}>
                <Pressable style={this.state.style.home} onPress={() => this.props.setPage('home')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/home.png')}/>
                    <Text style={styles.navPressableText}>{this.props.lang=='en'? 'Home': 'Βάση'}</Text>
				</Pressable>
                <Pressable style={this.state.style.earn} onPress={() => this.props.setPage('earn')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/money.png')}/>
                    <Text style={styles.navPressableText}>{this.props.lang=='en'? 'Earn': 'Κέρδισε'}</Text>
				</Pressable>
                <Pressable style={this.state.style.vip} onPress={() => this.props.setPage('vip')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/crown.png')}/>
                    <Text style={styles.navPressableText}>VIP</Text>
				</Pressable>
                <Pressable style={this.state.style.task} onPress={() => this.props.setPage('task')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/task.png')}/>
                    <Text style={styles.navPressableText}>{this.props.lang=='en'? 'Task': 'Εργασίες'}</Text>
				</Pressable>
                <Pressable style={this.state.style.account} onPress={() => this.props.setPage('account')} >
					<Image style={styles.navPressableIcon} source={require('../assets/navigator/user.png')}/>
                    <Text style={styles.navPressableText}>{this.props.lang=='en'? 'Account': 'Λογαριασμός'}</Text>
				</Pressable>
            </View>
        );
    }
}