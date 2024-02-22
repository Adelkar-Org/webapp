locals { timestamp = regex_replace(timestamp(), "[- TZ:]", "") }

source "googlecompute" "centos" {
  project_id              = var.project_id
  zone                    = var.zone
  source_image_family     = "centos-stream-8"
  source_image_project_id = ["centos-cloud"]
  ssh_username            = "centos"

  image_name       = "webapp-image-${local.timestamp}"
  image_project_id = var.project_id
  image_family     = "webapp-image-family"
}

