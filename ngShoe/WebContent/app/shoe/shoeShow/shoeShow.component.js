angular.module('shoeModule')
	.component('shoeShow', {
	
		templateUrl: 'app/shoe/shoeShow/shoeShow.component.html',
		
		controller: function(){
			var vm = this;
			
			vm.editMode = false;
			
			vm.setEditShoe = function(){
				vm.editShoe = angular.copy(vm.shoe);
				vm.editMode = true;
			}
			
			vm.save = function(){
				vm.onUpdate({shoe: vm.editShoe})
				.then(function(u){
					vm.shoe = u.data;
				});
				vm.editShoe= null;
				vm.editMode= false;
			}
			
			
		},
		controllerAs: 'vm',
		
		bindings: {
			shoe: '<',
			onUpdate: '&',
			goBack: '&'
		}
		
	})
	
	