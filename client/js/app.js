var myApp = angular.module('myApp', ['ngRoute']).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'homeController'});
    // $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'aboutController'});
    // $routeProvider.when('/contact', {templateUrl: 'partials/contact.html', controller: 'contactController'});
    // $routeProvider.when('/projects', {templateUrl: 'partials/projects.html', controller: 'projectsController'});    

    // $routeProvider.when('/projects/customerapi', {templateUrl: '/partials/projects/customerapi.html', controller: 'customerApiController'});
    // $routeProvider.when('/projects/chat', {templateUrl: '/partials/projects/chat.html', controller: 'chatController'});    
   
    //if no valid routes are found, redirect to home
    $routeProvider.otherwise({redirectTo: '/home'});
    
    $locationProvider.html5Mode({enabled: true, requireBase: false});
}])
// .filter('startFrom', function(){
//     return function(data, start){
//         return data.slice(start);
//     };
// });