import { Link } from 'react-router-dom';
import { Section, FadeIn } from './Section';
import { ArrowRight } from 'lucide-react';

interface NextPageSectionProps {
  title: string;
  link: string;
  subtitle?: string;
}

export function NextPageSection({ title, link, subtitle = "繼續探索" }: NextPageSectionProps) {
  return (
    <div className="bg-sand-100/50 py-20 border-t border-sand-200">
      <Section>
        <FadeIn>
          <div className="text-center">
            <p className="text-slate-500 font-medium tracking-wide uppercase mb-4">{subtitle}</p>
            <Link 
              to={link}
              className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-bold text-primary-900 hover:text-digital transition-colors"
            >
              <span>{title}</span>
              <span className="p-3 rounded-full bg-white border border-sand-200 shadow-sm group-hover:bg-digital group-hover:text-white group-hover:border-digital transition-all">
                <ArrowRight className="w-8 h-8 md:w-10 md:h-10 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
