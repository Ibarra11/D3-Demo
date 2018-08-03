const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();

app.use(express.static('build'));

const PORT =  3005;

massive(process.env.CONNECTION_STRING)
.then(db =>{
    console.log('db connected');
    app.set('db', db);
})
.catch(err => console.log(err));


app.get('/api/venues', (req,res) =>{
    req.app.get('db').venues()
    .then(venues => res.send(venues))
})


app.listen(PORT, () => console.log('Listeninig'));