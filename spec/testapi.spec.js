
var request = require("request");

var baseUrl = "https://jsonplaceholder.typicode.com";
var util = require("util");

describe('1', function() {
    it('1', function(done) {
      
           console.log("Sample\Post method in cases")
     
 request.post({ url: baseUrl + '/posts' },
 function(error, response, body) {
    var bodyObj = JSON.parse(body);
    
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1
    })
    
        console.log(body);

       console.log(response.statusCode);
        done();
    });
});
});