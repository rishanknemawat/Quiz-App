import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Category extends Component {
    state = { 
        name: ""
     }
    render() { 
        return ( 
            <div>
                <Dropdown>
                    <DropdownToggle variant="success" id="dropdown-basic">
                        Categories
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem href="/createtest">English</DropdownItem>
                        <DropdownItem href="#/action-2">Maths</DropdownItem>
                        <DropdownItem href="#/action-3">History</DropdownItem>
                        <DropdownItem href="#/action-3">Geography</DropdownItem>
                        <DropdownItem href="#/action-3">Science</DropdownItem>
                        <DropdownItem href="#/action-3">Logic</DropdownItem>
                        <DropdownItem href="#/action-3">Biology</DropdownItem>
                    </DropdownMenu>
                    </Dropdown>
            </div>
         );
    }
}
 
export default Category;