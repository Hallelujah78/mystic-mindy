const button = document.querySelector(".fetch");

const testFunc = async () => {
  const apiURL = "/.netlify/functions/testFunc";

  try {
    const response = await fetch(apiURL, {
      method: "GET",
      headers: { accept: "application/json" },
      // body: JSON.stringify("test"),
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

if (button) button.addEventListener("click", testFunc);
