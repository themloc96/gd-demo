import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import HeadComponent from '../company/top/HeadComponent';


const FormAddUser = () => {
    return (
        <div className="set-user-wrap relative w-user-infomations">
            <HeadComponent />
            <Header />
            <Content />
        </div>
    );
};


FormAddUser.propTypes = {

};


export default FormAddUser;
