#!/bin/bash
# Installing the Google Cloud Ops Agent
echo "Installing Google Cloud Ops Agent"
cd /tmp/
curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh
sudo bash add-google-cloud-ops-agent-repo.sh --also-install

cat >> /etc/google-cloud-ops-agent/config.yaml << EOF
logging:
  receivers:
    webapp_log:
      type: files
      include_paths:
        - /var/log/webapp/*.log
  service:
    pipelines:
      webapp_pipeline:
        receivers:
          - webapp_log
EOF
