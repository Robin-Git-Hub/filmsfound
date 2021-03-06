import React, { Component } from 'react'
import './Navbar.css';

export default class Navbar extends Component {
    render() {
        return (
            <Navbar
            alignLinks="left"
            brand={<a className="brand-logo" href="#">Logo</a>}
            centerLogo
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
          >
            <NavItem onClick={function noRefCheck(){}}>
              Getting started
            </NavItem>
            <NavItem href="components.html">
              Components
            </NavItem>
          </Navbar>
        )
    }
}
