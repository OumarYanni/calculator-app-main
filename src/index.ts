import "./input.css";

let inputsNumber = [];
//const result = document.querySelector(".result");
//const result: number = (document.querySelector(".result") as HTMLElement)
// ?.innerText;
function safeParseFloat(value: string | undefined): number {
  const conversionResult = parseFloat(value || "0");
  console.log(conversionResult);

  return isNaN(conversionResult) ? 0 : conversionResult;
}

// let result: number = safeParseFloat(
//   (document.querySelector(".result") as HTMLElement)?.innerText || "0",
// );

// function updateScreen(number: number): number {
//   return (result = number);

//   // const displayResult = document.querySelector(".result") as HTMLElement;
//   // if (displayResult) {
//   //   displayResult.innerText = number.toString();
//   // }
// }

function updateScreen(number: number): void {
  const displayResult = document.querySelector(".result");
  if (displayResult) {
    displayResult.textContent = number.toString();
  }
}

let setupNumberKeypad = function () {
  console.log("Setup Keypad called.");

  document.querySelectorAll(".key-number").forEach((key, index) => {
    console.log("Key found:", key);

    key.addEventListener("click", function (event) {
      console.log("Key clicked:", event.target);
      if (event.target instanceof HTMLElement) {
        const clickedKey = event.target as HTMLElement;
        console.log("Clicked key content:", clickedKey.innerText);

        const keyContent = clickedKey.innerText || "0";

        console.log(keyContent);

        const result = safeParseFloat(keyContent);
        console.log("Parsed number:", result);

        updateScreen(result);

        console.log(result);
        const typeKeyNumber = typeof result;
        console.log(typeKeyNumber);
      }
    });
  });
};

let setupDeleteKeypad = function () {
  document.querySelector(".key-reset")?.addEventListener("click", () => {
    const displayResult = document.querySelector(".result");
    if (displayResult) {
      displayResult.textContent = "0";
    }
  });
};

let add = function () {
  document.querySelector(".key-operator-addition");
};

const initializeKeypads = () => {
  setupNumberKeypad();
  setupDeleteKeypad();
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeKeypads);
} else {
  initializeKeypads();
}

// document.addEventListener("DOMContentLoaded", (event) => {
//   let setupNumberKeypad = function () {
//     console.log("Setup keypad called.");
//     document.querySelectorAll(".key-number").forEach((key) => {
//       console.log("Key found:", key);
//       key.addEventListener("click", function (event) {
//         console.log("Key clicked:", event.target);
//         if (event.target instanceof HTMLElement) {
//           const clickedKey = event.target;
//           console.log("Clicked key content:", clickedKey.innerText);
//           const number = safeParseFloat(clickedKey.innerText);
//           console.log("Parsed number:", number);
//           updateScreen(number);
//         }
//       });
//     });
//   };

//   setupNumberKeypad();
// });

// function displayNumberOnScreen() {
//   document.querySelectorAll(".key-number").forEach((key, index) => {
//     key.addEventListener("click", () => {
//       const number = parseInt(key.innerText, 10);
//       const result = number;

//       updateScreen(result);
//       console.log(key.innerText);
//       console.log(parseInt(key.innerText));

//       const typeKeyNumber = typeof key.innerText;
//       console.log(typeKeyNumber);
//       console.log(index);
//       console.log(number);
//       const typeKeyNumber = typeof number;
//       console.log(typeKeyNumber);
//     });
//   });
// }
