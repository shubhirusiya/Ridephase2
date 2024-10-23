const express =require('express');

const cors= require('cors');
const bodyParser = require('body-parser');
const app = express();

(app.use(bodyParser.json())) 
app.use(cors());







app.post('/api/auth',(req, res) => {
     data=req.body;


     console.log(data);

})

const PORT=process.env.PORT||5000;


app.listen(PORT,()=>{console.log(`LISTENING TO PORT ${PORT}`)});

