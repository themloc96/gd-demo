import React from 'react';
import PropTypes from 'prop-types';
// import IconAddd from '../../../src/asset/avt01.jpeg';

const listUser = [
    { name: "user 1", position: "Tech", date: "12/02", des: "schedule 1", imageURL: "/asset/avt01.png" },
    { name: "user 2", position: "Dev", date: "22/02", des: "schedule 2", imageURL: "/asset/avt02.png" },
    { name: "user 3", position: "Lead", date: "02/02", des: "schedule 3", imageURL: "/asset/avt03.png" },
    { name: "user 4", position: "QA", date: "12/05", des: "schedule 4", imageURL: "/asset/avt04.png" },
]




const UserListComponent = () => {
    return (
        <div>
            {/* <img src={IconAddd} /> */}
            <div className="contents-pages container-setting-user d-flex">
                <div className="set-user-left container-column">
                    {/* <div className="header-title flex-auto">
                        <h2>Users </h2>
                        <div className="w-button">
                            <div className="btn btn-main has-plus svg-plus white">
                                <img src={IconAdd} />
                                <span>Add User</span>
                            </div>
                        </div>
                    </div> */}
                    <div className="wrap-sidebar-select-user box-auto">
                        <div className="scrolls">
                            <ul>
                                {listUser.map(user => (
                                    <li className="selected">
                                        <div className="items-content">
                                            <div className="check-items">
                                                <input className="check-all purple" id="check-user-0" type="checkbox" value="" />
                                                <div className="item-checkbox">
                                                    <label for="check-user-0"></label>
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <img src={require(user.imageURL)} />
                                            </div>
                                            <div className="w-name">
                                                <span> {user.name} </span>
                                                <p> {user.position} </p>
                                            </div>
                                            <div className="wrap-date">
                                                <p>{user.date}</p>
                                                <p>{user.des}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


UserListComponent.propTypes = {

};


export default UserListComponent;
