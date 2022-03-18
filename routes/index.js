require('dotenv').config();
var cors = require('cors');
var express = require('express');
const app = require('../app');
const db = require('../db');
const { Pool } = require('pg')
const axios = require('axios');
const { response } = require('express');
module.exports = router;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const flash = require('express-flash');
const { json } = require('body-parser');

var router = express.Router();
router.all(cors());



// Getting all Subscribers Send Email
router.get("/api/v1/subscribelistsend", async (req, res) => {
    try{
    const results = await db.query("SELECT * FROM subscribelist where unsubscribe = '0'");
    console.log('console');
    const rst = results.rows;
    const mailids = [];
    rst.forEach(cust => {
      var cust1 = {};
    cust1['name'] = cust['donarname'];
    cust1['email'] = cust['donaremail1'];
      mailids.push(cust1);
    });
    console.log(mailids);
    mailids.forEach(element => {
    const msg = {
      to: element['email'],
      from: 'info@jdwebservices.com ', // Use the email address or domain you verified above
      subject: 'Email Send From Node JS',
      text: 'Testing EMail Send From Node JS API',
      html: `
      <!DOCTYPE html>

<html lang="en" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
<title></title>
<meta content="text/html; charset=utf-8" http-equiv="Content-Type"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
<style>
		* {
			box-sizing: border-box;
		}

		body {
			margin: 0;
			padding: 0;
		}

		a[x-apple-data-detectors] {
			color: inherit !important;
			text-decoration: inherit !important;
		}

		#MessageViewBody a {
			color: inherit;
			text-decoration: none;
		}

		p {
			line-height: inherit
		}

		@media (max-width:520px) {
			.icons-inner {
				text-align: center;
			}

			.icons-inner td {
				margin: 0 auto;
			}

			.row-content {
				width: 100% !important;
			}

			.image_block img.big {
				width: auto !important;
			}

			.column .border {
				display: none;
			}

			.video_block .sizer {
				max-width: none !important;
			}

			.stack .column {
				width: 100%;
				display: block;
			}
		}
	</style>
</head>
<body style="background-color: #ffffff; margin: 0; padding: 0; -webkit-text-size-adjust: none; text-size-adjust: none;">
<table border="0" cellpadding="0" cellspacing="0" class="nl-container" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-1" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2f2f2;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2f2f2; color: #000000; width: 500px;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="width:100%;padding-top:50px;padding-bottom:50px;padding-right:0px;padding-left:0px;">
<div align="center" style="line-height:10px"><img src="https://jdwebservices.com/nishkam/image/Nishkam_logo_1-1.png" style="display: block; height: auto; border: 0; width: 300px; max-width: 100%;" width="300"/></div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-2" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2f2f2;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 500px;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="image_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="width:100%;padding-right:0px;padding-left:0px;">
<div align="center" style="line-height:10px"><img class="big" src="https://jdwebservices.com/nishkam/image/WhatsApp_Image_2022-03-16_at_2.38.23_PM.jpeg" style="display: block; height: auto; border: 0; width: 500px; max-width: 100%;" width="500"/></div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="heading_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="width:100%;text-align:center;padding-top:25px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<h1 style="margin: 0; color: #555555; font-size: 26px; font-family: Arial, Helvetica Neue, Helvetica, sans-serif; line-height: 120%; text-align: left; direction: ltr; font-weight: 700; letter-spacing: 1px; margin-top: 0; margin-bottom: 0;"><span class="tinyMce-placeholder">TEACH A CHILD HOW TO USE A PC FOR JUST USD28</span></h1>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:35px;padding-right:10px;padding-bottom:10px;padding-left:10px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #8d8a8a; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
<p style="margin: 0; font-size: 14px;"><span style="">Dear `+element['name']+`, <br/><br/>I am pleased to report that Nishkam USA has begun the year with a new initiative that is targeted at introducing the youth of Punjab in India to basic digital literacy. <br/><br/>For a mere $28 donation <a href="https://dvnetwork.org/projects/help-the-youth-in-punjab-become-digitally-literate" style="color: #0068A5;">donation</a> online, you can sponsor a child: <br/><br/>For a 4 month course <br/>Covering the basics of a PC, MS Office and Google Docs <br/>Teaching them how to surf the web, use email and the basics of how to make a resume <br/><br/>Please donate generously at https://dvnetwork.org/projects/help-the-youth-in-punjab-become-digitally-literate <a href="https://dvnetwork.org/projects/help-the-youth-in-punjab-become-digitally-literate" style="color: #0068A5;">https://dvnetwork.org/projects/help-the-youth-in-punjab-become-digitally-literate</a> <br/><br/>Nishkam has partnered with a private computer institute in Sri Muktsar Sahib in Punjab that will train young children in batches of 30 in these basic skills. Our goal is to teach the children that there is a world of opportunity that they can access via the internet with motivation and self-learning. <br/><br/>Here are the voices and faces of the kind of children that would be benefiting from this program. </span>I'm a new Text block ready for your content.</p>
</div>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td>
<div align="center">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="video_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr style="box-sizing: content-box;">
<td style="box-sizing: content-box; width: 100%; padding-left: 0; padding-right: 0;" width="100%">
<!--[if (mso)|(IE)]><table width="500" align="center" cellpadding="0" cellspacing="0" role="presentation"><tr><td><![endif]-->
<div align="center" class="sizer" style="box-sizing: content-box; max-width: 500px; min-width: 320px;">
<!--[if !vml]><!--><a class="video-preview" href="https://www.youtube.com/watch?v=35I95dOaY00" style="box-sizing: content-box; background-color: #5b5f66; background-image: radial-gradient(circle at center, #5b5f66, #1d1f21); display: block; text-decoration: none;" target="_blank">
<div style="box-sizing: content-box;">
<table background="https://img.youtube.com/vi/35I95dOaY00/maxresdefault.jpg" border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: content-box; background-image: url(https://img.youtube.com/vi/35I95dOaY00/maxresdefault.jpg); background-size: cover; min-height: 180px; min-width: 320px;" width="100%">
<tr style="box-sizing: content-box;">
<td style="box-sizing: content-box;" width="25%"><img alt="ratio" border="0" src="https://beefree.io/img-host/video_ratio_16-9.gif" style="display: block; box-sizing: content-box; height: auto; opacity: 0; visibility: hidden;" width="100%"/></td>
<td align="center" style="box-sizing: content-box; vertical-align: middle;" valign="middle" width="50%">
<div class="play-button_outer" style="box-sizing: content-box; display: inline-block; vertical-align: middle; border: 3px solid #ffffff; height: 59px; width: 59px; border-radius: 100%;">
<div style="box-sizing: content-box; padding: 14.75px 22.69230769230769px;">
<div class="play-button_inner" style="box-sizing: content-box; border-style: solid; border-width: 15px 0 15px 20px; display: block; font-size: 0; height: 0; width: 0; border-color: transparent transparent transparent #ffffff;"> </div>
</div>
</div>
</td>
<td style="box-sizing: content-box;" width="25%"> </td>
</tr>
</table>
</div>
</a>
<!--<![endif]-->
<!--[if vml]>
<v:group xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" coordsize="500,281" coordorigin="0,0" href="https://www.youtube.com/watch?v=35I95dOaY00" style="width:500px;height:281px;">
<v:rect fill="t" stroked="f" style="position:absolute;width:500;height:281;">
<v:fill src="https://img.youtube.com/vi/35I95dOaY00/maxresdefault.jpg" type="frame"/>
</v:rect>
<v:oval fill="t" strokecolor="#ffffff" strokeweight="3px" style="position:absolute;left:221;top:111;width:59;height:59">
<v:fill color="black" opacity="0%" />
</v:oval>
<v:shape coordsize="24,32" path="m,l,32,24,16,xe" fillcolor="#ffffff" stroked="f" style="position:absolute;left:242;top:126;width:21;height:30;" />
</v:group>
<![endif]-->
</div>
<!--[if (mso)|(IE)]></td></tr></table><![endif]-->
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="divider_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td>
<div align="center">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td class="divider_inner" style="font-size: 1px; line-height: 1px; border-top: 1px solid #BBBBBB;"><span> </span></td>
</tr>
</table>
</div>
</td>
</tr>
</table>
<table border="0" cellpadding="0" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td style="padding-top:30px;padding-right:10px;padding-bottom:30px;padding-left:10px;">
<div style="font-family: sans-serif">
<div style="font-size: 14px; mso-line-height-alt: 16.8px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
<p style="margin: 0;">We are hoping that your generous response will help us expand and build on this program in the near future.</p>
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"> </p>
<p style="margin: 0;">At 7.3%, the<a href="https://timesofindia.indiatimes.com/city/chandigarh/unemployment-rate-in-punjab-haryana-chd-higher-than-national-average/articleshow/84774743.cms" style="color: #0068A5;"> unemployment</a> rate in Punjab, India is much higher than the official national average of 4.8%. </p>
<p style="margin: 0; font-size: 14px; mso-line-height-alt: 16.8px;"> </p>
<p style="margin: 0;">The future of jobs in India, like the rest of the world, is digital. India’s internet economy is expected to be worth <a href="https://www.business-standard.com/article/economy-policy/india-s-internet-economy-poised-to-be-1-trn-economy-by-2030-redseer-rpt-122021100173_1.html" style="color: #0068A5;">US$ 1trillion</a> by 2030. </p>
<p style="margin: 0; mso-line-height-alt: 16.8px;"> </p>
<p style="margin: 0;">Help us get the youth of Punjab to take their first steps on this journey of progress ahead.</p>
<p style="margin: 0; mso-line-height-alt: 16.8px;"> </p>
<p style="margin: 0;">Many thanks</p>
<p style="margin: 0;"><br/><br/></p>
<p style="margin: 0;">Parvinder Singh Arora</p>
<p style="margin: 0;">Nishkam USA</p>
</div>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-3" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2f2f2;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f2f2f2; color: #000000; width: 500px;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 60px; padding-bottom: 60px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="10" cellspacing="0" class="social_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="social-table" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="72px">
<tr>
<td style="padding:0 2px 0 2px;"><a href="https://www.facebook.com/nishkamusa/" target="_blank"><img alt="Facebook" height="32" src="https://jdwebservices.com/nishkam/image/facebook2x.png" style="display: block; height: auto; border: 0;" title="Facebook" width="32"/></a></td>
<td style="padding:0 2px 0 2px;"><a href="https://nishkamusa.org/" target="_blank"><img alt="Web Site" height="32" src="https://jdwebservices.com/nishkam/image/website2x.png" style="display: block; height: auto; border: 0;" title="Web Site" width="32"/></a></td>
</tr>
</table>
</td>
</tr>
</table>
<table border="0" cellpadding="10" cellspacing="0" class="text_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; word-break: break-word;" width="100%">
<tr>
<td>
<div style="font-family: sans-serif">
<div style="font-size: 12px; mso-line-height-alt: 14.399999999999999px; color: #555555; line-height: 1.2; font-family: Arial, Helvetica Neue, Helvetica, sans-serif;">
<p style="margin: 0; font-size: 12px; text-align: center;"><a href="https://nishkamusa.org/" rel="noopener" style="text-decoration: none; color: #0068A5;" target="_blank">www.nishkamusa.org</a></p>
<p style="margin: 0; font-size: 12px; text-align: center;"><span style="">Address -  18 18 Wieuca Trace, Atlanta, GA 30342</span></p>

<p style="margin: 0; font-size: 12px; text-align: center;"><span style=""> <a href="http://localhost:3000/api/v1/unsubscribe?email=`+element['email']+`">unsubscribe</a></span></p>
</div>
</div>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row row-4" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tbody>
<tr>
<td>
<table align="center" border="0" cellpadding="0" cellspacing="0" class="row-content stack" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #ffffff; color: #000000; width: 500px;" width="500">
<tbody>
<tr>
<td class="column column-1" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; font-weight: 400; text-align: left; vertical-align: top; padding-top: 5px; padding-bottom: 5px; border-top: 0px; border-right: 0px; border-bottom: 0px; border-left: 0px;" width="100%">
<table border="0" cellpadding="0" cellspacing="0" class="icons_block" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="vertical-align: middle; color: #9d9d9d; font-family: inherit; font-size: 15px; padding-bottom: 5px; padding-top: 5px; text-align: center;">
<table cellpadding="0" cellspacing="0" role="presentation" style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;" width="100%">
<tr>
<td style="vertical-align: middle; text-align: center;">
<!--[if vml]><table align="left" cellpadding="0" cellspacing="0" role="presentation" style="display:inline-block;padding-left:0px;padding-right:0px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;"><![endif]-->
<!--[if !vml]><!-->

</td>
</tr>
</table>
</td>
</tr>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table><!-- End -->
</body>
</html>
    
      `,
    };
    //ES6
    sgMail
      .send(msg)
      .then(() => {}, error => {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      });
    //ES8
    (async () => {
      try {
        await sgMail.send(msg);
      } catch (error) {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      }
    })()
    
    });


      res.status(200).json({
       status: "successswsdcsd",
       data: mailids
      });
    } catch(err){
      console.log(err);
    }
  });

// Getting all Subscribers list
router.get("/api/v1/subscribelist", async (req, res) => {
    try{
    const results = await db.query("SELECT * FROM subscribelist");
    console.log('console');
      res.status(200).json({
       status: "successswsdcsd",
       data: results.rows[0]
      });
    } catch(err){
      console.log(err);
    }
  });

// Getting all Unsubscribers list
router.get("/api/v1/unsubscribe", async (req, res) => {
  // console.log(req, 'console');
  try{
    let email = req.query.email;
  const results = await db.query(`UPDATE subscribelist SET unsubscribe = '1' where donaremail1 = $1`, [email]);
  console.log(email, 'console');
    res.status(200).json({
     status: "successswsdcsd",
     data: results.rowCount
    });
  } catch(err){
    console.log(err);
  }
});

  
module.exports = router;