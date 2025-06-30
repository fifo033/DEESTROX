import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight, Globe, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const translations = {
  en: {
    nav_home: "Home",
    nav_services: "Services & Costs",
    nav_contact: "Contact Us",
    projects_title: "Our Projects",
    projects_subtitle: "Explore our recent work and success stories",
    view_demo: "View Demo",
    close: "Close",
    project_1_name: "E-Commerce Mobile App",
    project_1_desc: "Full-featured shopping app with payment integration",
    project_1_full: "A comprehensive e-commerce mobile application built with React Native. Features include user authentication, product catalog, shopping cart, payment gateway integration, order tracking, and push notifications. The app serves over 10,000 active users and has achieved a 4.8-star rating on both App Store and Google Play.",
    project_2_name: "Corporate Website Redesign",
    project_2_desc: "Modern responsive website with CMS integration",
    project_2_full: "Complete redesign and development of a corporate website for a Fortune 500 company. The project included UX/UI design, frontend development with React, backend API development, CMS integration, SEO optimization, and performance enhancements. The new website achieved a 40% increase in conversion rates and 60% improvement in page load speeds.",
    project_3_name: "AI-Powered Analytics Platform",
    project_3_desc: "Business intelligence dashboard with machine learning",
    project_3_full: "Advanced analytics platform that leverages artificial intelligence to provide business insights. Built with React for the frontend, Python/Django for the backend, and TensorFlow for ML models. Features include real-time data visualization, predictive analytics, automated reporting, and custom dashboard creation. The platform processes over 1 million data points daily.",
    project_4_name: "Healthcare Management System",
    project_4_desc: "HIPAA-compliant patient management solution",
    project_4_full: "Comprehensive healthcare management system designed for medical practices. The system includes patient registration, appointment scheduling, electronic health records, billing integration, reporting, and telemedicine capabilities. Built with security-first approach ensuring full HIPAA compliance and data encryption.",
    project_5_name: "Real Estate Platform",
    project_5_desc: "Property listing and management web application",
    project_5_full: "Full-stack real estate platform connecting buyers, sellers, and agents. Features include property listings with virtual tours, advanced search filters, mortgage calculator, agent profiles, messaging system, and document management. The platform handles over 50,000 property listings across multiple regions.",
    project_6_name: "Fintech Mobile Wallet",
    project_6_desc: "Secure digital payment and banking solution",
    project_6_full: "Innovative mobile wallet application with advanced security features. Includes peer-to-peer payments, bill payments, QR code transactions, budget tracking, investment options, and multi-currency support. The app implements biometric authentication, end-to-end encryption, and fraud detection algorithms."
  },
  ru: {
    nav_home: "Главная",
    nav_services: "Услуги и цены",
    nav_contact: "Связаться с нами",
    projects_title: "Наши проекты",
    projects_subtitle: "Изучите наши последние работы и истории успеха",
    view_demo: "Посмотреть демо",
    close: "Закрыть",
    project_1_name: "Мобильное приложение E-Commerce",
    project_1_desc: "Полнофункциональное приложение для покупок с интеграцией платежей",
    project_1_full: "Комплексное мобильное приложение для электронной коммерции, созданное с помощью React Native. Включает аутентификацию пользователей, каталог товаров, корзину покупок, интеграцию платежного шлюза, отслеживание заказов и push-уведомления. Приложение обслуживает более 10 000 активных пользователей и получило рейтинг 4,8 звезды в App Store и Google Play.",
    project_2_name: "Редизайн корпоративного сайта",
    project_2_desc: "Современный адаптивный сайт с интеграцией CMS",
    project_2_full: "Полный редизайн и разработка корпоративного сайта для компании из списка Fortune 500. Проект включал UX/UI дизайн, frontend разработку на React, разработку backend API, интеграцию CMS, SEO оптимизацию и улучшение производительности. Новый сайт достиг 40% увеличения конверсии и 60% улучшения скорости загрузки страниц.",
    project_3_name: "AI-платформа аналитики",
    project_3_desc: "Панель бизнес-аналитики с машинным обучением",
    project_3_full: "Продвинутая аналитическая платформа, использующая искусственный интеллект для предоставления бизнес-инсайтов. Создана с React для frontend, Python/Django для backend и TensorFlow для ML моделей. Включает визуализацию данных в реальном времени, предиктивную аналитику, автоматизированную отчетность и создание пользовательских дашбордов.",
    project_4_name: "Система управления здравоохранением",
    project_4_desc: "HIPAA-совместимое решение для управления пациентами",
    project_4_full: "Комплексная система управления здравоохранением, разработанная для медицинских практик. Система включает регистрацию пациентов, планирование встреч, электронные медицинские записи, интеграцию биллинга, отчетность и возможности телемедицины. Создана с подходом 'безопасность прежде всего', обеспечивая полное соответствие HIPAA и шифрование данных.",
    project_5_name: "Платформа недвижимости",
    project_5_desc: "Веб-приложение для листинга и управления недвижимостью",
    project_5_full: "Full-stack платформа недвижимости, соединяющая покупателей, продавцов и агентов. Включает листинги недвижимости с виртуальными турами, продвинутые фильтры поиска, ипотечный калькулятор, профили агентов, систему сообщений и управление документами. Платформа обрабатывает более 50 000 листингов недвижимости в нескольких регионах.",
    project_6_name: "Fintech мобильный кошелек",
    project_6_desc: "Безопасное решение для цифровых платежей и банкинга",
    project_6_full: "Инновационное приложение мобильного кошелька с продвинутыми функциями безопасности. Включает peer-to-peer платежи, оплату счетов, QR-код транзакции, отслеживание бюджета, инвестиционные опции и поддержку мультивалют. Приложение реализует биометрическую аутентификацию, сквозное шифрование и алгоритмы обнаружения мошенничества."
  },
  ar: {
    nav_home: "الرئيسية",
    nav_services: "الخدمات والأسعار",
    nav_contact: "اتصل بنا",
    projects_title: "مشاريعنا",
    projects_subtitle: "استكشف أعمالنا الحديثة وقصص نجاحنا",
    view_demo: "عرض العينة",
    close: "إغلاق",
    project_1_name: "تطبيق التجارة الإلكترونية المحمول",
    project_1_desc: "تطبيق تسوق كامل المميزات مع تكامل الدفع",
    project_1_full: "تطبيق محمول شامل للتجارة الإلكترونية تم بناؤه باستخدام React Native. يتضمن مصادقة المستخدم وكتالوج المنتجات وسلة التسوق وتكامل بوابة الدفع وتتبع الطلبات والإشعارات الفورية. يخدم التطبيق أكثر من 10,000 مستخدم نشط وحقق تقييم 4.8 نجوم في كل من App Store و Google Play.",
    project_2_name: "إعادة تصميم موقع الشركة",
    project_2_desc: "موقع ويب حديث متجاوب مع تكامل نظام إدارة المحتوى",
    project_2_full: "إعادة تصميم وتطوير كاملة لموقع شركة من قائمة Fortune 500. شمل المشروع تصميم UX/UI وتطوير الواجهة الأمامية باستخدام React وتطوير API الخلفي وتكامل نظام إدارة المحتوى وتحسين SEO وتحسينات الأداء. حقق الموقع الجديد زيادة 40% في معدلات التحويل وتحسين 60% في سرعات تحميل الصفحة.",
    project_3_name: "منصة التحليلات المدعومة بالذكاء الاصطناعي",
    project_3_desc: "لوحة معلومات ذكية للأعمال مع التعلم الآلي",
    project_3_full: "منصة تحليلات متقدمة تستفيد من الذكاء الاصطناعي لتوفير رؤى الأعمال. تم بناؤها باستخدام React للواجهة الأمامية و Python/Django للخلفية و TensorFlow لنماذج التعلم الآلي. تتضمن الميزات تصور البيانات في الوقت الفعلي والتحليلات التنبؤية والتقارير الآلية وإنشاء لوحات معلومات مخصصة.",
    project_4_name: "نظام إدارة الرعاية الصحية",
    project_4_desc: "حل إدارة المرضى متوافق مع HIPAA",
    project_4_full: "نظام شامل لإدارة الرعاية الصحية مصمم للممارسات الطبية. يتضمن النظام تسجيل المرضى وجدولة المواعيد والسجلات الصحية الإلكترونية وتكامل الفوترة والتقارير وقدرات الطب عن بُعد. تم بناؤه بنهج الأمان أولاً لضمان الامتثال الكامل لـ HIPAA وتشفير البيانات.",
    project_5_name: "منصة العقارات",
    project_5_desc: "تطبيق ويب لإدراج وإدارة العقارات",
    project_5_full: "منصة عقارات متكاملة تربط المشترين والبائعين والوكلاء. تتضمن الميزات قوائم العقارات مع الجولات الافتراضية ومرشحات البحث المتقدمة وحاسبة الرهن العقاري وملفات الوكلاء ونظام المراسلة وإدارة الوثائق. تتعامل المنصة مع أكثر من 50,000 قائمة عقارية عبر مناطق متعددة.",
    project_6_name: "محفظة Fintech المحمولة",
    project_6_desc: "حل دفع رقمي ومصرفي آمن",
    project_6_full: "تطبيق محفظة محمولة مبتكر مع ميزات أمان متقدمة. يتضمن مدفوعات نظير إلى نظير ومدفوعات الفواتير ومعاملات رمز QR وتتبع الميزانية وخيارات الاستثمار ودعم متعدد العملات. ينفذ التطبيق المصادقة البيومترية والتشفير من طرف إلى طرف وخوارزميات كشف الاحتيال."
  }
};

