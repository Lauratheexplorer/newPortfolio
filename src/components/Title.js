import React, { Component } from 'react';
import Tilt from 'react-tilt';
import '../style/Title.css';

class Title extends Component {
    render() {
        return (
            <div id='title' className="pt5 tc flex justify-center">
                <section className="f2-ns f3-m mt2"> Presenting 
                    <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 190, width: 250 }} >
                        <p className="Tilt-inner f-5 ttu tracked ba b--dotted shadow-2 bw3 br-pill borderFit mt4 pa4 ml4 "> Laura Hutt </p>
                    </Tilt>
                    <div className="f4-ns">
                    <p>The dev you've been looking for...</p>
                    <p>Creating fully responsive websites since 2021</p>
                    <p>This website was created using React and incorporating tachyons</p>
                    </div>
                    
                        {/* Links to Github, LinkedIn and Email */}
                        <p className="social-links flex flex-row justify-center mb5">
                            <a href="https://www.linkedin.com/in/laura-hutt-9b074924" target="_blank" rel="noreferrer">
                                <i className="fa fa-linkedin fa-inverse f1 ma3"></i>
                            </a>
                            <a href="https://github.com/Lauratheexplorer" target="_blank" rel="noreferrer">
                                <i className="fab fa-github fa-inverse f1 ma3"></i>
                            </a>
                            
                            <a href="{mailto:laura@laurah.dev}" target="_blank" rel="noreferrer">
                                <i className="far fa-envelope fa-inverse f1 ma3 "></i>
                            </a>
                        </p>
                       
                </section>
            </div>
        )
    }
}

export default Title;