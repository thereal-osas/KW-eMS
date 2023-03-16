### ABOUT

This package consists of api's that retrieves data of elections in Nigeria.

###### CURRENTLY

* It fetches only Kwara State Presidential election data.
* Contains 4 routes only.

###### Routes

1. **Route**: /api/kws/state/:state/retrieve-lga-identifiers
   This api retrieves all the local government areas names of a particular state.
   **input**: the "state" should be inputted via the request parameter.
   **Return type**: It returns an array containing objects with each object having an lgaName Key.
   **HttpStatus**: 200 if successful, 404 with an error message if unsuccessful.
2. **Route**: /api/kws/state/:state/retrieve-ward-identifiers
   This api retrieves all the wards names in a particular local government.
   **input**: The "state" via the request parameter and the "lgaName" should be inputted via request body.
   **Return type**: It returns an object containing objects with each having a wardName Key.
   **HttpStatus**: 200 if successful, 404 with an error message if unsuccessful.
3. /api/kws/state/:state/retrieve-polling-unit-identifiers
   This api retrieves all the pollingUnit names and code in a particular ward.
   **input**: The "state" parameter via the request parameter and the "lgaName","wardName" should all be inputted via
   request body.
   **Return type**: It returns an object containing objects with each having an pollingUnitName and pollingUnitCode Key.
   **HttpStatus**: 200 if successful, 404 with an error message if unsuccessful.
4. /api/kws/state/:state/results
   This api retrieves the results of a particular pollingUnit in a particular ward.
   **input**: The "pollingUnitCode", "wardName", "electionType" should all be inputted via request body.
   **Return type**: It returns an object containing objects with each having an pollingUnitName and pollingUnitCode Key.
   **HttpStatus**: 200 if successful, 404 with an error message if unsuccessful.