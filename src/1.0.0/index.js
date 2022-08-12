const express= require('express');
const app = express();
const cors = require('cors');

app.use('/images',express.static(__dirname +'/uploads'));

app.set('port',process.env.port || 3055);
app.set('json spaces',2);
app.use(express.json());
app.use(cors());

app.use('/1.0.0',require('./routes/Post'))
app.use('/1.0.0',require('./routes/Usuario'))
app.use('/1.0.0',require('./routes/Postulacion'))
app.use('/1.0.0',require('./routes/imagenes'))
app.use('/1.0.0',require('./routes/Contactanos'))

const server = app.listen(app.get('port'),(req,res)=>{
    console.log(`Server started at http://localhost:${app.get('port')}`)
  })
  