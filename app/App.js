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
			fontsLoaded: false,
			page: 'welcome',
			accessToken: localStorage.getItem('token'),
			username: ''
		}
		this.setPage = this.setPage.bind(this);
		this.setToken = this.setToken.bind(this);
		this.getAuthorized = this.getAuthorized.bind(this);
	}

	setPage(page) {
		this.setState({page: page});
	} 

	setToken(token) {
		this.setState({accessToken: token});
	} 

	getAuthorized() {
		// Authorization from saved cookie
		if (this.state.accessToken) {

			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json'},
				mode: 'cors',
				body: JSON.stringify({access_token: this.state.accessToken})
			}

			fetch('http://localhost:8010/proxy/retrieve_username', requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.username) {
						this.setState({username: data.username});//data.render});
						this.setState({page: 'account'});
					} else {
						console.log(data)
						this.setState({page: 'welcome'});
					}
				})
				.catch(e => {
					alert('Internal server error, please try again'); 
					console.log(e);
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
			toRender = <Welcome setPage={this.setPage} setToken={this.setToken}/>
		} else if (this.state.page === 'login') {
			toRender = <Login setPage={this.setPage} setToken={this.setToken}/>
		} else if (this.state.page === 'signup') {
			toRender = <Signup setPage={this.setPage} setToken={this.setToken}/>
		} else if (this.state.page === 'home') {
			toRender = <Home setPage={this.setPage}/>
		} else if (this.state.page === 'earn') {
			toRender = <Earn setPage={this.setPage}/>
		} else if (this.state.page === 'vip') {
			toRender = <Vip setPage={this.setPage}/>
		} else if (this.state.page === 'task') {
			toRender = <Task setPage={this.setPage}/>
		} else if (this.state.page === 'account') {
			toRender = <Account setPage={this.setPage} username={this.state.username}/>
		}
		return (
			<View style={styles.container}>
				{toRender}
			</View>

		);
    }
}