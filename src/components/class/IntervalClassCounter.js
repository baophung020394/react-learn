import React, { Component } from 'react'

export class IntervalClassCounter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    intervalState = () => {
        setInterval(() => {
            this.setState({
                count: this.state.count
            })
        }, 1000);
    }
    componentDidMount() {
        // this.interval = setInterval(this.tick, 1000);
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }
    // tick = () => {
    //     this.setState({
    //         count: this.state.count + 1
    //     })
    // }
    render() {

        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

export default IntervalClassCounter
