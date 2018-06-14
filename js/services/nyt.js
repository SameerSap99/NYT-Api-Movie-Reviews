app.factory('nyt', ['$http', function($http) {
  return $http.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json',
  {params: {'api-key': "be3d9e8dfaaf40e5b236140e7b44e1a6"}})
    .then(function(data) {
      return data;
    },

    function(data) {
      return err;
    })
  },
  this.submitSearch = function($http, search) {
    return $http.get('https://api.nytimes.com/svc/movies/v2/reviews/search.json',
    {params: {'api-key': "be3d9e8dfaaf40e5b236140e7b44e1a6", 'query': search}})
      .then(function(data) {
        return data;
      },

      function(data) {
        return err;
      })
    }

])
