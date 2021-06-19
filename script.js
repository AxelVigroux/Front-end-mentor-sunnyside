const btnModal = document.querySelector("#button-modal");
const modal = document.querySelector(".modal-content");

btnModal.addEventListener("click", function () {
  modal.classList.toggle("show-navbar");
});
