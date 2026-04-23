terraform {
  required_version = "1.14.8"

  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "5.0"
    }
  }

  cloud {
    organization = "sol-platform"

    workspaces {
      name = "sol-platform"
    }
  }
}
