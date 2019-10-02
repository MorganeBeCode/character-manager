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
  const imageElement: any = <HTMLInputElement>document.querySelector("#image");
  if (imageElement.files && imageElement.files[0]) {
    let reader = new FileReader();
    reader.onloadend = function() {
      if (typeof reader.result == "string") {
        let str = reader.result.split(",");
        const data = {
          name: name,
          description: longdesc,
          shortDescription: shortdesc,
          image: str[1]
        };
        postUser(data).then(() => {
          window.location.href = "../";
        });
      }
    };
    reader.readAsDataURL(imageElement);
  }
});
