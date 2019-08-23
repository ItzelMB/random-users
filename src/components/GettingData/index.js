import React, { Component } from 'react';
import UsersList from '../UsersList';
import UserListFilter from '../UserListFilter';

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
            <React.Fragment>
                <section className="flex flex-wrap">
                    {this.state.data === null ?
                        <div>Loading</div>
                    :
                        <div>
                            <UserListFilter list={this.state.data.results} />
                        </div>
                    }
                </section>
            </React.Fragment>
        );
    }

};

export default GettingData;