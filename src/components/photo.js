import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import Data from '../Data.js';


var Photo = createReactClass({

    render: function() {

        return (
            <photo className="photo">
                <li>
                    <img src={this.props.item.src} />
                    <h3>{this.props.item.title}</h3>
                    <div>{this.props.item.description}</div>
                    <button onClick={() => this.props.onItemStatusClicked(this.props.item, 'saved')}>Save</button>
                    <button onClick={() => this.props.onItemStatusClicked(this.props.item, 'rejected')}>Reject</button>
                    <h4>{this.props.item.status}</h4>
                </li>
            </photo>
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
