var recommend = angular.module("recommendCtrl", []);

recommend.controller("recommendController", [
  "$scope",
  function ($scope) {
    $scope.title = "Recommend a movie";
  },
]);
