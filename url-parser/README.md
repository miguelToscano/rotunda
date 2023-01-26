## Getting set up

- git clone `https://github.com/miguelToscano/rotunda.git`
- cd rotunda/url-parser
- npm i
- make sure you have port 3000 available
- npm start

## Endpoints

- POST /urls/schema
Sets the schema for the url parsing

- GET /urls/schema
Get the schema

- POST /urls/parse
Parses the provided url according to the schema

### Example
Postman collection: `https://github.com/miguelToscano/rotunda.git`

## Architecture
I decided to use a `Layered Architecture` due to the simplicity of the domain. It organized the codebase into horizontal layers, with each layer addressing one of the following technical concerns: interation with the consumers (presentation), implementing business logic (services), and persisting the data (infrastructure). 
For the business logic i used a `Transactional Script Pattern`. This pattern is well adapted to the most straightforward problem domains in which the business logic resembles simple procedural operations.
