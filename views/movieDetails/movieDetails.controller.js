var movie = angular.module("movieDetailCtrl", []);

movie.controller("movieController", [
  "$scope",
  "$routeParams",
  "$http",
  function ($scope, $routeParams, $http) {
    let { title, year } = $routeParams;
    let s = $scope;
    s.loading = true;
    s.title = title;
    let API_KEY = "b11ee57d";
    let api_url = `https://www.omdbapi.com/?t=${title}&y=${year}&plot=full&apikey=${API_KEY}`;
    $http
      .get(api_url)
      .then((res) => {
        console.log(res.data);
        s.data = {
          status: true,
          movie: res.data,
        };
        s.loading = false;
      })
      .catch((err) => {
        s.data = {
          status: false,
          error: "Error fetching data",
        };
        s.loading = false;
      });
  },
]);
