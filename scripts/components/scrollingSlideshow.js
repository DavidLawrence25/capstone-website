function ConstructHTMLCode(page) {
	let outputStr = `
		<style>
			.slideshow {
				position: relative;
				overflow: hidden;
				height: 500px;
				max-width: 90%;
				margin: 0 auto;
				transform: translate3d(0, 0, 0);
			}
			.slideshow > div {
				height: 500px;
				width: 3450px;
				background-image: url("images/bookshelf/spritesheet.png");
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				transform: translate3d(0, 0, 0);
			}
			.slideshow .mover {
				animation: moveSlideshow 30s linear infinite;
			}
			@keyframes moveSlideshow {
				100%	{ transform: translateX(-50%); }
			}
		</style>
	`
	return outputStr;
}

class ScrollingSlideshow extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ConstructHTMLCode(doc);
    }
}

customElements.define(`scrolling-slideshow`, ScrollingSlideshow);
