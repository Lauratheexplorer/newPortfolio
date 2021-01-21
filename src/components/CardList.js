import React, { useState } from 'react';
import Card from './Card';
import '../style/CardList.css';
import { websites } from './Websites';

function CardList () {
    const [index, setIndex] = useState(0);
    
        const slideRight = () => {
            setIndex((index + 1) % websites.length);
        };
        const slideLeft = () => {
            const nextIndex = index - 1;
            if (nextIndex < 0) {
                setIndex(websites.length - 1);
            } else {
                setIndex(nextIndex);
            }
        }

        return (
            websites.length > 0 && (
                <div id='cardList' className="divide pt4 pb3">
                    <h2 className="tc pa3 bold ttu tracked">Here's some I made earlier:</h2>
                     <h4 className="tc">Click the triangles below for more information</h4>
                    <section className="flex items-center justify-center">
                        <button onClick={slideLeft} className="grow fas fa-hand-point-left bg-black fa-inverse fa-3x"></button>
                        <Card className="flex items-center"
                                objectFit="cover"
                                key={index}
                                id={websites[index].id} 
                                src={websites[index].src} 
                                name={websites[index].name} 
                                description={websites[index].description}  
                                seeLive={websites[index].seeLive} 
                                sourceCode={websites[index].sourceCode} 
                        />
                        <button onClick={slideRight} className=" grow fas fa-hand-point-right bg-black fa-inverse fa-3x"></button>
                        {/* Line Break */}
                       
                    </section>
                </div>
                
            )
            
        )
    }

export default CardList;