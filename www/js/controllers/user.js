angular.module('starter.controllers')

.controller('UsersCtrl', function($scope,UserService) {
	UserService.query(null,function(data){
		$scope.users = data.users;
	});
})

.controller('UserCtrl', function($scope, $stateParams,UserService) {
	UserService.get({id: $stateParams.userID},function(data){
		$scope.user = data.user;
	});
});
