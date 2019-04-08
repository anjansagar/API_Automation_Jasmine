var request = require("request");

var baseUrl = "https://qa-us-crs-public-api.azurewebsites.net";
var util = require("util");
var id='5c921320c4548a10acfa166c';

describe('id', function() {
    it('id', function(done) {
        console.log("delete method in cases")
        request.delete({ url: baseUrl + '/v1/cases/' + id},
       
            function(error, response, body) {
                var bodyObj = JSON.parse(body);
                console.log(body);
                console.log(response.statusCode);
                done();
            });
    });
});