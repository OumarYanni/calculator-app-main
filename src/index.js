import "./input.css";

const result = document.querySelector(".result");

function updateScreen(number) {
  result.innerText = number;
}

const keysNumber = document
  .querySelectorAll(".key-number")
  .forEach((key, index) => {
    key.addEventListener("click", () => {
      const number = parseInt(key.innerText, 10);
      const result = number;

      updateScreen(result);
      //console.log(key.innerText);
      //console.log(parseInt(key.innerText));

      //const typeKeyNumber = typeof key.innerText;
      //console.log(typeKeyNumber);
      console.log(index);
      console.log(number);
      const typeKeyNumber = typeof number;
      console.log(typeKeyNumber);
    });
  });
