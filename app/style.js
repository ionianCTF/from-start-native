import { StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;
if (ScreenHeight < ScreenWidth) {
    ScreenWidth = ScreenWidth/3
}

export default StyleSheet.create({
  container: {
    maxHeight: ScreenHeight,
    fontFamily: 'Roboto',
    flex: 1,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    textAlign: 'center'
  },

  link: {
    fontSize: '1em',
    marginVertical: '0.8em',
    color: '#1B95E0'
  },

  welcomeLogo: {
    minWidth: '12em',
    minHeight: '12em',
  },
  
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },

  signupLogo: {
    minWidth: '4em',
    minHeight: '4em',
  },

  signupTitle: {
    fontWeight: 'bold',
    fontSize: '.5rem',
    marginVertical: '0.3em',
    textAlign: 'center'
  },

  menuPressable: {
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#fc5a03',
    minWidth: ScreenWidth,
    borderRadius: '1em',
    marginVertical: '.5em'
  },

  textPressable: {
    lineHeight: '1.5em',
    fontSize: '1.3rem',
    fontStyle: 'bold',
    textAlign: 'center',
    marginVertical: '1em'
  },

  menuInput: {
    textAlign: 'center',
    minWidth: ScreenWidth,
    borderRadius: '1em',
    marginVertical: '0.5em',
    fontSize: '1.5em',
    paddingVertical: '0.7em',
  },
});
