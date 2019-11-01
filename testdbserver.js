var http = require('http');
var fs = require('fs');
var url = require('url');
var data;

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var fname = queryData.filename;
    console.log(fname);

    fs.readFile(`${fname}.json`,'utf8',function(err,jsondata){
        data=jsondata;
        console.log(data);
        response.writeHead(200);
        response.end(data);
    });
    
});
app.listen(3000);