import { StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

let ScreenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  header: {
    padding: 20
  },
  welcomeTitle: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    marginVertical: '1em',
    textAlign: 'center'
  },
  link: {
    color: '#1B95E0'
  },
  code: {
    fontFamily: 'monospace, monospace'
  },
  welcomeLogo: {
      minWidth: '12em',
      minHeight: '12em',
      zIndex: 5,
      display: 'block',
      opacity: 1
  }
});
