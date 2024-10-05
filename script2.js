

const http=require("http")
const fs=require("fs")
const path=require("path")



 const server=http.createServer((request,response)=>{
    if(request.url==="/"){
        fs.readFile(path.join(__dirname,"display","index.html"),"utf8",(err,data)=>{
            if(err) throw err;
    
        response.writeHead(200,{"Content-Type":"text/html"})
        response.end(data)
        })
    }


    if(request.url==="/about"){
        fs.readFile(path.join(__dirname,"display","about.html"),"utf8",(err,data)=>{
            if(err) throw err;
    
        response.writeHead(200,{"Content-Type":"text/html"})
        response.end(data)
        })
    }
    
    

})
const PORT=process.env.PORT||3001

server.listen(PORT,()=>console.log(`server is running ${PORT}`));