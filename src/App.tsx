import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  CircleDot,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { companyFacts, researchNotes } from "@/data/company";
import { journalPosts } from "@/data/journal";
import { processSteps } from "@/data/process";
import {
  featuredProjects,
  getProjectBySlug,
  projectCategories,
  projectImageFallback,
  projects,
} from "@/data/projects";
import { services } from "@/data/services";
import { navigation, siteConfig } from "@/data/site";
import type { ImageAsset, Project, ProjectCategory } from "@/types/content";

const facts = [
  ["Legal name", companyFacts.legalNameEn],
  ["Thai legal name", companyFacts.legalNameTh],
  ["Registration no.", companyFacts.registrationNumber],
  ["Registered date", companyFacts.registeredDate],
  ["Status", companyFacts.status],
  ["Registered capital", companyFacts.registeredCapital],
];

const heroFacts = [
  ["Base", "Bangkok, Thailand"],
  ["Focus", "Architecture / Interior"],
  ["Language", "Context, material, atmosphere"],
];

const initialProject = featuredProjects[0] ?? projects[0];
type ProjectFilter = "All" | ProjectCategory;

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("All");
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(initialProject.slug);
  const selectedProject = getProjectBySlug(selectedProjectSlug) ?? initialProject;

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.type === activeCategory);
  }, [activeCategory]);

  function handleCategoryChange(category: ProjectFilter) {
    setActiveCategory(category);
    const nextProject =
      category === "All"
        ? initialProject
        : projects.find((project) => project.type === category);

    if (nextProject) {
      setSelectedProjectSlug(nextProject.slug);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1540px] items-center justify-between px-5 sm:px-7 lg:h-20 lg:px-10">
          <a href="#home" className="group inline-flex flex-col" aria-label="Aramphabot Studio home">
            <span className="font-serif text-[1.72rem] leading-none text-ink transition group-hover:text-clay">
              Aramphabot
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-taupe">
              Studio Co., Ltd.
            </span>
          </a>

          <div className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-charcoal/68 xl:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={`#${item.href === "/" ? "home" : item.href.slice(1)}`}
                className="nav-link py-3 transition hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-3 border border-ink/25 px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition duration-300 hover:border-ink hover:bg-ink hover:text-bone lg:inline-flex"
          >
            Discuss
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>

          <button
            className="inline-flex size-11 items-center justify-center border border-ink/20 bg-bone/70 transition hover:border-ink lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-ink/10 bg-bone px-5 py-6 lg:hidden">
            <div className="grid gap-1 text-sm uppercase tracking-[0.18em]">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href === "/" ? "home" : item.href.slice(1)}`}
                  className="border-b border-ink/10 py-4 text-charcoal transition hover:text-ink"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative min-h-[100svh] overflow-hidden pt-[72px] lg:pt-20">
          <img
            src="/images/architecture-hero.jpg"
            alt="Warm architectural planes used as an editorial placeholder visual"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,27,22,0.86),rgba(31,27,22,0.38)_52%,rgba(244,239,228,0.05))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />

          <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1540px] content-end gap-10 px-5 pb-9 sm:px-7 md:pb-14 lg:min-h-[calc(100svh-80px)] lg:px-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.55fr)]">
            <div className="min-w-0 max-w-5xl text-bone">
              <p className="mb-6 max-w-[18rem] text-[11px] uppercase leading-6 tracking-[0.24em] text-bone/78 sm:max-w-none sm:tracking-[0.32em]">
                Bangkok architecture and interior design studio
              </p>
              <h1 className="max-w-[21.5rem] font-serif text-[3rem] leading-[0.98] sm:max-w-[44rem] sm:text-7xl md:text-8xl xl:max-w-5xl xl:text-[7.6rem]">
                {siteConfig.tagline}
              </h1>
              <p className="mt-7 max-w-[20.5rem] text-base leading-7 text-bone/82 sm:max-w-xl sm:text-lg sm:leading-8 md:max-w-2xl md:text-xl">
                {siteConfig.description}
              </p>
            </div>

            <div className="hidden self-end border-y border-bone/30 py-5 text-bone/80 xl:block">
              <p className="mb-6 font-serif text-3xl leading-tight text-bone">
                Spatial stories shaped by proportion, material, light, and memory.
              </p>
              <dl className="grid gap-5">
                {heroFacts.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-[7rem_1fr] gap-5 border-t border-bone/20 pt-4">
                    <dt className="text-[11px] uppercase tracking-[0.22em] text-bone/50">{label}</dt>
                    <dd className="text-sm leading-6">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-bone/80">
          <div className="mx-auto grid max-w-[1540px] divide-y divide-ink/10 px-5 text-[11px] uppercase tracking-[0.18em] text-taupe sm:px-7 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-10">
            <p className="py-4 md:pr-6">Verified registry no. {companyFacts.registrationNumber}</p>
            <p className="py-4 md:px-6">{companyFacts.status} company</p>
            <p className="py-4 md:pl-6">Registered in Sai Mai, Bangkok</p>
          </div>
        </section>

        <Section
          id="about"
          eyebrow="Studio"
          title="A measured practice for atmosphere, context, and sensory memory."
        >
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="max-w-xl space-y-7 text-[1.05rem] leading-8 text-charcoal/75 md:text-lg">
              <p>
                Aramphabot Studio is positioned as a Bangkok-based architecture and interior
                design practice for hospitality, residential, commercial, restaurant, cafe,
                and concept-led development work.
              </p>
              <p>
                Its studio language is warm, minimal, material-sensitive, and narrative-driven:
                spaces are shaped through proportion, sequence, climate, context, and the quiet
                memory people carry after they leave.
              </p>
              <p className="border-l border-clay/70 pl-5 text-base leading-7 text-charcoal">
                Public research confirms company registration facts. Awards, client names,
                completed project records, phone, email, and social channels are intentionally
                left unclaimed until owner verification.
              </p>
            </div>

            <div className="grid border-t border-ink/15 md:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label} className="border-b border-ink/15 py-6 md:odd:border-r md:odd:pr-8 md:even:pl-8">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">{label}</p>
                  <p className="mt-3 text-lg leading-8 text-ink">{value}</p>
                </div>
              ))}
              <div className="border-b border-ink/15 py-6 md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">
                  Registered office
                </p>
                <p className="mt-3 max-w-3xl text-lg leading-8">{companyFacts.registeredOffice}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow="Projects"
          title="An editorial portfolio structure ready for verified photographs and owner-approved detail."
          className="bg-bone/55"
        >
          <div className="mb-10 flex gap-2 overflow-x-auto border-y border-ink/10 py-3" aria-label="Project categories">
            {projectCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                aria-pressed={activeCategory === category}
                className={`shrink-0 px-4 py-2 text-[11px] uppercase tracking-[0.18em] transition duration-300 ${
                  activeCategory === category
                    ? "bg-ink text-bone"
                    : "text-charcoal/70 hover:bg-linen hover:text-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-x-7 gap-y-11 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                featured={index === 0 && activeCategory === "All"}
                selected={selectedProject.slug === project.slug}
                onSelect={() => setSelectedProjectSlug(project.slug)}
              />
            ))}
          </div>

          <ProjectDetail project={selectedProject} />
        </Section>

        <Section
          id="services"
          eyebrow="Services"
          title="Design services for buildings, interiors, and spatial experience."
        >
          <div className="grid border-t border-ink/15 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="group border-b border-ink/15 py-8 transition duration-300 hover:bg-bone md:px-7 md:odd:border-r xl:border-r xl:[&:nth-child(3n)]:border-r-0"
              >
                <Building2 className="text-clay transition duration-300 group-hover:translate-x-1" size={22} aria-hidden="true" />
                <h3 className="mt-7 font-serif text-[2rem] leading-none md:text-4xl">{service.title}</h3>
                <p className="mt-5 leading-7 text-charcoal/72">{service.summary}</p>
                <p className="mt-5 text-[11px] uppercase leading-6 tracking-[0.18em] text-taupe">
                  {service.clientType}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow="Process"
          title="A quiet, rigorous path from brief to coordination."
          className="bg-linen/55"
        >
          <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
            {processSteps.map((step) => (
              <article key={step.eyebrow} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-ink/15 py-7">
                <p className="font-serif text-3xl text-clay/85">{step.eyebrow}</p>
                <div>
                  <h3 className="font-serif text-3xl leading-tight">{step.title}</h3>
                  <p className="mt-3 leading-7 text-charcoal/72">{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="journal"
          eyebrow="Journal"
          title="Notes on atmosphere, material restraint, and context."
        >
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {journalPosts.map((post) => (
              <article key={post.slug} className="group border-t border-ink/15 pt-4">
                <div className="image-frame aspect-[3/4] bg-stone">
                  <img
                    src={post.image.src}
                    alt={post.image.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="pt-5">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-taupe">
                    {post.category} / {post.readTime}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl leading-[1.05]">{post.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-charcoal/70">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow="Verification"
          title="A factual foundation, with unverified claims deliberately left out."
          className="bg-bone/60"
        >
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-5">
              {researchNotes.map((note) => (
                <p key={note} className="flex gap-4 border-t border-ink/10 pt-5 leading-7 text-charcoal/74">
                  <CheckCircle2 className="mt-1 shrink-0 text-moss" size={18} aria-hidden="true" />
                  {note}
                </p>
              ))}
            </div>
            <div className="border-y border-ink/15 py-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">
                Business objective from public registry
              </p>
              <p className="mt-5 text-xl leading-9 md:text-2xl">{companyFacts.businessObjective}</p>
              <a
                href={companyFacts.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-clay"
              >
                Source: {companyFacts.sourceLabel}
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Section>

        <section id="contact" className="bg-ink px-5 py-24 text-bone sm:px-7 lg:px-10 lg:py-32">
          <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-bone/50">Contact</p>
              <h2 className="mt-6 font-serif text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-7xl">
                Start with a site, a story, and the atmosphere people should remember.
              </h2>
              <div className="mt-10 space-y-5 text-bone/68">
                <p className="flex items-start gap-4 leading-7">
                  <MapPin className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  {companyFacts.registeredOffice}
                </p>
                <p className="flex items-start gap-4">
                  <Mail className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  Email to be confirmed
                </p>
                <p className="flex items-start gap-4">
                  <Phone className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  Phone to be confirmed
                </p>
              </div>
            </div>

            <form className="grid gap-6" aria-label="Project enquiry form">
              <div className="grid gap-6 md:grid-cols-2">
                {["Name", "Email", "Phone", "Project type", "Project location"].map((label) => (
                  <label key={label} className="grid gap-3 border-b border-bone/20 pb-3 md:last:col-span-2">
                    <span className="text-[11px] uppercase tracking-[0.18em] text-bone/48">{label}</span>
                    <input
                      className="bg-transparent text-base text-bone outline-none placeholder:text-bone/30"
                      placeholder={label}
                    />
                  </label>
                ))}
              </div>
              <label className="grid gap-3 border-b border-bone/20 pb-3">
                <span className="text-[11px] uppercase tracking-[0.18em] text-bone/48">Message</span>
                <textarea
                  className="min-h-32 bg-transparent text-base leading-7 text-bone outline-none placeholder:text-bone/30"
                  placeholder="Tell us about the site, timeline, scope, and atmosphere."
                />
              </label>
              <button
                className="group mt-2 inline-flex w-full items-center justify-between border border-bone/30 px-6 py-4 text-[11px] uppercase tracking-[0.2em] transition duration-300 hover:bg-bone hover:text-ink sm:w-auto sm:min-w-72"
                type="button"
              >
                Prepare Enquiry
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal px-5 py-10 text-bone/68 sm:px-7 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-8 border-t border-bone/20 pt-8 text-sm md:grid-cols-[0.8fr_1.2fr_0.8fr]">
          <div>
            <p className="font-serif text-2xl text-bone">Aramphabot</p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em]">Studio Co., Ltd.</p>
          </div>
          <p className="max-w-xl leading-7">
            Verified facts are sourced from public registry data. Project imagery and
            case studies remain placeholders until owner-approved material is supplied.
          </p>
          <a
            href="#home"
            className="justify-self-start text-[11px] uppercase tracking-[0.2em] transition hover:text-bone md:justify-self-end"
          >
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`px-5 py-24 sm:px-7 lg:px-10 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-[1540px]">
        <div className="mb-12 grid gap-7 border-t border-ink/15 pt-7 lg:mb-16 lg:grid-cols-[0.32fr_0.68fr]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-taupe">{eyebrow}</p>
          <h2 className="max-w-5xl font-serif text-[2.65rem] leading-[1.02] text-ink sm:text-6xl lg:text-7xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  selected,
  featured,
  onSelect,
}: {
  project: Project;
  selected: boolean;
  featured: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group block text-left focus:outline-none ${featured ? "xl:col-span-2" : ""}`}
    >
      <article
        className={`border-t pt-4 transition duration-300 ${
          selected ? "border-ink" : "border-ink/15 group-hover:border-clay"
        }`}
      >
        <div className={`image-frame bg-stone ${featured ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
          <ProjectImage
            image={project.coverImage}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
          />
        </div>
        <div className="grid gap-5 pt-5 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-taupe">
              {project.type} / {project.status}
            </p>
            <h3 className="mt-3 font-serif text-[2.15rem] leading-none text-ink md:text-4xl">
              {project.title}
            </h3>
          </div>
          <p className="text-sm leading-7 text-charcoal/70 sm:max-w-xs">
            {project.shortDescription}
          </p>
        </div>
      </article>
    </button>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="mt-20 border-t border-ink/15 pt-8 lg:mt-28">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="image-frame aspect-[4/5] bg-stone lg:sticky lg:top-28 lg:aspect-[5/6]">
          <ProjectImage
            image={project.coverImage}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:pl-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-clay">
            Selected template / {project.type}
          </p>
          <h3 className="mt-5 font-serif text-[3rem] leading-[0.98] sm:text-6xl lg:text-7xl">
            {project.title}
          </h3>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-charcoal/75">{project.concept}</p>

          <div className="mt-10 grid border-t border-ink/15 sm:grid-cols-2">
            {[
              ["Location", project.location],
              ["Year", project.year],
              ["Scope", project.scope],
              ["Area", project.area],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-ink/15 py-5 sm:odd:border-r sm:odd:pr-6 sm:even:pl-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-taupe">{label}</p>
                <p className="mt-2 leading-7">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-6">
            {project.designNarrative.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-8 text-charcoal/75">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {project.keyDesignMoves.map((move) => (
              <p key={move} className="flex gap-3 border-t border-ink/10 pt-4 leading-7">
                <CircleDot className="mt-1 shrink-0 text-clay" size={15} aria-hidden="true" />
                {move}
              </p>
            ))}
          </div>

          <p className="mt-8 text-[11px] uppercase leading-6 tracking-[0.18em] text-taupe">
            Materials: {project.materials.join(", ")}
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3 lg:mt-14">
        {(project.galleryImages.length > 0 ? project.galleryImages : [projectImageFallback]).map((image, index) => (
          <div key={image.src + image.alt} className={`image-frame bg-stone ${index === 1 ? "md:mt-10" : ""}`}>
            <ProjectImage
              image={image}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}

function ProjectImage({
  image,
  className,
}: {
  image: ImageAsset;
  className: string;
}) {
  const [failed, setFailed] = useState(!image.src);
  const source = failed || !image.src ? projectImageFallback : image;

  return (
    <img
      src={source.src}
      alt={source.alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

export default App;
