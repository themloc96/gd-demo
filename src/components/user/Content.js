import React from 'react';
import PropTypes from 'prop-types';
import InputComponents from '../form/InputComponents';


const Content = () => {
    return (
        <div>
            <div class="content">
                <InputComponents type="text" label="First name"/>
                <InputComponents type="text" label="Last name"/>
                <InputComponents type="text" label="User name"/>
                <InputComponents type="text" label="License"/>
                <InputComponents type="text" label="Email"/>
                <InputComponents type="text" label="New Password"/>
                <InputComponents type="text" label="Confirm Password"/>
                <button type="submit" >Save</button>
            </div>
        </div>
    );
};


Content.propTypes = {

};


export default Content;
