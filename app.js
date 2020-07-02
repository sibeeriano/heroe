
const express = require('express');
const app = express();

//rutas
const routeMain = require("./routes/main")
const routeHeroes = require("./routes/heroes")


//servidor
app.listen(3030,() =>console.log("Server working"))

app.use('/', routeMain)  //request,response
app.use('/heroes', routeHeroes)//request, response