import { Link } from 'react-router-dom';
import { Waves, ArrowRight, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mt-auto">
      {/* Transition Layer - Sand to Sea */}
      <div className="bg-sand-100 py-12 border-t border-sand-200">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
               <h3 className="text-2xl font-bold text-primary-900 mb-2">準備好淨化您的數位足跡了嗎？</h3>
               <p className="text-sand-500">訂閱電子報，接收實用的數位整理技巧與活動通知。</p>
            </div>
            <div className="flex gap-2 w-full max-w-md md:ml-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-sand-400 w-5 h-5" />
                  <input 
                    type="email" 
                    placeholder="輸入您的 Email" 
                    className="w-full pl-10 pr-4 py-3 bg-white border border-sand-300 rounded-lg text-primary-900 placeholder:text-sand-400 focus:outline-none focus:ring-2 focus:ring-digital focus:border-transparent transition-all"
                  />
                </div>
                <button className="bg-primary-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-digital transition-colors flex items-center gap-2 whitespace-nowrap">
                  訂閱
                </button>
            </div>
         </div>
      </div>

      {/* Main Footer - Deep Ocean */}
      <div className="bg-primary-900 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            
            {/* Brand Section */}
            <div className="md:col-span-4 space-y-6">
              <Link to="/" className="flex items-center gap-3 w-fit group">
                <div className="p-2 bg-white/10 rounded-lg border border-white/10 group-hover:bg-digital transition-colors">
                  <Waves className="w-6 h-6 text-digital group-hover:text-white" />
                </div>
                <span className="text-2xl font-bold tracking-tight">Releaf</span>
              </Link>
              <p className="text-primary-200 leading-relaxed pr-6">
                我們致力於推動「數位節制」與「數位淨灘」，減少不必要的資訊廢棄物，為地球與心靈留出更多呼吸的空間。
              </p>
              <div className="flex gap-4">
                <SocialLink icon={<Twitter size={20} />} href="#" />
                <SocialLink icon={<Linkedin size={20} />} href="#" />
                <SocialLink icon={<Github size={20} />} href="#" />
              </div>
            </div>

            {/* Links Sections */}
            <div className="md:col-span-2 md:col-start-6">
              <h4 className="font-bold text-white mb-6">關於計畫</h4>
              <ul className="space-y-4">
                <FooterLink to="/problem">危機與挑戰</FooterLink>
                <FooterLink to="/philosophy">核心理念</FooterLink>
                <FooterLink to="/roadmap">執行藍圖</FooterLink>
              </ul>
            </div>

            <div className="md:col-span-2">
              <h4 className="font-bold text-white mb-6">解決方案</h4>
              <ul className="space-y-4">
                <FooterLink to="/solutions">數位工具</FooterLink>
                <FooterLink to="/impact">環境效益</FooterLink>
                <FooterLink to="/contact">參與行動</FooterLink>
              </ul>
            </div>

            <div className="md:col-span-3">
              <h4 className="font-bold text-white mb-6">聯絡我們</h4>
              <ul className="space-y-4 text-primary-200">
                <li className="flex items-start gap-3">
                   <span className="block mt-1 w-1.5 h-1.5 rounded-full bg-digital flex-shrink-0" />
                   <span>hello@releaf.com</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="block mt-1 w-1.5 h-1.5 rounded-full bg-digital flex-shrink-0" />
                   <span>台北市信義區...</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-300">
            <p>© {currentYear} Releaf. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-white transition-colors">隱私權政策</Link>
              <Link to="/terms" className="hover:text-white transition-colors">使用條款</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        to={to} 
        className="text-primary-200 hover:text-digital transition-colors flex items-center gap-2 group"
      >
        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 opacity-0 group-hover:opacity-100 text-digital">
          <ArrowRight size={12} />
        </span>
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary-200 hover:bg-digital hover:text-white hover:border-digital transition-all duration-300"
    >
      {icon}
    </a>
  );
}
