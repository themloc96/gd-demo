import React from 'react';
import FormAddUser from './FormAddUser';
import UserListComponent from './UserListComponent';
// import PropTypes from 'prop-types';


const UserComponent = () => {
    return (
        <div className="gorilladesk settings-v2 container-wrap container-setting" >
            <UserListComponent />
            <FormAddUser />
        </div>
    );
};

// UserComponent.propTypes = {

// };


export default UserComponent;
