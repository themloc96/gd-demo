import React from 'react';
import InputComponents from '../../form/InputComponents';
import DropdownConponents from '../../form/DropdownConponents';
// import PropTypes from 'prop-types';

const items = [
  { label: "Item", value: "Item" },
  { label: "Item 1", value: "Item 1" },
  { label: "Item 2", value: "Item 2" }
];

const ContentComponent = () => {
    return (
        <div className="boxs mt-30">
            <InputComponents type="text" label="Company Name" />

            <div className="row">
            <div className="col">
                <InputComponents type="text" label="Business License" />
            </div>
            <div className="col">
                <DropdownConponents title="Industry" items={items}/>
            </div>
            </div>
            
            <div className="line"></div>
            
            <div className="row">
            <div className="col">
                <InputComponents type="text" label="Country" />
            </div>
            <div className="col">
                <DropdownConponents title="Timezone" items={items}/>
            </div>
            </div>
            
            <div className="row">
            <div className="col">
                <DropdownConponents title="Currency" items={items}/>
            </div>
            <div className="col">
                <DropdownConponents title="Date Format" items={items}/>
            </div>
            </div>
            
            <div className="line"></div>
            
            <InputComponents type="mail" label="Email" />
            <span class="notes fs-12">This is the email your customers will receive when you send an invoice.</span>
            
            <InputComponents type="text" label="Address" />
            
            <div className="row">
            <div className="col">
                <InputComponents type="text" label="City" />
            </div>
            <div className="col-st">
                <InputComponents type="text" label="State" />
            </div>
            <div className="col-zip">
                <InputComponents type="text" label="Zip" />
            </div>
            </div>
            
            <InputComponents type="text" label="Website" />
            
            <div className="row">
            <div className="col">
                <DropdownConponents title="Phone" items={items}/>
            </div>
            <div className="col">
                <DropdownConponents title="Fax" items={items}/>
            </div>
            </div>
            
            <div className="line"></div>
            
            <InputComponents type="text" label="Temperature" />
        </div>
    );
};

// ContentComponent.propTypes = {

// };

export default ContentComponent;
