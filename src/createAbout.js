import aboutPicture1 from './aboutPicture1.jpg';
import aboutPicture2 from './aboutPicture2.png';
import aboutPicture3 from './aboutPicture3.png';

function createAbout() {
    let aboutPictureCollection = [aboutPicture1, aboutPicture2, aboutPicture3];
    const about1 = "Eating healthy is not always easy. We are here to help with that.\
    Our establishment makes healthy food while being delicious and affordable\
    for people to sustain this kind of eating habit.";
    const about2 = "Come find us at (Put Some Address Here)";
    const about3 = "For questions, please contact at\n\
    email here\ncontact number here\n";
    let aboutDescriptionCollection = [about1, about2, about3];

    const contentContainer = document.getElementById('contentContainer');
    const createColumnContainer = document.createElement('div');
    createColumnContainer.setAttribute('id', 'columnContainer');

    for(let i = 1; i <= 3; i++){
        const createAboutModal = document.createElement('div');
        createAboutModal.classList.add('aboutModal');

        const picture = new Image(); 
        picture.src = aboutPictureCollection[i-1];
        picture.classList.add('img');

        const aboutDesciption = document.createElement('div');
        aboutDesciption.textContent = aboutDescriptionCollection[i-1];

        createAboutModal.appendChild(picture);
        createAboutModal.appendChild(aboutDesciption);

        createColumnContainer.appendChild(createAboutModal);
    }
    contentContainer.appendChild(createColumnContainer);
}

export {createAbout};