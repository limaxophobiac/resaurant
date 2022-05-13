
import backgroundPlace from './pizzaplace.png';
import pizzaMap from './pizzaMap.png';

const buildContact = () => {
    const contentDiv = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.style.backgroundImage = `url("${backgroundPlace}")`;;
    contactDiv.style.minHeight = "100vh";

    const contactTitle = document.createElement('div');
    contactTitle.innerHTML = "Contact Us";
    contactTitle.style.fontSize = "2rem";
    contactDiv.appendChild(contactTitle);

    const contactNumber = document.createElement('div');
    contactNumber.innerHTML = "12-345 67 89";
    contactDiv.appendChild(contactNumber);

    const contactEmail = document.createElement('div');
    contactEmail.innerHTML = "fake@email.com";
    contactDiv.appendChild(contactEmail);

    const mapImage = new Image();
    mapImage.src  = pizzaMap;
    contactDiv.appendChild(mapImage);

    contentDiv.appendChild(contactDiv);
};

export default buildContact;