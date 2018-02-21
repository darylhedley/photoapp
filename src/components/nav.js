import React, { Component } from 'react';
import createReactClass from 'create-react-class';

var Nav = createReactClass({

    render: function() {

        return (
            <nav className="nav">
                <ul>
                    <li className={this.props.getNavItemClassName('all')} onClick={this.props.onAllClicked}>All</li>
                    <li className={this.props.getNavItemClassName('saved')} onClick={this.props.onSavedClicked}>Saved</li>
                    <li className={this.props.getNavItemClassName('rejected')} onClick={this.props.onRejectedClicked}>Rejected</li>
                </ul>
            </nav>
        );

    }

});

export default Nav;
