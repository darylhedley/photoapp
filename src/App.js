import React, { Component } from 'react';
import './App.css'; //links to css file
import createReactClass from 'create-react-class';
import Data from './Data'; //links data file to app
import _ from 'lodash';// allows the app to use lodash commands
import Nav from './components/nav';
import Photo from './components/photo';
import AddPhoto from './components/addphoto';
import 'react-rater/lib/react-rater.css';



//this is the opening tag of the app - all of the app is stored within this

var App = createReactClass({

/*
this function sets the initial state of the app i.e. it opens as if the 'all'
tab has been clicked. data: Data means that when we write data, we are referencing
the Data file we linked in above
*/
    getInitialState: function() {
        return {
            selectedSort: "",
            selectedView: 'all',
            data: Data,
            selectedMode: "DisplayPhotos"
        }
    },
    

    /*
    this function is how the pictures shown are filtered. When we click on any
    of the tabs, the status of the tabs in the navbar change so that either 'all',
    'rejected' or 'saved' are 'selected'. The onNavChange function at the bottom
    then sets the state making this the 'selectedView' (not sure on this bit)
    */
    getNavItemClassName: function(status) {
        //console.log(status, this.state.selectedView);
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

    onItemRatingClicked: function(item, rating) {

        item.rating = rating;

        this.setState({
            data: this.state.data
        });

    },

    onItemDeleteClicked: function(item){
        _.remove(this.state.data, item);
        
        this.setState({
            data: this.state.data
        })
    },

    onItemAddClicked: function(item){
        console.log('app.onItemAddClicked', item)
        this.state.data.push(item)

        this.setState({
            data: this.state.data,
            selectedMode: "DisplayPhotos"
        })
    },

    onSortChanged: function(event) {
        this.setState({
            selectedSort: event.target.value
        })
    },

    onAddPhotoClicked: function() {
        this.onModeChange('AddPhoto');
    },

    onModeChange: function(mode){
        console.log('Mode is', this.state.selectedMode)
        this.setState({
            selectedMode: mode
        });
    },

    renderAddPhoto: function () {
        console.log(this.state.selectedMode);
        // If the selectedMode = AddPhoto render the AddPhoto - but why do the Photos hide? Look in the renderPhotos function
        if (this.state.selectedMode === 'AddPhoto') 
            return (
                <AddPhoto 
                    onItemAddClicked={this.onItemAddClicked}
                    
                />
            );
    },

    /*
    _.map creates a new array from an exisiting array by passing it through some
    additional parameters. In this instance we are using it to filter our images shown.
    It is looking at our images in the data file and showing the content (everything within the <li>
    if the navbar status is set to 'all' OR it matches the status of each image.
    */
    renderPhotos: function() {
        // This little beautiful snippet means if the this.state.selectedMode is 
        // anything other then "DisplayPhotos" then 
        // do not render the Photos - which feels like it's hidden
        if (this.state.selectedMode != "DisplayPhotos") return null;
        //console.log('renderPhotos:items', Data);
        if (this.state.selectedSort != '') {
            var sortedData = _.orderBy(this.state.data, ['rating'], [this.state.selectedSort]);
        } else {
            var sortedData = this.state.data;
        }
        
        return _.map(sortedData, (item) => {

            var selectedView = this.state.selectedView;

                if (selectedView === 'all' || selectedView === item.status) {
                    return (
                        <Photo
                            key={item.title}
                            item={item}
                            onItemStatusClicked={this.onItemStatusClicked}
                            onItemRatingClicked={this.onItemRatingClicked}
                            onItemDeleteClicked={this.onItemDeleteClicked}
                        />
                    );
                }
            });
        },



    render: function() {
        console.log('render', this.state);

        return (
            <div className="app">
                <Nav
                    getNavItemClassName={this.getNavItemClassName}
                    onAllClicked={this.onAllClicked}
                    onSavedClicked={this.onSavedClicked}
                    onRejectedClicked={this.onRejectedClicked}
                />
                <div className="action-bar">
                    <select onChange={this.onSortChanged} value={this.state.selectedSort}>
                        <option value="">
                            None
                        </option>
                        <option value="desc">
                            Highest Rating
                        </option>
                        <option value="asc">
                            Lowest Rating
                        </option>
                    </select>
                </div>
                <button onClick={() => this.onAddPhotoClicked()}>Add a Hound!</button>
                <div className="content">
                    {this.renderPhotos()}
                    {this.renderAddPhoto()}
                </div>
            </div>
        );
    }

})

export default App;

/*
Gaps in understanding this app.
1 - I don't understand how 'selectedView' is working.
2 - 'this' still confuses me. I understood it to be pointing to the closest function
above it in the code but when applying this I am struggeling to work out how this works.
3 - Not sure how the 'render' function works. I know this allows the css to be switched between the
on the navbar but I can't run through this code.
4 - arrow functions
5 - css linking through to components/ css heirachy


TO ADD
- center button text
- center nav text
- hover styling on buttons
- green/red styling depending on status - style using state? - green for Saved/Red for Rejected
- hide/show description when hover over image
- Rating isn't saved

*/
