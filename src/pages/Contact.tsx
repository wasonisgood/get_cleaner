import { Section, FadeIn } from '../components/Section';
import { Mail, MessageCircle, Globe } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-10">
       <Section>
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-8">Join the Movement</h1>
            <p className="text-2xl text-slate-600 leading-relaxed mb-12">
              The "Digital Beach Cleanup" is more than a technical project; it's a social movement.
              We are looking for like-minded partners and sponsors to turn this vision into reality.
            </p>
          </FadeIn>
        </div>
      </Section>

      <div className="bg-primary-900 text-white py-24">
        <Section>
           <div className="grid md:grid-cols-3 gap-12 text-center">
             <FadeIn delay={0.1}>
               <div className="flex flex-col items-center gap-4 group cursor-pointer">
                 <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-digital transition-colors duration-500">
                   <Mail className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold">Email Us</h3>
                 <p className="text-sand-300">partner@theriest.org</p>
               </div>
             </FadeIn>

             <FadeIn delay={0.2}>
               <div className="flex flex-col items-center gap-4 group cursor-pointer">
                 <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-digital transition-colors duration-500">
                   <MessageCircle className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold">Community</h3>
                 <p className="text-sand-300">Join our Discord / Slack</p>
               </div>
             </FadeIn>

             <FadeIn delay={0.3}>
               <div className="flex flex-col items-center gap-4 group cursor-pointer">
                 <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-digital transition-colors duration-500">
                   <Globe className="w-8 h-8" />
                 </div>
                 <h3 className="text-xl font-bold">Social Media</h3>
                 <p className="text-sand-300">@theriest_org</p>
               </div>
             </FadeIn>
           </div>
        </Section>
      </div>
    </div>
  );
}
