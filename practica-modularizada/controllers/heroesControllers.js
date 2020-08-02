const fs = require('fs');
const heroes = JSON.parse( fs.readFileSync( __dirname + '/../data/heroes.json','utf-8' ) );

module.exports = {
    index: (req, res)=>{
        res.send(heroes);
    },
    getById: (req, res)=>{
        let heroeEncontrado = heroes.filter(heroe=>heroe.id == Number(req.params.id));
        if(heroeEncontrado.length > 0){
            res.send('Hola mi nombre es ' + heroeEncontrado[0].nombre + ' y soy ' + heroeEncontrado[0].profesion);
        }
        else{
            res.send('No tenemos en nuestra base ningún heroe ni heroína con ese id');
        }
    },
    getByResenia: (req, res)=>{
        let heroeEncontrado = heroes.filter(heroe=>heroe.id == Number(req.params.id));
        if(heroeEncontrado.length > 0){
            if(req.params.resenia !== 'resenia'){
                res.send('Hola mi nombre es ' + heroeEncontrado[0].nombre + ' Mi desc es ' + heroeEncontrado[0].resenia.slice(0, 30));
            }
            else{
                res.send('Hola mi nombre es ' + heroeEncontrado[0].nombre + ' Mi desc es ' + heroeEncontrado[0].resenia);
            }
        }
        else{
            res.send('No tenemos en nuestra base ningún heroe ni heroína con ese id');
        }
    }
};