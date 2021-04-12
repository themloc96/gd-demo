import React from 'react';
// import PropTypes from 'prop-types';
import IconAddd from '../../asset/icon_add.svg';
import IconDelete from '../../asset/icon_delete.svg';

const listUser = [
    { name: "user 1", position: "Tech", date: "12/02", des: "schedule 1", imageURL: require("../../../src/asset/avt01.png").default },
    { name: "user 2", position: "Dev", date: "22/02", des: "schedule 2", imageURL: require("../../../src/asset/avt01.png").default },
    { name: "user 3", position: "Lead", date: "02/02", des: "schedule 3", imageURL: require("../../../src/asset/avt01.png").default },
    { name: "user 4", position: "QA", date: "12/05", des: "schedule 4", imageURL: require("../../../src/asset/avt01.png").default },
]




const UserListComponent = () => {
    return (
        <div className="settings-v2 container-wrap container-setting">
            <div className="contents-pages container-setting-user d-flex">
                <div className="set-user-left container-column">
                    <div className="title-header flex-auto">
                        <h2>Users </h2>
                        <div className="w-button">
                            <div className="btn btn-main has-plus svg-plus white">
                                <img src={IconAddd} alt="" />
                                <span>Add User</span>
                            </div>
                        </div>
                    </div>
                    <div className="wrap-sidebar-select-user box-auto">
                        <div className="scrolls">
                            <ul>
                                <li class="container-delete-all">
                                    <div class="w-delete-all d-flex align-center">
                                        <div class="check-items">
                                            <input id="check-user-all" type="checkbox" value="" />
                                            <div class="item-checkbox">
                                                <label for="check-user-all"> 
                                                    <span class="txt-ellipsis">0 items: </span>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="item-delete border-custom ml-2">
                                            <div class="svg-delete-grey">
                                                <img src={IconDelete} />
                                            </div>
                                            <span class="ml-1">Delete</span>
                                        </div>
                                    </div>
                                </li>
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
                                                <img src={user.imageURL} alt="" />
                                            </div>
                                            <div className="w-name">
                                                <span> {user.name} </span>
                                                <p> {user.position} </p>
                                            </div>
                                        </div>
                                        <div className="wrap-date">
                                            <p>{user.date}</p>
                                            <p>{user.des}</p>
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


// UserListComponent.propTypes = {

// };


export default UserListComponent;
