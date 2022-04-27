import React from 'react';
import * as Font from 'expo-font';
import Welcome from './src/welcome.component';
import Login from './src/login.component'

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
	page: 'welcome'
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
    this.setState({ fontsLoaded: true })
  }

  componentDidMount() {
    this.loadFonts();
  }
  render () {
	// Warn user if font didn't load
	if (!this.state.fontsLoaded) console.warn('Error, unable to load fonts');

	var toRender;
	if (this.state.page === 'welcome'){
		toRender = <Welcome />
	}
	return (
		toRender	
	);
  }
}