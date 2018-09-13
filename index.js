var express=require('express');
var bodyParser=require('body-parser');
var morgan=require('morgan');
var mongoose=require('mongoose');
var app=express();
var router =express.Router();
var appRoutes=require('./app/routes/api')(router);
var port = process.env.PORT || 8080;
var path=require('path');
var user = require('./app/models/user.js')

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname+'/public')); //allow front end folder 'public' access to all the back end stuff
app.use('/api',appRoutes); //not conflict with angular routes

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post('/add',function(req,res){
	if(req.body.apptype == "student")
	   var myData = new user.student(req.body);
	else if(req.body.apptype == "startup")
		var myData = new user.startup(req.body);
	else{
		if(req.body.apptype1 == "sports_pro")
			var myData = new user.sportsProfessional(req.body);
		else
			var myData = new user.otherProfessional(req.body);
	}
	   myData.save()
		    .then(item => {
		      res.send("item saved to database");
		    })
		    .catch(err => {
		      res.status(400).send(err);
		    });
	
});

app.listen(port,function(){
  console.log("Server running on port 8080");
});
