import { skills } from "@/lib/content";
import Reveal from "@/components/Reveal";
import SpotlightCard from "@/components/SpotlightCard";
import Icon from "@/components/Icon";

export default function Skills() {
  return (
    <section id="skills" className="section-py">
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skills.map((category, i) => (
            <SpotlightCard
              key={category.name}
              delay={i * 80}
              wrapperClassName={
                i === skills.length - 1 && skills.length % 2 !== 0 ? "sm:col-span-2" : ""
              }
              className="card-surface h-full p-5 transition-transform sm:p-7 duration-300 hover:-translate-y-1"
            >
              <div className="icon-tile mb-5 h-12 w-12 rounded-xl">
                <Icon name={category.icon} />
              </div>
              <h3 className="text-[1.05rem] font-bold text-text-primary">{category.name}</h3>
              <p className="mt-1.5 text-sm text-text-secondary">{category.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {category.items.map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
