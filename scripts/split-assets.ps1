param(
  [string]$Source = "./assets/source.png",
  [string]$OutDir = "./assets/slices"
)

# Placeholder asset pipeline script for future sprite slicing.
if (!(Test-Path $OutDir)) {
  New-Item -ItemType Directory -Path $OutDir | Out-Null
}

Write-Output "Asset script ready. Source: $Source, Output: $OutDir"
