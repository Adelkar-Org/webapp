cd /tmp
sudo mv /tmp/webapp.zip /opt/csye6225/webapp.zip
cd /opt/csye6225
sudo unzip webapp.zip

sudo npm install

sudo chown -R csye6225:csye6225 /opt
sudo chmod +x /opt/csye6225/server.js

cd /opt/csye6225
sudo cp csye6225.service /etc/systemd/system

sudo systemctl daemon-reload
sudo systemctl enable csye6225
sudo systemctl start csye6225