import React from 'react';
import { Button, Text, View, Image} from 'react-native';
import styles from './style';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
		  <Image style={styles.welcomeLogo} source={require('./assets/logo.png')}/>
          <Text style={styles.welcomeTitle}>SpotFox</Text>
        <Button onPress={() => { alert('welcome')}} title="Welcome" />
      </View>
    );
  }
  
}