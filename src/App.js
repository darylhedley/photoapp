import React, { Component } from 'react';
import './App.css'; //links to css file
import createReactClass from 'create-react-class';
import Data from './Data'; //links data file to app
import _ from 'lodash';// allows the app to use lodash commands
import whatdoglogo from './images/WhatDog logo.png';



//this is the opening tag of the app - all of the app is stored within this

var App = createReactClass({

/*
this function sets the initial state of the app i.e. it opens as if the 'all'
tab has been clicked. data: Data means that when we write data, we are referencing
the Data file we linked in above
*/
  getInitialState: function() {
    return {
      selectedView: 'all',
      data: Data,
    }
  },

  /*
  this function is how the pictures shown are filtered. When we click on any
  of the tabs, the status of the tabs in the navbar change so that either 'all',
  'rejected' or 'saved' are 'selected'. The onNavChange function at the bottom
  then sets the state making this the 'selectedView' (not sure on this bit)
  */
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

/* this is how we interpolate over the top of the data file and change the staus
to either 'saved' or 'rejected'.*/
  onItemStatusClicked: function(item, status) {

    item.status = status;

    this.setState({
      data: this.state.data
    });

  },
/*
_.map creates a new array from an exisiting array by passing it through some
additional parameters. In this instance we are using it to filter our images shown.
It is looking at our images in the data file and showing the content (everything within the <li>
if the navbar status is set to 'all' OR it matches the status of each image.
 */
  renderPhotos: function() {
    //console.log('renderPhotos:items', Data);
    return _.map(this.state.data, (item) => {

      var selectedView = this.state.selectedView;

      if (selectedView === 'all' || selectedView === item.status) {
        return (
                <li>
                  <img src={item.src} />
                  <h3>{item.title}</h3>
                  <div>{item.description}</div>
                  <button type="button" className="btn" onClick={() => this.onItemStatusClicked(item, 'saved')}>Save</button>
                  <button type="button" className="btn" onClick={() => this.onItemStatusClicked(item, 'rejected')}>Reject</button>
                  <h4>{item.status}</h4>
                </li>
              )
            }
          });
        },

      var React = require('react');

      var Navigation = React.createClass({

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
      });

module.exports = Navigation;
})

export default App;

/*
Gaps in understanding this app.
1 - I don't understand how 'selectedView' is working.
2 - 'this' still confuses me. I understood it to be pointing to the closest function
above it in the code but when applying this I am struggeling to work out how this works.
3 - Not sure how the 'render' function works. I know this allows the css to be switched between the
on the navbar but I can't run through this code.
4 - colors of code editor text
*/
