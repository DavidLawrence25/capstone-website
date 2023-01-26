function ConstructHTMLCode() {
    let outputStr = `
<style>
.curtain-menu {
	height: 100%;
	width: 0;
	position: fixed;
	z-index: 17;
	left: 0;
	top: 0;
	background-color: rgb(0,0,0);
	background-color: rgba(0,0,0, 0.9);
	overflow-x: hidden;
	transition: 0.5s;
}
.curtain-content {
	position: absolute;
	width: 100%;
	text-align: center;
	top: 50%;
	transform: translateY(-50%);
}
.curtain-menu a {
	padding: 8px;
	text-decoration: none;
	font-size: 36px;
	color: #818181;
	display: block;
	transition: 0.3s;
}
.curtain-menu a:hover, .curtain-menu a:focus {
	color: #f1f1f1;
}
.curtain-menu .close-btn {
	position: absolute;
	top: 20px;
	right: 45px;
	font-size: 60px;
}
@media screen and (max-height: 450px) {
	.curtain-menu a {font-size: 20px}
	.curtain-menu .close-btn {
		font-size: 40px;
		top: 15px;
		right: 35px;
	}
}
</style>
<body>
	<div id="site-nav" class="curtain-menu">
		<a href="javascript:void(0)" class="close-btn" onclick="CloseNav()">&times;</a>
		<div class="curtain-content">
			<h3>Personal Life</h3>
			<a href="index.html">About Me</a>
			<a href="outsideClass.html">Outside the Classroom</a>
			<a href="goals.html">My Goals</a>
			<h3>Professional Life</h3>
			<a href="capstoneProject.html">Capstone Project</a>
			<a href="capstoneProgress.html">Devlogs</a>
			<a href="academics.html">Academics</a>
		</div>
	</div>
</body>
	`;
    return outputStr;
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
}
function CloseNav() {
	document.getElementById("site-nav").style.width = "0%";
}
customElements.define(`curtain-menu`, CurtainMenu);
