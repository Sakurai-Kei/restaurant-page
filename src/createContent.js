import {createHome} from './createHome.js';
import {createMenu} from './createMenu.js';

function clearContentContainer() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.textContent = "";
}

function createContent(tab) {
    switch(tab){
        case "Home":
            clearContentContainer();
            createHome();
            break;
        case "Menu":
            clearContentContainer();
            createMenu();
            break;
        case "About":
            clearContentContainer();
            createAbout();
            break;
    }
}

export {createContent};