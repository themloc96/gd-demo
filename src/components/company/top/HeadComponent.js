import React from 'react';
import PropTypes from 'prop-types';


const HeadComponent = () => {
    return (
        <div className="Head">
            <div class="title-header flex-auto">
    		<span class="fs-18">Profile</span>
    		<div class="w-button">
    			<div class="cancel px-2">Cancel</div>
    			<div class="btn btn-main">
			        Save
			    </div>
    		</div>
		</div>
        </div>
    );
};


HeadComponent.propTypes = {

};


export default HeadComponent;
