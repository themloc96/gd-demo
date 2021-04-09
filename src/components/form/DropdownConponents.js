import React, { useState } from 'react'
import iconDropdown from '../../../src/asset/icon_dropdown.svg';
// import LabelComponents from './LabelComponents';
// import PropTypes from 'prop-types'




const DropdownConponents = ({ title, items=[], classLabel, }) => {

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  const [titleselect, setTitleselect ] = useState('Dropdown')
  const handleChange = (e) => {
    // console.log(e);
    const selected = e.target.innerHTML
    return setTitleselect(selected)
  }


  return (
    <div className="menu-container dropdown">
      <div onClick={onClick} >
        {
          title && <span className={`txt ${classLabel}`}>
            {title}
          </span>
        }
        <div className="dropbtn btn-default selection">
          {titleselect}
          <span className="svg-selectbox">
              <img src={iconDropdown} />
          </span>
        </div>
        <div className={`dropdown-menu ${isActive ? 'active' : 'inactive'}`} >
          <ul>
            {items.map(item => (
              <li key={item.key} onClick={handleChange}>
                {item.value}
              </li>
            ))}
              {/* <MembersList data={items} total={items?.length} /> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

// const MembersList = ({data = [], total = 0}) => { 
//   if(total) { 
// return data.map((item,index) => <li key={index}>{item.value}</li>)
//   }else { 
//     return null;
//   }
// }

// DropdownConponents.propTypes = {}

export default DropdownConponents

