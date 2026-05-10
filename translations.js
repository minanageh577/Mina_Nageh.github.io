/* ═════════ LANGUAGE TOGGLE ═════════ */

let currentLang = "ar";

function toggleLang() {

  currentLang = currentLang === "ar" ? "en" : "ar";
  document.documentElement.lang = currentLang;
  document.documentElement.dir =
  currentLang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("english");
  document.getElementById("langBtn").innerText =
  currentLang === "ar" ? "EN" : "AR";
  updateTexts();
}

/* ═════════ TRANSLATIONS ═════════ */

const translations = {
  ar: {
    azTitle: "Azure للطلبة",
    gcpTitle: "GCP للطلبة",
    emailTitle: "إيميل جامعي",
    priceFrom: "يبدأ من",

    navServices: "الخدمات",
    navHow: "كيف يعمل",
    navContact: "تواصل معنا",
    badge: "خدمات السحابة للطلبة",
    heroTitle: `
      <span class="highlight">السحابة</span>
      في متناول
      <br>
      كل طالب
    `,

    heroDesc:
      "لا فيزا، لا إيميل جامعي؟ لا مشكلة. نحن نوفر لك اشتراكات Azure و Google Cloud بطريقة سهلة وموثوقة.",
    cta1: "استعرض الخدمات",
    cta2: "تواصل معنا",
    eduLabel: "إيميل جامعي",
    probLabel: "المشكلة",
    probTitle:
      "لماذا يصعب على الطلبة الوصول <br> للخدمات السحابية؟",
    probSub:
      "كثير من الطلبة حول العالم يواجهون عقبات حقيقية تمنعهم من الاستفادة من أقوى منصات السحابة.",
    p1Title: "مشكلة الفيزا",
    p1Text:
      "كثير من الدول تواجه صعوبة في الحصول على بطاقات ائتمانية دولية مقبولة.",
    p2Title: "الإيميل الجامعي",
    p2Text:
      "بعض الجامعات لا توفر إيميلات .edu رسمية للطلبة.",
    p3Title: "القيود الجغرافية",
    p3Text:
      "بعض المناطق مستبعدة أو محدودة من برامج الطلبة.",
    p4Title: "التحقق المعقد",
    p4Text:
      "إجراءات التحقق المعقدة تجعل التسجيل طويل ومربك.",
    servLabel: "خدماتنا",
    servTitle: "كل ما تحتاجه في مكان واحد",
    servSub:
      "نقدم لك الوصول الكامل لأقوى منصات السحابة بدون تعقيدات.",
    azDesc:
      "اشتراك كامل في Microsoft Azure مع رصيد مجاني للتعلم والمشاريع.",
    azF1: "رصيد Azure مجاني",
    azF2: "وصول لأكثر من 25 خدمة",
    azF3: "Azure DevOps مجاناً",
    azF4: "دعم تقني متخصص",
    azF5: "تفعيل خلال 24 ساعة",
    gcpDesc:
      "اشتراك Google Cloud Platform مع رصيد للاستخدام والوصول الكامل.",
    gcpF1: "رصيد GCP مجاني",
    gcpF2: "Google Kubernetes Engine",
    gcpF3: "BigQuery و Firebase",
    gcpF4: "Vertex AI & ML Tools",

    gcpF5: "تفعيل فوري",
    emailTitle: "إيميل جامعي",
    emailDesc:
      "إيميل جامعي رسمي يمنحك الوصول لجميع البرامج التعليمية.",
    emF1: "إيميل .edu رسمي",
    emF2: "GitHub Student Pack",
    emF3: "JetBrains مجاناً",
    emF4: "Microsoft 365 للطلبة",
    emF5: "Canva Pro مجاناً",
    from: "يبدأ من",
    howLabel: "كيف يعمل",
    howTitle: "أربع خطوات بسيطة",
    howSub:
      "العملية كلها سريعة وسهلة بدون تعقيدات.",
    s1Title: "اختر خدمتك",
    s1Text:
      "تصفح خدماتنا واختر الاشتراك المناسب لاحتياجاتك.",
    s2Title: "تواصل معنا",
    s2Text:
      "أرسل طلبك وسنرد عليك خلال ساعات.",
    s3Title: "أكمل الدفع",
    s3Text:
      "طرق دفع سهلة ومناسبة لجميع الطلبة.",
    s4Title: "ابدأ الاستخدام",
    s4Text:
      "استلم بياناتك وابدأ رحلتك السحابية فوراً.",
    trustLabel: "لماذا نحن",
    trustTitle: "أرقام تتحدث عن نفسها",
    t1: "طالب مستفيد",
    t2: "وقت التفعيل",
    t3: "منصات سحابية",
    t4: "رضا العملاء",
    ctaTitle: "جاهز تبدأ رحلتك السحابية؟",
    ctaDesc:
      "انضم لمئات الطلبة الذين وجدوا طريقهم إلى Azure و Google Cloud معنا",
    ctaBtn: "ابدأ الآن",
    contLabel: "تواصل معنا",
    contTitle: "نحن هنا لمساعدتك",
    reachTitle: "تواصل بأي طريقة تناسبك",
    lblName: "الاسم الكامل",
    lblEmail: "البريد الإلكتروني",
    lblService: "الخدمة المطلوبة",
    lblMsg: "رسالتك",
    inpName: "أدخل اسمك الكامل",
    inpMsg: "اكتب أي تفاصيل إضافية...",
    optChoose: "اختر الخدمة",
    submitBtn: "إرسال الطلب ←",
    emailLbl: "البريد الإلكتروني",
    hoursLbl: "ساعات العمل",
    hoursText:
      "السبت - الخميس، 9 صباحاً - 11 مساءً",
    footerText:
      "© 2026 CloudReach — خدمات السحابة للطلبة",
    footerRights:
      "جميع الحقوق محفوظة"
  },

  /* ═════════ ENGLISH ═════════ */

  en: {
    azTitle: "Azure for Students",
    gcpTitle: "GCP for Students",
    emailTitle: "Edu Email",
    priceFrom: "Starts from",




    azTitle: "Azure for Students",
    gcpTitle: "GCP for Students",
    emailTitle: "Edu Email",
    azFrom: "Starting from",
    gcpFrom: "Starting from",
    emFrom: "Starting from",
    navServices: "Services",
    navHow: "How It Works",
    navContact: "Contact",
    badge: "Cloud Services For Students",
    heroTitle: `
      Cloud Access
      <br>
      For Every
      <span class="highlight">Student</span>
    `,
    heroDesc:
      "No Visa card? No university email? No problem. We provide Azure and Google Cloud subscriptions easily and safely.",
    cta1: "Explore Services",
    cta2: "Contact Us",
    eduLabel: "Edu Email",
    probLabel: "THE PROBLEM",
    probTitle:
      "Why Is Cloud Access Difficult <br> For Students?",
    probSub:
      "Students around the world face many obstacles preventing them from using top cloud platforms.",
    p1Title: "Visa Problems",
    p1Text:
      "Many countries struggle with international payment cards.",
    p2Title: "University Email",
    p2Text:
      "Some universities don't provide official .edu emails.",
    p3Title: "Geo Restrictions",
    p3Text:
      "Some regions are excluded from student programs.",
    p4Title: "Complex Verification",
    p4Text:
      "Verification processes are often long and confusing.",
    servLabel: "OUR SERVICES",
    servTitle: "Everything You Need In One Place",
    servSub:
      "Get full access to the most powerful cloud platforms without complications.",
    azDesc:
      "Complete Microsoft Azure subscription with free credits for learning and projects.",
    azF1: "Free Azure Credits",
    azF2: "Access To 25+ Services",
    azF3: "Free Azure DevOps",
    azF4: "Technical Support",
    azF5: "Activation Within 24h",
    gcpDesc:
      "Google Cloud Platform subscription with credits and full platform access.",
    gcpF1: "Free GCP Credits",
    gcpF2: "Google Kubernetes Engine",
    gcpF3: "BigQuery & Firebase",
    gcpF4: "Vertex AI Tools",
    gcpF5: "Instant Activation",
    emailTitle: "Edu Email",
    emailDesc:
      "Official university email that unlocks educational platforms.",
    emF1: "Official .edu Email",
    emF2: "GitHub Student Pack",
    emF3: "Free JetBrains",
    emF4: "Microsoft 365",
    emF5: "Free Canva Pro",
    from: "Starting From",
    howLabel: "HOW IT WORKS",
    howTitle: "Four Simple Steps",
    howSub:
      "The whole process is fast and easy.",
    s1Title: "Choose Service",
    s1Text:
      "Browse services and select the best one for you.",
    s2Title: "Contact Us",
    s2Text:
      "Send your request and we'll reply quickly.",
    s3Title: "Complete Payment",
    s3Text:
      "Easy payment methods for everyone.",
    s4Title: "Start Using",
    s4Text:
      "Receive your account details and begin instantly.",
    trustLabel: "WHY US",
    trustTitle: "Numbers Speak For Themselves",
    t1: "Students Served",
    t2: "Activation Time",
    t3: "Cloud Platforms",
    t4: "Customer Satisfaction",
    ctaTitle: "Ready To Start Your Cloud Journey?",
    ctaDesc:
      "Join hundreds of students already using Azure & Google Cloud with us.",
    ctaBtn: "Start Now",
    contLabel: "CONTACT",
    contTitle: "We Are Here To Help",

    reachTitle: "Contact Us Any Way You Prefer",

    lblName: "Full Name",
    lblEmail: "Email Address",
    lblService: "Required Service",
    lblMsg: "Your Message",

    inpName: "Enter your full name",
    inpMsg: "Write any additional details...",

    optChoose: "Choose Service",
    submitBtn: "Send Request →",
    emailLbl: "Email Address",
    hoursLbl: "Working Hours",

    hoursText:
      "Saturday - Thursday, 9AM - 11PM",

    footerText:
      "© 2026 CloudReach — Cloud Services For Students",

    footerRights:
      "All Rights Reserved"
  }
};

