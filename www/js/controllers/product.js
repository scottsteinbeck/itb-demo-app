angular.module('starter.controllers')

.controller('ProductsCtrl', function($scope,ProductService) {
	ProductService.query(null,function(data){
		$scope.products = data.products;
	});
})

.controller('ProductCtrl', function($scope, $stateParams,ProductService,InventoryService) {
	ProductService.get({id: $stateParams.productID},function(data){
		$scope.product = data.product;
	});
	InventoryService.get({id: $stateParams.productID},function(data){
		$scope.inventory = data.inventory;
	});
});
