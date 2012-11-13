/*jslint nomen: true, plusplus: true */
/*global angular:true, require:true */

// Application object
// ------------------
var app = {};

app.locale = angular.module('locale', ['ngResource']);


// Controller

app.locale.controller('LocaleCtrl', function ($scope, $location, $locale, Translation) {});

// Router

app.locale.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	//$locationProvider.html5Mode(true);
	$routeProvider
		.when('/', {templateUrl:'/template/locale.html', controller:'LocaleCtrl'});
}]);

// Filter

app.locale.filter('localize', ['$locale', 'Translation', function ($locale, Translation) {

	var translations = Translation.get({locale:$locale.id});

	return function (input) {
		return translations[input];
	};
}]);

// Resource

app.locale.factory('Translation', ['$resource', function ($resource) {
	return $resource(
		'/translation/:locale',
		{
			"locale":"@locale"
		},
		{
			"update":"PUT"
		}
	);
}]);