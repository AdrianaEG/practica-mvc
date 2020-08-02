const express = require('express');
const app = express();

//Archivos de rutas
const mainRoutes = require('./routes/main');
const heroesRoutes = require('./routes/heroes');

app.use('/', mainRoutes);
app.use('/heroes', heroesRoutes);

app.listen(3000, ()=>{
    console.log('servidor en puerto 3000');
});