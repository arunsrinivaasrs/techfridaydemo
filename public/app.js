/**
 * Created by arun on 13/5/15.
 */


var acad360 = acad360 || {};

acad360.myApp = angular.module('AdeskProductPortal',['ngRoute','ui.bootstrap']);

acad360.myApp.config(function($routeProvider){

   $routeProvider.when('/',{

        controller:'HomePageController',
        templateUrl : 'views/home.html'
   }).when('/productlist',{

        controller:'ProductController',
        templateUrl:'views/products.html'
    });


});

acad360.myApp.controller('HomePageController',function($scope){

        $scope.blabla = "blabla";
        $scope.textmodel = "Initialblabla";
});

acad360.myApp.controller('ProductController',function($scope,ProductList){

                var promise = ProductList.getProductList();
                console.log("Inside ProductController");
                promise.then(function(products){
                    $scope.productlist = products.data;

                },function(error){});

                $scope.productHeading = "Autodesk Suite of Products";

});

acad360.myApp.service('ProductList',function($http){

            this.getProductList = function(){

                return $http.get('http://localhost:7070/autodesk/products').
                    success(function(data,status){

                            console.log("success returning data" + data);
                    }).
                    error(function(data,success){

                        console.log("Failed to fetch data");
                    });

            }
});

