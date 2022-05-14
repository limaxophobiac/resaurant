import backgroundMenu from './1390893.jpg';

const buildMenu = () => {
    const contentDiv = document.getElementById('content');

    const menuDiv = document.createElement('div');

    menuDiv.style.backgroundImage = `url("${backgroundMenu}")`;
    menuDiv.style.backgroundAttachment = "fixed";
    menuDiv.style.backgroundSize = "cover";
    menuDiv.style.backgroundPosition = "center";
    menuDiv.style.color = "white";
    menuDiv.style.fontFamily = "Helvetica";

    menuDiv.style.minHeight = "100vh";

    menuDiv.style.display = "flex";
    menuDiv.style.alignItems = "center";
    menuDiv.style.justifyContent = "center";

    const menuTitle = document.createElement('div');
    menuTitle.innerHTML = "Menu";
    menuTitle.style.fontSize = "3rem";

    menuDiv.appendChild(menuTitle);

    contentDiv.appendChild(menuDiv);
};

export default buildMenu;