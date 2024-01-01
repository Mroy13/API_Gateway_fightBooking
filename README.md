# Flight Booking System - API Gateway Microservice

The API Gateway microservice serves as the central entry point for the Flight Booking System project. It manages user authentication, authorization, rate limiting, and proxies requests to the respective microservices: `flight_service` and `booking_service`.

## Tech Stack

- **Node.js**: Backend runtime environment
- **Express.js**: Web application framework for Node.js
- **MySQL**: Relational database for storing data
- **Sequelize**: ORM (Object-Relational Mapping) for MySQL
- **express-rate-limiter**: Used for rate limiting
- **JWT (JSON Web Tokens)**: Token-based authentication mechanism

## Models Used

- **User**: Stores user information
- **Role**: Defines different roles for users
- **User_Role**: Represents a many-to-many relationship between users and roles

## Features

1. **User Authentication**:
   - Implements signup and signin functionalities with password encryption for user security.

2. **Role Assignment**:
   - Allows assigning roles to users using the `User_Role` model, establishing a many-to-many relationship between users and roles.

3. **Rate Limiter**:
   - Utilizes the `express-rate-limiter` to manage and restrict API request rates for better system performance and security.

4. **Proxy Middleware**:
   - Establishes proxy middleware to interact with the `flight_service` and `booking_service` microservices, enabling seamless communication between services.

5. **Authorization with JWT**:
   - Implements JWT-based token authentication to ensure authorized access to endpoints and services.

## Project Structure_MVC architecture

`src` -> Inside the src folder all the actual source code regarding the project will reside, this will not include any kind of tests. (You might want to make separate tests folder)

Lets take a look inside the `src` folder

 - `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done. For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion, this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs, so configuration for this library should also be done here. 

 - `routes` -> In the routes folder, we register a route and the corresponding middleware and controllers to it. 

 - `middlewares` -> they are just going to intercept the incoming requests where we can write our validators, authenticators etc. 

 - `controllers` -> they are kind of the last middlewares as post them you call you business layer to execute the budiness logic. In controllers we just receive the incoming requests and data and then pass it to the business layer, and once business layer returns an output, we structure the API response in controllers and send the output. 

 - `repositories` -> this folder contains all the logic using which we interact the DB by writing queries, all the raw queries or ORM queries will go here.

 - `services` -> contains the buiness logic and interacts with repositories for data from the database

 - `utils` -> contains helper methods, error classes etc.

## Setup and Configuration

 - Download or clone this project from github and open it in your favourite text editor. 
 - Go inside the folder path and execute the following command:
  ```
  npm install
  ```
 - In the root directory create a `.env` file and add the following env variables
    ```
        PORT=<port number of your choice>
        SALT_ROUND=<enter number of your choice>
        SECRET_KEY='<eneter any key>'
        FLIGHT_SERVICE='http://localhost:3000'
        BOOKING_SERVICE='http://localhost:4000'
        
    ```
    ex: 
    ```
        PORT=4000
        SALT_ROUND=8
        SECRET_KEY=''
        FLIGHT_SERVICE='http://localhost:3000'
        BOOKING_SERVICE='http://localhost:4000'
        
    ```
 - go inside the `src` folder and execute the following command:
    ```
      npx sequelize init
    ```
 - By executing the above command you will get migrations and seeders folder along with a config.json inside the config folder. 
 - If you're setting up your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using for ex: mysql, mariadb etc
 - If you're setting up test or prod environment, make sure you also replace the host with the hosted db url.

- To get database schemas(table here) go inside the `src` folder and execute the following command:
    ```
      npx sequelize db:migrate
      or
      npx sequelize-cli db:migrate
    ```
 - To run the server execute
 ```
 npm start
 ```

 