import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import hydronew from "../assets/hydronew-mobile.jpg";
import hydronew2 from "../assets/landingpage.png";
import navigaze from "../assets/navigaze.png";
import ems from "../assets/ems.png";
import vamos from "../assets/vamos.png";

function Projects() {
  const projects = [
    {
      title: "Navigaze",
      tags: ["Unity", "AR", "C#", "Firebase"],
      href: "#",
      variant: "tall",
      image: navigaze,
    },
    {
      title: "Hydronew Admin",
      tags: ["React", "Laravel", "MySQL"],
      href: "#",
      variant: "wide",
      image: hydronew2,
    },
    {
      title: "Hydronew",
      tags: ["React-Native", "Typescript", "Laravel", "MySQL"],
      href: "#",
      variant: "short",
      image: hydronew,
    },
    {
      title: "Project Four",
      tags: ["API", "Integration"],
      href: "#",
      variant: "tall",
      image: "",
    },
    {
      title: "Employee Management System",
      tags: ["Java", "Springboot", "MySQL"],
      href: "#",
      variant: "small",
      image: ems,
    },
    {
      title: "Projects",
      tags: [],
      href: "#",
      variant: "wide",
      image: "",
    },
    {
      title: "Vamos",
      tags: ["Python", "React Typescript", "Electron"],
      href: "#",
      variant: "short",
      image: vamos,
    },
  ] as const;

  const p1 = projects[0];
  const p2 = projects[1];
  const p3 = projects[2];
  const p5 = projects[4];
  const p6 = projects[5];
  const p7 = projects[6];

  const variantStyles = {
    tall: {
      card: "p-6",
      title: "text-lg",
      desc: "line-clamp-5",
    },
    short: {
      card: "p-5",
      title: "text-lg",
      desc: "line-clamp-2",
    },
    wide: {
      card: "p-6",
      title: "text-lg",
      desc: "line-clamp-3",
    },
    small: {
      card: "p-4",
      title: "text-base",
      desc: "line-clamp-2 text-xs",
    },
  } as const;

  const baseCard =
    "group relative block overflow-hidden rounded-2xl text-amber-50 shadow-sm transition hover:bg-amber-900/30 focus:outline-none focus:ring-2 focus:ring-amber-300/60";

  const renderCard = (p: (typeof projects)[number], sizeClass: string) => {
    const v = variantStyles[p.variant];
    return (
      <a
        key={p.title}
        href={p.href}
        className={[baseCard, v.card, sizeClass].join(" ")}
      >
        {/* Image */}
        <div
          className="absolute inset-0 bg-neutral-950"
          style={
            p.image
              ? {
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/25 to-black/0" />

        {/* Bottom title + tags */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-left">
          <div className={["font-semibold text-white", v.title].join(" ")}>
            {p.title}
          </div>

          {p.tags.length > 0 ? (
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80 backdrop-blur"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </a>
    );
  };

  const renderCenterTitleCard = (
    p: (typeof projects)[number],
    sizeClass: string,
  ) => {
    return (
      <a
        key={`${p.title}-center`}
        href={p.href}
        className={[
          baseCard,
          "flex items-center justify-center",
          sizeClass,
        ].join(" ")}
      >
        {/* Image */}
        <div
          className="absolute inset-0"
          style={
            p.image
              ? {
                  backgroundImage: `url(${p.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
              : undefined
          }
        />
        <div className="absolute inset-0 " />

        <div
          className="relative text-center font-bold tracking-widest text-4xl sm:text-4xl"
        >
          {p.title}
        </div>
      </a>
    );
  };

  return (
    <div className="min-h-screen px-6 sm:px-10 lg:px-24 py-4">
      <div className="max-w-6xl">
        {/* Desktop: manual columns so p7 stays under p6 */}
        <div className="hidden lg:grid grid-cols-3 gap-2">
          <div className="flex flex-col gap-4">
            {renderCard(p1, "w-full h-[450px]")}
            {renderCard(p5, "w-full h-[200px]")}
          </div>
          <div className="flex flex-col gap-4">
            {renderCard(p2, "w-full h-[220px]")}
            {renderCenterTitleCard(p6, "w-full h-[60px]")}
            {renderCard(p7, "w-full h-[350px]")}
          </div>
          <div className="flex flex-col gap-4">
            {renderCard(p3, "w-full h-[600px]")}
          </div>
        </div>

        {/* Mobile/tablet: masonry */}
        <div className="lg:hidden">
          <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 640: 2 }}>
            <Masonry gutter="16px">
              {renderCard(p1, "w-full h-[300px]")}
              {renderCard(p2, "w-full h-[220px]")}
              {renderCard(p3, "w-full h-[460px]")}
              {renderCard(p5, "w-full h-[150px]")}
              {renderCenterTitleCard(p6, "w-full h-[120px]")}
              {renderCard(p7, "w-full h-[200px]")}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}

export default Projects;
