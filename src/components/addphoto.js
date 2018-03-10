import React, { Component } from 'react';
import createReactClass from 'create-react-class';

var AddPhoto = createReactClass({

    render: function() {
        console.log('This is AddPhoto')
        return(
            <form>
                <fieldset>
                    <legend>New Hound:</legend>
                        <label>
                            Name: <br/>
                            <input type="text" name="name" />
                        </label> <br/>
                        <label>
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
                            <textarea name="description" rows="5" cols="30">Describe your hound here.</textarea>
                        </label>
                        <input type="submit" value="Submit" />
                </fieldset>
            </form>
        );
    }

});

export default AddPhoto;
