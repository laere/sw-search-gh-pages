var baseURL = 'http://swapi.co/api';


var service = {
  get: function(url) {
      return fetch(baseURL + url)
      //returning a promise
      //function callback that will promise us something
      .then(function(response) {
            return response.json();
        });
    }
};

module.exports = service;
