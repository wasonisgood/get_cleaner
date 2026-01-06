import { Section, FadeIn } from '../components/Section';
import { Feather, MinusCircle, Scale } from 'lucide-react';

export function Philosophy() {
  return (
    <div className="pt-10">
       <Section>
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold text-primary-900 mb-8 leading-tight">
              Digital Beach Cleanup<span className="text-digital">.</span>
            </h1>
            <p className="text-2xl text-slate-600 leading-relaxed mb-12">
              Our core philosophy likens cleaning up invalid, harmful "information garbage" to citizens spontaneously cleaning up marine debris.
              We transform abstract digital pollution into a tangible, actionable sustainability movement.
            </p>
          </FadeIn>
        </div>
      </Section>

      <div className="bg-primary-900 text-sand-50 py-24">
        <Section>
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Feather className="w-6 h-6 text-digital" />
                </div>
                <h3 className="text-2xl font-bold">Redefining Value</h3>
                <p className="text-sand-300 leading-relaxed">
                  Attention is a finite resource, like clean air and water. Protecting attention is protecting our cognitive health and social innovation capacity.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MinusCircle className="w-6 h-6 text-digital" />
                </div>
                <h3 className="text-2xl font-bold">Subtractive Sustainability</h3>
                <p className="text-sand-300 leading-relaxed">
                  True sustainability isn't just about adding "green energy." It requires "subtraction"—actively reducing the production and spread of useless information at the source.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Scale className="w-6 h-6 text-digital" />
                </div>
                <h3 className="text-2xl font-bold">Digital Sufficiency</h3>
                <p className="text-sand-300 leading-relaxed">
                  We are not anti-tech. We advocate for "Digital Sufficiency"—using technology responsibly to shape a conscious ecosystem. We promote "necessary speech" and "meaningful participation."
                </p>
              </div>
            </FadeIn>
          </div>
        </Section>
      </div>
    </div>
  );
}
