#!/usr/bin/env bash
# Clears custom Install / Build commands so Vercel uses defaults (important when Root Directory is "demo").
# Usage:
#   export VERCEL_TOKEN="..."   # https://vercel.com/account/tokens
#   export VERCEL_PROJECT="your-project-name"   # as in the dashboard URL
#   ./scripts/vercel-clear-build-overrides.sh

set -euo pipefail
TOKEN="${VERCEL_TOKEN:?Set VERCEL_TOKEN (https://vercel.com/account/tokens)}"
PROJECT="${VERCEL_PROJECT:?Set VERCEL_PROJECT to your Vercel project name (dashboard → Settings → General)}"

curl -sS -X PATCH "https://api.vercel.com/v9/projects/${PROJECT}" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"installCommand": null, "buildCommand": null}'

printf '\nOK: installCommand and buildCommand reset to auto-detect. Redeploy the latest deployment in Vercel.\n'
