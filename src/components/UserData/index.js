import React, { Component } from 'react';

class UserData extends Component {

    constructor(props) {
        super(props)
    };

    render(){
        return (
            <div className="max-w-sm rounded overflow-hidden relative bg-white w-full max-w-md m-auto flex-col flex border">
                <div onClick={this.props.hideCard}>x</div>
                <img src={this.props.user.picture.large} alt="user" className="w-full"></img>
                <div className="p-4 text-gray-800 text-base">
                    <p className="font-bold text-xl mb-2">{this.props.user.name.first} {this.props.user.name.last}</p>
                    <p>Username: <span className="font-bold text-sm">{this.props.user.login.username}</span></p>
                    <p>Email Adress: <span className="font-bold text-sm">{this.props.user.email}</span></p>
                    <p>Phone Number: <span className="font-bold text-sm">{this.props.user.phone}</span></p>
                    <p>State: <span className="font-bold text-sm">{this.props.user.location.state}</span></p>
                </div>
            </div>
        );
    }
}

export default UserData;