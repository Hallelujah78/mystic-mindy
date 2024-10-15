const button = document.querySelector(".fetch");
const audio = document.getElementById("myAudio");
const loading = document.querySelector(".loading");
const overlay = document.querySelector(".overlay");
const fortuneText = document.querySelector(".f-text");
const fortune = document.querySelector(".fortune");
const exitButton = document.querySelector(".exit-btn");
const html = document.querySelector("html");
const fortuneTextContainer = document.querySelector(".f-text-container");

const exit = () => {
  overlay.classList.add("hidden");
  fortune.classList.add("hidden");
  html.classList.remove("disable-scroll");
};

const testFunc = async () => {
  html.scrollTop = 0;
  html.classList.add("disable-scroll");
  loading.classList.remove("hidden");
  overlay.classList.remove("hidden");
  const apiURL = "/.netlify/functions/testFunc"; // fail
  audio.play();
  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: { accept: "application/json" },
    });

    if (response.ok) {
      const content = await response.json();
      fortuneText.innerText = content;
      fortune.classList.remove("hidden");
      // scrollTop has no effect if display: none is set!
      fortuneTextContainer.scrollTop = 0;
    }
  } catch (error) {
    console.log(error);
  }
  loading.classList.add("hidden");
};

if (button) button.addEventListener("click", testFunc);
if (exitButton) exitButton.addEventListener("click", exit);
