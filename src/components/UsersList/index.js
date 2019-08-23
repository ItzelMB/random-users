import React, { Component } from 'react';

class UsersList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.user.id.value
        }
    };

    render(){
        return (
            <div key={this.props.user.id.value}>
                <p>{this.props.user.name.first} {this.props.user.name.last}</p>
                <img src={this.props.user.picture.thumbnail} alt="user"></img>
            </div>
        );
    }
}

export default UsersList;