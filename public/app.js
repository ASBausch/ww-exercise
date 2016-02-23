/**
 * Created by manadab on 2/22/16.
 */
var app = angular.module('app',[]);

app.controller("toggleController", function($scope){
    console.log('I am a controller');

    $scope.currentBar = null;

    //onBarClick sets the current bar to the id of the tab that was clicked
    $scope.onBarClick = function(id) {
        console.log("I clicked");
        $scope.currentBar = id;
    };
    //isActive sets the currentBar to active so that the appropriate class is assigned via ng-class
    //ng-show reads if the is-active function is true and only shows when it is.
    $scope.isActive = function(id) {
        return $scope.currentBar === id;
    };


});
