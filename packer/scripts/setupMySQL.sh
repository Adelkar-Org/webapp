#!/bin/bash
# setup MySQL
echo "Setting up MySQL"
mysql -u root -e "CREATE DATABASE mydb;"
mysql -u root -e "CREATE USER 'csye6225'@'localhost' IDENTIFIED BY 'csye6225';"
mysql -u root -e "GRANT ALL PRIVILEGES ON mydb.* TO 'csye6225'@'localhost';"
mysql -u root -e "FLUSH PRIVILEGES;"
mysql -u csye6225 --password=csye6225 -e "show databases;"