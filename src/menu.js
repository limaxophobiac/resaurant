const buildMenu = () => {
    const contentDiv = document.getElementById('content');
    const menuDiv = document.createElement('div');
    menuDiv.style.backgroundColor = "blue";
    menuDiv.style.minHeight = "100vh";

    const menuTitle = document.createElement('div');
    menuTitle.innerHTML = "Menu";
    menuTitle.style.fontSize = "2rem";

    menuDiv.appendChild(menuTitle);

    contentDiv.appendChild(menuDiv);
};

export default buildMenu;