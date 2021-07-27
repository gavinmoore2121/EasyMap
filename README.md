# EasyPin
 
## Project Description
EasyPin is a web application designed to let anyone quickly and easily add and save custom markers onto a map for future reference. EasyPin uses the Google Maps API to let users place, name, and add descriptions to their markers, which can then be saved to a cloud database to look up later. EasyPin is perfect for remembering small locations, such as diners, hiking trails, fishing spots, or landmarks that aren't well-known enough to be included in Google Maps.

## Technologies Used
 * Java v8
 * HTML
 * TypeScript
 * Angular
 * Maven v8.0
 * Google Maps API
 * Spring MVC v5.3
 * Jackson v2.12
 * MySQL v8
 * Hibernate v5.5
 * Spring Test v5.3
 * JUnit v5.7
 * Log4J v1.2

## Features
* Persistent database of users and their placed pins.
* Secure login page.
* Simple interface to add and name map markers.
* Single-page loading for pleasant user experience.

To-do
* Convert password database to salted hashes of user passwords.
* Enable password resets to be sent to user emails.
* Improve user interface to allow easier deletion of pins.

## Getting Started
1. Clone the repository to desired work directory.
2. For security purposes, Cloud database details are not included in this file. 
3. Create a hibernate.cfg.xml file with the required parameters for a Hibernate database connection to desired database.
4. Add file to the folder EasyPin/ServerSideJava/src/main/resources
5. Launch the folder EasyPin/ServerSideJava using the desired server program onto localhost:8080 with no configured subname.
6. Using Angular CLI, run ng build from the directory EasyPin/AngularWebApp
7. Launch the folder EasyPin/AngularWebApp on a servlet on port 4200.
8. The application can now be used from localhost:4200 in any web browser.

## Usage
Enter user credentials in the login page.
Center the map by providing your location, or place pins anywhere by clicking.
Clicking again on a pin will allow it to be deleted, named, or have a description added.
Press logout when done using the application.
