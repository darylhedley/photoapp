import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import Data from '../Data.js';
import '../App.css'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'



var Photo = createReactClass({

    render: function() {

        return (

                <li className="photo">
                    <img src={this.props.item.src} />
                    <h3>{this.props.item.title}</h3>
                        <div className = "rater">
                            <h5>Rate this hound!</h5>
                        </div>
                        <Rater/>
                    <p>{this.props.item.description}</p>
                        <div className = "btn-group">
                            <button className = "btn btn-group" onClick={() => this.props.onItemStatusClicked(this.props.item, 'saved')}>Save</button>
                            <button className = "btn btn-group" onClick={() => this.props.onItemStatusClicked(this.props.item, 'rejected')}>Reject</button>
                        </div>
                    <div>
                        <h4>{this.props.item.status}</h4>
                    </div>
                </li>

        );
    }
});

export default Photo;


/*<li>
    <img src={item.src} />
    <h3>{item.title}</h3>
    <div>{item.description}</div>
    <button type="button" className="btn" onClick={() => this.onItemStatusClicked(item, 'saved')}>Save</button>
    <button type="button" className="btn" onClick={() => this.onItemStatusClicked(item, 'rejected')}>Reject</button>
    <h4>{item.status}</h4>
</li>*/
