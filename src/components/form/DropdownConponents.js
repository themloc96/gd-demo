import React, { useRef, useState } from 'react'
import LabelComponents from './LabelComponents';
// import PropTypes from 'prop-types'

function DropdownConponents({ title }) {

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
        {
          title && <span className="txt">
            {title}
          </span>
        }
        <div onclick="dropdownFunc(this)" className="dropbtn btn-default selection">
          Dropdown
        </div>
        <div className={`dropdown-menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            {items.map(item => (
              <li className="items">
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

