'use strict';

angular.module('postTestbench', ['ngRoute', 'summernote'])

	.config(function($routeProvider) {
		$routeProvider

		.when('/', {
			templateUrl: 'pages/sampleForm.html',
			controller: 'MainFormController'
		})

		.otherwise({
			redirectTo: '/'
		})
	})

;