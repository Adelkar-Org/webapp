#!/bin/bash
# Installing the Google Cloud Ops Agent
echo "Installing Google Cloud Ops Agent"
cd /tmp/
curl -sSO https://dl.google.com/cloudagents/add-google-cloud-ops-agent-repo.sh
sudo bash add-google-cloud-ops-agent-repo.sh --also-install

# Configuring the Google Cloud Ops Agent
sudo mv /tmp/loggerConfig.yaml /etc/google-cloud-ops-agent/config.yaml

# sudo tee -a /etc/google-cloud-ops-agent/config.yaml << EOF
# logging:
#   receivers:
#     webapp_log:
#       type: files
#       include_paths:
#         - /var/log/csye6225/*.log
#       record_log_file_path: true
#   processors:
#     webapp_severity:
#       type: modify_fields
#       fields:
#         severity:
#           move_from: jsonPayload.level
#     webapp_json:
#       type: parse_json
#       time_key: timestamp
#       time_format: "%Y-%m-%dT%H:%M:%S.%LZ"
#   service:
#     pipelines:
#       webapp_pipeline:
#         receivers:
#           - webapp_log
#         processors:
#           - webapp_severity
#           - webapp_json
# EOF