const languageOptions = [
  { 
    code: 'en', 
    label: 'English', 
    flag: '/lovable-uploads/d2e3f15f-e809-4199-ab6b-aacadc0434ff.png', 
    display: 'EN' 
  },
  { 
    code: 'ru', 
    label: 'Русский', 
    flag: '/lovable-uploads/8fa7e58e-7425-4377-8d4a-c02fd3f6e53d.png', 
    display: 'RU' 
  },
  { 
    code: 'ar', 
    label: 'العربية', 
    flag: '/lovable-uploads/d0166951-8e51-43ac-8a05-e9eaeb745235.png', 
    display: 'AR' 
  }
];

const generalDescription = {
  en: "Message Aggregator is an advanced platform designed to centralize and streamline communication with your clients across multiple social networks. With a unified interface, powerful AI assistant, customizable tags, and flexible chat management tools, it makes it easy to handle all your customer conversations in one place. The platform supports dynamic chat indicators, multilingual support, and a fully customizable AI context, ensuring efficient, organized, and personalized communication for your business.",
  ru: "Message Aggregator — это современная платформа для централизованного и эффективного общения с клиентами из разных социальных сетей. Единый интерфейс, мощный AI-ассистент, настраиваемые теги и гибкие инструменты управления чатами позволяют легко вести все диалоги в одном окне. Платформа поддерживает динамические индикаторы чатов, многоязычность и полностью настраиваемый контекст AI, обеспечивая эффективное, организованное и персонализированное взаимодействие с клиентами.",
  ar: "Message Aggregator هو منصة متقدمة تهدف إلى توحيد وتسهيل التواصل مع عملائك عبر شبكات التواصل الاجتماعي المختلفة. بواجهة موحدة، ومساعد ذكي قوي، وعلامات مخصصة، وأدوات إدارة دردشات مرنة، يمكنك إدارة جميع محادثات العملاء في مكان واحد بسهولة. تدعم المنصة مؤشرات دردشة ديناميكية، وتعدد اللغات، وسياق ذكاء اصطناعي قابل للتخصيص بالكامل، مما يضمن تواصلاً فعالاً ومنظماً وشخصياً لأعمالك."
};

