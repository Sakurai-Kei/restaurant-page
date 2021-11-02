import menuPicture1 from './menuPicture1.png';
import menuPicture2 from './menuPicture2.png';
import menuPicture3 from './menuPicture3.png';
import menuPicture4 from './menuPicture4.png';

function createMenu() {
    let menuPictureCollection = [menuPicture1, menuPicture2, menuPicture3, 
    menuPicture4, 'menuPicture5', 'menuPicture6'];
    const foodDescription1 = "Smoked beef spaghetti carbonara! With Chef Mike's\
    special ingredients, the carbonara is sure to excite your taste buds!";
    const foodDescription2 = "The Rabo del Torro, a well-known stew from spain!\
    Chef Mike's interpretation of the dish brings out the tenderness of the meat\
    like you have never tasted before!";
    const foodDescription3 = "Assortions of marinated sashimi, vegetables and grains\
    ! Being healthy has never been this delicious! If you prefer non-raw fish,\
    Chef Mike is more than happy to offer to flame torch it or switch out to another\
    meat that is cooked!";
    const foodDescription4 = "Chef Mike's take on Lobster Tortellini \
    opens up your world of tastes! Blending in his hometown flavour into \
    the cuisine, Chef Mike has imparted a proud legacy for his home"
    let foodDescriptionCollection = [foodDescription1, foodDescription2,
        foodDescription3, foodDescription4, 'Five', 'Six'];
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
            // Actual code for picture
            const picture = new Image(); 
            picture.src = menuPictureCollection[k];
            picture.classList.add('img');
    
            createFood.appendChild(picture);
            createRow.appendChild(createFood);
            k++;
        }
        createColumnContainer.appendChild(createRow);
    }
}

export {createMenu};