function ConstructHTMLCode() {
    return `
        <style>
            /* Navigation Bar */
            .nav-bar {
                list-style-type: none;
                display: flex;
                align-items: center;
                position: fixed;
                width: 100%;
                top: 0;
                margin: 0;
                padding: 0;
                overflow: hidden;
                border-bottom: 1px solid var(--white);
            }

            .nav-bar li {
                float: left;
            }

            .nav-bar li a {
                display: block;
                text-align: center;
                padding: 0.5vmax 1vmax;
                text-decoration: none;
                color: var(--white);
            }

            .nav-bar li.nav-option a {
                color: var(--mint);
            }

            .nav-bar li.nav-option a:hover {
                background-color: var(--white);
                color: var(--dark-gray)
            }
        </style>
        <body>
            <ul class="nav-bar">
                <li><a href="index.html" class="medium-text">Rose</a></li>
                <li class="nav-option"><a href="academics.html" class="small-text">Academics</a></li>
                <li class="nav-option"><a href="capstoneProject.html" class="small-text">Capstone</a></li>
                <li class="nav-option"><a href="goals.html" class="small-text">Goals</a></li>
                <li class="nav-option"><a href="outsideClass.html" class="small-text">Outside Class</a></li>
            </ul>
        </body>
    `
}

class TopNavigationBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ConstructHTMLCode();
    }
}

customElements.define(`top-nav-bar`, TopNavigationBar);
