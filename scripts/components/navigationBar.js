function ConstructHTMLCode(page) {
    let outputStr = `
        <style>
            /* Top Navigation Bar */
            .topNavBar {
                background-color: #101010;
                overflow: hidden;
            }
            
            .topNavBar a {
                color: white;
                font-size: 18px;
                text-align: center;
                padding: 6px 16px;
                float: left;
            }
            
            .topNavBar a:hover {
                background-color: #202020;
            }
            
            .active {
                background-color: #404040 !important;
            }
            
            /* Hover Dropdown Menu */
            .dropdown {
                overflow: hidden;
                float: left;
            }
            
            .dropdown .dropButton {
                background-color: #101010;
                font-family: inherit;
                color: white;
                font-size: 18px;
                text-align: center;
                margin: 0;
                padding: 6px 16px;
                border: none;
                outline: none;
            }
            
            .dropdown:hover .dropButton {
                background-color: #202020;
            }
            
            .dropdown:hover .dropOptions {
                display: block;
            }
            
            .dropOptions {
                background-color: #282828;
                position: absolute;
                display: none;
                z-index: 1;
                box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
            }
            
            .dropOptions a {
                color: white;
                font-size: 12px;
                text-align: left;
                padding: 6px 6px;
                display: block;
                float: none;
            }
            
            .dropOptions a:hover {
                background-color: #363636;
            }
        </style>
        <header>
            <div class="topNavBar">
    `

    if (page == 0) {
        outputStr += `<a href="index.html" class="active">About Me</a>`
    } else {
        outputStr += `<a href="index.html">About Me</a>`
    }

    outputStr += `<div class="dropdown">`

    if (page == 1 || page == 2) {
        outputStr += `<button class="dropButton active">Capstone</button>`
    } else {
        outputStr += `<button class="dropButton">Capstone</button>`
    }

    outputStr += `<div class="dropOptions">`

    if (page == 1) {
        outputStr += `<a href="capstoneProject.html" class="active">Project Overview</a>`
    } else {
        outputStr += `<a href="capstoneProject.html">Project Overview</a>`
    }

    if (page == 2) {
        outputStr += `<a href="capstoneProgress.html" class="active">Progress</a>`
    } else {
        outputStr += `<a href="capstoneProgress.html">Progress</a>`
    }

    outputStr += `</div></div>`

    if (page == 3) {
        outputStr += `<a href="academics.html" class="active">Academics</a>`
    } else {
        outputStr += `<a href="academics.html">Academics</a>`
    }

    if (page == 4) {
        outputStr += `<a href="outsideClass.html" class="active">Outside the Classroom</a>`
    } else {
        outputStr += `<a href="outsideClass.html">Outside the Classroom</a>`
    }

    outputStr += `</div></header>`
    return outputStr;
}

let doc = parseInt(document.getElementById(`docID`).innerHTML);

class TopNavigationBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ConstructHTMLCode(doc);
    }
}

customElements.define(`top-nav-bar`, TopNavigationBar);