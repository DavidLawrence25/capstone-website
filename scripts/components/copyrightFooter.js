function ConstructHTMLCode() {
	return `
<style>
.copyright-footer {
	position: fixed;
	bottom: 0.5%;
	left: 0;
	width: 100%;
}
</style>
<body>
	<div class="tiny-text centered-text copyright-footer">
		<hr></hr>
		&copy;2022-2023 Rose Thorne. All rights reserved.
	</div>
</body>
	`;
}

class CopyrightFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = ConstructHTMLCode();
	}
}

customElements.define(`copyright-footer`, CopyrightFooter);