/* ═════════ UPDATE TEXTS ═════════ */

function updateTexts() {

  const t = translations[currentLang];

  document.getElementById("nav-services").innerHTML = t.navServices;
  document.getElementById("nav-how").innerHTML = t.navHow;
  document.getElementById("nav-contact").innerHTML = t.navContact;
  document.getElementById("badge-text").innerHTML = t.badge
  document.getElementById("hero-title").innerHTML = t.heroTitle;
  document.getElementById("hero-desc").innerHTML = t.heroDesc;
  document.getElementById("cta1").innerHTML = t.cta1;
  document.getElementById("cta2").innerHTML = t.cta2;
  document.getElementById("edu-label").innerHTML = t.eduLabel;
  document.getElementById("prob-label").innerHTML = t.probLabel;
  document.getElementById("prob-title").innerHTML = t.probTitle;
  document.getElementById("prob-sub").innerHTML = t.probSub;
  document.getElementById("p1-title").innerHTML = t.p1Title;
  document.getElementById("p1-text").innerHTML = t.p1Text;
  document.getElementById("p2-title").innerHTML = t.p2Title;
  document.getElementById("p2-text").innerHTML = t.p2Text;
  document.getElementById("p3-title").innerHTML = t.p3Title;
  document.getElementById("p3-text").innerHTML = t.p3Text;
  document.getElementById("p4-title").innerHTML = t.p4Title;
  document.getElementById("p4-text").innerHTML = t.p4Text;
  document.getElementById("serv-label").innerHTML = t.servLabel;
  document.getElementById("serv-title").innerHTML = t.servTitle;
  document.getElementById("serv-sub").innerHTML = t.servSub;
  document.getElementById("az-desc").innerHTML = t.azDesc;
  document.getElementById("gcp-desc").innerHTML = t.gcpDesc;
  document.getElementById("email-title").innerHTML = t.emailTitle;
  document.getElementById("email-desc").innerHTML = t.emailDesc;
  document.getElementById("how-label").innerHTML = t.howLabel;
  document.getElementById("how-title").innerHTML = t.howTitle;
  document.getElementById("how-sub").innerHTML = t.howSub;
  document.getElementById("s1-title").innerHTML = t.s1Title;
  document.getElementById("s1-text").innerHTML = t.s1Text;
  document.getElementById("s2-title").innerHTML = t.s2Title;
  document.getElementById("s2-text").innerHTML = t.s2Text;
  document.getElementById("s3-title").innerHTML = t.s3Title;
  document.getElementById("s3-text").innerHTML = t.s3Text;
  document.getElementById("s4-title").innerHTML = t.s4Title;
  document.getElementById("s4-text").innerHTML = t.s4Text;
  document.getElementById("trust-label").innerHTML = t.trustLabel;
  document.getElementById("trust-title").innerHTML = t.trustTitle;
  document.getElementById("t1").innerHTML = t.t1;
  document.getElementById("t2").innerHTML = t.t2;
  document.getElementById("t3").innerHTML = t.t3;
  document.getElementById("t4").innerHTML = t.t4;
  document.getElementById("cta-title").innerHTML = t.ctaTitle;
  document.getElementById("cta-desc").innerHTML = t.ctaDesc;
  document.getElementById("cta-btn").innerHTML = t.ctaBtn;
  document.getElementById("cont-label").innerHTML = t.contLabel;
  document.getElementById("cont-title").innerHTML = t.contTitle;
  document.getElementById("reach-title").innerHTML = t.reachTitle;
  document.getElementById("lbl-name").innerHTML = t.lblName;
  document.getElementById("lbl-email").innerHTML = t.lblEmail;
  document.getElementById("lbl-service").innerHTML = t.lblService;
  document.getElementById("lbl-msg").innerHTML = t.lblMsg;
  document.getElementById("inp-name").placeholder = t.inpName;
  document.getElementById("inp-msg").placeholder = t.inpMsg;
  document.getElementById("opt-choose").innerHTML = t.optChoose;
  document.getElementById("submit-btn").innerHTML = t.submitBtn;
  document.getElementById("email-lbl").innerHTML = t.emailLbl;
  document.getElementById("hours-lbl").innerHTML = t.hoursLbl;
  document.getElementById("hours-text").innerHTML = t.hoursText;
  document.getElementById("footer-text").innerHTML = t.footerText;
  document.getElementById("footer-rights").innerHTML = t.footerRights;

document.getElementById("az-f1").innerHTML = t.azF1;
document.getElementById("az-f2").innerHTML = t.azF2;
document.getElementById("az-f3").innerHTML = t.azF3;
document.getElementById("az-f4").innerHTML = t.azF4;
document.getElementById("az-f5").innerHTML = t.azF5;
document.getElementById("gcp-f1").innerHTML = t.gcpF1;
document.getElementById("gcp-f2").innerHTML = t.gcpF2;
document.getElementById("gcp-f3").innerHTML = t.gcpF3;
document.getElementById("gcp-f4").innerHTML = t.gcpF4;
document.getElementById("gcp-f5").innerHTML = t.gcpF5;
document.getElementById("em-f1").innerHTML = t.emF1;
document.getElementById("em-f2").innerHTML = t.emF2;
document.getElementById("em-f3").innerHTML = t.emF3;
document.getElementById("em-f4").innerHTML = t.emF4;
document.getElementById("em-f5").innerHTML = t.emF5;
document.getElementById("az-title").innerHTML = t.azTitle;
document.getElementById("gcp-title").innerHTML = t.gcpTitle;
document.getElementById("email-title").innerHTML = t.emailTitle;
document.getElementById("az-from").innerHTML = t.azFrom;
document.getElementById("gcp-from").innerHTML = t.gcpFrom;
document.getElementById("em-from").innerHTML = t.emFrom;
}
