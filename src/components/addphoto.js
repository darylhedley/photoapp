import React, { Component } from 'react';
import createReactClass from 'create-react-class';
import Rater from 'react-rater';

var AddPhoto = createReactClass({

    getInitialState: function() {
        return {
            name: '',
            rating: 0,
            description: '',
            status: 'saved'
        }
    },

    /* handleChange(event) {
        this.setState({ value: event.target.value });
    },

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }, */
    onNameChanged: function (event){
        this.setState({
            name: event.target.value
        })
    },

    onDescriptionChanged: function (event){
        this.setState({
            description: event.target.value
        })
    },

    onRaterChanged: function (event) {
        var rating = event.rating;
        if (event.type === 'click') {

            this.setState({
                rating: rating
            })
    
        }
    },

    onAddItemClicked: function() {
        console.log('onAddItemClicked', this.state);
        this.props.onItemAddClicked(this.state)
    },


    render: function() {
        //console.log('This is AddPhoto')
        return(
            <div>
                <legend>New Hound:</legend>
                <div>
                    <label htmlFor="name">
                        Name: 
                    </label> 
                    <br/>
                    <input id="name" type="text" value={this.state.name} onChange={this.onNameChanged}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="description">
                        Description:
                    </label>
                    <br/>
                    <textarea id="description" value={this.state.description} onChange={this.onDescriptionChanged} />
                </div>
                <Rater
                    rating={this.state.rating}
                    onRate={this.onRaterChanged}
                />
                <button onClick={this.onAddItemClicked}>
                    Add this Hound!
                </button>
                {/* <label>
                    Rating: <br/>
                    <select name="rating">
                        <option value="5">5</option>
                        <option value="4">4</option>
                        <option value="3">3</option>
                        <option value="2">2</option>
                        <option value="1">1</option>
                        <option value="0">0</option>
                    </select>
                </label>
                <label>
                    Description:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <button onClick={() => this.props.onAddPhotoClicked()}>
                    Add this Hound!
                </button> */}
            </div>
        );
    }

});

export default AddPhoto;