const projectScreenshots = [
  {
    src: '/lovable-uploads/messege aggregator/aggregator-cover.png',
    explanations: {
      en: generalDescription.en,
      ru: generalDescription.ru,
      ar: generalDescription.ar
    }
  },
  {
    src: '/lovable-uploads/messege aggregator/Screenshot1.png',
    explanations: {
      en: "This is the main page of the Message Aggregator. It provides a comprehensive overview and access to nearly all the platform's features, including chat management, message previews, and quick navigation between conversations.",
      ru: "Это главная страница Message Aggregator. Здесь представлен полный обзор и доступ практически ко всем функциям платформы: управление чатами, предпросмотр сообщений и быстрая навигация между диалогами.",
      ar: "هذه هي الصفحة الرئيسية لمنصة Message Aggregator. توفر نظرة شاملة وإمكانية الوصول إلى معظم ميزات النظام، بما في ذلك إدارة الدردشات، معاينة الرسائل، والتنقل السريع بين المحادثات."
    }
  },
  {
    src: '/lovable-uploads/messege aggregator/Screenshot2.png',
    explanations: {
      en: "This screenshot demonstrates the chat interface of the Message Aggregator. It showcases a typical conversation between a customer and our AI agent, including automated responses to product inquiries and return policy questions.",
      ru: "На этом скриншоте показан интерфейс чата Message Aggregator. Здесь представлен пример диалога между клиентом и нашим AI-агентом, включая автоматические ответы на вопросы о товарах и политике возврата.",
      ar: "توضح هذه الصورة واجهة الدردشة في منصة Message Aggregator. تعرض مثالاً على محادثة بين العميل والوكيل الذكي (AI)، بما في ذلك الردود التلقائية على استفسارات المنتجات وسياسة الإرجاع."
    }
  },
  {
    src: '/lovable-uploads/messege aggregator/Screenshot3.png',
    explanations: {
      en: "This top bar above the chat list provides dynamic indicators about chat activity and status, such as the total number of chats, those awaiting a response, and active AI-powered conversations. The gear icon on the right leads to the AI customization page, which will be showcased in a separate screenshot.",
      ru: "Эта верхняя панель над списком чатов отображает динамические индикаторы активности и статуса чатов: общее количество чатов, ожидающие ответа и активные чаты с AI. Значок шестерёнки справа ведёт на страницу настройки AI, которую мы покажем отдельно.",
      ar: "يعرض هذا الشريط العلوي فوق قائمة الدردشات مؤشرات ديناميكية حول حالة الدردشات، مثل العدد الإجمالي، الدردشات التي تنتظر الرد، والدردشات المدعومة بالذكاء الاصطناعي. أيقونة الترس على اليمين تفتح صفحة تخصيص الذكاء الاصطناعي، والتي سنعرضها في لقطة شاشة أخرى."
    }
  },
  {
    src: '/lovable-uploads/messege aggregator/Screenshot4.png',
    explanations: {
      en: "This screenshot highlights the tags feature. You can add customizable tags to any chat, making it easy to organize conversations and categorize them according to your needs (e.g., 'problem unsolved,' 'VIP customer').",
      ru: "На этом скриншоте показана функция тегов. Вы можете добавлять настраиваемые теги к любому чату, чтобы удобно организовывать и классифицировать диалоги по своим критериям (например, 'проблема не решена', 'VIP-клиент').",
      ar: "توضح هذه الصورة ميزة العلامات (Tags). يمكنك إضافة علامات مخصصة لأي محادثة، مما يساعدك على تنظيم الدردشات وتصنيفها حسب احتياجاتك (مثل: 'مشكلة غير محلولة'، 'عميل VIP')."
    }
  },
  {
    src: '/lovable-uploads/messege aggregator/Screenshot5.png',
    explanations: {
      en: "This screenshot demonstrates how the Message Aggregator brings together clients from multiple social platforms, allowing you to manage all conversations in one place. The search function at the top makes it easy to find any chat by typing a name, last message, or a specific tag.",
      ru: "На этом скриншоте показано, как Message Aggregator объединяет клиентов из разных социальных платформ, позволяя управлять всеми диалогами в одном окне. Функция поиска вверху помогает быстро найти нужный чат по имени, последнему сообщению или определённому тегу.",
      ar: "توضح هذه الصورة كيف يجمع Message Aggregator العملاء من عدة تطبيقات اجتماعية في مكان واحد، مما يتيح لك إدارة جميع المحادثات بسهولة. تتيح لك وظيفة البحث في الأعلى العثور على أي دردشة عن طريق كتابة الاسم أو آخر رسالة أو علامة محددة."
    }
  },
  {
    src: '/lovable-uploads/messege aggregator/Screenshot6.png',
    explanations: {
      en: "This screenshot shows how you can easily enable or disable the AI assistant for any chat using a simple toggle switch. You can also delete a chat with a single click using the trash icon.",
      ru: "На этом скриншоте видно, как легко включать или отключать AI-ассистента для любого чата с помощью простого переключателя. Также можно удалить чат одним нажатием на значок корзины.",
      ar: "توضح هذه الصورة كيف يمكنك تفعيل أو إيقاف الذكاء الاصطناعي لأي محادثة بسهولة من خلال زر التبديل، كما يمكنك حذف الدردشة بنقرة واحدة على أيقونة الحذف."
    }
  },
  {
    src: '/lovable-uploads/messege aggregator/Screenshot7.png',
    explanations: {
      en: "This screenshot demonstrates the AI context editor, where you can customize and train your AI assistant to respond according to your specific needs. The interface allows you to define detailed instructions and add frequently asked questions (FAQs), making the AI highly adaptable and efficient for your business.",
      ru: "На этом скриншоте показан редактор контекста для AI, где вы можете настраивать и обучать ассистента под свои задачи. Интерфейс позволяет задавать подробные инструкции и добавлять часто задаваемые вопросы (FAQ), что делает AI максимально гибким и эффективным для вашего бизнеса.",
      ar: "توضح هذه الصورة محرر سياق الذكاء الاصطناعي، حيث يمكنك تخصيص وتدريب المساعد الذكي حسب احتياجاتك. تتيح لك الواجهة إضافة تعليمات مفصلة وأسئلة شائعة (FAQ)، مما يجعل الذكاء الاصطناعي قابلاً للتخصيص وفعالاً لأعمالك."
    }
  }
];

