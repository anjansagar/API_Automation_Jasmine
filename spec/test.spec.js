
var request = require("request");
var http = require('http');

var fs = require('fs');

var baseUrl = "https://jsonplaceholder.typicode.com";
var util = require("util");
//testcase 1
describe('1', function () {

  
    it('userId @first', function (done) {
        var message = "sunt aut facere repellat provident occaecati excepturi optio reprehenderit";

    expect(message).toMatch(/occaecati/);
	request.get({ url: baseUrl + '/posts/1' }, function (error, response, body) {
		console.log('Body Type --> ', typeof body);
		var bodyObj = JSON.parse(body);
		expect(response.statusCode).toBe(200);
		//fs.writeFileSync("sample.json", body);
		console.log('status code -->', response.statusCode);
		console.log(body);
		fs.appendFileSync('message.json', body);
		done();
		});
    });
});
// testcase 2
describe('1', function() {
    it('test @jas', function(done) {
      
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

