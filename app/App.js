import React from 'react';
import * as Font from 'expo-font';
import { View } from 'react-native';
import Welcome from './src/welcome.component';
import Login from './src/login.component';
import Signup  from './src/signup.component';
import Home from './src/home.component';
import Earn from './src/earn.component';
import Vip from './src/vip.component';
import Task from './src/task.component';
import Account from './src/account.component';
import styles from './style';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			lang: 'en',
			fontsLoaded: false,
			page: 'welcome',
			accessToken: localStorage.getItem('token'),
			userData: {}
		}
		this.setPage = this.setPage.bind(this);
		this.setToken = this.setToken.bind(this);
		this.getAuthorized = this.getAuthorized.bind(this);
		this.setUserData = this.setUserData.bind(this);
		this.setLang = this.setLang.bind(this)
	}

	setLang(lang) {
		this.setState({lang: lang})
	}
	setPage(page) {
		this.setState({page: page});
	} 

	setToken(token) {
		localStorage.setItem('token', token);
		this.setState({accessToken: token});
	} 

	setUserData(data) {
		this.setState({userData: data})
	}

	getAuthorized() {
		// Authorization from saved cookie
		if (this.state.accessToken) {

			const requestOptions = {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json',
					'Accept': '*/*'
				},
				mode: 'cors',
				body: JSON.stringify({access_token: this.state.accessToken})
			}

			fetch('http://localhost:8010/proxy/', requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.user_data) {
						this.setState({userData: JSON.parse(data.user_data)});
						this.setState({page: 'account'});
					} else {
						console.log(data)
						this.setState({page: 'welcome'});
					}
				})
				.catch(e => {
					//alert('Internal server error, please try again'); 
					alert(e);
				});
		}
	}

    async loadFonts() {
        await Font.loadAsync({
            Roboto: require('./assets/fonts/Roboto-Regular.ttf'),

            'Roboto-Bold': {
                uri: require('./assets/fonts/Roboto-Bold.ttf'),
                display: Font.FontDisplay.FALLBACK,
            },
        });
        this.setState({fontsLoaded: true })
    }

    componentDidMount() {
        this.loadFonts();
		this.getAuthorized();
    }

    render() {
		// Warn user if font didn't load
		if (!this.state.fontsLoaded) console.warn('Error, unable to load fonts');

		var toRender;
		if (this.state.page === 'welcome') {
			toRender = <Welcome 
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				setToken={this.setToken}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'login') {
			toRender = <Login 
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				setToken={this.setToken}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'signup') {
			toRender = <Signup 
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				setToken={this.setToken}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'home') {
			toRender = <Home 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'earn') {
			toRender = <Earn 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'vip') {
			toRender = <Vip 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'task') {
			toRender = <Task 
				lang={this.state.lang}
				setPage={this.setPage}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		} else if (this.state.page === 'account') {
			toRender = <Account 
				setLang={this.setLang}
				lang={this.state.lang}
				setPage={this.setPage} 
				username={this.state.username}
				setUserData={this.setUserData}
				userData={this.state.userData}
			/>
		}
		return (
			<View style={styles.container}>
				{toRender}
			</View>

		);
    }
}