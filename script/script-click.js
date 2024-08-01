document.getElementById("clickable").onclick = () => {
  window.location = "main.html";
};

let cklickable = document.getElementsByClassName("click-to-sort");
for (let i = 0; i < cklickable.length; i++) {
  cklickable[i].addEventListener("click", () => {
    window.location = "sort.html";
  });
}
