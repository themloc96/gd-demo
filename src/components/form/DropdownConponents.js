import React, { useRef, useState } from 'react'
import LabelComponents from './LabelComponents';
// import PropTypes from 'prop-types'

function DropdownConponents(props) {

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const [items] = React.useState([
    { label: "Luke Skywalker", value: "Luke Skywalker" },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ]);

  return (
    <div className="menu-container dropdown">
      <div onClick={onClick} >
        <LabelComponents name="zip" />
        <div onclick="dropdownFunc(this)" class="dropbtn btn-default selection">
          Dropdown
        </div>
        <div className={`dropdown-menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            {items.map(item => (
              <li class="items">
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

// DropdownConponents.propTypes = {}

export default DropdownConponents