const Projects = () => {
  const [language, setLanguage] = useState<'en' | 'ru' | 'ar'>('en');
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[language];

  const getCurrentLanguageOption = () => {
    return languageOptions.find(option => option.code === language) || languageOptions[0];
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/deestrox-logo.svg" alt="Deestrox Logo" className="h-10 w-auto" />
            </Link>
            {/* Go Home button for mobile */}
            <Link
              to="/"
              className="md:hidden flex items-center text-white bg-blue-600 hover:bg-blue-700 rounded-full px-4 py-2 text-base font-semibold shadow-lg transition-colors ml-4"
              style={{ minWidth: 0 }}
            >
              <ArrowLeft className="w-5 h-5 mr-2" /> {t.nav_home}
            </Link>
            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-4">
              <Link 
                to="/" 
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t.nav_home}</span>
              </Link>
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">{t.nav_services}</Link>
              <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">{t.nav_contact}</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none text-white">
                  <img 
                    src={getCurrentLanguageOption().flag} 
                    alt={getCurrentLanguageOption().label}
                    className="w-6 h-4 object-cover rounded-sm"
                  />
                  <span className="text-sm font-medium">{getCurrentLanguageOption().display}</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700 z-50 min-w-[140px]" align="end">
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.code}
                      onClick={() => setLanguage(option.code as 'en' | 'ru' | 'ar')}
                      className="text-white hover:bg-slate-700 cursor-pointer flex items-center space-x-3 px-3 py-2"
                    >
                      <img 
                        src={option.flag} 
                        alt={option.label}
                        className="w-6 h-4 object-cover rounded-sm"
                      />
                      <span className="text-sm font-medium">{option.label}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-8 h-8" />
            </button>
          </div>
        </div>
        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(15,23,42,0.85)', // slate-900 with opacity
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'stretch',
            }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <div
              className="w-72 max-w-full h-full shadow-2xl rounded-r-2xl bg-slate-800 animate-slideIn flex flex-col justify-between p-8"
              style={{ boxShadow: '4px 0 32px 0 rgba(0,0,0,0.25)' }}
              onClick={e => e.stopPropagation()}
            >
              <div>
                <div className="flex justify-end mb-8">
                  <button
                    className="text-gray-300 hover:text-white focus:outline-none"
                    style={{ fontSize: 32 }}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X />
                  </button>
                </div>
                <nav className="flex flex-col gap-6">
                  <Link
                    to="/projects"
                    className="text-lg font-semibold text-gray-100 hover:text-blue-400 transition-colors px-2 py-1 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <a
                    href="/#services"
                    className="text-lg font-semibold text-gray-100 hover:text-blue-400 transition-colors px-2 py-1 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav_services}
                  </a>
                  <a
                    href="/#contact"
                    className="text-lg font-semibold text-gray-100 hover:text-blue-400 transition-colors px-2 py-1 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t.nav_contact}
                  </a>
                </nav>
              </div>
              <div className="mt-12 pt-6 border-t border-slate-700">
                <div className="text-gray-400 mb-3 text-sm font-medium">Language</div>
                <div className="flex flex-col gap-3">
                  {languageOptions.map((option) => (
                    <button
                      key={option.code}
                      onClick={() => { setLanguage(option.code as 'en' | 'ru' | 'ar'); setMobileMenuOpen(false); }}
                      className="flex items-center space-x-3 px-2 py-2 rounded hover:bg-slate-700 w-full text-left"
                    >
                      <img src={option.flag} alt={option.label} className="w-6 h-4 object-cover rounded-sm" />
                      <span className="text-base font-medium text-white">{option.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <style>{`
              @keyframes slideIn {
                from { transform: translateX(-100%); }
                to { transform: translateX(0); }
              }
              .animate-slideIn {
                animation: slideIn 0.35s cubic-bezier(0.4,0,0.2,1);
              }
            `}</style>
          </div>
        )}
      </nav>

      {/* Projects Header */}
      <section className="pt-32 pb-8 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-white mb-4">{t.projects_title}</h1>
          <p className="text-xl text-gray-300 mb-8">{t.projects_subtitle}</p>
        </div>
      </section>

      {/* Project Grid (compact, like services) */}
      <section className="pb-20">
        <div className="container mx-auto px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div
              className="bg-slate-700 p-6 sm:p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-105 group cursor-pointer flex flex-col items-center w-full"
              onClick={() => { setModalOpen(true); setCurrentImageIndex(0); }}
            >
              <img
                src={projectScreenshots[0].src}
                alt="Project Screenshot 1"
                className="w-24 h-24 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 text-center">Message Aggregator</h3>
              <p className="text-gray-300 text-center text-sm line-clamp-3">{generalDescription[language]}</p>
              </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-slate-800 rounded-xl w-full max-w-lg sm:max-w-2xl md:max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-3 sm:p-6">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Message Aggregator</h2>
                <button
                  onClick={() => setModalOpen(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {/* Screenshot Carousel */}
              <div className="relative mb-4 sm:mb-6">
                <div className="aspect-video overflow-hidden rounded-lg flex items-center justify-center bg-slate-900">
                  <img
                    src={projectScreenshots[currentImageIndex].src}
                    alt={`Project Screenshot ${currentImageIndex + 1}`}
                    className="max-h-[200px] sm:max-h-[400px] w-auto object-contain cursor-zoom-in"
                    onClick={() => setZoomed(true)}
                  />
                </div>
                {/* Carousel Controls */}
                <div className="flex justify-between items-center mt-2 sm:mt-4">
                    <button
                    onClick={() => setCurrentImageIndex((currentImageIndex - 1 + projectScreenshots.length) % projectScreenshots.length)}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-3 sm:px-4 py-2 rounded-lg"
                    >
                    <ChevronLeft className="w-5 h-5" />
                    </button>
                  <span className="text-gray-300 text-sm sm:text-base">{currentImageIndex + 1} / {projectScreenshots.length}</span>
                    <button
                    onClick={() => setCurrentImageIndex((currentImageIndex + 1) % projectScreenshots.length)}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-3 sm:px-4 py-2 rounded-lg"
                    >
                    <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
                {/* Explanation */}
                <div className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-200 text-center">
                  {projectScreenshots[currentImageIndex].explanations[language]}
              </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Zoom Overlay */}
      {zoomed && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center" onClick={() => setZoomed(false)}>
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white bg-slate-800/80 rounded-full p-2 hover:bg-slate-700 z-[101]"
            onClick={e => { e.stopPropagation(); setZoomed(false); }}
            aria-label="Close zoom"
          >
            <X className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>
          <img
            src={projectScreenshots[currentImageIndex].src}
            alt={`Zoomed Project Screenshot ${currentImageIndex + 1}`}
            className="max-h-[70vh] sm:max-h-[90vh] max-w-[95vw] object-contain shadow-2xl border-4 border-slate-700 rounded-xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
