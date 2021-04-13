import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';


const FormAddUser = () => {
    return (
        <div className="set-user-wrap relative">
            <Header />
            <Content />
        </div>
    );
};


FormAddUser.propTypes = {

};


export default FormAddUser;
