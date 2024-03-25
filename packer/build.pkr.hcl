build {
  sources = ["source.googlecompute.centos"]

  provisioner "file" {
    source      = "./webapp.zip"
    destination = "/tmp/webapp.zip"
  }

  provisioner "file" {
    source      = "./webapp.service"
    destination = "/tmp/webapp.service"
  }

  provisioner "file" {
    source      = "./loggerConfig.yaml"
    destination = "/tmp/loggerConfig.yaml"
  }

  provisioner "shell" {
    scripts = [
      "./packer/scripts/createUser.sh",
      "./packer/scripts/installDependencies.sh",
      // "./packer/scripts/mysql.sh",
      "./packer/scripts/setupWebApp.sh",
      // "./packer/scripts/startWebApp.sh"
      "./packer/scripts/opsAgent.sh",
    ]
  }

}