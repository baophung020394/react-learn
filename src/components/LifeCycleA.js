import React, { Component } from 'react'

class LifeCycleA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Bao'
        }

        console.log('Lifecycle A constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle A getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifeCycle A componentDidmount')
    }
    render() {
        console.log('LifeCycle A render')
        return (
            <div>
                
            </div>
        )
    }
}

export default LifeCycleA
