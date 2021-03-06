# NodeMailerProject

Nodemailer is a module for Node.js applications to allow easy as cake email sending.
The project got started back in 2010 when there was no sane option to send email messages, today it is the solution most Node.js users turn to by default.

Requirements:
If you are able to run Node.js version 6 or newer, then you can use Nodemailer. 

Nodemailer features:
A single module with zero dependencies – code is easily auditable, as there are no dark corners.
Heavy focus on security, no-one likes RCE vulnerabilities.
Unicode support to use any characters, including emoji.
Windows support – you can install it with npm on Windows just like any other module, there are no compiled dependencies. Use it hassle free from Azure or from your Windows box.
Use HTML content, as well as plain text alternative.
Add Attachments to messages.
Embedded image attachments for HTML content – your design does not get blocked.
Secure email delivery using TLS/STARTTLS.
Different transport methods in addition to the built-in SMTP support.
Sign messages with DKIM.
Custom Plugin support for manipulating messages.
Sane OAuth2 authentication.
Proxies for SMTP connections.
ES6 code – no more unintentional memory leaks, due to hoisted var’s.
Autogenerated email test accounts from Ethereal.email.

What you need to do to send messages, would be the following:
Create a Nodemailer transporter using either SMTP or some other transport mechanism
Set up message options (who sends what to whom)
Deliver the message object using the sendMail() method of your previously created transporter.
![Capture](https://user-images.githubusercontent.com/31838619/179355682-f226337a-cb29-47c3-9c0b-ff81fefe8459.PNG)
![Capture2](https://user-images.githubusercontent.com/31838619/179355688-937cc986-09f2-47c0-89b8-a57a57827013.PNG)
