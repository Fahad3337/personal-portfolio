import Icon from "@/components/Icon";
import type { Project } from "@/lib/content";

export default function ProjectPlaceholder({
  project,
  large = false,
}: {
  project: Project;
  large?: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center tint-${project.tint}`}
      style={{
        backgroundImage:
          "radial-gradient(circle at 30% 20%, var(--tint-bg), transparent 70%), linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
        backgroundSize: "auto, 32px 32px, 32px 32px",
      }}
    >
      <div
        className={`icon-tile ${large ? "h-20 w-20 rounded-3xl" : "h-14 w-14 rounded-2xl"}`}
      >
        <Icon name={project.icon} className={large ? "h-9 w-9" : "h-6 w-6"} />
      </div>
    </div>
  );
}
