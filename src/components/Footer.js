import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer id='footer' className="footer navbar-static-bottom pt5">
            <div className=" pa3 tc ">To view more of my work or to contact me... click below
                <a href="#top" className="back-to-top">
                    <i className="fa fa-angle-up fa-3x" aria-hidden="true"></i>
                </a>
                <div className="social-links mt4">
                    <a href="https://www.linkedin.com/in/laura-hutt-9b074924" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin mh3 fa-3x fa-inverse"></i>
                    </a>
                    <a href="https://github.com/Lauratheexplorer" target="_blank" rel="noreferrer">
                        <i className="fa fa-github mh3 fa-3x fa-inverse"></i>
                    </a>
                    <a href="{mailto:laura@laurah.dev}" target="_blank" rel="noreferrer">
                        <i className="far fa-envelope fa-inverse f1 mh3 "></i>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
    