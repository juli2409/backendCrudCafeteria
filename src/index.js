import express from 'express';


// configuracion de puerto
const app = express();
// crear una instancia de express
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('Estoy en el puerto ' + app.get('port'));
})
