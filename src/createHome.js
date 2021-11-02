import homePicture1 from './homePicture1.png';
import homePicture2 from './homePicture2.png';
import homePicture3 from './homePicture3.png';

function createHome() {
    let homePictureCollection = [homePicture1, homePicture2, homePicture3];
    const homeDescription1 = "We use the best\
    ingredient fresh from the local farms, promoting healthy food and environment!";
    const homeDescription2 = "Satisfaction guranteed! Our Michelin Star Chef Mike\
    will entertain requests from customers for their food orders within reasons!";
    const homeDescription3 = "Have no time for dine in? We do delivery, free\
    of charges for areas within 10 km or for those with membership cards!";
    let homeDescription = [homeDescription1, homeDescription2, homeDescription3];
    const contentContainer = document.getElementById('contentContainer');
    for(let i = 1; i <= 3; i++){
        const createModal = document.createElement('div');
        createModal.classList.add('modal');
        // Actual code for image
        const picture = new Image(); 
        picture.src = homePictureCollection[i-1];
        picture.classList.add('img');

        createModal.appendChild(picture);
        // Mock Code for Image
        // const picture = document.createElement('div');
        // picture.classList.add('img');
        // picture.textContent = homePictureCollection[i-1];
        
        // createModal.appendChild(picture);
        // Mock End
        const imgDescription = document.createElement('div');
        imgDescription.classList.add('imgDescription');
        imgDescription.textContent = homeDescription[i-1];

        createModal.appendChild(imgDescription);
        contentContainer.appendChild(createModal);
    }
}

export {createHome};