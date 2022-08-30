var MyApp = angular.module("UserApp", [
    "ui.router", 
	"oc.lazyLoad"
]);

  MyApp.config([ "$ocLazyLoadProvider", function($ocLazyLoadProvider) {
       $ocLazyLoadProvider.config({
           // options
       });
   }]);

MyApp.config(['$stateProvider', '$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {
   $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/"); 

   
    $stateProvider

        .state('home', {
		    url: "/",
            templateUrl: "views/home.html",  
            data: {pageTitle: 'Home'},
            controller: "HomeController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'UserApp',
                        files: [
						   'controllers/HomeController.js',
                        ] 
                    });
                }]
            }
			
        })
		.state('aboutus', {
		    url: "/aboutus",
            templateUrl: "views/aboutus.html",  
            data: {pageTitle: 'aboutus'},
            controller: "AboutController",
			
        })
		.state('contact', {
		    url: "/contact",
            templateUrl: "views/contact.html",  
            data: {pageTitle: 'Contact'},
            controller: "ContactController",
        });
}]);

MyApp.controller('HeaderController', ['$rootScope', '$scope', function($rootScope, $scope) {
	
}]);

MyApp.controller('AboutController', ['$rootScope', '$scope', function($rootScope, $scope) {
	  $scope.page='about';
	
}]);

MyApp.controller('ContactController', ['$rootScope', '$scope', function($rootScope, $scope) {
	
   $scope.page='contact';
	
}]);