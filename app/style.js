import { StyleSheet, Dimensions } from 'react-native';

let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;
let PressableWidth = ScreenWidth
if (ScreenHeight < ScreenWidth) {
    PressableWidth = ScreenWidth/2
    ScreenWidth = ScreenWidth/2
}
const navHeight = ScreenHeight/20;
const navIconDimensions = ScreenWidth/20;
const mainOrange = '#fc5a03';
const fadedOrange = '#fda677';
const logoDimensions = '12em'//ScreenHeight/4

export default StyleSheet.create({
  container: {
    maxHeight: ScreenHeight,
    fontFamily: 'Roboto',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 'row',
    height: ScreenHeight,
    alignItems: 'center',
  },

  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    textAlign: 'center'
  },

  link: {
    fontSize: '1em',
    marginVertical: '.8em',
    color: '#1B95E0'
  },

  welcomeLogo: {
    minWidth: logoDimensions,
    minHeight: logoDimensions,
    resizeMode: 'contain'
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
    resizeMode: 'contain'
  },

  signupTitle: {
    fontWeight: 'bold',
    fontSize: '.5rem',
    marginVertical: '.3em',
    textAlign: 'center'
  },

  menuPressable: {
    fontWeight: 'bold',
    backgroundColor: mainOrange,
    minWidth: PressableWidth,
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
    marginVertical: '.5em',
    fontSize: '1.5em',
    paddingVertical: '.7em',
  },

  menuLoading: {
    position: 'absolute',
    left: '48%'
  },
  navigator: {
    flex: 1,
    flexDirection: 'row',
    zIndex: 1,
    position: 'fixed',
    bottom: 0,
    justifyContent: 'center',
    width: ScreenWidth,
    minHeight: navHeight,
    backgroundColor: mainOrange
  },
  navPressable: {
    zIndex: 2,
    alignItems: 'center',
    maxWidth: navIconDimensions,
    height: navIconDimensions,
    marginHorizontal: navIconDimensions*1.4,
    marginVertical: navIconDimensions/2,
  },
  navPressableFaded: {
    zIndex: 2,
    alignItems: 'center',
    maxWidth: navIconDimensions,
    height: navIconDimensions,
    marginHorizontal: navIconDimensions*1.4,
    marginVertical: navIconDimensions/2,
    opacity: 0.5
  },
  navPressableIcon: {
    minWidth: navIconDimensions,
    minHeight: navIconDimensions
  },
  navPressableText: {
    fontSize: navIconDimensions/2.5,
    fontWeight: 'bold'
  },
  account: {
    backgroundColor: fadedOrange,
    borderBottomLeftRadius: '7em',
    width: ScreenWidth,
    maxHeight: ScreenWidth,
    padding: '2em',
    top: '0',
    overflow: 'visible',
    alignItems: 'center',
  },
  accountPic: {
    minHeight: '5em',
    minWidth: '5em',
    borderRadius: '100%',
    borderStyle: 'solid',
    borderColor: mainOrange,
    borderWidth: '.2em'
  },
  accountUsername: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    margin: '.4em',
    textAlign: 'center'
  },
  accountDetails: {
    fontSize: '.8em',
    fontWeight: 'bold',
    margin: '.2em',
    padding: '.2em',
    textAlign: 'center'
  },
  accountPressable: {
    backgroundColor: 'black',
    borderRadius: '1em',
    color: mainOrange,
    margin: '.4em',
    paddingVertical: '.1em',
    paddingHorizontal: '.4em'
  }
});