var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var titlize = require('mongoose-title-case');
var validate = require('mongoose-validator');

/*var nameValidator = [
  validate({
    validator: 'matches',
    arguments: /^(([a-zA-Z]{1,20})+[ ]+([a-zA-Z]{1,20})+)+$/,
    message: 'There should be a first name and a surname with no special characters or numbers '
  })
];

var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Not a Valid Email'
  }),
  validate({
    validator: 'isLength',
    arguments: [3,30],
    message: 'Email length should be between 3 and 30 characters'
  })
];

var userValidator = [
  validate({
    validator: 'isLength',
    arguments: [3,30],
    message: 'Username length should be between 3 and 30 characters'
  }),
  validate({
    validator: 'isAlphanumeric',
    message: 'Username must contain letters and numbers only'
  })
];*/

var passwordValidator = [
  validate({
    validator: 'isLength',
    arguments: [8,35],
    message: 'Password length should be between 8 and 35 characters'
  }),
  validate({
    validator: 'matches',
    arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\w]).{8,30}$/,
    message: 'The password must contain small and caps letters, numbers and special symbols'
  })
];

var studentSchema = new Schema({
  name: {type: String, required: true/*, validate: nameValidator*/},
  //username: {type: String, required: true, unique: true, validate: userValidator},
  email: {type: String, required: true, unique: true/*, validate: emailValidator*/},
  phone: {type: Number ,unique: true,required:true},
  apptype: {type: String,required: true},
  academicYear: {type:Number,required: true},
  branch: {type:String,required:true},
  institute: {type:String,required:true},
  question1: {type:String,required:true},
  question2: {type:String,required:true},
  question3: {type:String,required:true},
  question4: {type:String,required:true},
  role: Boolean,
  pending:[
      {type: Schema.Types.ObjectId, ref: 'Post'}
    ],
  approved:[
        {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  rejected:[
          {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  /*permission: {type: String, required: true}*/
});

var startupSchema = new Schema({
  name: {type: String, required: true/*, validate: nameValidator*/},
  //username: {type: String, required: true, unique: true, validate: userValidator},
  email: {type: String, required: true, unique: true/*, validate: emailValidator*/},
  phone: {type: Number ,unique: true,required:true},
  apptype: {type: String,required: true},
  startupName: {type:String,required: true},
  estYear: {type:Number,required:true},
  relLinks: {type:String},
  question1: {type:String,required:true},
  question2: {type:String,required:true},
  role: Boolean,
  pending:[
      {type: Schema.Types.ObjectId, ref: 'Post'}
    ],
  approved:[
        {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  rejected:[
          {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  /*permission: {type: String, required: true}*/
});

var sportsProfessionalSchema = new Schema({
  name: {type: String, required: true/*, validate: nameValidator*/},
  //username: {type: String, required: true, unique: true, validate: userValidator},
  email: {type: String, required: true, unique: true/*, validate: emailValidator*/},
  phone: {type: Number ,unique: true,required:true},
  apptype: {type: String,required: true},
  apptype1: {type:String,required:true},
  position: {type:String,required:true},
  company: {type:String,required:true},
  field: {type:String,required:true},
  expYear:{type:Number,required:true},
  relLinks: {type:String},
  role: Boolean,
  pending:[
      {type: Schema.Types.ObjectId, ref: 'Post'}
    ],
  approved:[
        {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  rejected:[
          {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  /*permission: {type: String, required: true}*/
});

var otherProfessionalSchema = new Schema({
  name: {type: String, required: true/*, validate: nameValidator*/},
  //username: {type: String, required: true, unique: true, validate: userValidator},
  email: {type: String, required: true, unique: true/*, validate: emailValidator*/},
  phone: {type: Number ,unique: true,required:true},
  apptype: {type: String,required: true},
  apptype1: {type:String,required:true},
  position: {type:String,required:true},
  company: {type:String,required:true},
  industry: {type:String,required:true},
  expYear:{type:Number,required:true},
  question1:{type:String,required:true},
  question2:{type:String,required:true},
  question3:{type:String,required:true},
  role: Boolean,
  pending:[
      {type: Schema.Types.ObjectId, ref: 'Post'}
    ],
  approved:[
        {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  rejected:[
          {type: Schema.Types.ObjectId, ref: 'Post'}
      ],
  /*permission: {type: String, required: true}*/
});


 module.exports = { student : mongoose.model('student',studentSchema),
                    startup: mongoose.model('startup',startupSchema),
                    sportsProfessional : mongoose.model('sportsProfessional',sportsProfessionalSchema),
                    otherProfessional : mongoose.model('otherProfessional',otherProfessionalSchema)
                     }
