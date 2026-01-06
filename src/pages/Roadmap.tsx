import { Section, FadeIn } from '../components/Section';
import { cn } from '../lib/utils';

export function Roadmap() {
  const steps = [
    {
      phase: "Phase 1",
      title: "Research & Definition",
      items: [
        "Establish a scientific digital carbon footprint estimation model.",
        "Develop 'Your Email Carbon Emissions' online calculator for early PR."
      ]
    },
    {
      phase: "Phase 2",
      title: "Tool Development & MVP",
      items: [
        "Develop 'Digital Beach Cleanup' App core prototype.",
        "Implement Smart Cleaning, Carbon Viz, and '5-Second Forwarding Friction' mechanism."
      ]
    },
    {
      phase: "Phase 3",
      title: "Social Experiment & Iteration",
      items: [
        "Deploy MVP to designated communities (Family/School groups).",
        "Refine App UX based on feedback and behavioral data."
      ]
    },
    {
      phase: "Phase 4",
      title: "Curation & Diffusion",
      items: [
        "Officially release the visualized 'Digital Beach Cleanup Guide'.",
        "Host physical workshops and publish social impact reports."
      ]
    }
  ];

  return (
    <div className="pt-10">
      <Section className="text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">Execution Roadmap</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A pragmatic blueprint to turn our vision into sustainable action.
          </p>
        </FadeIn>
      </Section>

      <div className="bg-gradient-to-b from-white to-sand-100 py-20">
        <Section>
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 -translate-x-1/2 hidden md:block" />
            <div className="absolute left-[20px] top-0 bottom-0 w-0.5 bg-primary-200 md:hidden" />

            {steps.map((step, index) => (
              <div key={index} className={cn(
                "relative mb-16 md:mb-24 flex flex-col md:flex-row gap-8 md:gap-0",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 bg-digital rounded-full border-4 border-white shadow-md -translate-x-[7px] md:-translate-x-1/2 mt-1.5 z-10" />

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-12">
                   <FadeIn delay={index * 0.1}>
                      <div className={cn(
                        "bg-white p-6 rounded-2xl shadow-sm border border-sand-100 relative",
                        index % 2 === 0 ? "md:text-left" : "md:text-right"
                      )}>
                        {/* Arrow for desktop */}
                        <div className={cn(
                          "hidden md:block absolute top-4 w-4 h-4 bg-white border-t border-l border-sand-100 rotate-45 transform",
                          index % 2 === 0 ? "-left-2.5 -rotate-45 border-t-0 border-l-0 border-b border-l" : "-right-2.5 rotate-45"
                        )} />

                        <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                          {step.phase}
                        </span>
                        <h3 className="text-2xl font-bold text-primary-900 mb-4">{step.title}</h3>
                        <ul className={cn(
                          "space-y-2 text-slate-600 text-sm",
                          index % 2 === 0 ? "md:text-left" : "md:text-right"
                        )}>
                          {step.items.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                   </FadeIn>
                </div>

                {/* Empty space for the other side */}
                <div className="md:w-1/2" />
              </div>
            ))}
          </div>
        </Section>
      </div>
    </div>
  );
}
