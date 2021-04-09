import React, { useRef, useState } from 'react'
import LabelComponents from './LabelComponents';
// import PropTypes from 'prop-types'


const items = [
    { label: "Luke Skywalker", value: "Luke Skywalker" },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
];

const DropdownConponents = ({ title, classLabel }) => {

  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);



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
              <MembersList data={items} total={items?.length} />
          </ul>
        </div>

        
      </div>
    </div>
  )
}

const MembersList = ({data = [], total = 0}) => { 
  return total ? {data.map(item,index) =>  <li key={index}>{item.value}</li> } : null
}

// DropdownConponents.propTypes = {}

export default DropdownConponents

