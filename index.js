const express=require('express')
const app=express()

const scheduler=require('node-cron')

const{transporter,options}=require('./services/email')

const PORT=3000;

scheduler.schedule("* * * * *  ",()=>{
    console.log("sending email");

    transporter.sendMail(options,(err,info)=>{
        if(err){
            console.error(err)
        }
        else{

        console.log("email sent with info=" , info)
        }
        
    })

})


app.listen(PORT,()=>{
    console.log("Server is running at 3000")
})