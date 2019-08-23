import React, { Component } from 'react';
import UsersList from '../UsersList';

class UserListFilter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            originalUserList: this.props.list,
            filteredUserList: this.props.list
        }
    };


    filterByGender = (event) => {
        let gender = event.target.value;
        let aux;
        if(gender==="all") {
            this.setState({filteredUserList:this.state.originalUserList});
        } else {
            aux = this.state.originalUserList.filter(element => element.gender === gender);
            this.setState({filteredUserList:aux})
        }
    };

    render() {
        return (
            <section>
                <h1>Users</h1>
                <p>If you want to get contact information to specific user, just select a group and then select him from the list below.</p>
                <select onChange={this.filterByGender.bind(this)}>
                    <option value="all">See all</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <div>{this.state.filteredUserList.map( element => <UsersList user={element} /> )}</div>
            </section>
        )
    };
};

export default UserListFilter;