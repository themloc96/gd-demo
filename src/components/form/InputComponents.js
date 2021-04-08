import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

const InputComponents = ({ label = null, type= "text", ...props }) => {

    return (
        <div>
            <div className="rows">
                {
                    label && <span className="txt">
                        {label}
                    </span>
                }
                <input className="field-input" type={type} {...props} />
            </div>
        </div>
    );
};

// InputComponents.propTypes = {};

export default InputComponents;
