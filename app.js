let express = require('express');

let app = express();

const fs = require('fs');
let heroesData = JSON.parse( fs.readFileSync( __dirname + '/data/heroes.json','utf-8' ) );

app.get('/', (req, res)=>{
    res.send('​Ni Superman, Iron Man o La Mujer Maravilla son tan importantes cómo las y los héroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos.');
});

app.get('/heroes', (req, res)=>{
    res.send(heroesData);
});

app.get('/heroes/:id/:profesion?', (req, res)=>{
    let heroeConEseId = heroesData.filter(heroe=>{
        return ((Number(req.params.id)) === heroe.id);
    });
    
    if(heroeConEseId.length > 0){
        res.send('Hola mi nombre es ' + heroeConEseId[0].nombre + ' y soy ' + heroeConEseId[0].profesion);
    }else{
        res.send('No tenemos en nuestra base ningún héroe ni heroína con ese id');
    }

    
})

app.listen(3000, ()=>{
    console.log('servidor en puerto 3000');
});