# Redux Saga Garden

An epic garden

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `garden` and create a `plant` table and add a few plants to your garden:

```SQL
CREATE DATABASE "garden";

CREATE TABLE "plant" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (100) NOT NULL,
    "kingdom" VARCHAR (100),
    "clade" VARCHAR (100),
    "order" VARCHAR (100),
    "family" VARCHAR (100),
    "subfamily" VARCHAR (100),
    "genus" VARCHAR (100)
);

INSERT INTO "plant" ("name", "kingdom", "clade", "order", "family", "subfamily", "genus")
VALUES ('Rose', 'Plantae', 'Angiosperms', 'Rosales', 'Rosaceae', 'Rosoideae', 'Rosa'),
('Tulip', 'Plantae', 'Angiosperms', 'Liliales', 'Liliaceae', 'Lilieae', 'Tulipa'),
('Oak', 'Plantae', 'Angiosperms', 'Fagales', 'Fagaceae', NULL, 'Quercus');
```

## Development Setup Instructions

* Run `npm install`
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server` to start the server
* Run `npm run client` to start the client
* Navigate to `localhost:3000`

## Lay of the Land

* `src/` contains the React application
* `public/` contains static assets for the client-side
* `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
* `server/` contains the Express App


