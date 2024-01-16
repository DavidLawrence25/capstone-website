function ConstructHTMLCode() {
	return `
<style>
.copyright-footer {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	background-color: var(--dark-gray);
}
</style>
<body>
	<div class="tiny-text centered-text copyright-footer">
		<hr width="99%">
		&copy;2022-2024 Rose Thorne. All rights reserved.
		<div class="spacer" style="height: 0.5vmin;"></div>
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
