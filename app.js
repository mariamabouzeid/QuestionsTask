/**
 * Created by Mariam on 27-Jul-18.
 */

var App = angular.module('App', ['ngRoute'])
    .config(function($routeProvider){
    $routeProvider.when('/questions',
        {
            templateUrl: 'template/questions.html'
        });
    $routeProvider.when('/score',
        {
            templateUrl: 'template/score.html'
        });
    $routeProvider.otherwise({redirectTo: '/'});
});

App.controller('mainController', function($scope, $location) {
    $scope.startQuestions = function() {
        $location.replace();
        $location.url('/questions');
    }
});
