(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-show-more]'),
    closeModalBtn: document.querySelector('[data-show-less]'),
    modal: document.querySelector('[data-show-holder]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
