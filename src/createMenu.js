// import bunch of picture for use later

function createMenu() {
    let menuPictureCollection = ['menuPicture1', 'menuPicture2', 'menuPicture3', 
    'menuPicture4', 'menuPicture5', 'menuPicture6'];
    let foodDescriptionCollection = ['One', 'Two', 'Three', 'Four', 'Five', 'Six']
    let k = 0;

    const contentContainer = document.getElementById('contentContainer');

    const createColumnContainer = document.createElement('div');
    createColumnContainer.setAttribute('id', 'columnContainer');

    contentContainer.appendChild(createColumnContainer);

    for(let i = 1; i <= 3; i++){
        const createRow = document.createElement('div');
        createRow.classList.add('row');
        for(let j =1; j <= 2; j++){
            const createFood = document.createElement('div');
            createFood.classList.add('food');

            const foodDescription = document.createElement('div');
            foodDescription.textContent = foodDescriptionCollection[k];
            createFood.appendChild(foodDescription);
            // Mock code for picture start
            const picture = document.createElement('div')
            picture.classList.add('right');
            picture.textContent = menuPictureCollection[k];
            k++;
            createFood.appendChild(picture);
            // Mock code end
            createRow.appendChild(createFood);
        }
        createColumnContainer.appendChild(createRow);
    }
}

export {createMenu};