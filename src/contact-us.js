export const createContactUs = () => {

let content = document.querySelector('#content');

  let contactUs = document.createElement("section");
  contactUs.setAttribute("id", "contact-us");

  let h2 = document.createElement("h2");
  h2.textContent = "Contact Us";

  let separator = document.createElement("div");
  separator.className = "separator02";

  let address = document.createElement("div");
  address.className = "address";

  let addresses = [
    { class: "fas fa-map-marker-alt", address: "Sports City, Dubai" },
    { class: "fab fa-instagram", address: "@foodyae" },
    { class: "fab fa-facebook-square", address: "@foodyae" },
    { class: "fas fa-phone", address: "012-345-678" },
  ];

  for (let j = 0; j < 4; j++) {
    let icon = document.createElement("div");
    icon.className = "icon";

    let i = document.createElement("i");
    i.className = addresses[j].class;
    
    let h5 = document.createElement("h5");
    h5.textContent = addresses[j].address;

    icon.appendChild(i);
    icon.appendChild(h5);

    address.appendChild(icon);
  }

  contactUs.appendChild(h2);
  contactUs.appendChild(separator);
  contactUs.appendChild(address);

  content.appendChild(contactUs);
  console.log('Contact us loaded');
};
