const nodemailer=require('nodemailer')


const USER_EMAIL="bhardwajakshay14@gmail.com"
const USER_PASSWORD="KJcXLp1sBDRh6W3b"

const SMTP_PORT=587;
const HOST_SERVICE="smtp-relay.sendinblue.com";
const SENDER_EMAIL=USER_EMAIL;
const RECEIVER_EMAIL="akshu8641@gmail.com"

const CC=[];
const BCC=[];

const EMAIL_SUBJECT="Happy BIrthday";
const EMAIL_BODY_HTML="<h1>Hapy Birthday</h1>";

const options={
    from:SENDER_EMAIL,
    to:RECEIVER_EMAIL,
    cc:CC,
    bcc:BCC,
    subject:EMAIL_SUBJECT,
    html:EMAIL_BODY_HTML
};

const transporter=nodemailer.createTransport({
    host:HOST_SERVICE,
    port:SMTP_PORT,
    secure:false,
    auth:{
        user:USER_EMAIL,
        pass:USER_PASSWORD,
    }
})

module.exports={transporter,options}