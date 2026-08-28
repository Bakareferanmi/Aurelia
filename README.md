# Aurelia

Luxury jewelry & wrist watch storefront. React + Vite, Poppins, pink/ink/champagne palette pulled from the logo.

## Termux setup

```
pkg install nodejs-lts git -y
unzip aurelia.zip
cd aurelia
npm install
npm run dev
```

Open the local URL it prints (usually `http://localhost:5173`) in Chrome on your phone.

## Push to GitHub + deploy

```
git init
git add .
git commit -m "Aurelia storefront"
git branch -M main
git remote add origin https://github.com/<you>/aurelia.git
git push -u origin main
```

Then import the repo on Vercel or Netlify — build command `npm run build`, output folder `dist`.

## Where to plug in real data

- `src/data/products.js` — every product's name, price, material, description, category (`jewelry` / `watches`), and `tile` (gradient placeholder colors). Swap `tile` for a real photo once you have product shots — see the note at the top of that file.
- `src/assets/` — your two logo files. The header uses the pink-on-white version.
- Checkout button in `src/pages/Cart.jsx` is a placeholder — wire it to Paystack/Flutterwave when you're ready to take real payments.
