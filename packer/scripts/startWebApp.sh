#!/bin/bash
# systemd for WebApp
echo "Starting up webApp.service"
sudo mv /tmp/webapp.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable webapp.service
sudo systemctl start webapp.service
sudo systemctl status webapp.service
echo "WebApp setup complete"