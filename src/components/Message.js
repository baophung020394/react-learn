import React, { Component } from 'react';

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message : "Pu de thuong"
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.clickAction()}>Subscribe</button>
            </div>
        )
    }

    clickAction() {
        this.setState({
            message: "Thank you for Subsribe"
        })
    }
}

export default Message;