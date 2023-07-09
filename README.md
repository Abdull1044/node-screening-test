# Hotel API

This project implements a RESTful API for managing hotel data using Node.js/Express.js and MongoDB.

## Installation

```bash
 $ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run watch

```

## API Endpoints

1. Create a Hotel

   . URL: /hotels
   . Method: POST
   . Request Body: JSON object representing the hotel data
   . Response: JSON object representing the created hotel

2. Update a Hotel

   . URL: /hotels/:id
   . Method: PUT
   . Request Body: JSON object representing the updated hotel data
   . Response: JSON object representing the updated hotel

3. Edit a Hotel

   . URL: /hotels/:id
   . Method: PATCH
   . Request Body: JSON object containing the fields to be updated
   . Response: JSON object representing the updated hotel

4. Delete a Hotel

   . URL: /hotels/:id
   . Method: DELETE
   . Response: JSON object with a success message

5. Find a Hotel

   . URL: /hotels/:slugOrId
   . Method: GET
   . Response: JSON object representing the found hotel

6. Find All Hotels

   . URL: /hotels
   . Method: GET
   . Query Parameters:
   . name (optional): A part of the hotel name for partial matching
   . city (optional): The exact city name for matching
   . price (optional): A price range in the format min:max
   . date (optional): A date range in the format start_date:end_date
   . sort_field (optional): Field name for sorting
   . sort_order (optional): Sorting order (asc or desc)
   . Response: JSON object containing an array of hotels

```

```
