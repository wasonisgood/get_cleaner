import { Link, Outlet, useLocation } from 'react-router-dom';
import { Section, FadeIn } from '../components/Section';
import { cn } from '../lib/utils';
import { Smartphone, Users, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

export function Solutions() {
  const location = useLocation();
  const currentPath = location.pathname;

  const tabs = [
    { name: 'Tools', path: '/solutions/tools', icon: <Smartphone size={18} /> },
    { name: 'Living Lab', path: '/solutions/lab', icon: <Users size={18} /> },
    { name: 'Advocacy', path: '/solutions/education', icon: <Megaphone size={18} /> },
  ];

  // If we are exactly at /solutions, redirect or show intro
  const isRoot = currentPath === '/solutions';

  return (
    <div className="pt-10 min-h-screen">
      <Section className="text-center pb-10">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">A Trinity of Solutions</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             Our approach integrates digital tool development, social science experiments, and public advocacy to drive systemic change.
          </p>
        </FadeIn>
      </Section>

      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap justify-center gap-4 bg-sand-100 p-2 rounded-full max-w-fit mx-auto">
          {tabs.map((tab) => {
             const isActive = currentPath.includes(tab.path);
             return (
              <Link
                key={tab.path}
                to={tab.path}
                className={cn(
                  "px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all relative z-10",
                  isActive ? "text-white" : "text-slate-600 hover:text-primary-900"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary-900 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {tab.icon}
                {tab.name}
              </Link>
             )
          })}
        </div>
      </div>

      <div className="bg-white min-h-[500px]">
         {isRoot ? (
           <Section>
             <div className="grid md:grid-cols-3 gap-8">
               {tabs.map((tab, i) => (
                 <Link to={tab.path} key={tab.path} className="group">
                   <FadeIn delay={i * 0.1}>
                     <div className="h-full bg-sand-50 p-8 rounded-2xl hover:bg-primary-50 transition-colors border border-transparent hover:border-primary-200">
                       <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                          <div className="text-digital">{tab.icon}</div>
                       </div>
                       <h3 className="text-2xl font-bold text-primary-900 mb-3">{tab.name}</h3>
                       <p className="text-slate-600">Click to explore more about our {tab.name.toLowerCase()} initiative.</p>
                     </div>
                   </FadeIn>
                 </Link>
               ))}
             </div>
           </Section>
         ) : (
           <Outlet />
         )}
      </div>
    </div>
  );
}

// Sub-pages components

export function SolutionsTools() {
  return (
    <Section>
      <FadeIn>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
             <h2 className="text-3xl font-bold text-primary-900 mb-6">Digital Hygiene Tools</h2>
             <p className="text-lg text-slate-600 mb-8">
               We develop tools with a "Sustainability Skin", reshaping the act of digital cleaning into a meaningful environmental contribution.
             </p>
             <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg h-fit text-primary-800 font-bold">01</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900">Carbon Footprint Visualization</h4>
                    <p className="text-slate-600 mt-2">
                      Scans for duplicate files and low-value media, converting deleted data size into "X grams of CO2 reduced", turning chores into achievements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg h-fit text-primary-800 font-bold">02</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900">Friction Intervention</h4>
                    <p className="text-slate-600 mt-2">
                      A "5-second countdown" checkpoint when massive forwarding is detected. This micro-resistance disrupts viral spread of low-quality info, encouraging "slow thinking".
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg h-fit text-primary-800 font-bold">03</div>
                  <div>
                    <h4 className="text-xl font-bold text-primary-900">Risk Alerts</h4>
                    <p className="text-slate-600 mt-2">
                       Not censorship, but empowerment. We provide pattern recognition for scams and bot-like behavior to build user cognitive resilience.
                    </p>
                  </div>
                </div>
             </div>
          </div>
          <div className="relative h-[600px] bg-primary-900 rounded-3xl overflow-hidden shadow-2xl p-8 flex flex-col items-center justify-center text-center">
             <div className="absolute inset-0 bg-gradient-to-br from-digital/20 to-primary-900/50" />
             <Smartphone size={120} className="text-white/20 mb-8" />
             <h3 className="text-2xl font-bold text-white relative z-10 mb-2">App Prototype</h3>
             <p className="text-sand-300 relative z-10">Visualizing the invisible weight of data.</p>
             {/* Abstract UI representation */}
             <div className="mt-8 w-64 bg-white/10 backdrop-blur-md rounded-xl p-4 text-left border border-white/10 relative z-10">
               <div className="h-2 w-1/3 bg-digital rounded-full mb-4"></div>
               <div className="h-2 w-2/3 bg-white/20 rounded-full mb-2"></div>
               <div className="h-2 w-1/2 bg-white/20 rounded-full"></div>
               <div className="mt-6 flex justify-between items-end">
                 <span className="text-3xl font-bold text-white">47g</span>
                 <span className="text-xs text-sand-300 mb-1">CO2e Saved</span>
               </div>
             </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function SolutionsLab() {
  return (
    <Section>
      <FadeIn>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-900 mb-6">Living Lab: Social Experiments</h2>
          <p className="text-xl text-slate-600 mb-12">
            To ensure real behavioral change, we test in the wild. We collect first-hand data to understand propagation models and iterate rapidly.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
             <div className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm">
               <div className="text-digital font-bold tracking-widest uppercase text-sm mb-4">Field 01</div>
               <h3 className="text-2xl font-bold text-primary-900 mb-4">Closed Communities</h3>
               <p className="text-slate-600 mb-4">e.g., Family Chat Groups (LINE)</p>
               <ul className="list-disc list-inside text-slate-500 space-y-2">
                 <li>High trust environment</li>
                 <li>Emotional propagation</li>
                 <li>Intergenerational dynamics</li>
               </ul>
             </div>
             <div className="bg-white p-8 rounded-2xl border border-sand-200 shadow-sm">
               <div className="text-digital font-bold tracking-widest uppercase text-sm mb-4">Field 02</div>
               <h3 className="text-2xl font-bold text-primary-900 mb-4">Open Communities</h3>
               <p className="text-slate-600 mb-4">e.g., Threads, Public Forums</p>
               <ul className="list-disc list-inside text-slate-500 space-y-2">
                 <li>Viral potential</li>
                 <li>Echo chambers</li>
                 <li>Algorithm influence</li>
               </ul>
             </div>
          </div>

          <div className="mt-12 bg-sand-50 p-8 rounded-2xl">
            <h4 className="font-bold text-primary-900 mb-2">Methodology</h4>
            <p className="text-slate-600">
              We utilize forwarding logs, anonymous reporting mechanisms, and "pre/post" surveys to scientifically verify intervention effectiveness, measuring both frequency of forwarding and carbon awareness.
            </p>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export function SolutionsEducation() {
  return (
    <Section>
      <FadeIn>
         <div className="grid md:grid-cols-2 gap-16">
           <div>
             <h2 className="text-3xl font-bold text-primary-900 mb-6">Curation & Advocacy</h2>
             <p className="text-xl text-slate-600 mb-8">
               Our ultimate goal is to make "Information Pollution" a common sense concept for digital citizens.
             </p>
             <div className="space-y-6">
               <div className="border-l-4 border-digital pl-6 py-2">
                 <h4 className="text-xl font-bold text-primary-900">Digital Beach Cleanup Guide</h4>
                 <p className="text-slate-600 mt-1">Easy-to-digest graphics explaining the causes, risks, and solutions of info-pollution.</p>
               </div>
               <div className="border-l-4 border-digital pl-6 py-2">
                 <h4 className="text-xl font-bold text-primary-900">Offline Workshops</h4>
                 <p className="text-slate-600 mt-1">Targeting specific groups (e.g., seniors) to teach practical literacy skills like "Slow, Look, Check".</p>
               </div>
               <div className="border-l-4 border-digital pl-6 py-2">
                 <h4 className="text-xl font-bold text-primary-900">Community Partnerships</h4>
                 <p className="text-slate-600 mt-1">Collaborating with schools and local units to introduce our tools to diverse groups.</p>
               </div>
             </div>
           </div>
           <div className="flex flex-col gap-6 justify-center">
             <div className="bg-primary-900 text-white p-8 rounded-2xl -rotate-2 transform hover:rotate-0 transition-transform">
               <h3 className="text-2xl font-serif italic mb-4">"Slow, Look, Check"</h3>
               <p className="text-sand-300">A mantra for the digital age. Stopping the reflex to forward is the first step in cleaning our environment.</p>
             </div>
              <div className="bg-sand-200 p-8 rounded-2xl rotate-2 transform hover:rotate-0 transition-transform">
               <h3 className="text-xl font-bold text-primary-900 mb-2">Did you know?</h3>
               <p className="text-slate-700">Digital pollution is invisible, but its impact is real. Join us in making the invisible, visible.</p>
             </div>
           </div>
         </div>
      </FadeIn>
    </Section>
  );
}
