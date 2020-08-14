import React, { Component } from 'react';

class EventBinding extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            message: 'Bao'
        })

        // this.handleClick = this.handleClick.bind(this)
    }
    // handleClick() {
    //     console.log(this.state.message)
    // }
    handleClick = () => {
        this.setState({
            message: 'Bao cu bu'
        })
    }
    render() {
      
        return (
            <div>
                <h1>Hello - {this.state.message} </h1>
                {/* <button onClick={this.handleClick.bind(this.state.message)} >CLassClick </button> */}
                {/* <button onClick={() => {this.handleClick()}} >CLassClick </button> */}
                <button onClick={this.handleClick} >CLassClick </button>
            </div>
        )
    }
}

export default EventBinding