
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'Locale: en-us', locale:'en-us' });
};

exports.locale = function (req, res) {
	var locale = req.param('locale');
	res.render('index', { title: 'Locale: ' + locale, locale:locale });
};

exports.translation = function (req, res) {
	var locale = req.param('locale');
	res.json(require('../i18n/' + locale + '.json'));
};