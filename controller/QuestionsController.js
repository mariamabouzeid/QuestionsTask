'use strict';

App.controller('questCtrl', function($scope, $http) {

    $http.get('questWans.json')
        .then(function(res){
            $scope.allQuestions = res.data;
        });

    $scope.result = 0;


    $scope.userAnswers = {
        question1 : 0,
        question2 : 0,
        question3 : 0,
        question4 : 0
    }

    $scope.getQuestion = function (q, v){

        switch (q){
            case 1 : $scope.userAnswers.question1 = v;
            case 2 : $scope.userAnswers.question2 = v;
            case 3 : $scope.userAnswers.question3 = v;
            case 4 : $scope.userAnswers.question4 = v;
        }

        console.log("Result value is: " +$scope.result);
        $scope.result = parseInt($scope.userAnswers.question1) +  parseInt($scope.userAnswers.question2) +
            parseInt($scope.userAnswers.question3) +  parseInt($scope.userAnswers.question4);

        console.log("V value is: " + v);
        console.log("Result value is: " + $scope.result);
    };

});