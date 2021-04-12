import React from 'react';
import LogoComponents from '../../../components/company/header/LogoComponents';
import UploadImageComponents from '../../../components/company/header/UploadImageComponents';
import ButtonDeleteComponents from '../../../components/company/header/ButtonDeleteComponents';
// import PropTypes from 'prop-types';
// Proptypes mo ta kieu du lieu prop 

const HeaderComponent = () => {
    return (
        <div className="boxs">
            <LogoComponents />
            <div className="d-flex align-center mt-4">
                <UploadImageComponents />
                <ButtonDeleteComponents />
            </div>
        </div>
    );
};

// HeaderComponent.propTypes = {

// };

export default HeaderComponent;
