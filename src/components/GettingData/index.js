import React, { Component } from 'react';
import UserListFilter from '../UserListFilter';

class GettingData extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null,
        };
    };

    componentDidMount() {

        fetch('https://randomuser.me/api/?results=32')
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
                <div className="container flex flex-wrap">
                    {this.state.data === null ?
                        <div className="bg-blue-500 text-center text-white py-4 lg:px-4 w-1/2 mx-auto mt-10">
                            <span>Loading</span>
                        </div>
                    :
                        <React.Fragment>
                            <UserListFilter list={this.state.data.results} />
                        </React.Fragment>
                    }
                </div>
            </React.Fragment>
        );
    }

};

export default GettingData;