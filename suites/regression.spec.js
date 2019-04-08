describe ("this is a API section",function(){
    var request = require("request");
    var baseUrl = "https://qa-us-crs-public-api.azurewebsites.net";
    var util = require("util");
	//var fs = require('fs');
    // Do a post call
    //describe('This is a post call @post', function () {
        it('Do a post call @post', function (done) {
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
                        expect(response.statusCode).toBe(200);
                       console.log(body)
                       console.log(response.statusCode);
                        done();
                    })
        })
        
        // Get call
        xit('do a @getcall', function(done) {
            console.log("get method in cases")
            request.get({ url: baseUrl + '/v1/cases' },
                function(error, response, body) {
                    var bodyObj = JSON.parse(body);
                    console.log(body);
                    console.log(response.statusCode);
                    done();
                });
        });
    
    
    // Get id
    var id='5ca59e19b6fb8d11f0367fc4';
    
       it('do a @getid', function(done) {
            console.log("get/id method in cases")
            request.get({ url: baseUrl + '/v1/cases/' + id},
           
                function(error, response, body) {
                    var bodyObj = JSON.parse(body);
                    expect(response.statusCode).toBe(200);
                    console.log(body);
                    console.log(response.statusCode);
                    done();
                });
        });
    
    // Get Title
    var title='test';
        xit('done a @get_title call', function(done) {
            console.log("get/title method in cases")
            request.get({ url: baseUrl + '/v1/cases/title/{title}' + title},
           
                function(error, response, body) {
                    var bodyObj = JSON.parse(body);
                    expect(response.statusCode).toBe(200);
                    console.log(body);
                    console.log(response.statusCode);
                    done();
                });
        });
  
    // Delete callvar request = require("request");
    var id='5c921320c4548a10acfa166c';
    
        it('do a call for @delete', function(done) {
            console.log("delete method in cases")
            request.delete({ url: baseUrl + '/v1/cases/' + id},
           
                function(error, response, body) {
                    var bodyObj = JSON.parse(body);
						
                    console.log(body);
					//fs.appendFileSync('message.json', body + body + body + body);
                    console.log(response.statusCode);
                    done();
                });
        });
    
      });
    
    