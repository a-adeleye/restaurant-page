export const createContactUs = () => {
  let content = document.querySelector("#content");

  let contactUs = document.createElement("section");
  contactUs.setAttribute("id", "contact-us");

  let heading = document.createElement("div");
  heading.className = "heading";

  let contactUsTitle = document.createElement("h2");
  contactUsTitle.className = "contact-us";
  contactUsTitle.textContent = "Contact Us";

  let aboutUsTitle = document.createElement("h2");
  aboutUsTitle.className = "about-us";
  aboutUsTitle.textContent = "About Us";

  heading.appendChild(contactUsTitle);
  heading.appendChild(aboutUsTitle);

  let who = document.createElement("h3");
  who.className = 'who';
  who.textContent = 'Who We Are';

  let aboutUsText = document.createElement("p");
  aboutUsText.className = "aboutUsText";
  aboutUsText.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada pellentesque elit eget gravida cum sociis natoque.<br> Sed viverra tellus in hac habitasse platea dictumst. Vehicula ipsum a arcu cursus vitae. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Ultrices neque ornare aenean euismod.";

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

  contactUs.appendChild(heading);
  contactUs.appendChild(separator);
  contactUs.appendChild(address);
  contactUs.appendChild(who);
  contactUs.appendChild(aboutUsText);

  content.appendChild(contactUs);

  console.log("Contact us loaded");
};
