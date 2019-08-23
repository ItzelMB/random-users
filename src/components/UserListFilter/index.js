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
            <section className="show-users p-12">
                <h1 className="font-bold text-lg mb-4">Users</h1>
                <p className="mb-8">If you want to get contact information to specific user, just select a group and then select him from the list below.</p>
                <div className="flex">
                    <p className="font-bold text-sm mr-8">Select group of users</p>
                    <select onChange={this.filterByGender.bind(this)} className="border w-40 text-gray-600 text-sm mb-12">
                        <option value="all" selected>See all</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="users-list flex flex-wrap">{this.state.filteredUserList.map( element => <UsersList user={element} /> )}</div>
            </section>
        )
    };
};

export default UserListFilter;