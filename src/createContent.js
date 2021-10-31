function clearContentContainer() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.textContent = "";
}

function createContent() {
    const contentContainer = document.getElementById('contentContainer');
    contentContainer.textContent = "Hey, I created Content";
}

export {clearContentContainer, createContent};