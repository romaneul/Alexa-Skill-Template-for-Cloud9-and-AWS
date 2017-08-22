# About
This template lets you create a Cloud9 workspace in an instance that is optimized for developing Alexa Skills. 

The project structure is designed to use the official Alexa Node SDK for AWS Lambda. So basically, you can develop and test your Skill in Cloud9 and then simply upload the project to Lamdba for production use.


##
The intention is to provide a superior _development_ experience through the built-in Cloud9 features. 

* Live debug your skill with the built-in debugger
* Set breakpoints to examine the skill while it is executing 
* Instantly see console output, i.e. no delay like in Cloudwatch logs
* No credit card required for sign-up
* Get started with Alexa Skill development within a few minutes


# Steps
The project comes with a simple Express server to handle requests from Alexa. To get started

1. Go to https://c9.io/new to create a new workspace

2. Enter your **Workspace Name** and a **Description**. 
Choose **Public** in order to make your project accessible for Alexa. (If you prefer you can start development on Private and switch to Public later). Next, copy the URL `https://github.com/romaneul/Alexa-Skill-Template-for-Cloud9-and-AWS.git
` into the field **Clone from Git or Mercurial URL**.
![link](https://s3-eu-west-1.amazonaws.com/cloud9-aws/Create+a+New+Workspace+2017-08-10+12-00-51.png)


3. In the newly created workspace, enter into the terminal: `npm install` followed by `nodemon server.js`.
4. Choose from the menu **Preview** >> **Preview Running Application**. If you do this the first time, acknowledge the warning. ![sdf](https://s3-eu-west-1.amazonaws.com/cloud9-aws/ssd+-+Cloud9+-+(Private+Browsing)+2017-08-14+10-38-18.png)
5. Congrats your skill endpoint is up and running. Now copy the preview URL to be the HTTPS enpdpoint of your Alexa Skill and start coding in the the `/skill` folder.


# Next/ToDos
* Add a Grunt file for seamless upload to Lambda
