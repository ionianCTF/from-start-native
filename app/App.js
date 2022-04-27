import React from 'react';
import { Button, Text, View, Image} from 'react-native';
import styles from './style';
import * as Font from 'expo-font';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

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
	return (
		<View style={styles.container}>
			<Image style={styles.welcomeLogo} source={require('./assets/logo.png')}/>
				<Text style={styles.welcomeTitle}>SpotFox</Text>
			<Button onPress={() => { alert('welcome')}} title="Welcome" />
		</View>
	);
  }
}