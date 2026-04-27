# RACKEMM UI

A pool tournament database. Find a tournament anywhere, anytime.

**Live site:** https://rackemm.netlify.app  
**Backend repo:** [rackemm-api-node](https://github.com/cbaston82/rackemm-api-node)  
**Live API:** https://web-production-897fe.up.railway.app

## Tech Stack

- React 18, Redux (redux-persist + redux-thunk), React Router v6
- Bootstrap 5, React Bootstrap
- Stripe (subscriptions), Algolia (search), Cloudinary (media), Google Places (autocomplete)

## Prerequisites

- Node 16+ (tested on v22 — requires `--openssl-legacy-provider` due to webpack 4)
- The [rackemm-api-node](https://github.com/cbaston82/rackemm-api-node) backend running on port 4000

## Run Locally

```bash
git clone https://github.com/cbaston82/rackemm-ui
cd rackemm-ui
npm install
cp .env.example .env   # then fill in values
npm start              # runs on http://localhost:3900
```

The dev server proxies all `/api/*` requests to `http://localhost:4000` (configured in `package.json`).  
`REACT_APP_API_URL` is not needed locally — the proxy handles it.

## Environment Variables

### Local (`.env`)

```env
# Bypass Stripe subscription checks during development
REACT_APP_DISABLE_SUBSCRIPTION=true

# Not needed locally — proxy handles API routing
REACT_APP_API_URL=

# Stripe price IDs — only needed if testing subscriptions locally
REACT_APP_STRIPE_PRICE_LEVEL_1=
REACT_APP_STRIPE_PRICE_LEVEL_2=
REACT_APP_STRIPE_PRICE_LEVEL_3=

# GitHub personal access token — optional, increases API rate limit for Features page
REACT_APP_GITHUB_ACCESS_TOKEN=
```

### Production (Netlify environment variables)

```env
REACT_APP_API_URL=https://web-production-897fe.up.railway.app/api/v1
REACT_APP_DISABLE_SUBSCRIPTION=false
REACT_APP_STRIPE_PRICE_LEVEL_1=price_1M2ePMKr4ipGkAARRBdd6UGe
REACT_APP_STRIPE_PRICE_LEVEL_2=price_1M2eTfKr4ipGkAARLND8MZpv
REACT_APP_STRIPE_PRICE_LEVEL_3=price_1M2eWKKr4ipGkAARrPIUdL82
REACT_APP_GITHUB_ACCESS_TOKEN=<your_github_token>
```

## Deploy to Netlify

1. Push to GitHub
2. Connect repo in Netlify → branch: `development`
3. Build settings are auto-configured from `netlify.toml`:
   - **Build command:** `NODE_OPTIONS=--openssl-legacy-provider npm run build`
   - **Publish directory:** `build`
4. Add production environment variables above in Netlify dashboard
5. SPA routing is handled by `netlify.toml` and `public/_redirects`

## Features

- Browse weekly and special pool events
- Filter events by game, buy-in, day, venue, city, rating system
- View event details with reviews and add-to-calendar
- Auth: register, login, forgot/reset password
- Subscribed users: create/edit events, upload media, manage shareable filters
- 3-tier Stripe subscription plans
- Feature request / bug tracking via GitHub Issues

## Screenshots

![App Screenshot](https://res.cloudinary.com/hoo/image/upload/v1739676096/rackemm_images/Screenshot_2025-02-15_at_7.21.21_PM.png)

![Logo](https://res.cloudinary.com/hoo/image/upload/v1695232082/rackemm_images/app_images/rackemm-logo-transparent.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)
