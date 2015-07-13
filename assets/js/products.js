angular.element(document).ready(function(){

	angular.module('myApp', ['ui.bootstrap']);

    angular.module('myApp').controller('myCtrl', ['$scope','store','$modal',function ($scope,store,$modal) {
            $scope.search = '';
            $scope.products = [];
            $scope.categories = [];
            $scope.manuFilter = [];
            $scope.filteredProducts =  function(product) {
            	if($scope.manuFilter.length == 0)
            		return product;

		        if ($scope.manuFilter.length > 0) {
		            if ($.inArray(product.manufacturer, $scope.manuFilter) > -1 || 
		            	$.inArray(product.storage, $scope.manuFilter) > -1 ||
		            	$.inArray(product.os, $scope.manuFilter) > -1 ||
		            	$.inArray(product.camera, $scope.manuFilter) > -1)
		                return product;

		        }

		        return;
		        
		        
		    };
            
            //$scope.categories = store.getCategories();
            $scope.products = store.getProducts();

            
            $scope.filterProductsByCategory = function(category) {
		        var i = $.inArray(category, $scope.manuFilter);
		        if (i > -1) {
		            $scope.manuFilter.splice(i, 1);
		        } else {
		            $scope.manuFilter.push(category);
		        }
		        console.log($scope.manuFilter);
		    };

		    $scope.openDetails = function (product) {
		    	console.log(product);
		    	$scope.modelProduct = product;
			    var modalInstance = $modal.open({
			      animation: true,
			      templateUrl: 'myModalContent.html',
			      controller: 'ModalInstanceCtrl',
			      size: 'lg',
			      resolve: {
			      	modelProduct: function(){
			      		return $scope.modelProduct;
			      	}
			      }
			    });
			};


        }])
        .factory('store',function(){            
            var products  = [{"id":1,"name":"Sony Xperia Z3","price":899,"manufacturer":"Sony","storage":"16","os":"Android","camera":"15","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/sony-xperia-z3.jpg","large":"assets/images/sony-xperia-z3-large.jpg"}},{"id":2,"name":"Iphone 6","price":899,"manufacturer":"Apple","storage":"16","os":"iOS","camera":"8","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/iphone6.jpg","large":"assets/images/iphone6-large.jpg"}},{"id":3,"name":"HTC One M8","price":899,"manufacturer":"HTC","storage":"32","os":"Android","camera":"5","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/htc-one.jpg","large":"assets/images/htc-one-large.jpg"}},{"id":4,"name":"Galaxy Alpha","price":899,"manufacturer":"Samsung","storage":"32","os":"Android","camera":"12","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/galaxy-alpha.jpg","large":"assets/images/galaxy-alpha-large.jpg"}},{"id":5,"name":"Nokia Lumia","price":450,"manufacturer":"Nokia","storage":"16","os":"Windows","camera":"5","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/nokia-lumia.jpg","large":"assets/images/nokia-lumia-large.jpg"}},{"id":6,"name":"Zte Nubia","price":399,"manufacturer":"ZTE","storage":"32","os":"Android","camera":"12","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/zte-nubia.jpg","large":"assets/images/zte-nubia-large.jpg"}},{"id":7,"name":"Samsung Galaxy S5","price":399,"manufacturer":"Samsung","storage":"16","os":"Android","camera":"15","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/galaxy-s5.jpg","large":"assets/images/galaxy-s5-large.jpg"}},{"id":8,"name":"Iphone 5S","price":399,"manufacturer":"Apple","storage":"16","os":"iOS","camera":"8","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ipsum in efficitur pharetra. Maecenas luctus ante in neque maximus, sed viverra sem posuere. Vestibulum lectus nisi, laoreet vel suscipit nec, feugiat at odio. Etiam eget tellus arcu.","rating":4,"image":{"small":"assets/images/iphone5s.jpg","large":"assets/images/iphone5s-large.jpg"}}];
            return {
                
                getProducts : function(){
                    return products;
                }
            };
        });

		angular.module('myApp').controller('ModalInstanceCtrl', function ($scope, modelProduct) {

			  $scope.modelProduct = modelProduct;
			  console.log(modelProduct);
			  
		});	
    
    angular.bootstrap(document,['myApp']);
});