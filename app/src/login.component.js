import React from 'react';
import { Pressable, Text, TextInput, View, Image, ActivityIndicator, CheckBox} from 'react-native';
import Lang from './lang.component';
import styles from '../style';



export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loading: false
        }
        this.commitLogin = this.commitLogin.bind(this);
    }
    commitLogin() {
        this.setState({loading: true});
        // TODO add username and password validation!
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }
        fetch('http://localhost:8010/proxy/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    this.props.setToken(data.access_token);
                    this.props.setUserData(JSON.parse(data.user_data));
                    this.props.setPage('home');
                } else if (data.error) {
                    alert('Invalid username/password compination');
                    this.setState({loading: false});
                }
            })
            .catch(e => alert(e))
    }
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.welcomeLogo} source={require('../assets/logo.png')}/>
				<Text style={styles.welcomeTitle}>SpotFox</Text>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Username'
                    value={this.state.username}
                    onChangeText={input => this.setState({username: input})}
                >   
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Password'
                    value={this.state.password}
                    onChangeText={input => this.setState({password: input})}
                    secureTextEntry={true}
                >   
                </TextInput>
                <CheckBox>
                    <Text>Remember me?</Text>
                </CheckBox>
				<Pressable style={styles.menuPressable} onPress={() => {this.commitLogin()}} >
                    <Text style={styles.textPressable}>{this.props.lang === 'en'? 'Log In': 'Σύνδεση'}</Text>
                    {this.state.loading && <ActivityIndicator style={styles.menuLoading} color={"#fff"} />}
				</Pressable>
                <Text style={styles.link} onPress={() => {this.props.setPage('signup')}}>{this.props.lang === 'en'? 'Don\'t have an account? Sign up': 'Δεν έχετε λογαριασμό; Εγγραφή'}</Text>
                <Lang
                    lang={this.props.lang}
                    setLang={this.props.setLang}
                ></Lang>
            </View>
        );
    }
}