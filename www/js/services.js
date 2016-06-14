var baseURL = "http://127.0.0.1:63015";

angular.module('starter.services', [])

.service('UserService', function ($resource) {
	return $resource(baseURL + '/api/v1/users/:id.json',{id: "@id"},{
		query	: {	method: 'GET'	},
		get		: {	method: 'GET'	},
		remove	: {	method: 'DELETE'},
		update	: {	method: 'PUT' 	},
		save	: {	method: 'POST'	}
	});
})
.service('ProductService', function ($resource) {
	return $resource(baseURL + '/api/v1/products/:id.json',{id: "@id"},{
		query	: {	method: 'GET'	},
		get		: {	method: 'GET'	},
		remove	: {	method: 'DELETE'},
		update	: {	method: 'PUT' 	},
		save	: {	method: 'POST'	}
	});
})
.service('InventoryService', function ($resource) {
	return $resource(baseURL + '/api/v1/products/:id/inventory.json',{id: "@id"},{
		query	: {	method: 'GET'	},
		get		: {	method: 'GET'	},
		remove	: {	method: 'DELETE'},
		update	: {	method: 'PUT' 	},
		save	: {	method: 'POST'	}
	});
})