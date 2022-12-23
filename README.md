# Email-Scheduler

1.we have to use cron pckg for for scheduling
for email
2.we have to send email.
=>we will use nodemailer for sending emails.
we will use sendin blue
smptm key-xsmtpsib-baa296666551979391c22b3464b92db415e137a236014621e370215816d856de-Lq0xA2aFhzWZk4BX

password-KJcXLp1sBDRh6W3b

for creating smptm key we have used sendinblue
we need email and smtp key

we will use nodemailer and say  that we using sendin blue gives us function 
called nodemailer.createTransport()we can pass object here 
require host:sendinblue,
port:
secure:false,
auth:{
    user:email,
    pass:smptp key,
}
}


for cron job cron.schedule(string,callbacks)
