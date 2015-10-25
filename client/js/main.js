var app = angular.module("Stories", []);

app.controller("PostsCtrl", function($scope, $http) {
  
  // GET JSON data
  $http.get('js/data.json').
    success(function(data, status, headers, config) {
      $scope.posts = data; //save json data to our posts object
    }).
    error(function(data, status, headers, config) {
      // log error
    });
  
});