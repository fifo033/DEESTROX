import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Code, Smartphone, Zap, Bot, Phone, MapPin, Globe, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import HeroBackground from "@/components/HeroBackground";

const translations = {
  en: {
    nav_projects: "Projects",
    nav_services: "Services & Costs",
    nav_contact: "Contact Us",
    hero_title_1: "We Build Tech Solutions That Drive Your Business Forward",
    hero_cta_1: "Get Started",
    hero_title_2: "Why Choose Us?",
    hero_point_1: "⚡ Fast Delivery",
    hero_point_2: "💰 Transparent Pricing",
    hero_point_3: "🔧 Custom Solutions",
    services_title: "Our Services",
    service_mobile: "Mobile Development",
    service_mobile_desc: "Native iOS & Android apps with modern UI/UX",
    service_web: "Web Development",
    service_web_desc: "Full-stack web applications with React & Node.js",
    service_mvp: "Fixed Price MVP",
    service_mvp_desc: "Rapid prototyping with guaranteed delivery timeline",
    service_ai: "AI Agent Service",
    service_ai_desc: "Custom AI solutions and chatbot integrations",
    contact_title: "Contact Us",
    contact_name: "Name",
    contact_email: "Email",
    contact_request: "Tell us about your project",
    contact_submit: "Send Message",
    contact_success: "Message sent successfully!",
    footer_rights: "All rights reserved."
  },
  ru: {
    nav_projects: "Проекты",
    nav_services: "Услуги и цены",
    nav_contact: "Связаться с нами",
    hero_title_1: "Мы создаем IT-решения, которые развивают ваш бизнес",
    hero_cta_1: "Начать",
    hero_title_2: "Почему выбирают нас?",
    hero_point_1: "⚡ Быстрая доставка",
    hero_point_2: "💰 Прозрачные цены",
    hero_point_3: "🔧 Индивидуальные решения",
    services_title: "Наши услуги",
    service_mobile: "Мобильная разработка",
    service_mobile_desc: "Нативные iOS и Android приложения с современным UI/UX",
    service_web: "Веб-разработка",
    service_web_desc: "Full-stack веб-приложения на React и Node.js",
    service_mvp: "MVP по фиксированной цене",
    service_mvp_desc: "Быстрое прототипирование с гарантированными сроками",
    service_ai: "AI агенты",
    service_ai_desc: "Кастомные AI решения и интеграция чат-ботов",
    contact_title: "Связаться с нами",
    contact_name: "Имя",
    contact_email: "Email",
    contact_request: "Расскажите о вашем проекте",
    contact_submit: "Отправить сообщение",
    contact_success: "Сообщение успешно отправлено!",
    footer_rights: "Все права защищены."
  },
  ar: {
    nav_projects: "المشاريع",
    nav_services: "الخدمات والأسعار",
    nav_contact: "اتصل بنا",
    hero_title_1: "نحن نبني الحلول التقنية التي تدفع عملك إلى الأمام",
    hero_cta_1: "ابدأ الآن",
    hero_title_2: "لماذا تختارنا؟",
    hero_point_1: "⚡ التسليم السريع",
    hero_point_2: "💰 أسعار شفافة",
    hero_point_3: "🔧 حلول مخصصة",
    services_title: "خدماتنا",
    service_mobile: "تطوير التطبيقات المحمولة",
    service_mobile_desc: "تطبيقات iOS و Android الأصلية مع واجهة مستخدم حديثة",
    service_web: "تطوير الويب",
    service_web_desc: "تطبيقات ويب متكاملة مع React و Node.js",
    service_mvp: "MVP بسعر ثابت",
    service_mvp_desc: "نماذج أولية سريعة مع جدول زمني مضمون للتسليم",
    service_ai: "خدمة وكيل الذكاء الاصطناعي",
    service_ai_desc: "حلول الذكاء الاصطناعي المخصصة وتكامل الشات بوت",
    contact_title: "اتصل بنا",
    contact_name: "الاسم",
    contact_email: "البريد الإلكتروني",
    contact_request: "أخبرنا عن مشروعك",
    contact_submit: "إرسال الرسالة",
    contact_success: "تم إرسال الرسالة بنجاح!",
    footer_rights: "جميع الحقوق محفوظة."
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

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ru' | 'ar'>('en');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', request: '' });
  const { toast } = useToast();

  const t = translations[language];

  const slides = [
    {
      title: t.hero_title_1,
      content: <Button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">{t.hero_cta_1}</Button>
    },
    {
      title: t.hero_title_2,
      content: (
        <div className="mt-6 space-y-4">
          <div className="text-lg">{t.hero_point_1}</div>
          <div className="text-lg">{t.hero_point_2}</div>
          <div className="text-lg">{t.hero_point_3}</div>
        </div>
      )
    }
  ];

  const services = [
    { icon: Smartphone, title: t.service_mobile, desc: t.service_mobile_desc },
    { icon: Code, title: t.service_web, desc: t.service_web_desc },
    { icon: Zap, title: t.service_mvp, desc: t.service_mvp_desc },
    { icon: Bot, title: t.service_ai, desc: t.service_ai_desc }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

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
              <img src="/lovable-uploads/deestrox-logo.png" alt="Deestrox Logo" className="h-10 w-auto" />
            </Link>
            
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
      </nav>

      {/* Hero Slider */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <HeroBackground slideIndex={currentSlide} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="min-h-[300px] flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <div className="animate-fade-in">
              {slides[currentSlide].content}
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
                className="bg-slate-700 p-8 rounded-xl hover:bg-slate-600 transition-all duration-300 hover:scale-105 group"
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
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                {t.contact_submit}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400">© 2024 Deestrox. {t.footer_rights}</p>
            </div>
            
            <div className="flex flex-col items-center space-y-4">
              <div className="text-white font-medium">hello@deestrox.com</div>
              <div className="flex items-center space-x-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  aria-label="WhatsApp"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  aria-label="Telegram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  aria-label="VK"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zM18.947 16.894h-1.89c-.702 0-.918-.563-2.184-1.829-1.102-1.018-1.581-.969-1.845-.969-.378 0-.486.108-.486.63v1.665c0 .45-.144.72-1.332.72-1.953 0-4.128-1.188-5.661-3.402C3.742 10.465 3.049 7.824 3.049 7.278c0-.27.108-.522.63-.522h1.89c.468 0 .648.216.828.72.9 2.448 2.412 4.59 3.024 4.59.234 0 .342-.108.342-.702V9.882c-.054-1.278-.756-1.386-.756-1.836 0-.216.18-.432.468-.432h2.97c.396 0 .54.216.54.702v3.186c0 .396.18.54.288.54.234 0 .432-.144.864-.576 1.332-1.494 2.286-3.78 2.286-3.78.126-.27.342-.522.81-.522h1.89c.558 0 .684.288.558.72-.198.72-2.052 4.014-2.052 4.014-.18.306-.252.432 0 .756.18.234.774.756 1.17 1.224.666.78 1.17 1.44 1.296 1.908.144.468-.072.72-.558.72z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  aria-label="Instagram"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
