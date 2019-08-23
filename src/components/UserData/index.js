import React, { Component } from 'react';

class UserData extends Component {

    constructor(props) {
        super(props)
    };

    render(){
        return (
            <div onClick={this.props.hideCard} className="relative bg-white my-4 flex-col flex border w-64">
                <div onClick={this.props.hideCard} className="font-bold text-right mr-4">&times;</div>
                <img src={this.props.user.picture.large} alt="user" className="w-full"></img>
                <div className="p-4 text-gray-800 text-base">
                    <p className="font-bold text-xl mb-4">{this.props.user.name.first} {this.props.user.name.last}</p>
                    <p className="mb-4">Username: <br/><span className="font-bold text-sm">{this.props.user.login.username}</span></p>
                    <p className="mb-4">Email Adress: <br/><span className="font-bold text-sm">{this.props.user.email}</span></p>
                    <p className="mb-4">Phone Number: <br/><span className="font-bold text-sm">{this.props.user.phone}</span></p>
                    <p className="mb-4">State: <br/><span className="font-bold text-sm">{this.props.user.location.state}</span></p>
                </div>
            </div>
        );
    }
}

export default UserData;