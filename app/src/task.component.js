import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Navigator from './navigator.component';
import styles from '../style';
import TaskNavigator from './task/taskNavigator.component';
import Media from './task/media.component';

export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            loading: false,
            page: 'process',
            tasks: ''
        }
        this.setPage = this.setPage.bind(this);
    }
    setPage(page) {
        this.setState({page: page});
    }
    componentDidMount() {
		// Retrieve tasks from server
		if (this.props.userData) {
			const requestOptions = {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json',
					'Accept': '*/*'
				},
				mode: 'cors',
				body: JSON.stringify({username: this.props.userData.username, function: 'get'})
			}

			fetch('http://localhost:8010/proxy/tasks', requestOptions)
				.then(response => response.json())
				.then(data => {
					if (data.tasks) {
                        var tasks = [];
                        for (let i=0; i<data.tasks.length; i++) {
                            var obj = JSON.parse(data.tasks[i]);
                            tasks.push(JSON.parse(obj));
                        }
						this.setState({tasks: tasks});
					} else {
                        alert("Couldn't retrieve user data!");
					}
				})
				.catch(e => {
					console.log(e);
				});
        } else {
            alert("Couldn't retrieve user data!");
        }
    }
    render() {
        var toRender = [];
        if (this.state.page==='process') {
            for (let i=0; i<this.state.tasks.length; i++) {
                var task_data = this.state.tasks[i]
                if (task_data.status === 0) {
                    toRender.push(<Media enabled={true} data={task_data} lang={this.props.lang}></Media>);
                }
            }
        } else if (this.state.page==='pending') {
            for (let i=0; i<this.state.tasks.length; i++) {
                var task_data = this.state.tasks[i]
                if (task_data.status === 1) {
                    toRender.push(<Media enabled={true} data={task_data} lang={this.props.lang}></Media>);
                }
            }
        } else if (this.state.page==='approved') {
            for (let i=0; i<this.state.tasks.length; i++) {
                var task_data = this.state.tasks[i]
                if (task_data.status === 2) {
                    toRender.push(<Media enabled={true} data={task_data} lang={this.props.lang}></Media>);
                }
            }
        } else if (this.state.page==='others') {
            for (let i=0; i<this.state.tasks.length; i++) {
                var task_data = this.state.tasks[i]
                if (task_data.status === 3) {
                    toRender.push(<Media enabled={true} data={task_data} lang={this.props.lang}></Media>);
                }
            }
        }
        return(
            <View style={styles.container}>
                <View style={styles.container}>
                    <TaskNavigator setPage={this.setPage} page={this.state.page} lang={this.props.lang}></TaskNavigator>
                    {toRender}
                </View>
                <Navigator lang={this.props.lang} setPage={this.props.setPage} page='task'/>
            </View>
        );
    }
}