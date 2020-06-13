var home = angular.module("homeService", []);

home.factory("homeContent", [
  "$http",
  function ($http) {
    return {
      getHeader: function () {
        return "Here are just a few of the movies I have seen this year";
      },
      getData: function () {
        return $http.get("https://movie-lib-backend.herokuapp.com/api/movies/");
      },
    };
  },
]);
