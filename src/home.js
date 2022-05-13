import backgroundPizza from './pizza-home.jpg';

const buildHome= () => {
    
    const contentDiv = document.getElementById('content');
    contentDiv.style.backgroundImage = `url("${backgroundPizza}")`;

    const nameDiv = document.createElement('div');
    nameDiv.innerHTML = "Pizzerino";
    contentDiv.appendChild(nameDiv);

    const descripDiv = document.createElement('div');
    descripDiv.innerHTML = "Pizzeriono ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    contentDiv.appendChild(descripDiv);

    contentDiv.style.display = "flex";
    contentDiv.style.flexDirection = "column";
    contentDiv.style.alignItems = "center";
    contentDiv.style.justifyContent = "end";

    nameDiv.style.color = "orange";
    nameDiv.style.fontSize = "max(2rem, 11vh)";
    nameDiv.style.textShadow = "0px 0px 10px rgb(0,0,0)";
    nameDiv.style.marginTop = "120px";
    nameDiv.style.marginBottom = "18vh";
    descripDiv.style.color = "white";
    descripDiv.style.fontFamily = "Helvetica";
    descripDiv.style.backgroundColor = "rgba(0,0,0,0.25)"
    descripDiv.style.textShadow = "0px 0px 2px rgb(0,0,0)";
    descripDiv.style.padding = "2rem 20vw";
    descripDiv.style.marginBottom = "15vh";
}

export default buildHome;