const gameModals = document.querySelectorAll(".game-modal");
const imgCards = document.querySelectorAll(".img-card");
const gameCloseBtns = document.querySelectorAll(".game-close-btn");

const gameModal = function (modalClick) {
  gameModals[modalClick].style.display = "flex";
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    gameModal(i);
  });
});

gameCloseBtns.forEach((gameCloseBtn) => {
gameCloseBtn.addEventListener("click", () => {
    const modal = gameCloseBtn.closest(".game-modal");
    modal.style.display = "none";
  });
});