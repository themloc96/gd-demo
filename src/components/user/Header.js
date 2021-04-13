import React from 'react';
import PropTypes from 'prop-types';
import IconEdit from '../../asset/icon_edit.svg'
import ButtonDeleteComponents from '../../components/company/header/ButtonDeleteComponents';



const Header = () => {
    return (
        <div className ="header d-flex">
            <div className ="avatar">
                <img src="https://unsplash.it/80/80" />
            </div> 
            <div className ="btn-edit-photo btn-default has-icon">
                <img src={IconEdit} /> Edit Photo
            </div>  
            <div className ="btn-remove svg-delete-grey">
                <img src={ButtonDeleteComponents} />
            </div>
        </div>
    );
};


Header.propTypes = {

};


export default Header;
