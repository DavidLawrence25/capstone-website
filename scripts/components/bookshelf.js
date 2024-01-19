class Book {
	constructor(title, url, image) {
		this.title = title;
		this.url = url;
		this.image = image;
	}

	htmlRepr() {
		return `<a
	href="${this.url}"
	target="_blank"
>
	<img
		class="book"
		src="${this.image}"
		alt="${this.title}"
	/>
</a>`;
	}
}

function ConstructHTMLCode(books) {
	let outputStr = `
<style>
.bookshelf-container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 4%;
	width: 100%;
}

.book {
	width: 100%;
	transition: all .3s ease-in-out;
	transform-origin: center center 0px;
	transform-style: preserve-3d;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	/* -webkit-backface-visibility: hidden; */
	overflow: hidden;
}

.book:hover {
	cursor: pointer;
	transform: scale(1.05);
	/* -webkit-backface-visibility: hidden; */
}

</style>
<body>
<div class="bookshelf-container">\n`;

	books.forEach((element) => {
		outputStr = outputStr.concat(`\t${element.htmlRepr()}\n`);
	});

	outputStr = outputStr.concat(`</div>`);

	return outputStr;
}

class Bookshelf extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = ConstructHTMLCode([
			new Book(
				"Improbable Magic For Cynical Witches",
				"https://goodreads.com/book/show/56197346",
				"images/bookshelf/ImprobableMagicForCynicalWitches.jpg"
			),
			new Book(
				"The Crucible",
				"https://goodreads.com/book/show/17250",
				"images/bookshelf/TheCrucible.jpg"
			),
			new Book(
				"Get It Together, Delilah!",
				"https://goodreads.com/book/show/34229387",
				"images/bookshelf/GetItTogetherDelilah.jpg"
			),
		]);
	}
}

customElements.define("book-shelf", Bookshelf);
