const express = require('express');

const app = express();

const fs = require('fs');
const heroes = JSON.parse( fs.readFileSync( __dirname + '/data/heroes.json','utf-8' ) );

app.get('/', (req, res)=>{
    res.send('​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.');
});

app.get('/heroes', (req, res)=>{
    res.send(heroes);
});

app.get('/heroes/:id', (req, res)=>{
    let heroeEncontrado = heroes.filter(heroe=>heroe.id == Number(req.params.id));
    if(heroeEncontrado.length > 0){
        res.send('Hola mi nombre es ' + heroeEncontrado[0].nombre + ' y soy ' + heroeEncontrado[0].profesion);
    }
    else{
        res.send('No tenemos en nuestra base ningún heroe ni heroína con ese id');
    }
});


app.get('/heroes/:id/:resenia?', (req, res)=>{
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
});

app.get('/comentarios', (req, res)=>{
    res.send('Práctica MVC de alumnos de digital house');
})

app.listen(3000, ()=>{
    console.log('servidor en puerto 3000');
});