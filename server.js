const express = require('express');
const app = express();
const apiRouter = require('./server/routes');
const cors = require('cors');

app.use(express.json());
app.use(cors());
//app.use('/api/users', apiRouter);

app.route('/')
		.get(function(req,res){
			res.sendFile(path.join(__dirname + '/index.html'));
	});

app.route('/api/users', (req, res) =>{
    res.json({"message":"Fetched successfully"});
    res.sendStatus(200);
});

app.listen();