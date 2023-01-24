console.log("Script loaded");
console.log("Hello, world");

button = document.querySelector("button");
button.onclick = () => {
  console.log("You Clicked Me");
  window.location = "https://google.com";
};
