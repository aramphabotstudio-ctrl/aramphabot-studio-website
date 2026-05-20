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
import { featuredProjects, projects } from "@/data/projects";
import { services } from "@/data/services";
import { navigation, siteConfig } from "@/data/site";
import type { Project } from "@/types/content";

const facts = [
  ["Legal name", companyFacts.legalNameEn],
  ["Thai legal name", companyFacts.legalNameTh],
  ["Registration no.", companyFacts.registrationNumber],
  ["Registered date", companyFacts.registeredDate],
  ["Status", companyFacts.status],
  ["Registered capital", companyFacts.registeredCapital],
];

const categories = ["All", ...Array.from(new Set(projects.map((item) => item.type)))];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project>(featuredProjects[0]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-ivory text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#home" className="group" aria-label="Aramphabot Studio home">
            <span className="block font-serif text-2xl leading-none tracking-normal">
              Aramphabot
            </span>
            <span className="text-[11px] uppercase tracking-[0.28em] text-taupe">
              Studio Co., Ltd.
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-charcoal/75 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={`#${item.href === "/" ? "home" : item.href.slice(1)}`}>
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 border border-ink px-5 py-3 text-sm uppercase tracking-[0.16em] transition hover:bg-ink hover:text-bone lg:inline-flex"
          >
            Discuss a Project
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>

          <button
            className="inline-flex size-11 items-center justify-center border border-ink/20 lg:hidden"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-ink/10 bg-bone px-5 py-5 lg:hidden">
            <div className="grid gap-4 text-sm uppercase tracking-[0.18em]">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={`#${item.href === "/" ? "home" : item.href.slice(1)}`}
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
        <section id="home" className="relative min-h-screen overflow-hidden pt-20">
          <img
            src="/images/architecture-hero.svg"
            alt="Warm architectural planes used as an editorial placeholder visual"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/25 to-transparent" />
          <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-end px-5 pb-14 lg:px-8">
            <div className="max-w-4xl text-bone">
              <p className="mb-5 max-w-xs text-xs uppercase leading-6 tracking-[0.18em] sm:max-w-none sm:text-sm sm:tracking-[0.28em]">
                Bangkok architecture and interior design studio
              </p>
              <h1 className="max-w-[22rem] break-words font-serif text-4xl leading-[1.02] sm:max-w-2xl sm:text-5xl md:text-7xl lg:max-w-4xl lg:text-8xl">
                {siteConfig.tagline}
              </h1>
              <p className="mt-7 max-w-[21rem] text-base leading-7 text-bone/85 sm:max-w-2xl md:text-xl md:leading-8">
                {siteConfig.description}
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-bone py-5">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 text-sm uppercase tracking-[0.2em] text-taupe md:grid-cols-3 lg:px-8">
            <span>Verified registry no. {companyFacts.registrationNumber}</span>
            <span>{companyFacts.status} company</span>
            <span>Registered in Sai Mai, Bangkok</span>
          </div>
        </section>

        <Section id="about" eyebrow="Studio" title="Context-led architecture with a calm editorial sensibility.">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6 text-lg leading-8 text-charcoal/75">
              <p>
                Aramphabot Studio is positioned as a Bangkok-based architecture
                and interior design practice for hospitality, residential,
                commercial, restaurant, cafe, and concept-led development work.
              </p>
              <p>
                The studio language is warm, minimal, material-sensitive, and
                narrative-driven: spaces are shaped through proportion, sequence,
                climate, context, and the sensory memory people carry after they leave.
              </p>
              <p className="border-l border-clay pl-5 text-base text-charcoal">
                Public research found verified company registration information,
                but not verified awards, client names, completed project records,
                phone number, email, or official social channels.
              </p>
            </div>
            <div className="grid gap-px bg-ink/10 md:grid-cols-2">
              {facts.map(([label, value]) => (
                <div key={label} className="bg-ivory p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-taupe">{label}</p>
                  <p className="mt-3 text-lg leading-7">{value}</p>
                </div>
              ))}
              <div className="bg-ivory p-6 md:col-span-2">
                <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                  Registered office
                </p>
                <p className="mt-3 text-lg leading-7">{companyFacts.registeredOffice}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section id="projects" eyebrow="Portfolio System" title="Project stories ready for verified photography and owner-approved details.">
          <div className="mb-9 flex flex-wrap gap-3" aria-label="Project categories">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border px-4 py-2 text-sm uppercase tracking-[0.16em] transition ${
                  activeCategory === category
                    ? "border-ink bg-ink text-bone"
                    : "border-ink/20 text-charcoal hover:border-ink"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => (
              <button
                key={project.slug}
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group text-left"
              >
                <article className="overflow-hidden border border-ink/10 bg-bone">
                  <img
                    src={project.coverImage.src}
                    alt={project.coverImage.alt}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                      {project.type} / {project.status}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl">{project.title}</h3>
                    <p className="mt-3 leading-7 text-charcoal/70">
                      {project.shortDescription}
                    </p>
                  </div>
                </article>
              </button>
            ))}
          </div>

          <ProjectDetail project={selectedProject} />
        </Section>

        <Section id="services" eyebrow="Services" title="Architecture, interiors, hospitality, and spatial experience strategy.">
          <div className="grid gap-px bg-ink/10 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="bg-ivory p-7">
                <Building2 className="text-clay" size={24} aria-hidden="true" />
                <h3 className="mt-6 font-serif text-3xl">{service.title}</h3>
                <p className="mt-4 leading-7 text-charcoal/70">{service.summary}</p>
                <p className="mt-4 text-sm uppercase tracking-[0.15em] text-taupe">
                  {service.clientType}
                </p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="process" eyebrow="Process" title="A measured design process from brief to site support.">
          <div className="grid gap-5 md:grid-cols-2">
            {processSteps.map((step) => (
              <article key={step.eyebrow} className="border-t border-ink/15 pt-6">
                <p className="text-sm uppercase tracking-[0.24em] text-clay">{step.eyebrow}</p>
                <h3 className="mt-4 font-serif text-3xl">{step.title}</h3>
                <p className="mt-3 leading-7 text-charcoal/70">{step.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="journal" eyebrow="Journal" title="Editorial thinking for atmosphere, material, context, and experience.">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {journalPosts.map((post) => (
              <article key={post.slug} className="border border-ink/10 bg-bone">
                <img src={post.image.src} alt={post.image.alt} className="aspect-[4/3] object-cover" />
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.18em] text-taupe">
                    {post.category} / {post.readTime}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl leading-tight">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-charcoal/70">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </Section>

        <Section id="research" eyebrow="Research Notes" title="What is verified, and what still needs owner confirmation.">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {researchNotes.map((note) => (
                <p key={note} className="flex gap-3 leading-7 text-charcoal/75">
                  <CheckCircle2 className="mt-1 shrink-0 text-moss" size={18} aria-hidden="true" />
                  {note}
                </p>
              ))}
            </div>
            <div className="border border-ink/10 bg-bone p-7">
              <p className="text-xs uppercase tracking-[0.2em] text-taupe">
                Business objective from public registry
              </p>
              <p className="mt-4 text-xl leading-9">{companyFacts.businessObjective}</p>
              <a
                href={companyFacts.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-clay"
              >
                Source: {companyFacts.sourceLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Section>

        <section id="contact" className="bg-ink px-5 py-20 text-bone lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-bone/55">Contact</p>
              <h2 className="mt-5 font-serif text-5xl leading-tight md:text-6xl">
                Start with a site, a story, and the atmosphere you want people to remember.
              </h2>
              <div className="mt-8 space-y-4 text-bone/70">
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  {companyFacts.registeredOffice}
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  Email to be confirmed
                </p>
                <p className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  Phone to be confirmed
                </p>
              </div>
            </div>

            <form className="grid gap-4" aria-label="Project enquiry form">
              {["Name", "Email", "Phone", "Project type", "Project location"].map((label) => (
                <label key={label} className="grid gap-2">
                  <span className="text-xs uppercase tracking-[0.18em] text-bone/55">{label}</span>
                  <input
                    className="border border-bone/20 bg-transparent px-4 py-3 text-bone outline-none transition placeholder:text-bone/35 focus:border-bone"
                    placeholder={label}
                  />
                </label>
              ))}
              <label className="grid gap-2">
                <span className="text-xs uppercase tracking-[0.18em] text-bone/55">Message</span>
                <textarea
                  className="min-h-36 border border-bone/20 bg-transparent px-4 py-3 text-bone outline-none transition placeholder:text-bone/35 focus:border-bone"
                  placeholder="Tell us about the site, timeline, scope, and atmosphere."
                />
              </label>
              <button
                className="mt-2 inline-flex items-center justify-center gap-2 bg-bone px-6 py-4 text-sm uppercase tracking-[0.18em] text-ink transition hover:bg-linen"
                type="button"
              >
                Prepare Enquiry
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-charcoal px-5 py-8 text-bone/70 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm md:flex-row md:items-center md:justify-between">
          <p>{siteConfig.name}</p>
          <p>Verified facts sourced from public registry data; project content awaits owner approval.</p>
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
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          <p className="text-sm uppercase tracking-[0.28em] text-taupe">{eyebrow}</p>
          <h2 className="max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="mt-14 border-t border-ink/15 pt-10">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.22em] text-clay">
            Selected template / {project.type}
          </p>
          <h3 className="mt-4 font-serif text-5xl leading-tight">{project.title}</h3>
          <p className="mt-5 text-lg leading-8 text-charcoal/70">{project.concept}</p>
          <div className="mt-8 grid gap-px bg-ink/10 sm:grid-cols-2">
            {[
              ["Location", project.location],
              ["Year", project.year],
              ["Scope", project.scope],
              ["Area", project.area],
            ].map(([label, value]) => (
              <div key={label} className="bg-ivory p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-taupe">{label}</p>
                <p className="mt-2">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-6">
          {project.designNarrative.map((paragraph) => (
            <p key={paragraph} className="text-lg leading-8 text-charcoal/75">
              {paragraph}
            </p>
          ))}
          <div className="grid gap-4 sm:grid-cols-2">
            {project.keyDesignMoves.map((move) => (
              <p key={move} className="flex gap-3 border-t border-ink/10 pt-4">
                <CircleDot className="mt-1 shrink-0 text-clay" size={16} aria-hidden="true" />
                {move}
              </p>
            ))}
          </div>
          <p className="text-sm uppercase tracking-[0.18em] text-taupe">
            Materials: {project.materials.join(", ")}
          </p>
        </div>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {project.galleryImages.map((image) => (
          <img
            key={image.src + image.alt}
            src={image.src}
            alt={image.alt}
            className="aspect-[4/3] w-full object-cover"
          />
        ))}
      </div>
    </article>
  );
}

export default App;
