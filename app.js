var App = angular.module('App', []);

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

    $scope.calculateValues = function(){
        for(i in result){
            score = score + parseInt(i.value);
        }
        return score;
    }

    console.log(result);
    console.log(score);
});