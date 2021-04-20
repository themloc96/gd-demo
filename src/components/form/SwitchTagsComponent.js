import React, { useState } from 'react';
import Switch from 'react-input-switch';
// import PropTypes from 'prop-types';


const SwitchTagsComponent = () => {
    const [value, setValue] = useState(0);
    return (
        <Switch
            styles={{
                track: {
                    backgroundColor: 'blue'
                },
                trackChecked: {
                    backgroundColor: 'red'
                },
                button: {
                    backgroundColor: 'yellow'
                },
                buttonChecked: {
                    backgroundColor: 'blue'
                }
            }}
            value={value}
            onChange={setValue}
        />
    );
};


// SwitchTagsComponent.propTypes = {

// };


export default SwitchTagsComponent;
