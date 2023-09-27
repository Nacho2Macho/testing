import { AddOverflowClass } from "../components/hidden-element";
import { RemoveOverflowClass } from "../components/hidden-element";

const popupButtons = document.querySelectorAll('.popup-buttons');
const modalOverlay = document.querySelector('.header__modals-overlay');
const modals = document.querySelectorAll('.header__modal');
const closeButtons = document.querySelectorAll('.header__modal-close');

popupButtons.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
        window.addEventListener('keydown', onEscKeyPress);
        AddOverflowClass()
    });
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target == modalOverlay) {
        closeModal();
    }
});

closeButtons.forEach((closeButton) => {
    closeButton.addEventListener('click', () => {
        closeModal();
    });
});

function closeModal() {
    modalOverlay.classList.remove('modal-overlay--visible');
    modals.forEach((el) => {
        el.classList.remove('modal--visible');
    });
    window.removeEventListener('keydown', onEscKeyPress);
    RemoveOverflowClass()
}

function onEscKeyPress(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
}
