import axios from "axios";

let nameInput = <HTMLInputElement>document.getElementById("name");
let shortInput = <HTMLInputElement>document.getElementById("shortDesc");
let descInput = <HTMLInputElement>document.getElementById("desc");
const createForm = <HTMLInputElement>document.getElementById("create");

createForm.addEventListener("submit", function(e) {
  e.preventDefault();
  postUser();
});

async function postUser() {
  try {
    const response = await axios
      .post("https://character-database.becode.xyz/characters", {
        name: nameInput.value,
        shortDescription: shortInput.value,
        description: descInput.value
        //   image: 'https://source.unsplash.com/random'
      })
      .then(response => {
        console.log(response);
        return response;
      });
  } catch (error) {
    console.error(error);
  }
}
