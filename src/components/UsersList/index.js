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
                <button id={this.props.user.id.value} onClick={this.handleCards} className="flex w-full md:w-1/2 lg:w-1/4 p-2 m-4 mx-auto md:w-56 rounded-full hover:bg-gray-200 items-center">
                    <img src={this.props.user.picture.thumbnail} alt="user" className="rounded-full mr-4"></img>
                    <p className="font-bold">{this.props.user.name.first} {this.props.user.name.last}</p>
                </button>
                <div className="absolute z-1 overflow-auto flex object-cover bg-gray-900">
                    <div className="object-center">
                        {this.state.displayCard ? <UserData user={this.props.user} hideCard={this.hideCard}/> : null}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default UsersList;