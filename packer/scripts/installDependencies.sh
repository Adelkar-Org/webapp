#!/bin/bash
# Install dependencies
echo "Installing Dependencies"
# yum update -y
# 
echo "installing node v18"
curl -sL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
echo "node version:"
node -v
# 
echo "installing unzip"
sudo yum install unzip -y
echo "unzip version:"
unzip -version