var request = require("request");

var baseUrl = "https://qa-us-crs-public-api.azurewebsites.net";
var util = require("util");

describe('id', function() {
    it('id', function(done) {
        console.log("get method in cases")
        request.get({ url: baseUrl + '/v1/cases' },
            function(error, response, body) {
                var bodyObj = JSON.parse(body);
                console.log(body);
                console.log(response.statusCode);
                done();
            });
    });
});