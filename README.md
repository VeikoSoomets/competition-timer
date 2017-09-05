# CompetitionTimer

This project was done as a test work for Mooncascade

## Stack

- **Angular 2** (frontend)
- **Java Spring Boot** (backend)
- **H2** (database)
- **npm** (for frontend dependency management)
- **gradle** (for backend dependency management)

## Installation instructions (command line)

- If using gradle wrapper then **.\gradlew --refresh-dependencies** to install java dependencies
- Start up embedded tomcat in spring boot with command **.\gradlew bootRun**
- Go to frontend folder (cd frontend) and **npm install** to install frontend dependencies
- Start up frontend node server **ng serve**

## Usage

- default frontend url http://localhost:4200 (this is the URL for using the app)
- default backend url: http://localhost:8080
- default websocket url: ws://localhost:8080
- default db url: http//localhost:8080/db (username:veiko, password:(empty))
- frontend configuration is in folder frontend/src/environments
