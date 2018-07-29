/**
 * Created by Mariam on 27-Jul-18.
 */

var App = angular.module('App', ['ngRoute'])
    .config(function($routeProvider){
    $routeProvider.when('/questions',
        {
            templateUrl: 'template/questions.html',
            controller: 'questCtrl'
        });
    $routeProvider.when('/score/:result',
        {
            templateUrl: 'template/score.html',
            controller: 'scoreCtrl'
        });
    //$routeProvider.otherwise({redirectTo: '/'});
});

App.controller('mainController', function($scope, $location) {
    $scope.startQuestions = function() {
        $location.replace();
        $location.url('/questions');
    }
});
