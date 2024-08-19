// global variables
const newCampaign = document.getElementById('new-campaign');
const newCampaignDialog = document.getElementById('new-campaign-dialog');
const newCampaignForm = document.getElementById('new-campaign-form');
const closeDialogButton = document.getElementById('close-dialog-button');
const backgroundBlur = document.getElementById('background-blur');
const imgLabels = document.querySelectorAll('#campaign-img-select label');


// helper functions

const hideDialog = () => {
    newCampaignDialog.close();
    backgroundBlur.classList.remove('show');
}

// event listeners

const handleCampaignImgSelect = (event) => {

    const imgId = event.currentTarget.getAttribute('for')
    const input = document.querySelector(`#campaign-img-select input[type="radio"]#${imgId}`);
    console.log(input);
}

const checkImgSelection = (event) => {
    const imgInputs = document.querySelectorAll('#campaign-img-select input');
    if ([...imgInputs].every(input => !input.checked)) {
        event.preventDefault();
        imgLabels.forEach(label => label.classList.add('shake'));
        setTimeout(() => {imgLabels.forEach(label => label.classList.remove('shake'))}, 500);
    }
}

// event listener assignment
newCampaign.addEventListener('click', (event) => {
    event.preventDefault();
    newCampaignDialog.showModal();
    backgroundBlur.classList.add('show');
});

closeDialogButton.addEventListener('click', (event) => {
    newCampaignDialog.close();
    backgroundBlur.classList.remove('show');
})

imgLabels.forEach(label => {
    label.addEventListener('click', handleCampaignImgSelect);
})

document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") {
        hideDialog();
    }
})

newCampaignForm.addEventListener('submit', checkImgSelection)