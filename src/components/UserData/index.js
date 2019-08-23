import React, { Component } from 'react';

class UserData extends Component {

    constructor(props) {
        super(props)
    };

    render(){
        return (
            <div>
                <div onClick={this.props.hideCard}>x</div>
            'UserData'
            </div>
        );
    }
}

export default UserData;