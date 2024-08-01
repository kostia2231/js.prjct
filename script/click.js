document.getElementById("clickable").onclick = () => {
  window.location = "main.html";
  console.log("clicked");
};

let cklickable = document.getElementsByClassName("click-to-sort");
for (let i = 0; i < cklickable.length; i++) {
  cklickable[i].addEventListener("click", () => {
    window.location.href = "sort.html";
  });
}
