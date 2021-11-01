// import homePicture1 from './picture1.png';
// import homePicture2 from './picture2.png';
// import homePicture3 from './picture3.png';

function createHome() {
    let homePictureCollection = ['homePicture1', 'homePicture2', 'homePicture3'];
    const contentContainer = document.getElementById('contentContainer');
    for(let i = 1; i <= 3; i++){
        const createModal = document.createElement('div');
        createModal.classList.add('modal');
        // Actual code for image
        // const picture = new Image(); 
        // picture.src = homePictureCollection[i-1];

        // createModal.appendChild(picture);
        // Mock Code for Image
        const picture = document.createElement('div');
        picture.classList.add('img');
        picture.textContent = homePictureCollection[i-1];
        
        createModal.appendChild(picture);
        // Mock End
        const imgDescription = document.createElement('div');
        imgDescription.classList.add('imgDescription');
        imgDescription.textContent = 'Some text to accompany';

        createModal.appendChild(imgDescription);
        contentContainer.appendChild(createModal);
    }
}

export {createHome};