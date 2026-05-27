terraform {
  required_version = ">= 1.5.0"
}

resource "null_resource" "lab7_example" {
  triggers = {
    environment = "staging"
  }
}
