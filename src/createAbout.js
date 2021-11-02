// Import pictures later

function createAbout() {
    let aboutPictureCollection = ['aboutPicture1', ' aboutPicture2', 'aboutPicture3'];
    let aboutDescriptionCollection = ['about1', 'about2', 'about3'];

    const contentContainer = document.getElementById('contentContainer');
    const createColumnContainer = document.createElement('div');
    createColumnContainer.setAttribute('id', 'columnContainer');

    for(let i = 1; i <= 3; i++){
        const createAboutModal = document.createElement('div');
        createAboutModal.classList.add('aboutModal');
        // Mock code for picture start
        const picture = document.createElement('div');
        picture.textContent = aboutPictureCollection[i-1];
        // Mock end
        const aboutDesciption = document.createElement('div');
        aboutDesciption.textContent = aboutDescriptionCollection[i-1];

        createAboutModal.appendChild(picture);
        createAboutModal.appendChild(aboutDesciption);

        createColumnContainer.appendChild(createAboutModal);
    }
    contentContainer.appendChild(createColumnContainer);
}

export {createAbout};