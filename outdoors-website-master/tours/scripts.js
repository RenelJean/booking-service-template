//Function expression to select elements
const selectElement = (s) => document.querySelector(s);

//open menu on click
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//Clses the menu
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});
