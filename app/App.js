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
			page: 'home',
			accessToken: ''
		}
		this.setPage = this.setPage.bind(this);
		this.setToken = this.setToken.bind(this);
	}

	setPage(page) {
		this.setState({page: page});
	} 

	setToken(token) {
		this.setState({accessToken: token});
	} 

	getPage() {
		const requestOptions = {
            method: 'GET',
        }
		fetch('http://localhost:8010/proxy/', requestOptions)
			.then(response => response.json())
            .then(data => {
                if (data.render) {
					console.log(data);
                    this.setState({page: data.render});
                } else {
                    alert('Invalid username/password compination');
                    console.log(data);
                }
            })
            .catch(e => {
				alert('Internal server error, please try again'); 
				console.log(e);
			});
	}

    // Load fonts https://docs.expo.dev/versions/latest/sdk/font/
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
        //this.loadFonts();
		//this.getPage();
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
			toRender = <Account setPage={this.setPage}/>
		}
		return (
			<View style={styles.container}>
				{toRender}
			</View>

		);
    }
}