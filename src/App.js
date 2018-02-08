import React, { Component } from 'react';
import './App.css';
import createReactClass from 'create-react-class';
import Data from './Data';
import _ from 'lodash';

var App = createReactClass({

  getInitialState: function() {
    return {
      selectedView: 'all',
      data: Data,
    }
  },

  getNavItemClassName: function(status) {
    console.log(status, this.state.selectedView);
    if (status === this.state.selectedView) return 'selected';
    return '';
  },

  onAllClicked: function() {
    this.onNavChange('all');
  },

  onSavedClicked: function() {
    this.onNavChange('saved');
  },

  onRejectedClicked: function() {
    this.onNavChange('rejected');
  },

  onNavChange: function(view){
    this.setState({
      selectedView: view
    });
  },

  onItemStatusClicked: function(item, status) {

    item.status = status;

    this.setState({
      data: this.state.data
    });

  },

  renderPhotos: function() {
    //console.log('renderPhotos:items', Data);
    return _.map(this.state.data, (item) => {

      var selectedView = this.state.selectedView;

      if (selectedView === 'all' || selectedView === item.status) {
        return (
          <li>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <button onClick={() => this.onItemStatusClicked(item, 'saved')}>Yes</button>
            <button onClick={() => this.onItemStatusClicked(item, 'rejected')}>No</button>
            <div>{item.status}</div>
          </li>
        )
      }
    });

  },

  render : function() {
    console.log('render')
    return (
      <div className="app">
        <nav className="nav">
          <ul>
            <li className={this.getNavItemClassName('all')} onClick={this.onAllClicked}>All</li>
            <li className={this.getNavItemClassName('saved')} onClick={this.onSavedClicked}>Saved</li>
            <li className={this.getNavItemClassName('rejected')} onClick={this.onRejectedClicked}>Rejected</li>
          </ul>
        </nav>
        <div className="content">
          {this.renderPhotos()}
        </div>

      </div>
    );
  }
})

export default App;
