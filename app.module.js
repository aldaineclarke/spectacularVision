let app = angular.module('glassShop',["ngRoute","productList"]);

// Sets up the routes that will be used for the application
app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/products",{
        templateUrl: "views/products.html",
    })
    .when("/home",{
        templateUrl: "views/home.html",
    })
    .when("/login",{
        templateUrl: "views/login.html",
    })
    .when("/cart",{
        templateUrl: "views/cart.html",
    })
    .when("/register",{
        templateUrl: "views/register.html",
    })
    .otherwise({redirectTo: "/home"});


    $locationProvider.html5Mode(true);

}])

app.controller("mainController",["$scope", "$location","cartService","userService", function($scope, $location, cartService, userService) {
    $scope.cartObj = cartService;
    $scope.userObj;




    $scope.getQuery = () =>{
        $location.path("/products");
        let searchbar = document.querySelector(".searchbar");
        $scope.searchQuery = searchbar.value;
    } 
    $scope.addCart = (item) =>{
        if(!$scope.userObj){
            $location.path("/login");
            return ;
        }
        $scope.cartObj.addToCart(item);
    }
    $scope.addUser = (user)=>{
        $scope.cartObj.cart = [];
        $scope.userObj = user;
        $location.path("/products");
    }
    $scope.loginCheck = (user) =>{
        console.log(user);
        $scope.cartObj.cart = [];
        user.username = "Testuser"
        $scope.userObj = user;

        $location.path("/products");

    }

}])




