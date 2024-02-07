/* eslint-disable no-undef */
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

function dbConnect()
{
    mongoose.connect(process.env.MONGO_DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex:true }).then(() => console.log("Connection successfull")).catch((err) => console.error("Error connection to DB: "+err.message));
}
const sqlOptions = {
   client:'mysql',
   connection:{
     host:'127.0.0.1',//process.env.SQL_HOST,
     password:process.env.SQL_PASSWORD,
     user:process.env.SQL_USER,
     database:process.env.SQL_DATABASE
   }
 }
module.exports = {dbConnect,sqlOptions};
