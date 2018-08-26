const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/summit', { useNewUrlParser: true });

mongoose.connection.once('open',function(){
	console.log('connection is successfull');
}).on('error',function(error){
	console.log('error'+error);
});
