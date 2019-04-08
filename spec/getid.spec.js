var request = require("request");

var baseUrl = "https://qa-us-crs-public-api.azurewebsites.net";
var util = require("util");
var id='5c94985c75a5881fdc9a08bf';

describe('id', function() {
    it('id', function(done) {
        console.log("get/id method in cases")
        request.get({ url: baseUrl + '/v1/cases/' + id},
       
            function(error, response, body) {
                var bodyObj = JSON.parse(body);
                console.log(body);
                console.log(response.statusCode);
                done();
            });
    });
});