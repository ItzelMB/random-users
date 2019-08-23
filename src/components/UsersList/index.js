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
                <div key={this.props.user.id.value} className="flex w-full md:w-1/4 p-2 m-4 md:w-56">
                    <img src={this.props.user.picture.thumbnail} alt="user" className="rounded-full mr-4"></img>
                    <p>{this.props.user.name.first} {this.props.user.name.last}</p>
                </div>
        );
    }
}

export default UsersList;