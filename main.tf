variable "container_tag" {
  type = string
}

variable "gcloud_credentials" {
  type = string
}

provider "google" {
  credentials = $gcloud_credentials
  project     = "youngjosh-personal-site"
  region      = "asia-east1"
}

resource "google_cloud_run_service" "personal_site_frontend" {
  name     = "youngjosh-personal-site-fe"
  location = "asia-east1"
  autogenerate_revision_name = true

  template {
    spec {
      containers {
        image = "asia.gcr.io/youngjosh-personal-site/youngjosh-personal-site-fe:${var.container_tag}"
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }


}