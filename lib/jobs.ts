export type Job = {
  id: string;
  title: string;
  company: string;
  initials: string;
  brandColor: string;
  location: string;
  type: "Full-time" | "Part-time" | "Remote" | "Freelance" | "Contract";
  salary: string;
  posted: string;
  schedule: string;
  contact: string;
  status: "Faol" | "Yopilgan";
  description: string;
  requirements: string[];
  responsibilities: string[];
};

export const jobs: Job[] = [
  {
    id: "senior-product-designer", title: "Senior Product Designer", company: "Uzum", initials: "U", brandColor: "#6a4ce0", location: "Toshkent", type: "Full-time", salary: "$2,000 - $3,500", posted: "Bugun", schedule: "Ofis / gibrid", contact: "talent@uzum.com", status: "Faol",
    description: "Uzum ekotizimidagi millionlab foydalanuvchilar uchun sodda va yoqimli raqamli mahsulotlar yaratamiz. Mahsulot jamoasiga tajribali dizayner izlayapmiz.",
    requirements: ["Mahsulot dizaynida 4+ yillik tajriba", "Figma va prototiplash bilan ishonchli ishlash", "Dizayn qarorlarini tadqiqot va maʼlumot bilan asoslash", "Oʻzbek, rus yoki ingliz tillaridan kamida ikkitasida muloqot"],
    responsibilities: ["Mahsulot muammolarini aniqlash va yechimlarni ishlab chiqish", "Tadqiqotchilar va muhandislar bilan yaqin hamkorlik", "Dizayn tizimini rivojlantirish va yaxshilash"],
  },
  {
    id: "frontend-developer", title: "Frontend Developer", company: "Udevs", initials: "U", brandColor: "#257d73", location: "Toshkent", type: "Remote", salary: "$1,500 - $2,800", posted: "2 soat oldin", schedule: "Masofaviy", contact: "jobs@udevs.io", status: "Faol",
    description: "Xalqaro mijozlar uchun tezkor va foydalanishga qulay web mahsulotlar quradigan muhandislar jamoasiga qoʻshiling. Biz sifatli kod va ochiq muloqotni qadrlaymiz.",
    requirements: ["React va TypeScript bilan 3+ yillik tajriba", "HTML, CSS va zamonaviy JavaScript bilimlari", "REST API va Git bilan ishlash tajribasi", "Ingliz tilida texnik muloqot qila olish"],
    responsibilities: ["Yangi interfeyslarni ishlab chiqish va mavjudlarini yaxshilash", "Kod tekshiruvi va texnik qarorlarda qatnashish", "Dizayner va backend jamoasi bilan hamkorlik qilish"],
  },
  {
    id: "marketing-manager", title: "Marketing Manager", company: "Safia", initials: "S", brandColor: "#c86545", location: "Toshkent", type: "Full-time", salary: "$1,200 - $2,000", posted: "Kecha", schedule: "Ofis", contact: "hr@safia.uz", status: "Faol",
    description: "Tez rivojlanayotgan brendimizning marketing yoʻnalishini boshqaring. Strategiyadan tortib kampaniya natijalarigacha boʻlgan jarayonda muhim rol oʻynaysiz.",
    requirements: ["Marketing sohasida 3+ yillik tajriba", "Raqamli reklama va kontent strategiyasi bilimlari", "Natijalarni tahlil qilish va hisobot tayyorlash", "Kuchli yozma va ogʻzaki muloqot"],
    responsibilities: ["Marketing rejasini tuzish va amalga oshirish", "Kampaniya budjeti va samaradorligini kuzatish", "Kontent va dizayn jamoalari bilan ishlash"],
  },
  {
    id: "data-analyst", title: "Data Analyst", company: "TBC Bank", initials: "T", brandColor: "#3271c7", location: "Toshkent", type: "Full-time", salary: "$1,800 - $3,000", posted: "2 kun oldin", schedule: "Gibrid", contact: "careers@tbcbank.uz", status: "Faol",
    description: "Raqamli bank xizmatlarini yanada yaxshilash uchun maʼlumotlar ortidagi imkoniyatlarni toping. Analitika jamoasi biznes qarorlariga bevosita taʼsir qiladi.",
    requirements: ["SQL bilan erkin ishlash", "Python yoki R da tajriba", "BI vositalari va maʼlumot vizualizatsiyasi", "Analitik fikrlash va natijalarni tushuntira olish"],
    responsibilities: ["Maʼlumotlarni tahlil qilish va tendensiyalarni aniqlash", "Dashboard va muntazam hisobotlar yaratish", "Jamoalarga maʼlumotga asoslangan qarorlarda yordam berish"],
  },
  {
    id: "ux-writer", title: "UX Writer", company: "Payme", initials: "P", brandColor: "#398d72", location: "Remote", type: "Part-time", salary: "Kelishilgan holda", posted: "3 kun oldin", schedule: "Moslashuvchan", contact: "team@payme.uz", status: "Faol",
    description: "Har kuni foydalaniladigan moliyaviy mahsulotlarimizda murakkab narsalarni sodda tushuntirishga yordam bering. Mahsulot dizayni jamoasiga yarim stavkada qoʻshiling.",
    requirements: ["UX matn yoki mahsulot kontentida tajriba", "Oʻzbek tilida ravon va aniq yozish", "Foydalanuvchi ehtiyojlarini tushunish", "Jamoada fikr-mulohaza bilan ishlash"],
    responsibilities: ["Interfeys matnlari va foydalanuvchi oqimlarini yozish", "Terminologiya va ovoz ohangini izchil saqlash", "Dizaynerlar bilan yechimlarni sinab koʻrish"],
  },
  {
    id: "graphic-designer", title: "Graphic Designer", company: "Korzinka", initials: "K", brandColor: "#de6d41", location: "Samarqand", type: "Freelance", salary: "$600 - $1,000", posted: "4 kun oldin", schedule: "Loyiha asosida", contact: "design@korzinka.uz", status: "Faol",
    description: "Marketing kampaniyalari va chakana savdo uchun yorqin vizual materiallar tayyorlaydigan mustaqil dizayner qidiryapmiz.",
    requirements: ["Grafik dizayn sohasida portfolio", "Adobe Illustrator va Photoshop bilimlari", "Brend qoʻllanmasiga rioya qilish", "Muddatlarga masʼuliyat bilan yondashish"],
    responsibilities: ["Raqamli va bosma materiallar dizaynini tayyorlash", "Marketing jamoasidan kelgan briflarni bajarish", "Bir nechta loyihani parallel olib borish"],
  },
];