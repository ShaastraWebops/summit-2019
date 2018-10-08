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
var fs = require('fs');
const Json2csvParser = require('json2csv').Parser;

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

app.post('/addInterested',function(req,res){
		var myData = new user.interested(req.body);
	   myData.save()
		    .then(item => {
		      res.send("item saved to database");
		    })
		    .catch(err => {
		      res.status(400).send(err);
		    });

});

app.get('/getusers/:token/:apptype',function(req,res){
	if(req.params.token===process.env.TOKEN){

		if(req.params.apptype==="students"){
			user.student.find({},function(err,students){
				var fields=['name','email','phone','apptype','academicYear','branch','institute','question1','question2','question3','question4','role'];
				const opts = { fields };
        const parser = new Json2csvParser(opts);
        var csv = parser.parse(students);
                  var path=req.params.apptype+'.csv';
                   fs.writeFile(path, csv, function(err,data) {
                    if (err) {throw err;}
                    else{
											res.download(path);
											 // This is what you need
                    }
                  });
      });
		}

    else if(req.params.apptype==="interested"){
			user.interested.find({},function(err,students){
				var fields=['name','email','phone','apptype'];
				const opts = { fields };
        const parser = new Json2csvParser(opts);
        var csv = parser.parse(students);
                  var path=req.params.apptype+'.csv';
                   fs.writeFile(path, csv, function(err,data) {
                    if (err) {throw err;}
                    else{
											res.download(path);
											 // This is what you need
                    }
                  });
      });
		}

		if(req.params.apptype==="startup"){
			user.startup.find({},function(err,startups){
				var fields=['name','email','phone','apptype','startupName','estYear','relLinks','question1','question2','role'];
				const opts = { fields };
        const parser = new Json2csvParser(opts);
        var csv = parser.parse(startups);
                  var path=req.params.apptype+'.csv';
                   fs.writeFile(path, csv, function(err,data) {
                    if (err) {throw err;}
                    else{
                      res.download(path); // This is what you need
                    }
                  });
      });
		}

		else if(req.params.apptype==="sports_pro"){
			user.sportsProfessional.find({},function(err,sport_pros){
				var fields=['name','email','phone','apptype','apptype1','position','company','field','expYear','relLinks','role'];
				const opts = { fields };
        const parser = new Json2csvParser(opts);
        var csv = parser.parse(sport_pros);
                  var path=req.params.apptype+'.csv';
                   fs.writeFile(path, csv, function(err,data) {
                    if (err) {throw err;}
                    else{
                      res.download(path); // This is what you need
                    }
                  });
      });
		}

		else{
			user.otherProfessional.find({},function(err,otherpros){
				var fields=['name','email','phone','apptype','apptype1','position','company','industry','expYear','question1','question2','question3','role'];
				const opts = { fields };
        const parser = new Json2csvParser(opts);
        var csv = parser.parse(otherpros);
                  var path=req.params.apptype+'.csv';
                   fs.writeFile(path, csv, function(err,data) {
                    if (err) {throw err;}
                    else{
                      res.download(path); // This is what you need
                    }
                  });
      });
		}

		}
	else{
		res.json(null);
	}
})

app.listen(port,function(){
  console.log("Server running on port 8080");
});
