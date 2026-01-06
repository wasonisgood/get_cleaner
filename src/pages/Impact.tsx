import { Section, FadeIn } from '../components/Section';
import { BarChart3, LineChart } from 'lucide-react';

export function Impact() {
  return (
    <div className="pt-10">
      <Section className="text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Measuring Success</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We use both quantitative and qualitative metrics to define success, ensuring transparency and continuous optimization.
          </p>
        </FadeIn>
      </Section>

      <div className="py-12 bg-sand-50">
        <Section>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-white p-10 rounded-3xl shadow-sm h-full border border-sand-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-primary-100 rounded-2xl text-primary-600">
                    <BarChart3 size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-900">Quantitative</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Carbon Reduction Estimates</h3>
                    <p className="text-slate-600 mb-2">Calculating total data cleaned by participants and converting to CO2e.</p>
                    <div className="bg-sand-100 p-4 rounded-lg font-mono text-sm text-slate-700">
                      Formula: 1 GB/Month ≈ 3.95 g CO2e
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Behavioral Change Data</h3>
                    <p className="text-slate-600">Tracking the rate of decline in forwarding frequency and the volume of "garbage" deleted.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-10 rounded-3xl shadow-sm h-full border border-sand-100">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-4 bg-digital/10 rounded-2xl text-digital">
                    <LineChart size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-primary-900">Qualitative</h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Awareness Uplift</h3>
                    <p className="text-slate-600">Assessing user understanding of the "Digital Behavior & Energy Consumption" link through surveys/interviews.</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Quality of Public Discourse</h3>
                    <p className="text-slate-600">Observing trends in the proportion of low-value content within experimental communities.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      </div>
    </div>
  );
}
