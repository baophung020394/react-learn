import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export class ParentComponent extends Component {

    constructor(props) {
       
        super(props)
        this.state = {
            parentName: 'Bao dai gia'
        }
       this.greetParent = this.greetParent.bind(this)
    }
    
    greetParent(childName) {
        console.log(`${this.state.parentName} from ${childName}`)
    }
    render() {
        return (
            <div>
                <ChildComponent handler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
