var home = angular.module("homePageCtrl", []);

home.controller("homeController", [
  "$scope",
  "$http",
  "homeContent",
  function ($scope, $http, homeContent) {
    $scope.headerText = homeContent.getHeader();
    $scope.loading = true;
    homeContent
      .getData()
      .then((res) => {
        let movies = [];
        let API_KEY = "b11ee57d";
        res.data.map((movie) => {
          let { title, year } = movie;
          let api_url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=${API_KEY}`;
          $http
            .get(api_url)
            .then((res) => movies.push(res.data))
            .catch((err) => console.log(err));
        });
        $scope.data = {
          status: true,
          movies: movies,
        };
        $scope.loading = false;
      })
      .catch((err) => {
        console.log(err);
        $scope.loading = false;
        $scope.data = {
          status: false,
          error: "Error fetching data",
        };
      });

    $scope.removeMovie = function (movie) {
      console.log(movie);
    };
  },
]);
