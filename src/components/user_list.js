import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserList extends Component {
  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">Chocalate Mansion</p>
        <a href="" className="btn btn-primary"></a>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}