import React from 'react';
import { View, ScrollView, Text, Image, Pressable } from 'react-native';
import Navigator from './navigator.component';
import Password from './account/password.component';
import Support from './account/support.component';
import Guide from './account/guide.component'
import Lang from './lang.component';
import styles from '../style';

export default class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            option: 'none'
        }
    }
    render() {
        var toExpand
        if (this.state.option === 'support') {
            toExpand = <Support lang={this.props.lang}></Support>
        }else if (this.state.option === 'guide') {
            toExpand = <Guide lang={this.props.lang}></Guide>
        } else if (this.state.option === 'password') {
            toExpand = <Password lang={this.props.lang} username={this.props.userData.username}></Password>
        }
        return(
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.accountScroll} horizontal={false} scrollEnabled={false}>
                    <View style={styles.account}>
                        <View style={styles.accountDetailsWrapper}>
                            <Image style={styles.accountPic} source={require('../assets/125.jpg')}/>
                            <Text style={styles.accountUsername}>{this.props.userData.username}</Text>
                            <Text style={styles.accountDetails}>
                                {this.props.lang==='en'? 'Email:': 'Ηλεκτρονική διεύθυνση:'} {this.props.userData.email}<br></br>
                                {this.props.lang==='en'? 'Vip level:': 'Vip επίπεδο:'} {this.props.userData.vip}
                                    <Pressable style={styles.accountPressable} onPress={() => {this.props.setPage('vip')}}><Text>Upgrade to VIP</Text></Pressable>
                                    <br></br>
                                {this.props.lang==='en'? 'Credit score:': 'Σκορ πίστης:'} {this.props.userData.vip*600}<br></br>
                                {this.props.lang==='en'? 'Invitation Code:': 'Κωδικός πρόσκλησης:'} {this.props.userData.invitationCode}
                                <Pressable style={styles.accountPressable} onPress={() => navigator.clipboard.writeText(this.props.userData.invitationCode)} ><Text>Copy</Text></Pressable>
                            </Text>
                        </View>
                        <Lang setLang={this.props.setLang}></Lang>
                        <View style={styles.accountTables}>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Balance': 'Υπόλοιπο'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Task Profit': 'Κέρδη εργασιών'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.invitationCommision.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Invitation Commision': 'Κέρδη προσκλήσεων'}</Text>
                                </Text>
                            </View>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{(this.props.userData.taskProfit + this.props.userData.invitationCommision).toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Total Profit': 'Ολικά κέρδη'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{0}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Today Complete': 'Σημερινές εργασίες'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{3}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Today remaining': 'Σημερινές απομένουν'}</Text>
                                </Text>
                            </View>
                            <View style={styles.accountTable}>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Today\'s profit': 'Σημερινά κέρδη'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Weekly profit': 'Εβδομαδιαία κέρδη'}</Text>
                                </Text>
                                <Text style={styles.accountTableItem}>{this.props.userData.balance.toFixed(2)}
                                    <Text style={styles.accountTableItemLabel}>{this.props.lang==='en'? 'Monthly profit': 'Μηνιαία κέρδη'}</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.accountButtons}>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('home')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/tether.png')}/>
                                <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Funds': 'Κεφάλαια'}</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('earn')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/credit-card.png')}/>
                                <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Recharge': 'Επαναφόρτιση'}</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('vip')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/receipt.png')}/>
                                <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'My bill': 'Απόδειξη'}</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('task')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/clock.png')}/>
                                <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Withdrawal record': 'Ιστορικό αναλήψεων'}</Text>
                            </Pressable>
                            <Pressable style={styles.accountButton} onPress={() => this.props.setPage('account')} >
                                <Image style={styles.accountPressableIcon} source={require('../assets/account/wallet.png')}/>
                                <Text style={styles.accountPressableText}>{this.props.lang==='en'? 'Withdrawal': 'Ανάληψη'}</Text>
                            </Pressable>
                        </View>
                        <View style={styles.accountOptions}>
                            <Pressable style={styles.accountOption} onPress={() => this.state.option!='support'? this.setState({option: 'support'}): this.setState({option: 'none'})} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/headset.png')}/>
                                <Text style={styles.accountOptionPressableText}>{this.props.lang==='en'? 'Customer service': 'Εξυπηρέτηση πελατών'}</Text>
                            </Pressable>
                            {this.state.option==='support'? toExpand: null}
                            <Pressable style={styles.accountOption} onPress={() => this.state.option!='guide'? this.setState({option: 'guide'}): this.setState({option: 'none'})} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/book.png')}/>
                                <Text style={styles.accountOptionPressableText}>{this.props.lang==='en'? 'User guidance': 'Οδηγίες χρήσης'}</Text>
                            </Pressable>
                            {this.state.option==='guide'? toExpand: null}
                            <Pressable style={styles.accountOption} onPress={() => this.state.option!='password'? this.setState({option: 'password'}): this.setState({option: 'none'})} >
                                <Image style={styles.accountOptionPressableIcon} source={require('../assets/menu/lock.png')}/>
                                <Text style={styles.accountOptionPressableText}>{this.props.lang==='en'? 'Change password': 'Αλλαγή κωδικού'}</Text>
                            </Pressable>
                            {this.state.option==='password'? toExpand: null}
                            <Pressable style={styles.accountLogout} onPress={() => this.props.logout()} >
                                <Text style={styles.accountOptionPressableText}>{this.props.lang==='en'? 'Log Out': 'Αποσύνδεση'}</Text>
                            </Pressable>
                        </View>
                    </View>
                </ScrollView>
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='account'/>

            </View>
        );
    }
}