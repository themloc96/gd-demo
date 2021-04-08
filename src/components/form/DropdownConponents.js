import React, { useRef, useState } from 'react'
import LabelComponents from './LabelComponents';
// import PropTypes from 'prop-types'

const DropdownConponents = ({ title, classLabel, ...props }) => {

  // const [itemmmm, setitemmmm] = useState({ name: "CPN" });

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  const [items,setItems] = React.useState([
    { label: "Luke Skywalker", value: "Luke Skywalker" },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ]);

  const handleChange = (e) => {
    const selected = e.target.value;
      setItems(selected);
  }
  

  return (
    <div className="menu-container dropdown">
      <div onClick={onClick} >
        {
          title && <span className={`txt ${classLabel}`}>
            {title}
          </span>
        }
        <div onclick="dropdownFunc(this)" className="dropbtn btn-default selection" onChange = {handleChange}>
          {item.value}
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

