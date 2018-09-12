var User=require('../models/user');
var mongoose=require('mongoose');
var fs=require('fs');
var Gridfs=require('gridfs-stream');
var db = null;
var mongoDriver = null;
var gfs = null;
mongoose.connect('mongodb://localhost:27017/summit-portal',function(err){
  if(err)
  console.log("Not Connected!!");
  else {
    console.log("Connected to mongodb!");
    db = mongoose.connection.db;
    mongoDriver = mongoose.mongo;
    gfs = new Gridfs(db, mongoDriver);
  }
});
//router= export all accessing done to server
module.exports = function(router){
router.post('/post',function(req,res){
    var post=new Post();
    post.postname=req.body.postname;
    post.limit=req.body.limit;
    post.qualification=req.body.qualification;
    post.experience=req.body.experience;
    post.description=req.body.description;
    post.save(function(err){
      if(err) console.log(err);
      else {
        res.json({success: true, message: 'Post added'});
      }
    });
  });

  router.get('/posts',function(req,res){
    Post.find({},function(err,posts){
      if(err)
       throw err;
       if(!posts)
       {
         res.json({success: false, message: "No available posts"});
       }
     res.json({success: true, posts: posts});
    });
  });
  return router;
};
