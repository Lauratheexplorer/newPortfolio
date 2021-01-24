import React, { Component } from 'react';
import '../style/Nav.css';

class Nav extends Component  {
    state = {
        links: [
            {
                id: 1,
                name: "Home",
                to: '#title',
            },
            {
                id: 2,
                name: "Websites",
                to: '#cardList',
            },
            {
                id: 3,
                name: "About",
                to: '#about',
            },
            {
                id: 4,
                name: "Contact",
                to: '#footer',
            }
        ],
        activeLink: null
    };

    handleClick = id => {
        this.setState({ activeLink: id });
    }
    
    render () {
        const { links, activeLink } = this.state;

        return (
            <div className="bg-black-50 sidebar">
              {links.map(link => {
                return (
                  <div key={links.id}>
                      <a href={link.to}
                        onClick={() => this.handleClick(link.id)}
                        className={
                          link.className +
                          (link.id === activeLink ? " active_item" : "")
                        }
                      > 
                        {link.name} {link.id === activeLink}
                      </a>
                  </div>
                );
              })}
            </div>
          );

        // return (
        //     <header className="bg-black-50 sidebar"> 
        //             <a className="" href='#title' title="Home">Home
        //                 <i className="fas fa-home ml2"></i>
        //             </a>
        //             <a className="" href='#cardList' title="Websites">Websites
        //                 <i className="fas fa-quidditch ml2"></i>
        //             </a>
        //             <a className="" href="#about" title="About">About
        //                 <i className="fas fa-grin-stars ml2"></i>
        //             </a>
        //             <a className="" href="#footer" title="Contact">Contact
        //                 <i className="far fa-address-book ml2"></i>
        //             </a>               
        //     </header>
        // )
    }
}

export default Nav;
