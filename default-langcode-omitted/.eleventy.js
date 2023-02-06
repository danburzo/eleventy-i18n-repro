const { EleventyI18nPlugin } = require('@11ty/eleventy');

module.exports = config => {

	config.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: 'en'
	});

	return {
		dir: {
			input: 'src',
			output: 'dist'
		},
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk'
	};
};