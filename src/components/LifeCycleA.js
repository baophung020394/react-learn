import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2,
            name: ', This is State'
        };

    }

    componentWillMount() {
        console.log('1- component will mount');
    }

    componentDidMount() {
        console.log('3 - component did mount \r\n waiting 2s ...');
    }

    componentWillReceiveProps(nextProp) {
        this.setState({ count: 7, name: ', This is new State' });
        console.log('4- component will receive prop: ' + nextProp.name);
    }

    shouldComponentUpdate(nextProp, nextState) {
        if (this.state.name !== nextState.name) {
            console.log('5- should component update: ' + nextProp.name + ' ' + nextState.name);
            return true;
        } else {
            return false;
        }

    }

    componentWillUpdate(nextProp, nextState) {
        console.log('6- component will update: ' + nextProp.name + ' ' + nextState.name);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('8- OK component did update: ' + prevProps.name + ' ' + prevState.name);
    }

    componentWillUnmount() {
        console.log('9- component has removed');
    }
    render() {
        console.log(this.state.count + '- render DOM');
        return <div>{this.props.name}</div>;
    }
}

export default LifeCycleA
