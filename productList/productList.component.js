angular.module("productList").
component("productList",{
    bindings:{
        filter: "<",
        maxval: "@",
        minval: "@",
        search:"@",
        addCart: '&'

    },
    templateUrl:"productList/productList.template.html",
    controller: ['$http','$log','$scope',"cartService",function ProductListController($http,$log,$scope){
        // ctrl and this both refers to the controller.
        let $ctrl = this;
        $scope.addProduct = (product)=>{
            $ctrl.addCart({product:product});
        }
        $http.get("JSON/products.json").then((response)=>{
            $ctrl.products = response.data;

        },(e)=>{
            $log.info(e)
        })
        
        $ctrl.withinRange = function(prop, min, max){
            return function(item){
              return item[prop] > min && item[prop] < max ;
            }
        }
        
    }]

});
