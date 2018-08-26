mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(function(done){
	mongoose.connect('mongodb://localhost/summit2019');

mongoose.connection.once('open',function(){
	console.log('connection is successfull');
	done();
}).once('error',function(error){
	console.log('error'+error);
});
});

