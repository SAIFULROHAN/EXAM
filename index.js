//Use the http module to create an HTTP server.

const http = require("http");
const fs = require("fs");
const server = http.createServer(function(req,res){
    if(req.url==="/"){
        res.end("This is the Home Page")
    }

   else if(req.url==="/about"){
        res.end("This is the About Page")
    }

   else if(req.url==="/contact"){
        res.end("This is the Contact Page")
    }

// File Create When Enter localhost5500/file-write

   else if(req.url==="/file-write"){
        fs.writeFile('demo.txt','Hello World',(err)=>{
            if(err){
                console.error(err);
                return res.status(404).end('Error Creating File Write.');
            }
            res.end('File Written Successfully.');
        });
    }
    else {
        res.end('404 Not Found');
    }
})

server.listen(5500,function(){
    console.log("it is listening on port 5500.")
})

