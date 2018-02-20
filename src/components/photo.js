import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import Data from '../Data.js';
import '../App.css'



var Photo = createReactClass({

    render: function() {

        return (

                <li className="photo">
                    <img src={this.props.item.src} />
                    <h3>{this.props.item.title}</h3>
                    <p>{this.props.item.description}</p>
                        <div className = "btn-group">
                            <button className = "btn btn-group" onClick={() => this.props.onItemStatusClicked(this.props.item, 'saved')}>Save</button>
                            <button className = "btn btn-group" onClick={() => this.props.onItemStatusClicked(this.props.item, 'rejected')}>Reject</button>
                            <button className = "btn btn-group" >Rate</button>
                        </div>
                    <div>
                        <h4>{this.props.item.status}</h4>
                        <h4>{this.props.item.rating}</h4>
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
