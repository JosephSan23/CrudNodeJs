import express from "express"

//Initialization
const app = express();
//Settings
app.set('port', process.env.PORT || 3000);
//Middlewares

//Routes

//Public files

//Run Server
app.listen(app.get('port'), () =>
    console.log('Server listening on port', app.get('port')));