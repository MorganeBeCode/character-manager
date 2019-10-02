import axios from "axios";

async function getUser() {
  try {
    let params = new URLSearchParams(location.search);
    let id = params.get("id");
    const response = await axios.get(
      "https://character-database.becode.xyz/characters/" + id
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

let img = document.querySelector("img") as HTMLImageElement;

getUser().then(user => {
  (document.querySelector(".card-title") as HTMLElement).innerHTML = user.name;
  (document.querySelector(".card-text") as HTMLElement).innerHTML =
    user.description;

  if (typeof user.image === "undefined") {
    img.src = "https://source.unsplash.com/random";
  } else {
    img.src = "data:image/gif;base64," + user.image;
  }
  // img.src = 'data:image/gif;base64,' + user.image;
});
