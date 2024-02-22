#!/bin/bash
# Install dependencies
echo "Installing Dependencies"

# yum update -y

echo "installing mysql"
sudo yum install -y mysql-server
sudo systemctl start mysqld
sudo systemctl enable mysqld
sudo systemctl status mysqld
mysql -version

echo "installing node"
curl -sL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
node -version

echo "installing unzip"
sudo yum install unzip -y
unzip -version