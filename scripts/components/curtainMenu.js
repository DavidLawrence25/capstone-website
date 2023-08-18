function ConstructHTMLCode() {
    return `
<style>
#open-curtain {
	position: fixed;
	top: 8px;
	right: 16px;
	z-index: 16;
	color: var(--white);
	font-size: 32px;
}
.link-category {
	font-family: 'Roboto Slab', serif;
	font-weight: 500;
	font-size: 10vw;
	color: var(--mint);
}
.link {
	font-family: 'Playfair Display', serif;
	font-weight: 400;
	font-size: 7vw;
	color: var(--white);
}
.curtain-menu {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 17;
	left: 0;
	top: 0;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0, 0.6);
	overflow-x: hidden;
	transition: 0.5s;
}
.curtain-content {
	position: absolute;
	width: 100%;
	text-align: center;
	top: 50%;
	transform: translateY(-50%);
	opacity: 0;
}
.curtain-menu a {
	padding: 8px;
	text-decoration: none;
	display: block;
	transition: 0.3s;
}
.link:hover, .link:focus {
	text-decoration: underline;
}
.curtain-menu #close-btn {
	position: absolute;
	top: 20px;
	right: 45px;
	font-size: 32px;
	color: var(--white);
}
</style>
<body>
	<span id="open-curtain" onclick="OpenNav()">☰</span>
	<div id="site-nav" class="curtain-menu">
		<span id="close-btn" onclick="CloseNav()">&times;</span>
		<div class="curtain-content">
			<div class="link-category">Personal Life</div>
			<a class="link" href="index.html">About Me</a>
			<a class="link" href="outsideClass.html">Outside Classroom</a>
			<a class="link" href="goals.html">My Goals</a>
			<div class="link-category">Professional Life</div>
			<a class="link" href="capstoneProject.html">Capstone</a>
			<a class="link" href="academics.html">Academics</a>
		</div>
	</div>
</body>
	`;
}

class CurtainMenu extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = ConstructHTMLCode();
	}
}

function OpenNav() {
	document.getElementById("site-nav").style.width = "100%";
	document.getElementsByClassName("curtain-content")[0].style.opacity = 1;
}

function CloseNav() {
	document.getElementById("site-nav").style.width = "0%";
	document.getElementsByClassName("curtain-content")[0].style.opacity = 0;
}

customElements.define(`curtain-menu`, CurtainMenu);
