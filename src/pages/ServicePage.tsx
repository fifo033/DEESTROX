import React from "react";
import { Link } from "react-router-dom";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";

const languageOptions = [
  { code: 'en', label: 'English', flag: '/lovable-uploads/d2e3f15f-e809-4199-ab6b-aacadc0434ff.png', display: 'EN' },
  { code: 'ru', label: 'Русский', flag: '/lovable-uploads/8fa7e58e-7425-4377-8d4a-c02fd3f6e53d.png', display: 'RU' },
  { code: 'ar', label: 'العربية', flag: '/lovable-uploads/d0166951-8e51-43ac-8a05-e9eaeb745235.png', display: 'AR' }
];

export default function ServicePage() {
  // For now, just show the top bar and an empty area
  // You can expand this later to show service-specific content
  const location = useLocation();
  // Use English for now for t
  const t = {
    footer_rights: "All rights reserved."
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex flex-col justify-between">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/lovable-uploads/deestrox-logo.svg" alt="Deestrox Logo" className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
              <Link to="/#services" className="text-gray-300 hover:text-white transition-colors">Services & Costs</Link>
              <Link to="/#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-center space-x-2 px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors focus:outline-none text-white">
                <img src={languageOptions[0].flag} alt={languageOptions[0].label} className="w-6 h-4 object-cover rounded-sm" />
                <span className="text-sm font-medium">{languageOptions[0].display}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-slate-800 border-slate-700 z-50 min-w-[140px]" align="end">
                {languageOptions.map((option) => (
                  <DropdownMenuItem key={option.code} className="text-white hover:bg-slate-700 cursor-pointer flex items-center space-x-3 px-3 py-2">
                    <img src={option.flag} alt={option.label} className="w-6 h-4 object-cover rounded-sm" />
                    <span className="text-sm font-medium">{option.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
      {/* Empty content area for now */}
      <div className="pt-32 text-center text-white text-2xl font-semibold flex-1">Service page coming soon...</div>
      <Footer t={t} />
    </div>
  );
} 