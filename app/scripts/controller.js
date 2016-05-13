'use strict';

angular.module('postTestbench')

	.controller('MainFormController', ['$scope', function($scope) {
		$scope.msg = "submit nigga";

		$scope.sendFormData = function () {
			$.post('/test/deploy/post/form', $('#sampleForm').serialize())

			.done(function() {

			})

			.fail(function() {

			});
		}
	}])

;