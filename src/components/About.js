import React from 'react';
import '../style/About.css';
import laura from '../images/laurahutt.jpeg';
import bike from '../images/bike.jpeg';
import baking from '../images/baking.jpeg';
import cats from '../images/cats.jpeg';
import cocktails from '../images/cocktails.jpeg';
import comedygig from '../images/comedygig.jpeg';
import holiday from '../images/holiday.jpeg';
import poker from '../images/poker.jpeg';
import raclette from '../images/raclette.jpeg';
import charity from '../images/charity.jpeg';


const About = () => {
    return (
        <section id="about" className="ma4 mb6 pt4">
            <div className=" justify-around">
                <div className="flex flex-column justify-center items-center tc grow">
                <h2 className="ttu tracked tc">About me:</h2>
                <li>Self taught, great self-motivator</li>
                <li>BSc Mathematics degree</li>
                <li>Enjoy a challenge</li>
                <li>AVAILABLE NOW</li> 
                <h2 className="ttu tracked tc">Proficient in</h2>
                <li>Building websites with HTML, CSS, Javascript and React</li>
                <li>Using APIs</li>
                <li>Creating Databases and Servers</li>
                <li>Anything else that I put my mind to <p className="far fa-smile-wink"></p> </li>               
                </div>
                <p className="flex justify-center items-center ">
                        <img className="mainPic grow shadow-2 ba" src={laura} alt='laura' />                       
                </p>
            </div>
            
            <div className="flex flex-column">
                <h2 className="flex pb3 justify-center tc">Interests gallery (hover/click mouse on images)
                </h2>
                <div className="pa3 flex row-wrap justify-around">
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={poker} alt='poker' />
                            <div className="overlay">
                                <div className="text">Poker</div>
                            </div>
                    </div>
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={cats} alt='cats' />
                            <div className="overlay">
                                <div className="text">Cats</div>
                            </div>
                    </div>
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={charity} alt='charity' />
                            <div className="overlay">
                                <div className="text black">Charity</div>
                            </div>
                    </div>
                </div>
                <div className="pa3 flex row-wrap justify-around items-center">
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={holiday} alt='holiday' />
                            <div className="overlay">
                                <div className="text">Travelling</div>
                            </div>
                    </div>
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={bike} alt='bike' />
                            <div className="overlay">
                                <div className="text">Cycling</div>
                            </div>
                    </div>
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={baking} alt='baking' />
                            <div className="overlay">
                                <div className="text">Baking</div>
                            </div>
                    </div>
                </div>
                <div className="pa3 flex row-wrap justify-around">
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={comedygig} alt='comedy gig' />
                            <div className="overlay">
                                <div className="text">Comedy Gigs</div>
                            </div>
                    </div>
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={raclette} alt='raclette' />
                            <div className="overlay">
                                <div className="text">Cooking</div>
                            </div>
                    </div>
                    <div className="container circularDisplay grow shadow-2 ba">
                        <img className="" src={cocktails} alt='cocktails' />
                            <div className="overlay">
                                <div className="text">Cocktails</div>
                            </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default About;