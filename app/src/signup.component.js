import React from 'react';
import { View, Image, Pressable, Text, TextInput, ActivityIndicator } from 'react-native';
import Lang from './lang.component';
import styles from '../style';



export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            invitationCode: '',
            loading: false,
        }
        this.commitSignup = this.commitSignup.bind(this);
    }
    commitSignup() {
        this.setState({loading: true});
        // TODO add username and password validation!
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.password,
                invitationCode: this.state.invitationCode
            })
        }
        fetch('http://localhost:8010/proxy/signup', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    this.props.setToken(data.access_token);
                    this.props.setUserData({userData: data.user_data});
                    this.props.setPage({page: 'home'});
                    location.reload();
                } else if (data.error) {
                    // TODO validate input!
                    alert('Something went wrong, please try again');
                    console.log(data.error)
                    this.setState({loading: false});
                }
            })
            .catch(e => console.log(e))
    }
    render() {
        return(
            <View style={[styles.container, styles.menuContainer]}>
                <Image style={styles.signupLogo} source={require('../assets/logo.png')}/>
				<Text style={styles.signupTitle}>SpotFox</Text>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder={this.props.lang=='en'? 'Username': '?????????? ????????????'}
                    value={this.state.username}
                    onChangeText={input => this.setState({username: input})}
                >   
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder={this.props.lang=='en'? 'Email': '?????????????????????? ??????????????????'}
                    value={this.state.email}
                    onChangeText={input => this.setState({email: input})}
                >   
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder={this.props.lang=='en'? 'Password': '??????????????'}
                    value={this.state.password}
                    onChangeText={input => this.setState({password: input})}
                    secureTextEntry={true}
                >
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder={this.props.lang=='en'? 'Confirm password': '???????????????????? ??????????????'}
                    value={this.state.confirmPassword}
                    onChangeText={input => this.setState({confirmPassword: input})}
                    secureTextEntry={true}
                >
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder={this.props.lang=='en'? 'Invitation Code': '?????????????? ????????????????????'}
                    value={this.state.invitationCode}
                    onChangeText={input => this.setState({invitationCode: input})}
                >   
                </TextInput>
				<Pressable style={styles.menuPressable} onPress={() => {this.commitSignup()}} >
					<Text style={styles.textPressable}>{this.props.lang === 'en'? 'Sign Up': '??????????????'}</Text>
                    {this.state.loading && <ActivityIndicator style={styles.menuLoading} color={"#fff"} />}
				</Pressable>
                <Text style={styles.link} onPress={() => {this.props.setPage('login')}}>{this.props.lang === 'en'? 'Already have an account? Log in': '?????????? ?????? ????????????????????; ??????????????'}</Text>
                <Lang
                    lang={this.props.lang}
                    setLang={this.props.setLang}
                ></Lang>
            </View>
        );
    }
}