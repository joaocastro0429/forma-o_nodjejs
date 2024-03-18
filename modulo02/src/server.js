import express from 'express'

const app=express()


const livros = [
    {
      id: 1,
      titulo: "O Senhor dos Anéis"
    },
    {
      id: 2,
      titulo: "O Hobbit"
    } 
  ]
  app.use(express.json())
  app.get("/",(request,response)=>{
    return response.json({messge:"apredendo node"}) 
  })

  app.get("/livros",(request,response)=>{
    return response.status(200).json(livros)
  })
  app.post("/livros",(request,response)=>{
    const{id,titulo}=request.body
    livros.push({
        id,
        titulo,
        
    })
    return response.status(201).send({messge:"livro cadastrado com sucesso!"})
  })
  app.get("/livros/:id", (request, response) => {
    const indexId = Number(request.params.id);
    
    const livro = livros.find(livro => livro.id === indexId);
  
    return response.json(livro)
  });


 app.put("/livros/:id", (request, response) => {
    const {titulo}=request.body
    const indexId = Number(request.params.id);
    
    const livro = livros.find(livro => livro.id === indexId);
    if(livro){
        livro.titulo = titulo; 
    }
  
    return response.json(livros[livro])
  }); 
  
  app.delete("/livro/:id",(request,response)=>{
    const indexId = Number(request.params.id);
    
    livros.splice(indexId,1)

    response.status(400).json({messge:"excluido com sucesso"})

  })
  app.listen(3000)