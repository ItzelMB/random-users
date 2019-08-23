import React, { Component } from 'react';

class UserDataCard extends Component {

    constructor(props) {
        super(props)
    };

    render(){
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-lg relative p-8 bg-white w-full max-w-md m-auto flex-col">
                <div onClick={this.props.hideCard}>X</div>
                <img src={this.props.user.picture.large} alt="user" className="w-full"></img>
                {/*<img src={this.props.user.picture.large} alt="user" className="rounded-full"></img>*/}
                <div class="p-4">
                    <p className="font-bold text-xl mb-2">{this.props.user.name.first} {this.props.user.name.last}</p>
                    <span>Username:</span><p className="font-medium">{this.props.user.login.username}</p>
                    <p>State: {this.props.user.location.state}</p>
                    <p>Email adress: {this.props.user.email}</p>
                    <p>Phone number: {this.props.user.phone}</p>
                </div>
            </div>
        );
    }
};

export default UserDataCard;