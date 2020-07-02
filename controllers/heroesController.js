
const fs = require ('fs')
dbHeroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8')) //./ toma como referencia de una la carpeta raiz

const heroes={
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        dbHeroes.forEach((heroe)=>{

            res.write(heroe.nombre + `\n\n`);
            res.write(heroe.profesion + `\n\n`);
            res.write(heroe.pais + `\n\n`);
            res.write(heroe.resenia + `\n\n`);
            
        })
        res.end()
    },
    detalle:(req,res)=>{
        let idHeroe = req.params.id;
        dbHeroes.forEach((heroe)=>{
            if(heroe.id== idHeroe){
                res.send('Hola soy ' + heroe.nombre + ' y soy ' + heroe.profesion)}
            })
            res.end("No se encuentra al heroe que buscabas")
            },
    bio: (req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        let idHeroe = req.params.id;
        let ok = req.params.ok;

        dbHeroes.forEach((heroe)=>{
            if(heroe.id == idHeroe){
            if(ok == 'ok'){
                res.write(heroe.nombre + '\n\n');
                res.write(heroe.resenia);
                res.end()
            }else{
                res.send(heroe.nombre + 'dice: Lamento que no quieras saber mas de mi')
            }
        }
        
    })
    }

}




module.exports=heroes