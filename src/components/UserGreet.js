import React, { Component } from 'react'

export class UserGreet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggined: false
        }
    }
    render() {
        return this.state.isLoggined && <div>Welcome
            
        </div>
        // return this.state.isLoggined ? (
        //     <div>
        //         Welcome Bao
        //     </div>
        // ) : (
        //     <div>Welcome Thuy</div>
        // )
        // let message 
        // if(this.state.isLoggined) {
        //     message =   <div>Hello Bao</div>
        // } else {
        //     message = <div>Hello Thuy </div>
        // }
        // return (
        //     <div>{message}</div>
        // )
        // if(this.state.isLoggined) {
        //     return (
        //         <div>
        //             welcome Bao
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             welcome Thuuy
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         Welcome Bao
        //         Welcome Thuy
        //     </div>
        // )
    }
}

export default UserGreet
