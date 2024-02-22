build {
  sources = ["source.googlecompute.centos"]

  provisioner "file" {
    source      = "../webapp.zip"
    destination = "./tmp/"
  }

  provisioner "file" {
    source      = "../webapp.service"
    destination = "/tmp/"
  }

  provisioner "shell" {
    scripts = [
      "./scripts/installDependencies.sh",
      "./scripts/createUser.sh.",
      "./scripts/setupMySQL.sh",
      "./scripts/setupWebApp.sh",
      "./scripts/startWebApp.sh"
    ]
  }

}