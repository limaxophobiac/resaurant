
import backgroundPlace from './pizzaplace.png';
import pizzaMap from './pizzaMap.png';

const buildContact = () => {
    const contentDiv = document.getElementById('content');
    const contactDiv = document.createElement('div');
    contactDiv.style.backgroundImage = `url("${backgroundPlace}")`;
    contactDiv.style.backgroundAttachment = "fixed";
    contactDiv.style.backgroundSize = "cover";
    contactDiv.style.backgroundPosition = "center";
    contactDiv.style.minHeight = "100vh";

    contactDiv.style.display = "flex";
    contactDiv.style.alignItems = "center";
    contactDiv.style.justifyContent = "center";

    const contactBox = document.createElement('div');
    contactBox.style.backgroundColor = "rgba(0,0,0, 0.25)";
    contactBox.style.padding = "2.5vh 5vw 5vh 5vw";
    contactBox.style.color = "white";
    contactBox.style.borderRadius = "10px";
    contactBox.style.marginTop = "120px";

    const contactTitle = document.createElement('div');
    contactTitle.innerHTML = "Contact Us";
    contactTitle.style.fontSize = "2rem";
    contactBox.appendChild(contactTitle);

    const contactNumber = document.createElement('div');
    contactNumber.innerHTML = "12-345 67 89";
    contactBox.appendChild(contactNumber);

    const contactEmail = document.createElement('div');
    contactEmail.innerHTML = "fake@email.com";
    contactBox.appendChild(contactEmail);

    const mapImage = new Image();
    mapImage.src  = pizzaMap;
    mapImage.style.maxWidth = "60vw";
    mapImage.style.maxHeight = "45vh";
    contactBox.appendChild(mapImage);

    contactDiv.appendChild(contactBox);

    contentDiv.appendChild(contactDiv);
};

export default buildContact;