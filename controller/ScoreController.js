/**
 * Created by Mariam on 27-Jul-18.
 */

App.controller('scoreCtrl', function ($scope, $routeParams) {

    $scope.result = $routeParams.result;

        console.log("Total result inside ScoreController: "+$routeParams.result);
    });
