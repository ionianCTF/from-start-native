import React from 'react';
import { Pressable, Text, TextInput, View, Image} from 'react-native';
import styles from '../style';



export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            invitationCode: ''
        }
    }
    render() {
        return(
            <View style={styles.container}>
                <Image style={styles.signupLogo} source={require('../assets/logo.png')}/>
				<Text style={styles.signupTitle}>SpotFox</Text>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Username'
                    value={this.state.username}
                    onChangeText={input => this.setState({username: input})}
                >   
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Email'
                    value={this.state.email}
                    onChangeText={input => this.setState({email: input})}
                >   
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Password'
                    value={this.state.password}
                    onChangeText={input => this.setState({password: input})}
                    secureTextEntry={true}
                >
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Confirm password'
                    value={this.state.confirmPassword}
                    onChangeText={input => this.setState({confirmPassword: input})}
                    secureTextEntry={true}
                >
                </TextInput>
                <TextInput 
                    style={styles.menuInput} 
                    placeholder='Verification Code'
                    value={this.state.invitationCode}
                    onChangeText={input => this.setState({invitationCode: input})}
                >   
                </TextInput>
				<Pressable style={styles.menuPressable} onPress={() => {this.props.setPage('login')}} >
					<Text style={styles.textPressable}>Sign up</Text>
				</Pressable>
                <Text style={styles.link} onPress={() => {this.props.setPage('signin')}}>Already have an account? Log in</Text>
            </View>
        );
    }
}