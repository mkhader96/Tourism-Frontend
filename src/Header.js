import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand>The Header</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/Explore" className="nav-link">Explore</Link></NavItem>
        <NavItem><Link to="/Events" className="nav-link">Events</Link></NavItem>
        <NavItem><Link to="/HiddenGems" className="nav-link">Hidden Gems</Link></NavItem>
        <NavItem><Link to="/About" className="nav-link">About Us</Link></NavItem>
        <NavItem><Link to="/Anime" className="nav-link">Anime</Link></NavItem>






      </Navbar>
    )
  }
}

export default Header;
