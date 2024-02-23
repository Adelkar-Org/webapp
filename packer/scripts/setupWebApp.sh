#!/bin/bash
# Install webapp
echo "Installing webapp"

sudo mkdir -p /opt/webapp
sudo unzip /tmp/webapp.zip -d /opt/webapp/
cd /opt/webapp/
sudo npm install
touch .env.development
cp .env.example .env.development
cat .env.development

sudo chown -R csye6225:csye6225 /opt/webapp
sudo chmod +x /opt/webapp/server.js

echo "WebApp installation complete"
