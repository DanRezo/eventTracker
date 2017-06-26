angular.module('shoeModule')
	.component('shoeList', {

	templateUrl : 'app/shoe/shoeList/shoeList.component.html',

	controller : function(shoeService, $filter) {

		var vm = this;

		vm.shoes = [];


	shoeService.index().then(function(response) {
				vm.shoes = response.data;
			})
		
		vm.selected = null;
		vm.showTable = true;

		vm.click = function(addShoe) {
			shoeService.create(addShoe)
			.then(function(c) {
				vm.reload();
			})
		}

		vm.displayShoe = function(s) {
			vm.selected = s;
			vm.showTable = false;
		}

		vm.displayTable = function() {
			vm.showTable = true;
			vm.selected = null;
		}

		vm.updateShoe = function(s) {
			return shoeService.update(s)
			.then(function(n) {
				vm.reload();
				return n;
			})
		}

		vm.deleteShoe = function(id) {
			shoeService.destroy(id)
			.then(function(d) {
				vm.reload();
			})
		}

		vm.reload = function() {
			shoeService.index()
			.then(function(response) {
				vm.shoes = response.data;
			})
		}

		vm.warn = function() {
			if (vm.shoes.totalMileage() > 400)
				return 'danger';
			if (vm.shoes.totalMileage() >= 300)
				return 'warning';
			return 'safe';
		}
		vm.reload();

	},

	controllerAs : 'vm'
})