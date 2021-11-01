import {createHome} from './createHome.js';

function clearContentContainer() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.textContent = "";
}

function createContent(tab) {
    switch(tab){
        case "Home":
            createHome();
            break;
        case "Menu":
            createMenu();
            break;
        case "About":
            createAbout();
            break;
    }
}

export default {clearContentContainer, createContent};