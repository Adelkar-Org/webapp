#!/bin/bash
# Create user and group
echo "Creating user and group 'csye6225'"
sudo groupadd csye6225
sudo useradd -r -g csye6225 -s /usr/sbin/nologin csye6225
echo "User and group 'csye6225' created"
