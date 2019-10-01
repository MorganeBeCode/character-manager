import axios from "axios";

async function getUser() {
  try {
    const response = await axios.get(
      "https://character-database.becode.xyz/characters"
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

getUser().then(user => {
  let temp, item, a, i;
  temp = document.getElementsByTagName("template")[0];
  let target = document.getElementById("target") as HTMLElement;
  item = temp.content.querySelector("div") as HTMLElement;
  for (i = 0; i < user.length; i++) {
    (temp.content.querySelector(".card-title") as HTMLElement).innerHTML =
      user[i].name;
    (temp.content.querySelector(".card-text") as HTMLElement).innerHTML =
      user[i].shortDescription;

    // if ((temp.content.querySelector('img') as HTMLElement).src == 'data:image/gif;base64,undefined')
    //   (temp.content.querySelector('img') as HTMLElement).src = 'https://source.unsplash.com/random';
    (temp.content.querySelector("img") as HTMLImageElement).src =
      "data:image/gif;base64," + user[i].image;
    (temp.content.querySelector("a") as HTMLAnchorElement).href =
      "details.html?id=" + user[i].id;
    a = document.importNode(item, true);
    target.appendChild(a);
  }
});
