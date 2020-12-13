# INST377MPG

Minority Prince George, a webapp for locally owned minority businesses in Prince George's County, Maryland. Developed to help residents of Prince George's county to support minority business in the wake of racial equality and justice issues.

Compatible for iOS version 12+ and Android 10+.

### Links
* Heroku instance: https://inst377mpg.herokuapp.com/
* User Manual: https://github.com/BreckenK/INST377MPG/blob/main/docs/user_manual.md
* Developer Manual: https://github.com/BreckenK/INST377MPG/blob/main/docs/developer_manual.md

### Developer Manual
How to install your application and all dependencies
- Our application is installed as a Node.js server. Node.js is required, as well as sqlite3. 

How to run your application on a server
- Our application can be ran by running 'node server.js' in a Powershell terminal with dependencies installed. 

How to run any tests you have written for your software
- To test our server, go to 'localhost:3000', type 'test' within the search bar, and **CLICK THE SUBMIT BUTTON**

The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do
- The GET endpoint is used for the all businesses page. It receives data from the sqlite server.
- The POST endpoint is used for the index search. The data in the search bar is received and is used in an SQL command to gather relevant businesses.


A clear set of expectations around known bugs and a road-map for future development.
- Pressing 'enter' while on the search bar will not successfully search, the submit button must be used. 
- The POST request is not secure, and SQL injection could be used to break the sqlite server. 
