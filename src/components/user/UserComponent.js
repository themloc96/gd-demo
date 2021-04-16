import React from 'react';
import FormAddUser from './FormAddUser';
import UserListComponent from './UserListComponent';
// import PropTypes from 'prop-types';


const UserComponent = () => {
    return (
        <div className="gorilladesk settings-v2 container-wrap container-setting" >
            <div className="contents-pages container-setting-user d-flex">
                <UserListComponent />
                <FormAddUser />
            </div>
        </div>
    );
};

// UserComponent.propTypes = {

// };


export default UserComponent;
