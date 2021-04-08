import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import LabelComponents from './LabelComponents';

const InputComponents = ({label}) => {

    const [input, setInput] = useState('');

    return (
        <div>
            <div className="rows">
              {label &&<span className="txt">
                {props.name}
            </span> }  
                <input className="field-input" {...props} />
            </div>
        </div>
    );
};

// InputComponents.propTypes = {};

export default InputComponents;
