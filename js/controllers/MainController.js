app.controller('MainController', ["$scope", "nyt", function($scope, nyt) {
  this.submitSearch = function(search) {
    nyt.submitSearch(search).success(function(data) {
      console.log(data)
      $scope.list = []
      for (i=0;i<data.data.results.length; i++) {
        var movie = {
          title: data.data.results[i].display_title,
          rating: data.data.results[i].mpaa_rating,
          summary: data.data.results[i].summary_short,
          date: data.data.results[i].opening_date,
          review: data.data.results[i].url
        }
        $scope.list.push(movie);
    }
  }).error(function(data) {
    alert("Something went wrong");
  })

  }
}]);
