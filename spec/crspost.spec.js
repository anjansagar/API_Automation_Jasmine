
var request = require("request");

var util = require("util");

describe('1', function () {
    it('1', function (done) {

       console.log("Post method in cases")

         request({
                method: 'POST', 
                uri: 'https://qa-us-crs-public-api.azurewebsites.net/v1/cases',
                headers   :    {
                    'content-type': 'application/json'
               }, 
               body: JSON.stringify({
                            "modified": "2019-03-20T12:51:49.846Z",
                            "modifiedBy": "string",
                            "created": "2019-03-20T12:51:49.846Z",
                            "createdBy": "string",
                            "id": "string",
                            "clientId": "string",
                            "caseId": "string",
                            "title": "string"
                          })
                },function(error, response, body){
                   console.log(body)
                   console.log(response.statusCode);
                    done();
                })
        })
    })

