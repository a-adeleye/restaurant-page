export const createMenu = () => {
  let content = document.querySelector("#content");

  // Create menu section

  let menuSection = document.createElement("section");
  menuSection.setAttribute("id", "menu");

  // Create menu items

  let menu = [
    {
      name: "Vegan mola",
      side: "With vegetable",
      price: "AED 35.00",
      src: "../vegan-1.png",
    },
    {
      name: "Potatew",
      side: "With turkey",
      price: "AED 40.00",
      src: "../fries-2.png",
    },
    {
      name: "Leafy salad",
      side: "With Turkey",
      price: "AED 33.00",
      src: "../turkey-salad.png",
    },
    {
      name: "Spagheroo",
      side: "With chomachu",
      price: "AED 30.00",
      src: "../spaghetti.png",
    },
    {
      name: "Yamachu",
      side: "With leafaju",
      price: "AED 50.00",
      src: "../carrot.png",
    },
  ];

  let length = menu.length;
  for (let i = 0; i < length; i++) {
    // Create menu item
    let menuItem = document.createElement("div");
    menuItem.className = "menuItem";

    //Create menu image
    let menuImage = document.createElement("div");
    menuImage.className = "menuImage";

    // Create menu content
    let details = document.createElement("div");
    details.className = "details";

    let image = document.createElement("img");

    let menuName = document.createElement("div");
    menuName.className = "menuName";

    let side = document.createElement("div");
    side.className = "side";

    let price = document.createElement("div");
    price.className = "price";

    image.src = menu[i].src;
    menuName.innerText = menu[i].name;
    side.innerText = menu[i].side;
    price.innerText = menu[i].price;

    menuImage.appendChild(image);

    details.appendChild(menuName);
    details.appendChild(side);
    details.appendChild(price);

    menuItem.appendChild(menuImage);
    menuItem.appendChild(details);

    menuSection.appendChild(menuItem);
  }

  // Append children

  content.appendChild(menuSection);
  console.log('Menu loaded');
};
