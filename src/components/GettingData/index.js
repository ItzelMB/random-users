import React, { Component } from 'react';
import UsersList from '../UsersList'

class GettingData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
        };
    };

    componentDidMount() {

        fetch('https://randomuser.me/api/?results=30')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                this.setState({
                    data:myJson
                })
                console.log(myJson);
            }.bind(this)
            )
    };

    render(){
        return (
            <section className="container mx-auto flex flex-wrap">
                {this.state.data === null ?
                    <div>Loading</div>
                :
                    this.state.data.results.map( element => <UsersList user={element} /> )
                }
            </section>
        );
    }

};

export default GettingData;