import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Navigator from './navigator.component';
import styles from '../style';
import TaskNavigator from './task/taskNavigator.component';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loading: false,
            page: 'process'
        }
        this.setPage = this.setPage.bind(this);
    }
    setPage(page) {
        this.setState({page: page});
    }
    render() {
        var toRender;
        if (this.state.page==='process') {
            toRender = <Text>Process</Text>
        } else if (this.state.page==='pending') {
            toRender = <Text>Pending</Text>
        } else if (this.state.page==='approved') {
            toRender = <Text>Approved</Text>
        } else if (this.state.page==='others') {
            toRender = <Text>Others</Text>
        }
        return(
            <ScrollView contentContainerStyle={styles.accountScroll} horizontal={false} scrollEnabled={false}>
                <View style={styles.container}>
                    <TaskNavigator setPage={this.setPage} page={this.state.page} lang={this.props.lang}></TaskNavigator>
                        {toRender}
                    <Navigator lang={this.props.lang} setPage={this.props.setPage} page='task'/>
                </View>
            </ScrollView>
        );
    }
}