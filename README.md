# Project Name

> An implementation of a React menu preview component based on OpenTable's individual item restaurants.


## Related Projects

  - https://github.com/5-sdc-hr/photo-carousel-server
  - https://github.com/5-sdc-hr/reservation-calendar-service
  - https://github.com/5-sdc-hr/reviews-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> In the root directory, run `npm install` to download all node-modules from package.json.
> In a terminal window, run `mongod` to start MongoDB. 
> In another terminal, run `npm run seedDB` to add sample data to MongoDB.
> Run `npm run react-dev` to launch webpack.
> In another terminal window, run `npm startdev` to launch the server with nodemon.

> Navigate to `http://localhost:3003/restaurants/70/` to preview component.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## CRUD Operations
### Create
- HTTP method: Post
- Relative URI: `api/restaurants/:id/menu`
- Save new menu for a restaurant to db

### Read
- HTTP method: Get
- Relative URI: `api/restaurants/:id/menu`
- Retrieve menus for a restaurant from db

### Update
- HTTP method: Put
- Relative URI: `api/restaurants/:id/menu`
- Edit existing menu in db

### Delete
- HTTP method: Delete
- Relative URI: `api/restaurants/:id/menu`
- Remove menus from db

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

