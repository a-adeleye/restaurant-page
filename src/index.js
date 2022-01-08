import './style.css';
import './separator.css';

import {createHeader} from './header';
import {createHero} from './hero';
import {createMenu} from './menu';
import {createContactUs} from './contact-us';
import {createFooter} from './footer';

createHeader();
createHero();
createMenu();
createContactUs();
createFooter();

function toggleAbout() {
    let address = document.querySelector(".address");
    let aboutUs = document.querySelector(".aboutUsText");
    let who = document.querySelector(".who");
  
    address.style.display = "none";
    aboutUs.style.display = "block";
    who.style.display = "block";
  }
  
  function toggleContact() {
    let address = document.querySelector(".address");
    let aboutUs = document.querySelector(".aboutUsText");
    let who = document.querySelector(".who");
  
    address.style.display = "flex";
    aboutUs.style.display = "none";
    who.style.display = "none";
    
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.about-us').addEventListener('click',toggleAbout);
    document.querySelector('.contact-us').addEventListener('click',toggleContact);
  })