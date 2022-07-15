require('dotenv').config();
const nodemailer=require('nodemailer');

let transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
   

})
let mailOptions={
    from:'apptesting846@gmail.com',
    to:'owenmiash90@gmail.com',
    subject:'Zuri Training Task: Email Sender',
    text:'This is the first test and its working.Hurraayyyy'
}

transporter.sendMail(mailOptions,(error,data)=>{
    if(error){
        console.log('Ooops!An error has occured',error)
    }else{
    console.log('Email has been sent Successfully')
    }
})