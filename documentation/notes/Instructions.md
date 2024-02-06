# Assignment 1

Task:
Check if the application has connectivity to the database.
Return HTTP 200 OK if the connection is successful.
Return HTTP 503 Service Unavailable if the connection is unsuccessful.
The API response should not be cached. Make sure to add cache-control: 'no-cache' header to the response.
The API request should not allow for any payload. The response code should be 400 Bad Request if the request includes any payload.
The API response should not include any payload.
Only HTTP GET method is supported for the /healthz endpoint.
