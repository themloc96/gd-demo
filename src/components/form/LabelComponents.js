import React from 'react';
// import PropTypes from 'prop-types';

const LabelComponents = (props) => {
    return (
        <div>
            <span className="txt">
                {props.name}
            </span>
        </div>
    );
};

// LabelComponents.propTypes = {};

export default LabelComponents;
