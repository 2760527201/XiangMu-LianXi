var http = require("http");
var server = http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    var str="2019/5/8 22:20:30";
    res.end(JSON.stringify(new Date(str).getTime()));
})
server.listen(8080)