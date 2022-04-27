import React from 'react';
import { Pressable, Text, TextInput, View, Image} from 'react-native';
import styles from '../style';



export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.welcomeLogo} source={require('../assets/logo.png')}/>
				<Text style={styles.welcomeTitle}>SpotFox</Text>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Username'
                    value={this.state.username}
                    onChangeText={input => this.setState({ username: input })}
                >   
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Password'
                    value={this.state.password}
                    onChangeText={input => this.setState({ password: input })}
                    secureTextEntry={true}
                >   
                </TextInput>
				<Pressable style={styles.menuPressable} onPress={() => {this.props.setPage('login')}} >
					<Text style={styles.textPressable}>Log In</Text>
				</Pressable>
                <Text style={styles.link} onPress={() => {this.props.setPage('signin')}}>Don't have an account? Sign in</Text>
            </View>
        );
    }
}