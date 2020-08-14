import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            topic: 'React'
        }
    }
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handleTopic = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    FormSubmit = (event) => {
        alert(`Username: ${this.state.username} - Comment: ${this.state.comment} - Topic: ${this.state.topic}`)
        event.preventDefault();
    }
    render() {
        const { username, comment, topic } = this.state;
        return (
            <div>
                Form Component
                <form onSubmit={this.FormSubmit}>
                    <div>
                        <label>Username</label>
                        <input type="text" 
                                value={username} 
                                onChange={this.handleUsernameChange}        
                        />
                        <h1>{this.state.username}</h1>
                    </div>
                    <div>
                        <label>COmments</label>
                        <textarea value={comment} onChange={this.handleComment}></textarea>
                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={topic} onChange={this.handleTopic}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vuejs</option>
                        </select>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form
