
var App = angular.module('App', ['ngRoute']).config(function($routeProvider){
    $routeProvider.when('/score',
        {
            templateUrl: 'score.html'
        });
});

var result = [];
var score = 0;



App.controller('questCtrl', function($scope, $http) {
    $http.get('questWans.json')
        .then(function(res){
            $scope.allQuestions = res.data;
        });

    $scope.getQuestion = function (q, v){
        console.log(q);
        console.log(v);
        var obj = {};
        obj[q] = result.label;
        obj[v] = result.value;

        result.push(obj)
    };

    $scope.viewResult= function () {
        for(i in result){
            score = score + i.value;
            console.log("in");
        }
        console.log("in viewResult()");
        return score;
    };
    console.log("the score is: "+ score);
});