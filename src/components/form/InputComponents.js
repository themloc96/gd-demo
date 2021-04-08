import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import LabelComponents from './LabelComponents';

const InputComponents = (props) => {

    const [input, setInput] = useState('');

    return (
        <div>
            <div className="rows">
                <LabelComponents name="Company name" />
                <input className="field-input" type={props.type} name="" />
            </div>
        </div>
    );
};

// InputComponents.propTypes = {};

export default InputComponents;
