#!/bin/bash

# MySQL
echo "installing mysql"

sudo yum install -y mysql-server
sudo systemctl start mysqld
sudo systemctl enable mysqld
sudo systemctl status mysqld
echo "mysql version:"
mysql -version

echo "Setting up MySQL configuration"
mysql -u root -e "CREATE DATABASE mydb;"
mysql -u root -e "CREATE USER 'mihir'@'localhost' IDENTIFIED BY 'Mihir@1234';"
mysql -u root -e "GRANT ALL PRIVILEGES ON mydb.* TO 'mihir'@'localhost';"
mysql -u root -e "FLUSH PRIVILEGES;"
mysql -u mihir --password=Mihir@1234 -e "show databases;"

echo "MySQL setup complete"