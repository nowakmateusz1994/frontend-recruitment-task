let toggleHidden = function (component) {
    component.classList.toggle('hidden');
}

let offerImg = document.querySelector('.offer-img')
let popUp = offerImg.querySelector('.popup');
let popUpButton = offerImg.querySelector('.showAlert');

if (offerImg && popUp) {
    popUpButton.addEventListener('click', () => {
        toggleHidden(popUp);
    });

    popUp.querySelector('.popup__close').addEventListener('click', () => {
        toggleHidden(popUp);
    });


    popUp.querySelector('.popup__background').addEventListener('click', () => {
        toggleHidden(popUp);
    });

}