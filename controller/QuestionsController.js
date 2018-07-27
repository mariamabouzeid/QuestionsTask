'use strict';

App.controller('questCtrl', ['$scope','$rootScope','$http',function($scope, $rootScope, $http) {

    $http.get('questWans.json')
        .then(function(res){
            $scope.allQuestions = res.data;
        });
    $rootScope.result = 0;

    $scope.getQuestion = function (q, v){

        $rootScope.result = $rootScope.result + parseInt(v);
        console.log("V value is: "+v);
        console.log("Result value is: "+$rootScope.result);
    };

    console.log("Total result inside QuestionsController: "+$rootScope.result);
}]);