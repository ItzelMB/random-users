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
                <div>
                    {this.state.displayCard ? <UserData user={this.props.user} hideCard={this.hideCard}/> : null}
                </div>
                <div id={this.props.user.id.value} onClick={this.handleCards} className="flex w-full md:w-1/4 p-2 m-4 md:w-56">
                    <img src={this.props.user.picture.thumbnail} alt="user" className="rounded-full mr-4"></img>
                    <p>{this.props.user.name.first} {this.props.user.name.last}</p>
                </div>
            </React.Fragment>
        );
    }
}

export default UsersList;