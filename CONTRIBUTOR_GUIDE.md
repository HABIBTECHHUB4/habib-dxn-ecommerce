# 🛍️ Habib DXN E-commerce - কন্ট্রিবিউটর গাইড

আপনাকে আমন্ত্রণ জানানো হয়েছে এই ই-কমার্স ওয়েবসাইট এডিট করতে। এই গাইড অনুসরণ করুন।

---

## ধাপ ১: প্রয়োজনীয় সফটওয়্যার ইনস্টল করুন

আপনার কম্পিউটারে এই দুটি ইনস্টল করুন:

### ১. Node.js ডাউনলোড করুন
- যান: https://nodejs.org
- **LTS সংস্করণ** ডাউনলোড করুন
- ইনস্টল করুন (সব ডিফল্ট অপশন ঠিক আছে)

### ২. Git ডাউনলোড করুন (অপশনাল কিন্তু সুপারিশকৃত)
- যান: https://git-scm.com
- ডাউনলোড এবং ইনস্টল করুন

---

## ধাপ ২: কোড ডাউনলোড করুন

### অপশন A: GitHub থেকে (সহজ)
1. এখানে যান: https://github.com/HABIBTECHHUB4/habib-dxn-ecommerce
2. সবুজ **Code** বাটন ক্লিক করুন
3. **Download ZIP** ক্লিক করুন
4. ZIP ফাইল আনজিপ করুন (ডাবল ক্লিক করুন)

### অপশন B: Git ব্যবহার করে (উন্নত)
কমান্ড লাইন খুলুন এবং এই কমান্ড চালান:
```bash
git clone https://github.com/HABIBTECHHUB4/habib-dxn-ecommerce.git
cd habib-dxn-ecommerce
```

---

## ধাপ ৩: প্রজেক্ট সেটআপ করুন

### Windows ব্যবহারকারী:
1. **Command Prompt** খুলুন (Windows + R → cmd)
2. প্রজেক্ট ফোল্ডারে যান:
   ```bash
   cd C:\Users\YourName\Downloads\habib-dxn-ecommerce
   ```
3. এই কমান্ড চালান:
   ```bash
   npm install
   ```

### Mac/Linux ব্যবহারকারী:
1. **Terminal** খুলুন
2. প্রজেক্ট ফোল্ডারে যান:
   ```bash
   cd ~/Downloads/habib-dxn-ecommerce
   ```
3. এই কমান্ড চালান:
   ```bash
   npm install
   ```

**অপেক্ষা করুন:** এটি কয়েক মিনিট সময় নিতে পারে।

---

## ধাপ ৪: ডেভেলপমেন্ট সার্ভার চালু করুন

একই কমান্ড লাইনে এই কমান্ড চালান:
```bash
npm run dev
```

**আউটপুট দেখবেন:**
```
➜  Local:   http://localhost:3000/
```

---

## ধাপ ৫: ব্রাউজারে খুলুন

আপনার ব্রাউজার খুলুন এবং এই ঠিকানা খুলুন:
```
http://localhost:3000
```

**ওয়েবসাইট দেখা যাবে!** 🎉

---

## এখন কিভাবে এডিট করবেন?

### পণ্য যোগ করুন/সংশোধন করুন

1. এই ফাইল খুলুন:
   ```
   client/src/lib/products.ts
   ```

2. নতুন পণ্য যোগ করুন:
   ```javascript
   {
     id: "9",
     name: "পণ্যের নাম",
     price: 1000,
     description: "পণ্যের বর্ণনা",
     image: "ছবির URL",
     category: "ক্যাটাগরি",
     benefits: ["সুবিধা ১", "সুবিধা ২"],
   }
   ```

3. ফাইল সেভ করুন (Ctrl+S)
4. ব্রাউজার রিফ্রেশ করুন (F5)

### পেমেন্ট পরিমাণ পরিবর্তন করুন

1. এই ফাইল খুলুন:
   ```
   client/src/pages/Checkout.tsx
   ```

2. এই লাইন খুঁজুন:
   ```javascript
   const codAmount = 130; // এখানে সংখ্যা পরিবর্তন করুন
   ```

3. ১৩০ এর জায়গায় নতুন সংখ্যা দিন
4. ফাইল সেভ করুন এবং ব্রাউজার রিফ্রেশ করুন

### ডিজাইন/রঙ পরিবর্তন করুন

1. এই ফাইল খুলুন:
   ```
   client/src/index.css
   ```

2. CSS ভেরিয়েবল পরিবর্তন করুন
3. ফাইল সেভ করুন এবং ব্রাউজার রিফ্রেশ করুন

---

## পরিবর্তন সেভ করুন

### Git ব্যবহার করে (সুপারিশকৃত)

কমান্ড লাইনে এই কমান্ড চালান:
```bash
git add .
git commit -m "আপনার পরিবর্তনের বর্ণনা"
git push origin main
```

**উদাহরণ:**
```bash
git add .
git commit -m "নতুন পণ্য যোগ করেছি"
git push origin main
```

### Git ছাড়া

শুধু ফাইল সংরক্ষণ করুন এবং GitHub এ ম্যানুয়ালি আপলোড করুন।

---

## সাধারণ সমস্যা এবং সমাধান

### সমস্যা: "npm: command not found"
**সমাধান:** Node.js পুনরায় ইনস্টল করুন এবং কম্পিউটার রিস্টার্ট করুন

### সমস্যা: "port 3000 is already in use"
**সমাধান:** অন্য পোর্ট ব্যবহার করুন:
```bash
npm run dev -- --port 3001
```

### সমস্যা: ব্রাউজারে পরিবর্তন দেখা যাচ্ছে না
**সমাধান:** 
1. Ctrl+Shift+Delete চেপে ক্যাশ ক্লিয়ার করুন
2. ব্রাউজার রিফ্রেশ করুন (Ctrl+R)

### সমস্যা: মডিউল খুঁজে পাওয়া যাচ্ছে না
**সমাধান:**
```bash
rm -rf node_modules
npm install
```

---

## ফাইল স্ট্রাকচার

```
habib-dxn-ecommerce/
├── client/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.tsx          ← হোম পেজ
│   │   │   ├── Cart.tsx          ← কার্ট পেজ
│   │   │   ├── Checkout.tsx      ← চেকআউট পেজ
│   │   │   └── Confirmation.tsx  ← অর্ডার নিশ্চিতকরণ
│   │   ├── lib/
│   │   │   └── products.ts       ← পণ্য ডেটা
│   │   ├── contexts/
│   │   │   └── CartContext.tsx   ← কার্ট লজিক
│   │   └── index.css             ← ডিজাইন/রঙ
│   └── index.html
├── package.json
└── README.md
```

---

## গুরুত্বপূর্ণ নোট

⚠️ **এই ফাইলগুলি এডিট করবেন না:**
- `node_modules/` ফোল্ডার
- `dist/` ফোল্ডার
- `package-lock.json`

✅ **শুধু এই ফোল্ডারে এডিট করুন:**
- `client/src/` - আপনার সব কোড এখানে
- `client/public/` - ছবি এবং ফাইল

---

## সার্ভার বন্ধ করুন

যখন শেষ করবেন, কমান্ড লাইনে এই কী চাপুন:
```
Ctrl + C
```

---

## আরও সাহায্য প্রয়োজন?

- **Setup Guide:** `SETUP_GUIDE.md` পড়ুন
- **GitHub Actions:** `GITHUB_ACTIONS_GUIDE.md` পড়ুন
- **GitHub Repository:** https://github.com/HABIBTECHHUB4/habib-dxn-ecommerce

---

**সুখী কোডিং! 🚀**
