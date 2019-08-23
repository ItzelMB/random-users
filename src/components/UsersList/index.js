import React, { Component } from 'react';
import UserData from '../UserData';

class UsersList extends Component {

    constructor(props) {
        super(props)

        this.hideCard = this.hideCard.bind(this);

        this.state = {
            id: this.props.user.id.value,
            displayCard: false
        }
    };

    hideCard =() => {
        this.setState({
            displayCard: false
        })
    };

    handleCards = () => {
        this.setState({
            displayCard:true
        })
    };


    render(){
        return (
            <React.Fragment>
                <div className="pin z-10 overflow-auto flex">
                    {this.state.displayCard ? <UserData user={this.props.user} hideCard={this.hideCard}/> : null}
                </div>
                <button id={this.props.user.id.value} onClick={this.handleCards} className="flex w-full md:w-1/3 p-2 m-4 md:w-56 rounded-full hover:bg-gray-200 items-center">
                    <img src={this.props.user.picture.thumbnail} alt="user" className="rounded-full mr-4"></img>
                    <p className="font-bold">{this.props.user.name.first} {this.props.user.name.last}</p>
                </button>
            </React.Fragment>
        );
    }
}

export default UsersList;