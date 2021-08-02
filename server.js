const express = require('express');
const app = express();
const apiRouter = require('./server/routes');
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/api/users', apiRouter);

app.listen(process.env.PORT || '3000', () =>{
    console.log(`Server is running on port :${process.env.PORT || '3000'}`)
})