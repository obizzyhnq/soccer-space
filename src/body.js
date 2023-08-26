import React from "react";
import messi from './images/messi.png'
import caicedo from './images/caicedo.jpg'
import kit from './images/kit.webp'
import arrow1 from './images/arrow1.svg'
import arrow2 from './images/arrow2.svg'
import arrow3 from './images/arrow3.svg'


export default function body(){

    return(
        <>  
        <h1>Top Stories</h1>
    <main>   
        <div className="left-col">
             <img className="messi" src={messi} alt="messipic" />
              <div className="messi1">
                <a href="#" className="button">Analysis</a>
                <p className="analysis-text">Lionel Messi set to break another record at inter Miami</p>
                <a href="#">
                <img className="arr1" src={arrow1} alt="arrow1" />
                </a>
             </div>
        </div>
        <div className="right-col">
            <img className="caicedo" src={caicedo} alt="caicedopic" />
              <div className="caicedo1">
                <a href="#" className="button">Transfer</a>
                <p className="transfer-text">Brighton rejects chelsea's $90m bid of caicedo</p>
                <a href="#">
                <img className="arr2" src={arrow2} alt="arrow2" />
                </a>
                </div>
            <img className="kit" src={kit} alt="kitpic" />
               <div className="kit1">
                <a href="#" className="button">Club</a>
                <p className="club-text">Barcelona unviels new 2023 away kit</p>
                <a href="#">
                <img className="arr3" src={arrow3} alt="arrow3" />
                </a>
            </div>
        </div>
    </main>    
       
        
        </>
        
    )

}