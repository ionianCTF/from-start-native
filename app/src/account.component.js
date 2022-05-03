import React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
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
                <ScrollView contentContainerStyle={styles.accountScroll}>
                    <View style={styles.account}>
                        <View style={styles.accountDetailsWrapper}>
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
                        </View>
                        <View style={styles.accountTables}>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>Balance</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>Task Profit</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.invitationCommision.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>Invitation Commision</Text>
                                </Text>
                            </View>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{(this.props.userData.taskProfit + this.props.userData.invitationCommision).toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>Total Profit</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{0}
                                    <Text style={styles.accountTableItemLabel}>Today Complete</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{3}
                                    <Text style={styles.accountTableItemLabel}>Today remaining</Text>
                                </Text>
                            </View>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>Today's profit</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>Weekly profit</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>Monthly profit</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.accountButtons}>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('home')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/funds.png')}/>
                                <Text style={styles.accountPressableText}>Funds</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('earn')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/recharge.png')}/>
                                <Text style={styles.accountPressableText}>Recharge</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('vip')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/income.png')}/>
                                <Text style={styles.accountPressableText}>My bill</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('task')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/withdraw.png')}/>
                                <Text style={styles.accountPressableText}>Withdrawal record</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/funding.png')}/>
                                <Text style={styles.accountPressableText}>Withdrawal</Text>
                            </Pressable>
                        </View>
                        <View style={styles.accountOptions}>
                            <Pressable style={styles.accountOption} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/user.png')}/>
                                <Text style={styles.accountOptionPressableText}>Personal Info</Text>
                            </Pressable>
                            <Pressable style={styles.accountOption} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/users.png')}/>
                                <Text style={styles.accountOptionPressableText}>Team report</Text>
                            </Pressable>
                            <Pressable style={styles.accountOption} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/briefcase.png')}/>
                                <Text style={styles.accountOptionPressableText}>Receiver's account</Text>
                            </Pressable>
                            <Pressable style={styles.accountOption} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/headset.png')}/>
                                <Text style={styles.accountOptionPressableText}>Customer service</Text>
                            </Pressable>
                            <Pressable style={styles.accountOption} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/book.png')}/>
                                <Text style={styles.accountOptionPressableText}>User guidance</Text>
                            </Pressable>
                            <Pressable style={styles.accountOption} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/globe.png')}/>
                                <Text style={styles.accountOptionPressableText}>Language</Text>
                            </Pressable>
                            <Pressable style={styles.accountOption} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/lock.png')}/>
                                <Text style={styles.accountOptionPressableText}>Password setting</Text>
                            </Pressable>
                            <Pressable style={styles.accountLogout} onPress={() => this.props.setPage('account')} >Log Out
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
                <Navigator setPage={this.props.setPage} page='account'/>

            </View>
        );
    }
}