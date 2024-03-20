#!/bin/bash
# Install webapp
echo "Installing webapp"

sudo mkdir -p /opt/webapp

sudo unzip /tmp/webapp.zip -d /opt/webapp/
cd /opt/webapp/
sudo npm install

sudo touch .env.development

sudo chown -R csye6225:csye6225 /opt/webapp
sudo chmod +x /opt/webapp/server.js

sudo mkdir -p /var/log/csye6225
sudo chown csye6225:csye6225 /var/log/csye6225


sudo mv /tmp/webapp.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable webapp.service

echo "WebApp installation complete"
