import React from 'react';
import HeadComponents from '../../components/company/top/HeadComponent'
import ContentComponent from './content/ContentComponent';
import HeaderComponent from './header/HeaderComponent';
// import PropTypes from 'prop-types';

const CompanyComponent = () => {
    return (
        <div className="company">
            <HeadComponents />
            <HeaderComponent />
            <ContentComponent />
        </div>
    );
};

// CompanyComponent.propTypes = {

// };

export default CompanyComponent;
