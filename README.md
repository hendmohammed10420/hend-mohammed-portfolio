# Hend Mohammed — Portfolio

React + TypeScript + Vite + Tailwind CSS v4 + Framer Motion. Bilingual (English / العربية) with full RTL support.

## تشغيل المشروع

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## تعديل المحتوى

**كل النصوص واللينكات والمشاريع في ملف واحد:** `src/data/content.ts`
كل نص فيه `{ en, ar }`، فعدّلي النسختين.

## إضافة صورة (screenshot) لمشروع

1. حطي الصورة في `public/projects/` (مثلًا `admin-dashboard.png`، ويُفضّل تكون 1600×1000)
2. في `src/data/content.ts`، جوه المشروع:
   ```ts
   image: '/projects/admin-dashboard.png',
   demo: 'https://your-demo.vercel.app',
   repo: 'https://github.com/hendmohammed10420/admin-dashboard',
   status: 'live',   // بدل 'wip' عشان يختفي بادج "In progress"
   ```
   طول ما `image` فاضية، هيظهر الـ mockup المتحرك.

## صورتك الشخصية (اختياري)
حطي `public/hend.jpg` واعملي `avatar: '/hend.jpg'` في `profile`.

## الـ CV
`public/Hend_Mohammed_CV.pdf`: استبدليه بأي نسخة جديدة بنفس الاسم.

## Deploy مجاني على Vercel
1. ارفعي المشروع على GitHub (repo اسمه مثلًا `portfolio`)
2. ادخلي vercel.com → Sign in with GitHub → **Add New Project** → اختاري الـ repo → **Deploy**
3. هتاخدي لينك زي `hend-mohammed.vercel.app`: حطيه في LinkedIn ومستقل وUpwork

## الهيكل
```
src/
  data/content.ts      ← كل المحتوى
  lang.tsx             ← EN/AR context + RTL
  components/
    Navbar, Hero, About, Experience, Projects, Skills, Contact, Background, ui
```
