# StoraTAG
# Team Members
Nandini, Jayant, Aryan, Maiv, Ereena

# About the Project
The project helps reduce wastage of food and increase the mobility and management over food. It is basically for supervision of food in granaries or cold storage to prevent damage and have easy access over food information(details like harvest day, possible expiration, cost price, possible selling price). For small grainery owners it can save a lot of money as sometimes product brought for more is sold for cheaper due to mismanagement. A remote website with all the information of stock can help in seamless trade and save resources.

The goal of the project was to create a mass food storage system that could be used to remotely monitor and manage food granaries or cold storage. StoraTAG is an RFID-enabled mass storage system that helps reduce food waste and improve food mobility and management by allowing us to trace the lifecycle of a sack from the time it enters the storage unit until it exits. It also uses a UID system (Unique Identification System) to distinguish sacks from one another and stores their related data in a database, making it simple for the user to track the status of the sacks from our StoraTAG website.

## Advantages

- Assists in real-time monitoring of product availability.
- Helps in tracking the exact location of food products.
- Includes minimizing food waste and improving food mobility and management.
- Helps in inefficient cost and fuel consumption management. It can save a lot of money for small granary owners because goods brought in at a higher price are sometimes sold for a lower price owing to poor management.
- A remote website with all stock information can aid in seamless commerce and resource conservation.

## Physical Schematic

The goal of the project was to create a mass food storage system that could be used to remotely monitor and manage food granaries or cold storage. StoraTAG is an RFID-enabled mass storage system that helps reduce food waste and improve food mobility and management by allowing us to trace the lifecycle of a sack from the time it enters the storage unit until it exits. It also uses a UID system (Unique Identification System) to distinguish sacks from one another and stores their related data in a database, making it simple for the user to track the status of the sacks from our StoraTAG website. 

The following are some of the advantages of employing this system:
- Assists in real-time monitoring of product availability.
- Helps in tracking the exact location of food products.
- Includes minimizing food waste and improving food mobility and management.
- Helps in inefficient cost and fuel consumption management. It can save a lot of money for small granary owners because goods brought in at a higher price are sometimes sold for a lower price owing to poor management.
- A remote website with all stock information can aid in seamless commerce and resource conservation.
  
The following is a basic physical schematic of the system being managed:
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/8d8ec666-6c33-4a95-b6a2-4ccb03347f8c)
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/70387d24-47e8-4028-8d63-b7680fdf1796)

The physical system reflects the many objects and relationships that those objects will have, as depicted in the diagram above. The given system can be scaled up or down depending on the needs (as the number of sacks increases, so does the number of tags). The following are the goals of our software package:

- It allows the user to check the status of various sacks using their UID on our StoraTAG website.
- It allows the user to review food information (details like harvest day, possible expiration, cost price, possible selling price, etc.) for each and every sack in the cold storage. For instance, on our website, we can access the Sack List, which has all the accumulated data for all of the sacks.
- It allows the user to maximize earnings while also displaying the expiration date of our sacks on the website, reducing spoilage and wastage. This makes it easier for the user to get expired sacks out of the storage facility as soon as possible. 

Overall, our project StoraTAG is an efficient and precise tag system that gives the user a systematic and beneficial model for storing sacks using tags. 

## High-level architecture of the product

### System Architecture/Component Diagram:

A run-through depiction of major system components that come together to make StoraTAG work is shown below. Each sack has an RFID tag attached to it, which will provide us with a UID when scanned by a reader. This UID will be unique to each sack, allowing us to identify between them more easily. The UID will then be sent through MQTT to our Insertion.js file, together with the other data (weight, entry date, expiry date, and so on) that will be manually entered on the insertion page. Our MongoDB database will save the data entered on the Insertion page. This data can then be viewed on the Sack List page. 

![image](https://github.com/Ereena815/StoraTAG/assets/85027159/ec6ae024-8355-4ca3-8bad-6775cf977bf0)

A high-level software architecture of the system is given below. Please note that the architecture includes some components that the user does not interact with, for example, MongoDB, API, and RFID server, but merely run in the backend to provide logic for the web app to work. 

![image](https://github.com/Ereena815/StoraTAG/assets/85027159/6c1299b7-3c91-45a8-a2a7-2089ef1d9f3f)

The user can use the front-end client to access the system by going to the web server (server.js). The system's landing page is a login page, from which the user can either enter a valid username and password or establish an account that will require a password to verify. After being identified and registered, a user is directed to the system dashboard, where they can view the home page or navigate to different system pages (i.e., new item, sack list, feedback form, etc).

MongoDB stores all system data, which may be retrieved or altered using the API (api.js). This includes the following:

- Stock: Adding or removing sacks containing food information such as the date of arrival, expiration date, floor location, moisture, cost, and so on. The complete stock list is handled by Javascript pages, while web pages use the system API to retrieve and update data.
- The system's RFID sensor communicates via serial communication. The server RFIDServer.js keeps track of them.
- Users: Authenticated users' login information, such as username, email, password, and password confirmation, is included. The users list is handled by EJS pages, while data retrieval and modifications are handled by web pages using the system API. The system's security and authentication are provided by Passport Middleware.

### Login Function:

The login page is designed to authenticate users' login information, such as username, email, password, and password confirmation. Below is our project’s login sequence:
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/d4dcbf68-456c-4630-8fd8-65fffec0a374)

### Insertion Function:

Insertion page is designed to add or remove sacks containing food information such as the date of arrival, expiration date, floor location, moisture, cost, and so on. The complete stock list is handled by Javascript pages, while web pages use the system API to retrieve and update data.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/f6956827-13e4-4578-9800-4104241a421c)

