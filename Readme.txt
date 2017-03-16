PayGo Alert Sample application

The system requires the following softwares
  * Java JDK 1.7+
  * Maven v3.3
  * NodeJS - v4.4.7
  * MySql - v5.6.16+

Install Java before installing Maven.
Java can be downloaded from http://www.oracle.com/technetwork/java/javase/downloads/index.html
Apache Maven is available from https://maven.apache.org/download.cgi
NodeJS is available from https://nodejs.org/en/download/
mySQL is available from http://dev.mysql.com/downloads/

HOW TO CREATE AND INITIALIZE THE DATABASE
Install MySQL workbench and import the database script to restore the database from the dump file.
Alternatively you can restore the dump from the command line.

Update the application's database connection settings to match your database.
Edit the file

  <APP_SOURCE>/src/main/resources/jdbc.properties


CONFIGURE AND PREPARE SOURCE CODE TO BUILD AND RUN PROPERLY

To install the web application runtime dependencies, and test dependencies run the following commands

  npm install
  bower install
  mvn package -Pfe

This will download all the dependencies and install them. It will also build the application.

To run the web application, run the command

  mvn tomcat7:run

The application will be available in the following URL from your browser

  http://localhost:8080/paygoalerts/

If you have an application running on PORT 8080, you can run using the following command

  mvn tomcat7:run -Dmaven.tomcat.port=<port no.>

Enter your preferred port number.

To run web back end tests, run the command

  mvn test

To run front end tests, run the command
  mvn package -Pfe-test,fetools-test

Application Structure

The application makes use of
	- Amazon IoT
	- Amazon Lamda
	- Spring MVC
	- MySQL
	- Backbone JS
	- Bower
	- Grunt
	- Node
	- Mocha
	- Sinon
	- Chai
	- PhantomJS
	- Bootstrap
	- JUnit4

Application Components
	Main Architecture
	- Amazon IoT - We make use of Amazon IoT to connect with the devices
	- Amazon Lambda : Lamba is invoked when the Amazon IoT rule is satified, in this case when a device sends a leakage message.
	- Cloud application : The cloud application is invoked by Amazon Lambda to process an alert.
	- MySQL : This is used to store alerts.
	
	Cloud Application Architecture
	- The cloud application is based on Spring MVC
	The components include
	
	- Alert Controller : This is the API end point for processing alerts.
	- Report Controller : This endpoint is used for viewing data stored in the database.
	- Page Controller : This endpoint is used to load HTML pages.
	- Alert Service : This contains the business logic for alerts.
	- Notification  Service : This module is used to send notifications, at the moment it contains an email sending module.
	- Alert Dao: This is the Data Access Object for alerts.
	- Query Dao : This Data Access module is used to access the database. This is the only point that accesses the database.

