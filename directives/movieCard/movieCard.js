var movieCard = angular.module("movieCard", []);

movieCard.directive("movieCard", [
  function () {
    return {
      restrict: "E",
      scope: {
        movie: "=",
        movies: "=",
      },
      replace: true,
      templateUrl: "directives/movieCard/movieCard.html",
      controller: function ($scope) {
        $scope.text = "A movie card";
        $scope.removeMovie = function (movie) {
          $scope.movies = $scope.movies.filter(
            (m) => m.imdbID !== movie.imdbID
          );
        };
        $scope.movieUrl = `${$scope.movie.Title}/${$scope.movie.Year}`;
      },
    };
  },
]);
