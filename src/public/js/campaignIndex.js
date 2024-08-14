
// global variables
const newCampaign = document.getElementById('new-campaign');
const newCampaignDialog = document.getElementById('new-campaign-dialog');
const closeDialogButton = document.getElementById('close-dialog-button');
const backgroundBlur = document.getElementById('background-blur');
const imgLabels = document.querySelectorAll('#campaign-img-select label')

// event listeners

const handleCampaignImgSelect = (event) => {

    const imgId = event.currentTarget.getAttribute('for')
    const input = document.querySelector(`#campaign-img-select input[type="radio"]#${imgId}`);
    console.log(input);
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


// helper functions