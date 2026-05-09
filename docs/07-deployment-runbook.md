# Deployment Runbook

## Target Platform
Vercel with preview deployments per branch and production deployment on main.

## Environment Variables
1. GITHUB_USERNAME
2. GITHUB_TOKEN

## Deployment Procedure
1. Push repository to GitHub.
2. Import repository into Vercel.
3. Configure production and preview environment variables.
4. Confirm auto-generated preview URLs are enabled.
5. Set custom domain and verify SSL.
6. Validate robots, sitemap, and route availability.

## Post-Deploy Verification
1. Home, Design, Code, Case Studies, About, and Contact all return 200.
2. GitHub cards show live data when credentials are set.
3. Fallback data appears when credentials are missing.
4. Analytics events appear in Vercel dashboard after first interactions.
