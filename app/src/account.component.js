import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Navigator from './navigator.component';
import styles from '../style';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loading: false
        }
    }
    render() {
        return(
            <View>
                <View style={styles.account}>
                    <Image style={styles.accountPic} source={require('../assets/125.jpg')}/>
                    <Text style={styles.accountUsername}>{this.props.userData.username}</Text>
                    <Text style={styles.accountDetails}>
                        Email: {this.props.userData.email}<br></br>
                        Vip level: {this.props.userData.vip}
                            <Pressable style={styles.accountPressable} onPress={() => {this.props.setPage('vip')}}><Text>Upgrade to VIP</Text></Pressable>
                            <br></br>
                        Credit score: {this.props.userData.vip*600}<br></br>
                        Invitation Code: {this.props.userData.invitationCode}
                        <Pressable style={styles.accountPressable} onPress={() => navigator.clipboard.writeText(this.props.userData.invitationCode)} ><Text>Copy</Text></Pressable>
                    </Text>
                    <Navigator setPage={this.props.setPage} page='account'/>
                </View>
                <View style={styles.accountTable}> TEST

                </View>

            </View>
        );
    }
}