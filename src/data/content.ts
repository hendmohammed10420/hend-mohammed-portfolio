/**
 * ============================================================
 *  ALL PORTFOLIO CONTENT LIVES HERE
 *  Edit this file to change any text, link, or project.
 *  Every text field has { en, ar } — update both.
 * ============================================================
 */

export type Lang = 'en' | 'ar'
export type T = Record<Lang, string>

export const profile = {
  name: { en: 'Hend Mohammed', ar: 'هند محمد' } as T,
  role: { en: 'Frontend Software Engineer', ar: 'مهندسة برمجيات Frontend' } as T,
  location: { en: 'Cairo, Egypt · Open to remote', ar: 'القاهرة، مصر · متاحة للعمل عن بُعد' } as T,
  email: 'hendmohammed10420@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hend-mohammed-20ab21202/',
  github: 'https://github.com/hendmohammed10420',
  leetcode: 'https://leetcode.com/u/Hend_Mohammed/',
  cv: '/Hend_Mohammed_CV.pdf',
  // Optional: put your photo in /public (e.g. /public/hend.jpg) and set avatar: '/hend.jpg'
  avatar: '' as string,
}

export const ui = {
  nav: {
    about: { en: 'About', ar: 'نبذة' },
    experience: { en: 'Experience', ar: 'الخبرات' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    skills: { en: 'Skills', ar: 'المهارات' },
    contact: { en: 'Contact', ar: 'تواصل' },
  } as Record<string, T>,
  available: { en: 'Available for freelance & part-time', ar: 'متاحة لمشاريع فريلانس ودوام جزئي' } as T,
  hireMe: { en: 'Hire me', ar: 'تواصل معي' } as T,
  viewWork: { en: 'View my work', ar: 'شوف شغلي' } as T,
  downloadCv: { en: 'Download CV', ar: 'تحميل السيرة الذاتية' } as T,
  comingSoon: { en: 'In progress', ar: 'قيد التنفيذ' } as T,
  screenshotSoon: { en: 'Screenshot coming soon', ar: 'الصورة قريبًا' } as T,
  liveDemo: { en: 'Live demo', ar: 'معاينة' } as T,
  code: { en: 'Code', ar: 'الكود' } as T,
  sections: {
    aboutTitle: { en: 'Building SaaS products people use every day', ar: 'ببني منتجات SaaS بيستخدمها الناس كل يوم' },
    experienceTitle: { en: 'Where I’ve worked', ar: 'اشتغلت فين' },
    projectsTitle: { en: 'Selected projects', ar: 'مشاريع مختارة' },
    projectsSub: {
      en: 'A mix of shipped work and new builds in progress.',
      ar: 'مزيج من شغل اتسلّم ومشاريع جديدة شغالة عليها.',
    },
    skillsTitle: { en: 'Tools I work with', ar: 'الأدوات اللي بشتغل بيها' },
    servicesTitle: { en: 'What I can build for you', ar: 'أقدر أعملك إيه' },
    contactTitle: { en: 'Let’s build something together', ar: 'يلا نبني حاجة سوا' },
    contactSub: {
      en: 'Have a dashboard, admin panel, or landing page in mind? I reply within 24 hours.',
      ar: 'عندك فكرة Dashboard أو لوحة تحكم أو Landing page؟ برد خلال 24 ساعة.',
    },
  } as Record<string, T>,
}

export const heroRoles: T[] = [
  { en: 'React & TypeScript', ar: 'React و TypeScript' },
  { en: 'Arabic / English RTL interfaces', ar: 'واجهات عربي / إنجليزي RTL' },
  { en: 'SaaS dashboards & admin panels', ar: 'Dashboards ولوحات تحكم SaaS' },
  { en: 'Financial & HR reporting UIs', ar: 'واجهات تقارير مالية و HR' },
]

export const about: T = {
  en: 'Frontend-focused Software Engineer with 3+ years building multi-tenant SaaS products for the Saudi market — accounting/ERP, tax compliance, payroll, inventory, and HR. I own features end to end: clarifying requirements with product and finance stakeholders, integrating APIs, building bilingual Arabic/English (RTL) UIs, and covering them with Cypress E2E tests.',
  ar: 'مهندسة برمجيات متخصصة في الـ Frontend، عندي أكتر من 3 سنين خبرة في بناء منتجات SaaS للسوق السعودي: محاسبة وERP، امتثال ضريبي، رواتب، مخزون، وموارد بشرية. بمسك الـ feature من أولها لآخرها: من توضيح المتطلبات مع فريق المنتج والمالية، لربط الـ APIs، لبناء واجهات عربي/إنجليزي (RTL)، لحد اختبارات Cypress E2E.',
}

export const stats: { value: string; label: T }[] = [
  { value: '3+', label: { en: 'Years of experience', ar: 'سنين خبرة' } },
  { value: '50K+', label: { en: 'Lines of code shipped', ar: 'سطر كود اتسلّم' } },
  { value: '2', label: { en: 'SaaS products', ar: 'منتجات SaaS' } },
  { value: '15+', label: { en: 'Analytics events', ar: 'Analytics events' } },
]

export const services: { icon: 'dashboard' | 'rtl' | 'landing' | 'migrate'; title: T; desc: T }[] = [
  {
    icon: 'dashboard',
    title: { en: 'Dashboards & admin panels', ar: 'Dashboards ولوحات تحكم' },
    desc: {
      en: 'Data tables, filters, charts and reports with React, TypeScript and Ant Design.',
      ar: 'جداول وفلاتر ورسوم بيانية وتقارير بـ React و TypeScript و Ant Design.',
    },
  },
  {
    icon: 'rtl',
    title: { en: 'Arabic / RTL support', ar: 'دعم العربي و RTL' },
    desc: {
      en: 'Add proper Arabic + English support to an existing app — layout, fonts, numbers, dates.',
      ar: 'إضافة دعم عربي + إنجليزي صح لتطبيق موجود: الـ layout والخطوط والأرقام والتواريخ.',
    },
  },
  {
    icon: 'landing',
    title: { en: 'Landing pages', ar: 'Landing pages' },
    desc: {
      en: 'Fast, responsive, animated landing pages with React and Tailwind CSS.',
      ar: 'صفحات سريعة ومتجاوبة وفيها حركة بـ React و Tailwind CSS.',
    },
  },
  {
    icon: 'migrate',
    title: { en: 'Fixes & migrations', ar: 'إصلاحات وتحويل لـ React' },
    desc: {
      en: 'Bug fixes, refactors, and moving legacy pages to modern React.',
      ar: 'حل bugs، تحسين كود، وتحويل صفحات قديمة لـ React حديث.',
    },
  },
]

export const experience: {
  company: string
  role: T
  period: T
  place: T
  blocks: { title?: T; points: T[] }[]
}[] = [
  {
    company: 'Qoyod',
    role: { en: 'Software Engineer', ar: 'مهندسة برمجيات' },
    period: { en: 'Jul 2023 – Present', ar: 'يوليو 2023 – حتى الآن' },
    place: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    blocks: [
      {
        title: { en: 'Qoyod Main — ERP / Accounting platform', ar: 'Qoyod Main — منصة ERP ومحاسبة' },
        points: [
          {
            en: 'Delivered 34,800+ lines across 345 files, including a full React migration of the Payroll Bonuses module (Rails ERB → React + Ant Design).',
            ar: 'سلّمت أكتر من 34,800 سطر في 345 ملف، منهم تحويل كامل لموديول مكافآت الرواتب من Rails ERB لـ React + Ant Design.',
          },
          {
            en: 'Built the Dashboard Low-Stock Notification System for real-time inventory alerting.',
            ar: 'بنيت نظام تنبيهات نقص المخزون في الـ Dashboard بشكل لحظي.',
          },
          {
            en: 'Shipped financial reports: IFRS 18 Income Statement, VAT Zero-Rated & Exempt, Aging, Inventory Turnover, Product Margin.',
            ar: 'سلّمت تقارير مالية: قائمة الدخل IFRS 18، ضريبة القيمة المضافة (الصفرية والمعفاة)، أعمار الديون، دوران المخزون، هامش المنتج.',
          },
        ],
      },
      {
        title: { en: 'QHR — HR management platform', ar: 'QHR — منصة إدارة موارد بشرية' },
        points: [
          {
            en: 'Shipped 18,100+ lines in 4 months, incl. a 65-file Employee Leave Request feature with bilingual EN/AR support.',
            ar: 'سلّمت أكتر من 18,100 سطر في 4 شهور، منهم feature طلبات الإجازات (65 ملف) بدعم عربي/إنجليزي.',
          },
          {
            en: 'Designed the feature-module architecture (API / types / hooks / components / locales) adopted as the team standard.',
            ar: 'صممت الـ feature-module architecture (API / types / hooks / components / locales) واتعمدت كـ standard للفريق.',
          },
        ],
      },
    ],
  },
  {
    company: 'Almentor',
    role: { en: 'Instructor', ar: 'مدرّبة' },
    period: { en: 'Nov 2024 – Apr 2025', ar: 'نوفمبر 2024 – أبريل 2025' },
    place: { en: 'Online', ar: 'أونلاين' },
    blocks: [
      {
        points: [
          {
            en: 'Taught programming basics, AI, and mobile development fundamentals to school students through problem-solving-focused lessons.',
            ar: 'درّست أساسيات البرمجة والذكاء الاصطناعي وتطوير الموبايل لطلاب المدارس بأسلوب قائم على حل المشكلات.',
          },
        ],
      },
    ],
  },
]

/**
 * PROJECTS
 * - status: 'live' (done) or 'wip' (in progress → shows "In progress" badge)
 * - image: put a screenshot in /public/projects/ and set image: '/projects/your-file.png'
 *          leave it empty ('') to show the animated placeholder
 * - demo / repo: links (leave '' to hide the button)
 */
export type Project = {
  id: string
  status: 'live' | 'wip'
  mock: 'dashboard' | 'invoice' | 'landing' | 'shop'
  title: T
  desc: T
  tags: string[]
  image: string
  demo: string
  repo: string
}

export const projects: Project[] = [
  {
    id: 'admin-dashboard',
    status: 'wip',
    mock: 'dashboard',
    title: { en: 'Bilingual Admin Dashboard', ar: 'لوحة تحكم ثنائية اللغة' },
    desc: {
      en: 'A sales & inventory dashboard with KPI cards, charts, filterable data tables and a one-click Arabic/English (RTL) switch.',
      ar: 'Dashboard للمبيعات والمخزون فيه KPI cards ورسوم بيانية وجداول بفلاتر، وتبديل عربي/إنجليزي (RTL) بضغطة.',
    },
    tags: ['React', 'TypeScript', 'Ant Design', 'TanStack Query', 'RTL'],
    image: '',
    demo: '',
    repo: '',
  },
  {
    id: 'invoice-vat',
    status: 'wip',
    mock: 'invoice',
    title: { en: 'Invoice & VAT Reports', ar: 'الفواتير وتقارير الضريبة' },
    desc: {
      en: 'Create invoices with 15% VAT, preview a printable Arabic invoice, and see a monthly VAT summary report.',
      ar: 'إنشاء فواتير بضريبة 15%، ومعاينة فاتورة عربي جاهزة للطباعة، وتقرير شهري ملخص للضريبة.',
    },
    tags: ['React', 'TypeScript', 'Forms', 'Reports'],
    image: '',
    demo: '',
    repo: '',
  },
  {
    id: 'arabic-landing',
    status: 'wip',
    mock: 'landing',
    title: { en: 'Arabic SaaS Landing Page', ar: 'Landing page عربي لمنتج SaaS' },
    desc: {
      en: 'A fast, animated Arabic-first landing page for a SaaS product, with pricing, FAQ and contact sections.',
      ar: 'صفحة هبوط عربي أولًا لمنتج SaaS، سريعة وفيها حركة، مع أقسام الأسعار والأسئلة الشائعة والتواصل.',
    },
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    image: '',
    demo: '',
    repo: '',
  },
  {
    id: 'ecommerce',
    status: 'live',
    mock: 'shop',
    title: { en: 'E-commerce Front-End', ar: 'واجهة متجر إلكتروني' },
    desc: {
      en: 'A dynamic, responsive e-commerce front-end focused on fast page loads and a smooth shopping flow.',
      ar: 'واجهة متجر إلكتروني متجاوبة، مركّزة على سرعة التحميل وتجربة شراء سلسة.',
    },
    tags: ['React', 'JavaScript', 'Responsive'],
    image: '',
    demo: '',
    repo: '',
  },
]

export const skills: { group: T; items: string[] }[] = [
  {
    group: { en: 'Frontend', ar: 'Frontend' },
    items: ['React', 'TypeScript', 'JavaScript', 'Ant Design', 'TanStack Query', 'Tailwind CSS', 'Angular', 'Vue.js'],
  },
  {
    group: { en: 'Testing & tools', ar: 'اختبارات وأدوات' },
    items: ['Cypress E2E', 'Git', 'GitLab', 'Mixpanel', 'REST APIs', 'Agile'],
  },
  {
    group: { en: 'Backend & data', ar: 'Backend وبيانات' },
    items: ['Ruby', 'Python', 'PostgreSQL', 'MySQL', 'MongoDB', 'Linux'],
  },
]

export const education: { title: T; place: T; period: string }[] = [
  {
    title: { en: 'Professional Diploma — Open Source Application Development', ar: 'دبلومة مهنية — تطوير التطبيقات مفتوحة المصدر' },
    place: { en: 'Information Technology Institute (ITI)', ar: 'معهد تكنولوجيا المعلومات (ITI)' },
    period: '2022 – 2023',
  },
  {
    title: { en: 'B.Sc. Computer Science', ar: 'بكالوريوس علوم الحاسب' },
    place: { en: 'Faculty of Computers & Information, Zagazig', ar: 'كلية الحاسبات والمعلومات، الزقازيق' },
    period: '2018 – 2022',
  },
]
