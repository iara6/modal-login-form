mainBtn = document.querySelector('.main-btn');
modal = document.querySelector('.modal');
modalContent = document.querySelector('.modal-content');
/* closeBtn = document.querySelector('.close');
cancelBtn = document.querySelector('.cancel-btn'); */
closeModalButtons = [document.querySelector('.close'), document.querySelector('.cancel-btn')];

mainBtn.addEventListener('click', () => {
  modal.style.display = "block";
  modalContent.classList.remove('animate-close');
  modalContent.classList.add('animate-open');
});

closeModalButtons.forEach(element => {
  element.addEventListener('click', () => {
    modalContent.classList.remove('animate-open');
    modalContent.classList.add('animate-close');
    // timeout to run the animation first, then close the modal
    setTimeout(() => {
      modal.style.display = "none";
    }, 500);
  });
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

