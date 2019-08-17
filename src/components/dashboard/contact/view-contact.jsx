import React, { Component } from 'react'

class ViewContact extends Component {
    componentDidMount() {
        console.log(this.props)
    }
    
    state = {  }
    render() { 
        return ( <p>view contact</p> );
    }
}
 
export default ViewContact;