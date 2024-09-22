const button = document.querySelector(".fetch");

const audio = document.getElementById("myAudio");

const testFunc = async () => {
  const apiURL = "/.netlify/functions/testFuncXXX"; // fail
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
};

if (button) button.addEventListener("click", testFunc);
