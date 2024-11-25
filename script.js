document.getElementById("toggle-border").addEventListener("click", function () {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    if (card.style.border) {
      card.style.border = "";
    } else {
      card.style.border = "2px solid rgba(250, 50, 50, 0.4)";
    }
  });
});
