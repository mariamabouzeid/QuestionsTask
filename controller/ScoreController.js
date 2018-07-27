/**
 * Created by Mariam on 27-Jul-18.
 */

App.controller('scoreCtrl', ['$scope', '$rootScope',
    function ($scope, $rootScope) {

        $scope.res = 0;

        $scope.getResults = function () {
            for (var i in $rootScope.result) {
                $scope.res = $scope.res + parseInt(i.value);
            }
            return $scope.res;
        }
        console.log("Total result inside ScoreController: "+$rootScope.result);
    }]);
