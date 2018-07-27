'use strict';

App.controller('questCtrl', ['$scope','$rootScope','$http',function($scope, $rootScope, $http) {

    $http.get('questWans.json')
        .then(function(res){
            $scope.allQuestions = res.data;
        });
    $rootScope.result = [];

    $scope.getQuestion = function (q, v){
        console.log(q);
        console.log(v);
        var obj = {};
        obj[q] = $rootScope.result.label;
        obj[v] = $rootScope.result.value;

        $rootScope.result.push(obj)
    };
}]);