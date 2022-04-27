import React from 'react';
import * as Font from 'expo-font';
import Welcome from './src/welcome.component';
import Login from './src/login.component';
import Signup  from './src/signup.component';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			page: 'signup'
		}
		this.setPage = this.setPage.bind(this);
	}

	setPage(page) {
		this.setState({ page: page });
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
        this.loadFonts();
    }
    render() {
	// Warn user if font didn't load
	if (!this.state.fontsLoaded) console.warn('Error, unable to load fonts');

	var toRender;
	if (this.state.page === 'welcome') {
		toRender = <Welcome setPage={ this.setPage }/>
	} else if (this.state.page === 'login') {
		toRender = <Login setPage={ this.setPage } />
	} else if (this.state.page === 'signup') {
		toRender = <Signup setPage={ this.setPage } />
	}
	return (
		toRender	
	);
    }
}