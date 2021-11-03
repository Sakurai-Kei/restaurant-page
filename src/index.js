import './style.css';
// import {githubIcon} from './github.js';
import {createContent} from './createContent.js';
import {buttonInteraction} from './addEventListener.js';

const start = (() => {
    // githubIcon();
    createContent('Home');
    buttonInteraction();
})();