require('dotenv').config();
var cors = require('cors');
var express = require('express');
const db = require('../db');
const { Pool } = require('pg')
const axios = require('axios');
var path = require('path');
const { response } = require('express');
module.exports = router;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const flash = require('express-flash');
const { json } = require('body-parser');
const { redirect } = require('express/lib/response');
var app = express();

var router = express.Router();
router.all(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// First API test
router.get("/api/v1/apitest", async (req, res) => {
  // console.log(req, 'console');
  try{
    res.status(200).json({
      status: "successswsdcsd",
  })
  } catch(err){
    console.log(err);
  }
});


/* GET Contact page. */
router.get('/message', function(req, res, next) {
  res.render('unsub', {page:'Unsubscribe', menuId:'unsubscribe'});
});

/* GET Contact page. */
router.get('/test', function(req, res, next) {
  res.render('test', {page:'test', menuId:'test'});
});
  
module.exports = router;