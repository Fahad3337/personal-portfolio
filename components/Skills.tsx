import { skills } from "@/lib/content";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icon";

export default function Skills() {
  return (
    <section id="skills" className="py-12 md:py-16">
      <div className="container-page">
        <Reveal>
          <span className="eyebrow">
            <span aria-hidden>{"//"}</span>
            skills
          </span>
          <h2 className="heading-lg">What I Work With</h2>
          <p className="body-copy mt-4">
            A toolkit spanning agentic AI, full-stack development, and the infrastructure that
            keeps it all running.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skills.map((category, i) => (
            // The card sits *inside* Reveal: .reveal owns a transform, so a
            // hover transform on the same element would never apply.
            <Reveal
              key={category.name}
              delay={i * 80}
              className={
                i === skills.length - 1 && skills.length % 2 !== 0 ? "sm:col-span-2" : ""
              }
            >
              <div className={`card-glow h-full p-4 sm:p-6 tint-${category.tint}`}>
                <div className="icon-tile mb-4 h-10 w-10 rounded-lg">
                  <Icon name={category.icon} />
                </div>
                <h3 className="text-[0.95rem] font-bold text-text-primary">{category.name}</h3>
                <p className="mt-1.5 text-[0.85rem] text-text-secondary">
                  {category.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {category.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
