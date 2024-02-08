# Assignment 1

Task:
Check if the application has connectivity to the database.
Return HTTP 200 OK if the connection is successful.
Return HTTP 503 Service Unavailable if the connection is unsuccessful.
The API response should not be cached. Make sure to add cache-control: 'no-cache' header to the response.
The API request should not allow for any payload. The response code should be 400 Bad Request if the request includes any payload.
The API response should not include any payload.
Only HTTP GET method is supported for the /healthz endpoint.





SQL:
cd ..
cd ..
cd .\"Program Files"\MySQL\"MySQL Server 8.0"\bin

SELECT * FROM mysql.user;
CREATE USER 'local_user'@'localhost' IDENTIFIED BY 'Password@123';
GRANT ALL ON mydb.* TO 'local_user'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
SELECT * FROM mysql.user;
-- DROP USER 'local_user'@'localhost';



create feature branch
make code changes
git add .
git commit -m "commit message"
git push
raise a PR from fork to org
delete feature branch
sync fork main

test workflow