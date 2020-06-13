var route = angular.module("appRoute", ["ngRoute"]);

route.config([
  "$routeProvider",
  "$locationProvider",
  function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when("/", {
        templateUrl: "views/home/home.html",
        controller: "homeController",
      })
      .when("/:title/:year", {
        templateUrl: "views/movieDetails/movieDetails.html",
        controller: "movieController",
      })
      .when("/recommend", {
        templateUrl: "views/recommend/recommend.html",
        controller: "recommendController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
