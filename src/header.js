export const createHeader = () => {

    let content = document.querySelector('#content');

    let nav = document.createElement("nav");
    let logo = document.createElement("div");
    logo.className = "logo";
    logo.innerHTML = '<h1>f<span class="red">oo</span>dy</h1>';
  
    let navigation = document.createElement("div");
    navigation.className = "navigation";
  
    let home = document.createElement("a");
    let menu = document.createElement("a");
    let contact = document.createElement("a");
  
    home.href = "#";
    home.innerText = "Home";
  
    menu.href = "#menu";
    menu.innerText = "menu";
  
    contact.href = "#contact-us";
    contact.innerText = "Contact";
  
    navigation.appendChild(home);
    navigation.appendChild(menu);
    navigation.appendChild(contact);
  
    let signUp = document.createElement("div");
    signUp.className = "signUp";
  
    let cart = document.createElement("img");
    cart.src = "../src/bag.png";
  
    let btn = document.createElement("button");
    btn.textContent = "Sign Up";
  
    signUp.appendChild(cart);
    signUp.appendChild(btn);
  
    nav.appendChild(logo);
    nav.appendChild(navigation);
    nav.appendChild(signUp);

content.appendChild(nav);


    console.log('Header loaded')
  };
