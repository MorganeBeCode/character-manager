import axios from "axios";
const createForm = <HTMLInputElement>document.getElementById("create");

async function postUser(data: any) {
  return await axios.post(
    `https://character-database.becode.xyz/characters`,
    data
  );
}

createForm.addEventListener("submit", function() {
  const name = <HTMLInputElement>document.getElementById("name");
  const shortdesc = <HTMLInputElement>document.getElementById("shortDesc");
  const longdesc = <HTMLInputElement>document.getElementById("desc");
  const image = (<HTMLInputElement>document.querySelector("#image")).files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    let str = (<string>reader.result).split(",");
    const data = {
      name: name,
      description: longdesc,
      shortDescription: shortdesc,
      image: str[1]
    };
    postUser(data).then(() => {
      window.location.href = "../";
    });
  };
  reader.readAsDataURL(image);
});
