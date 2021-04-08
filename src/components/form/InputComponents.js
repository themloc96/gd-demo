import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';

const InputComponents = ({ props, label, ...type }) => {

    return (
        <div>
            <div className="rows">
                {
                    label && <span className="txt">
                        {label}
                    </span>
                }
                <input className="field-input" {...type} />
            </div>
        </div>
    );
};

// InputComponents.propTypes = {};

export default InputComponents;
