import React, { Component } from 'react';

class UserListFilter extends Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <section>
                <h1>Users</h1>
                <p>If you want to get contact information to specific user, just select a group and then select him from the list below.</p>
                <select>
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </section>
        )
    };
};

export default UserListFilter;