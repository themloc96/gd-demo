import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


const InputComponents = () => {

    const [input, setInput] = useState({name: 'Company Name', type: 'password'});
    // const [iputType, setIputType] = useState({type: 'password'});
    useEffect(() => {
        setInput({name:'Business License',type: 'text'});

        return setInput(input);
    });
    return (
        <div>
            <div className="rows">
                <span className="txt">
                    {input.name}
                </span>
                <input className="field-input" type={input.type} name="" placeholder={input.name} />
            </div>

            <div className="rows d-flex justify-space-between">
                <div className="col">
                    <span className="txt">
                        {input.name}
                    </span>
                    <input className="field-input" type={input.type} name="" placeholder={input.name} />
                </div>

                <div className="col">
                    <span className="txt">
                        {input.name}
                    </span>
                    <input className="field-input" type={input.type} name="" placeholder={input.name} />
                </div>
            </div>
        </div>
        
    );
};


InputComponents.propTypes = {

};


export default InputComponents;
