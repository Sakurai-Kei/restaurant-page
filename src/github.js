import githubCat from './Github_Cat.png';
import githubLogo from './Github_Logo.png';

function githubIcon() {
    const footerArea = document.getElementById('footerContainer');
    const cat = new Image();
    cat.src = githubCat;
    cat.classList.add('githubCat');
    const logo = new Image();
    logo.src = githubLogo;
    logo.classList.add('githubLogo');
    footerArea.appendChild(cat);
    footerArea.appendChild(logo);
}

export {githubIcon};