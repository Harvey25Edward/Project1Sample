import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

 export const Pnavbar = (props:any) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">Monsters.inc</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/login/">login</NavLink>
            </NavItem>
            <NavItem>
              <Link to='/users/id/'>userbyId</Link> 
            </NavItem>
            <NavItem>
              <Link to='/users/update/form'>update</Link> 
            </NavItem>
            <NavItem>
            
               <Link to='/users/allusers/display'>users</Link> 
            </NavItem>
            <NavItem>
               <Link to='/reimbursements/status/'>Reimbursements</Link> 
            </NavItem>

            <NavItem>
               <Link to='/reimbursements/update/form/'>Reimbursements Update</Link> 
            </NavItem>

            <NavItem>
               <Link to='/reimbursements/user/display/'>Reimbursements By User ID </Link> 
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Pnavbar;