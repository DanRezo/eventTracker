angular.module('shoeModule')
	.filter('shoeBrand', function() {
	return function(shoes, brand) {
		var results = [];
		if (type == 'all') {
			return shoes;
		} else {

			shoes.forEach(function(s) {
				s.brand.forEach(function(t) {
					if (t.brand == s) {
						results.push(s);
					}
				});
			})
			return results;
		}
	}
})