const bootstrapIcons = {
	url: window.bootstrapIconsURL || 'bootstrap-icons.svg',
	update() {
		/**
		 * @type {HTMLElement[]}
		 */
		const icons = [...document.querySelectorAll('[data-bi]')];

		for (let icon of icons) {
			const iconName = icon.dataset.bi;
			const iconWidth = icon.dataset.biWidth || '1em';
			const iconHeight = icon.dataset.biHeight || '1em';

			const innerHTML =
`<svg class="bi" width="${iconWidth}" height="${iconHeight}" fill="currentColor">
	<use xlink:href="${bootstrapIcons.url}#${iconName}"/>
</svg>`

			icon.innerHTML = innerHTML;
		}
	}
};

bootstrapIcons.update();