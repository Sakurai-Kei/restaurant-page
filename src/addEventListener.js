import {buttons} from './buttons.js';
import {createContent} from './createContent.js';

function buttonInteraction() {
    buttons.home.addEventListener('click', () => {
        createContent(buttons.home.textContent);
    })
    buttons.menu.addEventListener('click', () => {
        createContent(buttons.menu.textContent);
    })
    buttons.about.addEventListener('click', () => {
        createContent(buttons.about.textContent);
    })
}

export {buttonInteraction};