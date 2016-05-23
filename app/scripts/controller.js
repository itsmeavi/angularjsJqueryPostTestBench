'use strict';

angular.module('postTestbench')

	.controller('MainFormController', ['$scope', function($scope) {
		$scope.msg = "submit nigga";

		$scope.imageUpload = function (files) {
			var data = new FormData();
			data.append('file', files[0]);

			$.ajax({
				data: data,
				type: 'POST',
				url: "URL",
                cache: false,
                contentType: false,
                processData: false,
                success: function(url) {
                    console.log(url);
                },
                error: function () {
                	console.log("ERROR");
                }
			});
		};

		$scope.sendFormData = function () {
			$.post('/test/deploy/post/form', $('#sampleForm').serialize())

			.done(function() {

			})

			.fail(function() {

			});
		}
	}])

;