### StoraTAG’s System Components:

User’s accessing the data can view individual sack details which are unique to that particular sack. The components of Sack details are: UID, Weight, Arrival Date, Expiry Date, Moisture, Location, Temperature and Cost. Sacks will have distinct tags that will be scanned by the RFID reader and will provide each sack with a unique id. In the Sack list homepage, the table of components will display all of the properties and status of each sack.

### Data Flow:
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/e0612ae3-8c81-49d5-a314-c27286603dbe)

## Website Design

The website schematic of StoraTAG application is given below:

### Data Storage 
The data of our project is going to be stored in MongoDB database. The collection and their schema are as follows: 
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/62425bb3-a98b-42ec-841c-618f18dff379)

### Device and Data Communication 

The below given chart demonstrates the data communication between different objects of the application.  Our front end mainly uses API requests and the back end is using Express.js framework.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/f8e30e59-e61a-4e6e-89e7-db41502b735b)

## Setup Guide

The following actions should be taken to set up the website for operation:

Step 1: Cloning Repository

Generate a clone GitHub repository containing all the frontend and backend files. 
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/dff50870-2784-4d13-a932-f16e92636fdd)

Step 2: Starting Login Page

Changing directory to registration and login page (based on MEAN stack) folder and then starting the Node.js server by using command - node server.js.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/ee700f32-8e0f-4152-a61c-e660831952b6)

Step 3: Starting the web server and api

Changing directory to Updated front end + mqtt 2 folder and then starting the web and api server individually from their directories, by running the command npm start.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/2f218100-b6ca-47b0-aa57-30c84af29d4f)

Step 4: Initialising RFID Reader

Setup RFID scanner with ESP32 as shown in the given pictures as each colour is dedicated to a different pin.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/26d5e0be-b407-46fd-9244-fb4757fd2ece)

Upload the code file rfid_scan.ino present in rifd_scan folder and note the serial port with which you are communicating to RFID scanner.
For Mac users you can check it through this command: ls /dev/tty.* For windows you can find the port name in device manager > ports as COM. Note this port number.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/555cc20f-64c4-434d-97ce-c49003e4d5b8)
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/1809e6b4-2afb-4def-a169-c72b7a3f596c)

Step 5: Setting up RFID server

Open rfid_ver1 folder, then at line number 12, col 28 paste the serial- port name with which we are communicating to RFID scanner.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/608606cf-1a62-4f10-8d2d-bc0a52fc3637)

At last, open the terminal change directory to rfid_ver1 folder, then run the server with npm start.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/ccbdf12b-0543-4bbe-89bd-eb8526779209)

## User Guide
When a user visits the StoraTAG website, they will first encounter a login screen. In order to access the homepage, they must provide their login credentials. If the user forgets the password, they can click on forgot password or for registration they can click on register here and they will get redirected to the registration page.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/a42bf540-b7ea-49c5-9625-7d77ab9f1328)

As it can be seen from the above image, we have registered user as aryan and those credentials are also shown in our mongoDB database as users.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/9c6b9bd3-6186-4594-b5bd-8a41fab7dccd)
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/4cd44f6a-bc84-4415-ad56-e57fe7ac4c67)

As the user fills the correct credentials, they would be directed to the homepage of StoreTAG.

![image](https://github.com/Ereena815/StoraTAG/assets/85027159/cd0b52bc-9237-45ac-8307-0d100fa43f8a)
This is our StoraTAG homepage, where we can see profile data at the top with parameters such as name and email ID, as well as a Logout button in the upper right corner that will take us back to the Login page.

In our Home page, we have a navbar with additional features such as a web page for entry of new sack data, and in addition, we can see stock in our navbar with which we can examine our inserted data.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/94524932-03e9-4c3e-81f3-95af9416aabc)

We can see the UID for our sacks on the insert sack web page because when we scan our RFID tags to the scanner, they only need to be touched with it. A UID is a unique ID assigned to each tag, as seen in the diagram below.
We must submit after entering each detail, and all data will be stored on the sack data web page via our own build api.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/5e46c3dd-fe7f-4b7d-b36d-a48a98fdae15)
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/4c94abe7-d14c-45ba-9f81-438b818c140b)
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/3094b8b7-1b0d-4bde-8a4b-a683fd44ffe5)
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/22766620-0524-43ba-8967-0c1943432dba)

We can see this data at both backend and sack data web page.

The Error 404 page was built so that if the server or URL is incorrect, this page would appear, informing the user that something is wrong.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/68addfad-b2c7-46cc-8d02-55a926705c47)

The feedback mechanism implemented to our navbar, as illustrated in the above image, is designed to allow users to provide us with valuable feedback. The image below displays the several parameters that the user will fill out (Name, email) as well as some remarks about our management system. The input might be negative or good depending on the user experience, which will allow us to adapt our system based on the feedback we receive.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/8bb7a01d-b44d-4b77-977f-76582464a556)

When the user submits his/her response on our web app, we will get that response on our database. Ultimately a message will show up on our website after the submission of a response which will indicate that we have received the user’s response.
![image](https://github.com/Ereena815/StoraTAG/assets/85027159/f80cbc9f-f49e-42b2-9e55-5a647a50f648)
