var app = angular.module("app-root", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/list", {
            templateUrl : "views/list.html",
            controller : "listCtrl"
        })
        .when("/list-wrong", {
            templateUrl : "views/list-wrong.html",
            controller : "listWrongCtrl"
        })
        .when("/list-danger", {
            templateUrl : "views/list-danger.html",
            controller : "listDangerCtrl"
        })
        .when("/details", {
            templateUrl : "views/details.html",
            controller : "detailsCtrl"
        })
        .when("/reset", {
            templateUrl : "views/reset.html",
            controller : "resetCtrl"
        })
        .when("/user-guide", {
            templateUrl : "views/user-guide.html",
            controller : "userGuideCtrl"
        })
        .otherwise({
            templateUrl : "views/home.html",
            controller : "homeCtrl"
        });
});