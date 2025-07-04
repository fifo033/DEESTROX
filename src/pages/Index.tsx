import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Code, Smartphone, Zap, Bot, Palette, Phone, MapPin, Globe, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/Footer";
import Spline from '@splinetool/react-spline';

const translations = {
  en: {
    nav_projects: "Projects",
    nav_services: "Services & Costs",
    nav_contact: "Contact Us",
    hero_title_1: "We Build Tech Solutions That Drive Your Business Forward",
    hero_cta_1: "Get Started",
    hero_title_2: "Why Choose Us?",
    hero_point_1: `At Deestrox, we're built on ambition and driven by innovation. Passionate about AI, we craft tailored tech solutions with full dedication to your needs. Trust us to turn your vision into success — your growth is our mission.`,
    hero_point_2: `We don't just follow trends — we create them. And we don't stop until your business thrives. Give us the chance — we'll earn your trust.`,
    hero_point_3: `We're dreamers, doers, and tech lovers. Got a goal? We're all in. Big ideas, bold moves, and your success — that's our thing. Let's build something awesome together!`,
    services_title: "Our Services",
    service_mobile: "Mobile Development",
    service_mobile_desc: "Native iOS & Android apps with modern UI/UX",
    service_web: "Web Development",
    service_web_desc: "Full-stack web applications with React & Node.js",
    service_mvp: "Fixed Price MVP",
    service_mvp_desc: "Rapid prototyping with guaranteed delivery timeline",
    service_ai: "AI Agent Service",
    service_ai_desc: "Custom AI solutions and chatbot integrations",
    service_design: "Design",
    service_design_desc: "Creative UI/UX and branding for web & mobile",
    contact_title: "Contact Us",
    contact_name: "Name",
    contact_email: "Email",
    contact_request: "Tell us about your project",
    contact_submit: "Send Message",
    contact_success: "Message sent successfully!",
    footer_rights: "All rights reserved.",
    contact_file_label: "Attach a file (optional):"
  },
  ru: {
    nav_projects: "Проекты",
    nav_services: "Услуги и цены",
    nav_contact: "Связаться с нами",
    hero_title_1: "Мы создаем IT-решения, которые развивают ваш бизнес",
    hero_cta_1: "Начать",
    hero_title_2: "Почему выбирают нас?",
    hero_point_1: `В Deestrox нас движет амбиции и инновации. Мы увлечены искусственным интеллектом и создаём индивидуальные IT-решения, полностью ориентированные на ваши задачи. Доверьтесь нам — мы превратим вашу идею в успех, ведь ваш рост — наша миссия.`,
    hero_point_2: `Мы не просто следуем трендам — мы их создаём. И не останавливаемся, пока ваш бизнес не начнёт процветать. Дайте нам шанс — и мы заслужим ваше доверие.`,
    hero_point_3: `Мы — мечтатели, созидатели и фанаты технологий. Есть цель? Мы с вами! Большие идеи, смелые решения и ваш успех — вот что для нас важно. Давайте строить будущее вместе!`,
    services_title: "Наши услуги",
    service_mobile: "Мобильная разработка",
    service_mobile_desc: "Нативные iOS и Android приложения с современным UI/UX",
    service_web: "Веб-разработка",
    service_web_desc: "Full-stack веб-приложения на React и Node.js",
    service_mvp: "MVP по фиксированной цене",
    service_mvp_desc: "Быстрое прототипирование с гарантированными сроками",
    service_ai: "AI агенты",
    service_ai_desc: "Кастомные AI решения и интеграция чат-ботов",
    service_design: "Дизайн",
    service_design_desc: "Креативный UI/UX и брендинг для веба и мобильных приложений",
    contact_title: "Связаться с нами",
    contact_name: "Имя",
    contact_email: "Email",
    contact_request: "Расскажите о вашем проекте",
    contact_submit: "Отправить сообщение",
    contact_success: "Сообщение успешно отправлено!",
    footer_rights: "Все права защищены.",
    contact_file_label: "Прикрепить файл (необязательно):"
  },
  ar: {
    nav_projects: "المشاريع",
    nav_services: "الخدمات والأسعار",
    nav_contact: "اتصل بنا",
    hero_title_1: "نحن نبني الحلول التقنية التي تدفع عملك إلى الأمام",
    hero_cta_1: "ابدأ الآن",
    hero_title_2: "لماذا تختارنا؟",
    hero_point_1: `في ديستروكس، نبني طموحنا على الابتكار ويدفعنا الشغف بالذكاء الاصطناعي. نصنع حلولاً تقنية مخصصة بكل التزام لاحتياجاتك. ثق بنا لنحوّل رؤيتك إلى نجاح — نمّوك هو مهمتنا.`,
    hero_point_2: `لا نتبع الاتجاهات فقط — بل نصنعها. ولا نتوقف حتى يزدهر عملك. امنحنا الفرصة — وسنكسب ثقتك.`,
    hero_point_3: `نحن حالمون، منفذون، وعشاق للتقنية. لديك هدف؟ نحن معك. الأفكار الكبيرة، الخطوات الجريئة، ونجاحك — هذا هو شغفنا. لنصنع شيئاً رائعاً معاً!`,
    services_title: "خدماتنا",
    service_mobile: "تطوير التطبيقات المحمولة",
    service_mobile_desc: "تطبيقات iOS و Android الأصلية مع واجهة مستخدم حديثة",
    service_web: "تطوير الويب",
    service_web_desc: "تطبيقات ويب متكاملة مع React و Node.js",
    service_mvp: "MVP بسعر ثابت",
    service_mvp_desc: "نماذج أولية سريعة مع جدول زمني مضمون للتسليم",
    service_ai: "خدمة وكيل الذكاء الاصطناعي",
    service_ai_desc: "حلول الذكاء الاصطناعي المخصصة وتكامل الشات بوت",
    service_design: "تصميم",
    service_design_desc: "تصميم واجهات وتجارب مستخدم إبداعية للويب والجوال",
    contact_title: "اتصل بنا",
    contact_name: "الاسم",
    contact_email: "البريد الإلكتروني",
    contact_request: "أخبرنا عن مشروعك",
    contact_submit: "إرسال الرسالة",
    contact_success: "تم إرسال الرسالة بنجاح!",
    footer_rights: "جميع الحقوق محفوظة.",
    contact_file_label: "أرفق ملفاً (اختياري):"
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

function SplineNoZoom({ scene, zoom = 0.7 }) {
  const containerRef = useRef(null);

  function handleSplineLoad(spline) {
    spline.setZoom(zoom);
    if (containerRef.current) {
      containerRef.current.addEventListener('wheel', e => {
        if (e.cancelable) e.preventDefault();
      }, { passive: false });
    }
  }

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }}>
      <Spline scene={scene} onLoad={handleSplineLoad} />
    </div>
  );
}

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ru' | 'ar'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', request: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const t = translations[language];

  const slides = [
    {
      title: t.hero_title_1,
      content: <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" onClick={() => scrollToSection('services')}>{t.hero_cta_1}</Button>
    },
    {
      title: t.hero_title_2,
      content: (
        <div className="mt-6 space-y-6 text-lg text-white text-left md:text-center max-w-3xl mx-auto">
          <p>{t.hero_point_1}</p>
          <p>{t.hero_point_2}</p>
          <p>{t.hero_point_3}</p>
        </div>
      )
    }
  ];

  const services = [
    { icon: Smartphone, title: t.service_mobile, desc: t.service_mobile_desc },
    { icon: Code, title: t.service_web, desc: t.service_web_desc },
    { icon: Zap, title: t.service_mvp, desc: t.service_mvp_desc },
    { icon: Bot, title: t.service_ai, desc: t.service_ai_desc },
    { icon: Palette, title: t.service_design, desc: t.service_design_desc },
  ];

  const serviceRoutes = [
    '/services/mobile',
    '/services/web',
    '/services/mvp',
    '/services/ai',
    '/services/design',
  ];

  useEffect(() => {
    if (hasInteracted) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length, hasInteracted]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.contact_success,
      duration: 3000,
    });
    setFormData({ name: '', email: '', request: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

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
            
            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/projects" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.nav_projects}
              </Link>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.nav_services}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {t.nav_contact}
              </button>
            </div>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex items-center text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-8 h-8" />
            </button>
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
                    {t.nav_projects}
                  </Link>
                  <button
                    className="text-lg font-semibold text-gray-100 hover:text-blue-400 transition-colors px-2 py-1 rounded text-left"
                    onClick={() => { scrollToSection('services'); setMobileMenuOpen(false); }}
                  >
                    {t.nav_services}
                  </button>
                  <button
                    className="text-lg font-semibold text-gray-100 hover:text-blue-400 transition-colors px-2 py-1 rounded text-left"
                    onClick={() => { scrollToSection('contact'); setMobileMenuOpen(false); }}
                  >
                    {t.nav_contact}
                  </button>
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

      {/* Hero Slider */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        onMouseDown={() => setHasInteracted(true)}
      >
        <HeroBackground slideIndex={currentSlide} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto px-6">
          {/* Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center md:pr-8 text-left w-full">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide]?.title}
            </h1>
            <div className="animate-fade-in mb-6">
              {slides[currentSlide]?.content}
            </div>
          </div>
          {/* 3D Models - always mounted, only one visible at a time */}
          <div className="hidden md:flex flex-1 items-center justify-end w-full h-80 md:h-[500px] z-10 relative">
            <div style={{position: 'absolute', inset: 0, opacity: currentSlide === 0 ? 1 : 0, pointerEvents: currentSlide === 0 ? 'auto' : 'none', transition: 'opacity 0.5s'}}>
              <SplineNoZoom scene="https://prod.spline.design/RVosVhwZ5879U8nN/scene.splinecode" />
            </div>
            <div style={{position: 'absolute', inset: 0, opacity: currentSlide === 1 ? 1 : 0, pointerEvents: currentSlide === 1 ? 'auto' : 'none', transition: 'opacity 0.5s'}}>
              <SplineNoZoom scene="https://prod.spline.design/N9Rv8vuaharnxYpR/scene.splinecode" />
            </div>
          </div>
        </div>
        {/* Slider Navigation */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t.services_title}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-105 group cursor-pointer"
                onClick={() => navigate(serviceRoutes[index])}
              >
                <service.icon className="w-12 h-12 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-white mb-16">{t.contact_title}</h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                placeholder={t.contact_name}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                required
              />
              <Input
                type="email"
                placeholder={t.contact_email}
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-slate-800 border-slate-600 text-white placeholder-gray-400"
                required
              />
              <Textarea
                placeholder={t.contact_request}
                value={formData.request}
                onChange={(e) => setFormData({...formData, request: e.target.value})}
                className="bg-slate-800 border-slate-600 text-white placeholder-gray-400 min-h-32"
                required
              />
              <div>
                <label className="block text-gray-300 mb-2">{t.contact_file_label}</label>
                <input
                  type="file"
                  className="block w-full text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                  onChange={e => setSelectedFile(e.target.files && e.target.files[0] ? e.target.files[0] : null)}
                />
                {selectedFile && (
                  <div className="mt-2 text-sm text-gray-400">Selected file: {selectedFile.name}</div>
                )}
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                {t.contact_submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer t={t} />
    </div>
  );
};

export default Index;
