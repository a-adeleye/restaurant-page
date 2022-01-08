export const createHero = () => {
  let content = document.querySelector("#content");

  let heroSection = document.createElement("section");
  heroSection.className = "hero";

  //Create text div

  let textDiv = document.createElement("div");
  textDiv.className = "text";

  let h1 = document.createElement("h1");
  h1.innerHTML = "it's not just<br />FOOD, it's an<br />EXPERIENCE";

  textDiv.appendChild(h1);

  let div = document.createElement("div");

  let mainBtn = document.createElement("button");
  mainBtn.className = "mainBtn";
  mainBtn.innerText = "View menu";

  let secBtn = document.createElement("button");
  secBtn.className = "secBtn";
  secBtn.innerText = "Book a table";

  div.appendChild(mainBtn);
  div.appendChild(secBtn);

  textDiv.appendChild(div);

  let reviewDiv = document.createElement("div");
  reviewDiv.className = "reviews";

  let h5 = document.createElement("h5");
  h5.innerText = "reviews";

  reviewDiv.appendChild(h5);

  // Create profile

  let profilesDiv = document.createElement("div");
  profilesDiv.className = "profiles";

  let profileImages = ["url('./images/user1.png')",
  "url('./images/user2.png')",
  "url('./images/user3.png')",
  "url('./images/user4.png')"];

  for (let i = 0; i < 4; i++) {
    let profile = document.createElement("div");
    profile.className = "profile";
    profile.style.backgroundImage = profileImages[i];
    profilesDiv.appendChild(profile);
  }

  reviewDiv.appendChild(profilesDiv);

  // Create reviews

  let ratingsDiv = document.createElement("div");
  ratingsDiv.className = "ratings";

  for (let j = 0; j < 5; j++) {
    let i = document.createElement("i");
    if (j > 3) {
      i.className = "fas fa-star-half";
      ratingsDiv.appendChild(i);
    } else {
      i.className = "fas fa-star";
    ratingsDiv.appendChild(i);
    }
    
  }

  reviewDiv.appendChild(ratingsDiv);
  textDiv.appendChild(reviewDiv);

  //Create image div

  let imageDiv = document.createElement("div");
  imageDiv.className = "image";

  let image = document.createElement("img");
  image.src = "./images/food.png";

  imageDiv.appendChild(image);

  // Append children

  heroSection.appendChild(textDiv);
  heroSection.appendChild(imageDiv);

  content.appendChild(heroSection);
  console.log("Hero loaded");
};
