# Feed A Dog Welfare Trust — Official Website & Donation Portal

An official, human-crafted platform for **Feed A Dog Welfare Trust** (Reg #DEL/NGO/2023). Dedicated to providing daily warm rice & egg meals to over 340 stray dogs across 12 street feeding routes in Jaipur and New Delhi.

---

## 🐾 About Feed A Dog Welfare Trust

Founded in November 2019, Feed A Dog Welfare Trust operates daily prep kitchens and volunteer feeding vans. Every evening at 6:30 PM, 18 volunteers distribute freshly cooked meals, supply clean drinking water, and provide basic antiseptic wound care for street dogs in need.

### Key Highlights
- **100% Direct Relief**: Every ₹10 contribution sponsors 1 warm meal bowl.
- **Section 80G Tax Exemption**: Automatic official tax deduction certificates issued post-payment.
- **Transparent Operations**: Kitchen prep photos, route logs, and financial breakdowns available.
- **Razorpay Secure Checkout**: Integrated 256-bit SSL encrypted payment processing.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS v4, Lucide Icons
- **Backend**: Express.js, Node.js, `razorpay` SDK, `crypto` (HMAC-SHA256 signature verification)
- **Deployment**: Render / Docker / Cloud Run compatible

---

## 🚀 Local Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Variables**
   Create a `.env` file with:
   ```env
   RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxxx
   RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxxxxx
   PORT=3000
   NODE_ENV=development
   ```

3. **Run Application**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.
