import React, { Component } from 'react';
import '../style/Nav.css';

class Nav extends Component {
    render() {
        return (
            <header className="bg-black-50 sidebar"> 
                    <a className="active" href='#title' title="Home">Home
                        <i className="fas fa-home ml2"></i>
                    </a>
                    <a className="" href='#cardList' title="Websites">Websites
                        <i className="fas fa-quidditch ml2"></i>
                    </a>
                    <a className="" href="#about" title="About">About
                        <i className="fas fa-grin-stars ml2"></i>
                    </a>
                    <a className="" href="#footer" title="Contact">Contact
                        <i className="far fa-address-book ml2"></i>
                    </a>               
            </header>
        )
    }
}

export default Nav;
