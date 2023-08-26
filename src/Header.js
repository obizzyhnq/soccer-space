import React from "react";
import logo from './images/logo.svg'

export default function Header() {
  return (
    <>
      <div className="dropdown">
        <div className="select">
          <span className="selector">Clubs</span>
          <div className="caret"></div>
        </div>
        <ul className="menu1">
         <li>Barcelona</li>
         <li>R Madrid</li>
         <li>Man City</li>
         <li>Napoli</li>
         <li>P.S.G</li>
        </ul> 
      </div> 
           <div className="navbar">
                <button type="onclick" className="subnavbar">Latest News</button>
                <button type="onclick" className="subnavbar">Transfers</button>
                <button type="onclick" className="subnavbar">Uefa</button>
          </div>
             <div className="searchbutton">
                
             </div>
                 <div className="search">
                   
                     <form action="">
                        <label for="name">
                          <button
                            className="search-button">search</button>
                        </label>
                          <input className="input" type="text" id="name" placeholder="players.. clubs..." name="name">
                          </input>
                     </form>
                  
                 </div>
                       <a href="#">
                          <img className="logo" src={logo} alt="logo"/>
                       </a>

    </>  
  )
}
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdowns => {
  const select = dropdowns.querySelector('.select');
  const caret = dropdowns.querySelector('.caret');
  const menu1 = dropdowns.querySelector('.menu1');
  const options = dropdowns.querySelector('.menu1 li');
  const selector= dropdowns.querySelector('.selector');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu1.classList.toggle('menu1-open');
  })
    options.forEach(option => {
      option.addEventListener('click', () => {
        selector.innerText = option.innerText;
        select.classList.remove('caret-rotate');
        caret.classList.remove('caret-rotate');
        menu1.classList.remove('menu1-open');
        options.forEach(option => {
          option.classList.remove('active');
        })
        option.classList.add('active');
      
    })

  })
})

