export const createHero = () => {
  let content = document.querySelector("#content");

  let heroDiv = document.createElement("div");
  heroDiv.className = "hero";

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

  for (let i = 0; i < 4; i++) {
    let profile = document.createElement("div");
    profile.className = "profile";
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
    }
    i.className = "fas fa-star";
    ratingsDiv.appendChild(i);
  }

  reviewDiv.appendChild(ratingsDiv);
  textDiv.appendChild(reviewDiv);

  //Create image div

  let imageDiv = document.createElement("div");
  imageDiv.className = "image";

  let image = document.createElement("img");
  image.src = "../src/food.png";

  imageDiv.appendChild(image);

  // Append children

  heroDiv.appendChild(textDiv);
  heroDiv.appendChild(imageDiv);

  content.appendChild(heroDiv);
  console.log("Hero loaded");
};
