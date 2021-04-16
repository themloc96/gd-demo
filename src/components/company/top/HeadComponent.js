import React from 'react';
import PropTypes from 'prop-types';


const HeadComponent = () => {
	return (
		<div className="Head">
			<div className="title-header flex-auto">
				<h2>Profile</h2>
				<div className="w-button">
					<div className="cancel px-2">Cancel</div>
					<div className="btn btn-main">
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
