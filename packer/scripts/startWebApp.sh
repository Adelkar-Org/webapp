#!/bin/bash
# systemd for WebApp
echo "Starting up webApp.service"

sudo mv /tmp/webapp.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable webapp.service
# remove
sudo systemctl start webapp.service
sudo systemctl status webapp.service
sudo systemctl restart webapp.service
sudo systemctl stop webapp.service

echo "WebApp setup complete"