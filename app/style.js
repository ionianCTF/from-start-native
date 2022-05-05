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
const veryFadedOrange = '#ffe6d8';
const logoDimensions = ScreenHeight/5

export default StyleSheet.create({
  menuContainer: {
    marginTop: '1em',
  },
  container: {
    maxHeight: ScreenHeight,
    fontFamily: 'Roboto',
    flex: 1,
    flexDirection: 'column',
    flexGrow: 'row',
    height: ScreenHeight,
    alignItems: 'center',
  },

  lang: {
    flexDirection: 'row',
  },

  langIcon: {
    margin: '1em',
    width: '2em',
    height: '2em'
  },

  text: {
    lineHeight: '1.5em',
    fontSize: '1.125rem',
    textAlign: 'center'
  },

  link: {
    fontSize: '1em',
    marginVertical: '.4em',
    color: '#1B95E0'
  },

  welcomeLogo: {
    minWidth: logoDimensions,
    minHeight: logoDimensions,
    resizeMode: 'contain'
  },
  
  welcomeTitle: {
    fontWeight: 'bold',
    fontSize: '2em',
    marginVertical: '.5em',
    textAlign: 'center'
  },

  loginCheckbox: {
    flexDirection: 'row'
  },

  loginCheckboxLabel: {
    marginLeft: '1em',
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
    height: '4em',
    borderRadius: '1em',
    marginVertical: '.5em',
    justifyContent: 'center'
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
  accountScroll: {
    alignItems: 'center',
    minHeight: ScreenHeight,
  },
  account: {
    alignItems: 'center',
    paddingBottom: navIconDimensions*2,
  },
  accountDetailsWrapper: {
    backgroundColor: fadedOrange,
    borderBottomLeftRadius: '7em',
    borderBottomRightRadius: '7em',
    width: ScreenWidth,
    padding: '1em',
    alignItems: 'center',
    fontSize: '0.8em'
  },
  accountPic: {
    height: '5em',
    width: '5em',
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
  },
  accountTables: {
    shadowColor: "#000",
    shadowOpacity: 0.48,
    shadowRadius: 11.95,
    elevation: 18,
    marginTop: '1em',
    padding: '1em',
    backgroundColor: veryFadedOrange,
    borderRadius: '1em'
  },
  accountTable: {
    flexDirection: 'row',
    margin: '1em',
    borderStyle: 'solid',
    borderColor: 'grey',
  },
  accountTableItem: {
    width: ScreenWidth/4,
    fontSize: '1.5em',
    textAlign: 'center',
  },
  accountTableItemLabel: {
    display: 'block',
    fontSize: '0.5em',
    color: 'grey',
  },
  accountButtons: {
    flexDirection: 'row',
  },
  accountButton: {
    textAlign: 'center',
    maxWidth: '3.5em',
    margin: '.5em',
  },
  accountPressableIcon: {
    width: '3em',
    height: '3em',
  },
  accountPressableText: {
    fontSize: '.7em',
    textAlign: 'center'
  },
  accountOption: {
    padding: '.3em',
    width: ScreenWidth/1.1,
    borderStyle: 'solid',
    borderColor: 'grey',
    borderBottomWidth: '.1em',
    marginBottom: '.4em',
    alignItems: 'center'
  },
  accountOptionPressableText: {
    flexDirection: 'row',
    fontSize: '1em'
  },
  accountOptionPressableIcon: {
    width: '1em',
    height: '1em',
    marginRight: '1em'
  },
  accountLogout: {
    fontSize: '1.3em',
    color: mainOrange,
    marginVertical: '.5em',
    textAlign: 'center',
    padding: '0.4em',
    borderStyle: 'solid',
    borderColor: 'grey',
    borderWidth: '.01em'
  },
  optionContainer: {
    alignItems: 'center'
  },
  optionInput: {
    fontSize: '1.2em',
    textAlign: 'center',
    borderBottomWidth: '.1em',
    borderBottomColor: 'grey',
    marginVertical: '.4em'
  },
  optionPressable: {
    borderWidth: '.1em',
    borderRadius: '1em',
    padding: '.4em',
    borderColor: 'grey' 
  },
  optionPressableText: {
    fontSize: '1.2em',
    color: mainOrange,
  },
  support: {
    borderBottomWidth: '.1em',
    borderBottomColor: mainOrange,
    margin: '.5em'
  }
});
