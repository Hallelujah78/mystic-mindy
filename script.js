const button = document.querySelector(".fetch");
const audio = document.getElementById("myAudio");
const loading = document.querySelector(".loading");
const overlay = document.querySelector(".overlay");

const testFunc = async () => {
  loading.classList.remove("hidden");
  overlay.classList.remove("hidden");
  const apiURL = "/.netlify/functions/testFunc"; // fail
  audio.play();
  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: { accept: "application/json" },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
  loading.classList.add("hidden");
  overlay.classList.add("hidden");
};

if (button) button.addEventListener("click", testFunc);
