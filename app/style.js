import { StyleSheet, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;
if (ScreenHeight < ScreenWidth) {
    ScreenWidth = ScreenWidth/2
}

export default StyleSheet.create({
  container: {
    fontFamily: 'Roboto',
    flex: 1,
    height: ScreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: '2.5rem',
    marginVertical: '1em',
    textAlign: 'center'
  },

  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    textAlign: 'center'
  },

  link: {
    color: '#1B95E0'
  },

  welcomeLogo: {
      minWidth: '12em',
      minHeight: '12em',
  },

  menuPressable: {
      color: 'black',
      backgroundColor: '#fc5a03',
      minWidth: ScreenWidth,
      borderRadius: '1em',
      marginVertical: '1em'
  },
  textPressable: {
    lineHeight: '1.5em',
    fontSize: '1.5rem',
    fontStyle: 'bold',
    textAlign: 'center',
    marginVertical: '1em'
  },


});
