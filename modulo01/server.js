import http from 'http'

const rota={
    '/':'curso de express Api ',
    '/livros':'Entrei na rota de livros',
    '/autores':'Entrei na rota de autores'
}


const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type": "text/plain"})
    res.end(rota[req.url])
})


server.listen(8080)