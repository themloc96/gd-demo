import React from 'react';
// import PropTypes from 'prop-types';
import logo from '../../../../src/asset/logo_company.png'; // with import

// LogoComponents.propTypes = {};

// console.log(logo);
function LogoComponents(props) {
    return (
        <div className="logo">
            <img src={logo} />
        </div>
    );
}

export default LogoComponents;