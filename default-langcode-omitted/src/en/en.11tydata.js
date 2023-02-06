module.exports = {
	/*
		With English being the default language,
		remove the `/en/` prefix from all permalinks.
	*/
	permalink: data => {
		const stem = data.page.filePathStem.replace(/^\/en\//, '');
		const ext = data.page.outputFileExtension;
		if (stem === 'index' || stem.match(/\/index$/)) {
			return `${stem}.${ext}`;
		}
		return `${stem}/index.${ext}`;
	}
};