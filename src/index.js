import './style.css';
import {createContent} from './createContent.js';
import {buttonInteraction} from './addEventListener.js';

const start = (() => {
    createContent('Home');
    buttonInteraction();
})();