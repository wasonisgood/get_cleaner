import { Section, FadeIn } from '../components/Section';
import { AlertTriangle, BrainCircuit, CloudLightning } from 'lucide-react';

export function Problem() {
  return (
    <div className="pt-10">
      <Section className="text-center">
        <FadeIn>
          <span className="text-digital font-bold tracking-wider uppercase mb-2 block">The Invisible Crisis</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Digital Pollution's Dual Impact</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            "Information Garbage" is a new form of pollution affecting both our individual well-being and the planet's physical environment.
          </p>
        </FadeIn>
      </Section>

      <div className="bg-sand-50 py-20">
        <Section>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <BrainCircuit className="w-16 h-16 text-red-500 mb-6" />
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Mental Erosion</h2>
                <ul className="space-y-4 text-slate-600">
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                    <p><strong>Cognitive Exhaustion:</strong> Information overload significantly reduces depth of understanding and decision quality.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                    <p><strong>Attention Fatigue:</strong> Constant exposure to high-frequency stimuli correlates with increased anxiety.</p>
                  </li>
                  <li className="flex gap-3">
                    <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                    <p><strong>Public Discourse Decay:</strong> Low-quality content erodes the foundation of rational communication and social trust.</p>
                  </li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-32 bg-yellow-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <CloudLightning className="w-16 h-16 text-yellow-600 mb-6" />
                <h2 className="text-3xl font-bold text-primary-900 mb-4">Environmental Cost</h2>
                <p className="text-slate-600 mb-6">
                  It's not just storage space; it's the continuous computation and transmission—backup, sync, indexing—that drives energy consumption.
                </p>

                <div className="space-y-4">
                  <div className="bg-sand-50 p-4 rounded-xl flex items-center justify-between">
                    <span className="font-medium text-slate-700">1 Long Email</span>
                    <span className="font-bold text-primary-900">17g CO2e</span>
                  </div>
                  <div className="bg-sand-50 p-4 rounded-xl flex items-center justify-between">
                    <span className="font-medium text-slate-700">1GB Storage / Month</span>
                    <span className="font-bold text-primary-900">3.95g CO2e</span>
                  </div>
                  <div className="bg-sand-50 p-4 rounded-xl flex items-center justify-between">
                    <span className="font-medium text-slate-700">1GB Storage / Year</span>
                    <span className="font-bold text-primary-900">47.4g CO2e</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      </div>

      <Section className="text-center py-24">
        <FadeIn>
           <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
           <h3 className="text-2xl font-bold text-primary-900 mb-4">A Cumulative Burden</h3>
           <p className="text-lg text-slate-600 max-w-2xl mx-auto">
             These seemingly insignificant numbers, when multiplied by billions of users, create a massive environmental burden. "Information Garbage" has escalated from a personal inconvenience to a global sustainability issue.
           </p>
        </FadeIn>
      </Section>
    </div>
  );
}
