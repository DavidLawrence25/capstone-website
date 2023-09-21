function ConstructHTMLCode() {
    return `
        <style>
            /* Navigation Bar */
            .nav-bar {
                list-style-type: none;
                display: flex;
                align-items: baseline;
                position: fixed;
                width: 99%;
                top: 0;
                margin: 0;
                padding: 0;
                overflow: hidden;
                border-bottom: 1px solid var(--white);
                z-index: 10;
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
                border-bottom: 1px solid var(--mint);
            }

            #magic-spacer {
                width: 100%;
                height: calc(1vmax + 42px);
            }
        </style>
        <body>
            <div id="magic-spacer"></div>
            <ul class="nav-bar">
                <li><a href="index.html" class="medium-text">Rose</a></li>
                <li class="nav-option"><a href="academics.html" class="small-text">ACADEMICS</a></li>
                <li class="nav-option"><a href="capstoneProject.html" class="small-text">CAPSTONE</a></li>
                <li class="nav-option"><a href="goals.html" class="small-text">GOALS</a></li>
                <li class="nav-option"><a href="outsideClass.html" class="small-text">OUTSIDE CLASS</a></li>
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
