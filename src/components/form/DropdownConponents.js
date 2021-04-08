import React, { useRef, useState } from 'react'
import LabelComponents from './LabelComponents';
// import PropTypes from 'prop-types'

const DropdownConponents = ({ title, classLabel }) => {

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const items = [
    { label: "Luke Skywalker", value: "Luke Skywalker" },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ];

  const listItems = items.map((item) =>
    <li>{item.value}</li>
  );

  

  return (
    <div className="menu-container dropdown">
      <div onClick={onClick} >
        {
          title && <span className={`txt ${classLabel}`}>
            {title}
          </span>
        }
        <div className="dropbtn btn-default selection" >
          
        </div>
        <div className={`dropdown-menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
              {listItems}
          </ul>
        </div>

        
      </div>
    </div>
  )
}

// DropdownConponents.propTypes = {}

export default DropdownConponents

