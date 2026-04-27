# RACKEMM UI

A pool tournament database. Find a tournament anywhere, anytime.

**Backend repo:** [rackemm-api-node](https://github.com/cbaston82/rackemm-api-node)

## Tech Stack

- React 18, Redux (redux-persist + redux-thunk), React Router v6
- Bootstrap 5, React Bootstrap
- Stripe (subscriptions), Algolia (search), Cloudinary (media), Google Places (autocomplete)

## Prerequisites

- Node 16+ (tested on v22 with `--openssl-legacy-provider`)
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

## Environment Variables

Create a `.env` file in the project root:

```env
# Set to true to bypass Stripe subscription checks during development
REACT_APP_DISABLE_SUBSCRIPTION=true

# Stripe price IDs (from your Stripe dashboard) — only needed for subscription testing
REACT_APP_STRIPE_PRICE_LEVEL_1=
REACT_APP_STRIPE_PRICE_LEVEL_2=
REACT_APP_STRIPE_PRICE_LEVEL_3=

# Production API URL — set this when deploying (e.g. your Railway backend URL)
REACT_APP_API_URL=
```

## Deploy to Netlify

1. Push to GitHub
2. Connect the repo in Netlify
3. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
4. Add environment variables in Netlify dashboard (same as `.env` above, plus `REACT_APP_API_URL` pointing to your backend)
5. The `public/_redirects` file handles SPA routing automatically

## Features

- Browse weekly and special pool events
- Filter events by game, buy-in, day, venue, city, rating system
- View event details with reviews and add-to-calendar
- Auth: register, login, forgot/reset password
- Subscribed users: create/edit events, upload media, manage shareable filters
- 3-tier Stripe subscription plans

## Screenshots

![App Screenshot](https://res.cloudinary.com/hoo/image/upload/v1739676096/rackemm_images/Screenshot_2025-02-15_at_7.21.21_PM.png)

![Logo](https://res.cloudinary.com/hoo/image/upload/v1695232082/rackemm_images/app_images/rackemm-logo-transparent.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)
