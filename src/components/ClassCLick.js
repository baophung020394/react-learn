import React, { Component } from 'react';

class CLassClick extends Component {
    handleClick() {
        console.log('Class Click')
    }
    render() {
      
        return (
            <div>
                <button onClick={this.handleClick} >CLassClick </button>
            </div>
        )
    }
}

export default CLassClick