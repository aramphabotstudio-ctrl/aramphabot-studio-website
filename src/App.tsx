import { useEffect, useMemo, useState } from "react";
import type { FormEvent, MouseEvent, ReactNode } from "react";
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
import { companyFacts } from "@/data/company";
import {
  defaultLanguage,
  getCategoryLabel,
  getJournalCopy,
  getProcessCopy,
  getProjectCopy,
  getServiceCopy,
  getStatusLabel,
  isLanguage,
  languageNames,
  languages,
  localeByLanguage,
  siteContent,
  type Language,
} from "@/data/i18n";
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
import {
  defaultSeo,
  getAbsoluteAssetUrl,
  getAbsoluteUrl,
  getLocalizedPath,
  getProjectPath,
  getProjectSeo,
  getSeoById,
  getStructuredData,
  seoById,
  seoByPath,
} from "@/data/seo";
import { navigation, siteConfig } from "@/data/site";
import type { ImageAsset, Project, ProjectCategory } from "@/types/content";
import type { SeoEntry, SeoPageId } from "@/data/seo";

const initialProject = featuredProjects[0] ?? projects[0];

type ProjectFilter = "All" | ProjectCategory;
type RouteState = {
  pageId: SeoPageId;
  projectSlug?: string;
};
type ContactStatus = {
  message: string;
  draft?: string;
};
type NavigationKey = keyof typeof siteContent.en.navigation;
type ContactFieldKey = Exclude<keyof typeof siteContent.en.contact.fields, "message">;
type ProjectDetailLabels = Record<keyof typeof siteContent.en.projects.labels, string>;

const navigationKeyByHref: Record<string, NavigationKey> = {
  "/": "home",
  "/about": "about",
  "/projects": "projects",
  "/services": "services",
  "/process": "process",
  "/journal": "journal",
  "/contact": "contact",
};

const contactFieldKeys: Array<{
  key: ContactFieldKey;
  name: ContactFieldKey;
  type: string;
  autoComplete: string;
  required: boolean;
}> = [
  { key: "name", name: "name", type: "text", autoComplete: "name", required: true },
  { key: "email", name: "email", type: "email", autoComplete: "email", required: true },
  { key: "phone", name: "phone", type: "tel", autoComplete: "tel", required: false },
  { key: "projectType", name: "projectType", type: "text", autoComplete: "off", required: false },
  {
    key: "projectLocation",
    name: "projectLocation",
    type: "text",
    autoComplete: "address-level2",
    required: false,
  },
];

function getRouteStateFromLocation(): RouteState {
  if (typeof window === "undefined") {
    return { pageId: "home" };
  }

  return getRouteStateFromPath(window.location.pathname, window.location.hash);
}

function getRouteStateFromPath(pathname: string, hash = ""): RouteState {
  const path = pathname.replace(/\/$/, "") || "/";
  const hashId = hash.replace("#", "") as SeoPageId;

  if (hashId && seoById[hashId]) {
    return { pageId: hashId };
  }

  if (path.startsWith("/projects/")) {
    const projectSlug = path.split("/").filter(Boolean)[1];
    return { pageId: "projects", projectSlug };
  }

  const pageFromPath = seoByPath[path];
  if (pageFromPath) {
    return { pageId: pageFromPath.id };
  }

  return { pageId: "home" };
}

function getInitialLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(queryLanguage)) {
    return queryLanguage;
  }

  try {
    const storedLanguage = window.localStorage.getItem("aramphabot-language");
    if (isLanguage(storedLanguage)) {
      return storedLanguage;
    }
  } catch {
    return defaultLanguage;
  }

  return defaultLanguage;
}

function scrollToPage(pageId: SeoPageId) {
  window.requestAnimationFrame(() => {
    const target = document.getElementById(pageId);
    if (target) {
      target.scrollIntoView({ block: "start" });
    }
  });
}

function updateDocumentMetadata(page: SeoEntry, language: Language, project?: Project) {
  const localizedPath = getLocalizedPath(page.path, language);
  const absolutePageUrl = getAbsoluteUrl(localizedPath);
  const imageAlt =
    project?.coverImage.alt ||
    (language === "th"
      ? "ผลงานสถาปัตยกรรมและออกแบบภายในของ Aramphabot Studio"
      : "Aramphabot Studio architecture and interior design portfolio");

  document.title = page.title;

  setMetaTag("name", "description", page.description);
  setMetaTag("name", "robots", "index, follow");
  setMetaTag("name", "author", siteConfig.name);
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", page.title);
  setMetaTag("name", "twitter:description", page.description);
  setMetaTag("name", "twitter:image", getAbsoluteAssetUrl(page.image));

  setMetaTag("property", "og:site_name", siteConfig.name);
  setMetaTag("property", "og:title", page.title);
  setMetaTag("property", "og:description", page.description);
  setMetaTag("property", "og:type", project ? "article" : "website");
  setMetaTag("property", "og:url", absolutePageUrl);
  setMetaTag("property", "og:image", getAbsoluteAssetUrl(page.image));
  setMetaTag("property", "og:image:alt", imageAlt);
  setMetaTag("property", "og:locale", localeByLanguage[language]);

  setCanonicalLink(absolutePageUrl);
  setAlternateLinks(page.path);
  setStructuredData(getStructuredData(page, project, language));
}

function setMetaTag(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.content = content;
}

function setCanonicalLink(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement("link");
    element.rel = "canonical";
    document.head.appendChild(element);
  }

  element.href = href;
}

function setAlternateLinks(path: string) {
  document.head
    .querySelectorAll<HTMLLinkElement>('link[data-i18n-alternate="true"]')
    .forEach((element) => element.remove());

  languages.forEach((option) => {
    const element = document.createElement("link");
    element.rel = "alternate";
    element.setAttribute("hreflang", option.code);
    element.href = getAbsoluteUrl(getLocalizedPath(path, option.code));
    element.dataset.i18nAlternate = "true";
    document.head.appendChild(element);
  });

  const fallback = document.createElement("link");
  fallback.rel = "alternate";
  fallback.setAttribute("hreflang", "x-default");
  fallback.href = getAbsoluteUrl(getLocalizedPath(path, defaultLanguage));
  fallback.dataset.i18nAlternate = "true";
  document.head.appendChild(fallback);
}

function setStructuredData(data: Array<Record<string, unknown>>) {
  let element = document.getElementById("structured-data") as HTMLScriptElement | null;

  if (!element) {
    element = document.createElement("script");
    element.id = "structured-data";
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(data);
}

function getNavigationKey(href: string): NavigationKey {
  return navigationKeyByHref[href] ?? "home";
}

function App() {
  const [language, setLanguage] = useState<Language>(() => getInitialLanguage());
  const [routeState, setRouteState] = useState<RouteState>(() => getRouteStateFromLocation());
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectFilter>("All");
  const [contactStatus, setContactStatus] = useState<ContactStatus | null>(null);
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(() => {
    const initialRoute = getRouteStateFromLocation();
    const routedProject =
      initialRoute.projectSlug && getProjectBySlug(initialRoute.projectSlug);

    return routedProject ? routedProject.slug : initialProject.slug;
  });
  const content = siteContent[language];
  const selectedProject = getProjectBySlug(selectedProjectSlug) ?? initialProject;
  const selectedProjectCopy = getProjectCopy(selectedProject, language);
  const htmlLanguage = languages.find((option) => option.code === language)?.htmlLang ?? "en";

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.type === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    document.documentElement.lang = htmlLanguage;
    document.documentElement.classList.toggle("thai-copy", language === "th");

    try {
      window.localStorage.setItem("aramphabot-language", language);
    } catch {
      // Language still works from state if storage is unavailable.
    }
  }, [htmlLanguage, language]);

  useEffect(() => {
    const syncRoute = () => {
      const nextRoute = getRouteStateFromLocation();
      const routedProject =
        nextRoute.projectSlug && getProjectBySlug(nextRoute.projectSlug);

      setRouteState(nextRoute);

      if (routedProject) {
        setSelectedProjectSlug(routedProject.slug);
      } else if (nextRoute.projectSlug) {
        window.history.replaceState(null, "", getLocalizedPath("/projects", language));
        setRouteState({ pageId: "projects" });
      }

      scrollToPage(nextRoute.pageId);
    };

    syncRoute();
    window.addEventListener("popstate", syncRoute);
    window.addEventListener("hashchange", syncRoute);

    return () => {
      window.removeEventListener("popstate", syncRoute);
      window.removeEventListener("hashchange", syncRoute);
    };
  }, [language]);

  useEffect(() => {
    const routedProject =
      routeState.projectSlug && getProjectBySlug(routeState.projectSlug);
    const pageSeo = routedProject
      ? getProjectSeo(routedProject, language)
      : getSeoById(routeState.pageId, language) ?? defaultSeo;

    updateDocumentMetadata(pageSeo, language, routedProject || undefined);
  }, [routeState, language]);

  function switchLanguage(nextLanguage: Language) {
    if (nextLanguage === language) {
      return;
    }

    const url = new URL(window.location.href);
    if (nextLanguage === defaultLanguage) {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", nextLanguage);
    }

    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    setContactStatus(null);
    setLanguage(nextLanguage);
  }

  function navigateTo(path: string) {
    const nextRoute = getRouteStateFromPath(path);

    window.history.pushState(null, "", getLocalizedPath(path, language));
    setRouteState(nextRoute);

    if (nextRoute.projectSlug) {
      const nextProject = getProjectBySlug(nextRoute.projectSlug);
      if (nextProject) {
        setSelectedProjectSlug(nextProject.slug);
      }
    }

    scrollToPage(nextRoute.pageId);
  }

  function handleNavigation(event: MouseEvent<HTMLAnchorElement>, path: string) {
    event.preventDefault();
    setMenuOpen(false);
    navigateTo(path);
  }

  function handleCategoryChange(category: ProjectFilter) {
    setActiveCategory(category);
    const nextProject =
      category === "All"
        ? initialProject
        : projects.find((project) => project.type === category);

    if (nextProject) {
      setSelectedProjectSlug(nextProject.slug);
    }

    window.history.pushState(null, "", getLocalizedPath("/projects", language));
    setRouteState({ pageId: "projects" });
  }

  function handleProjectSelect(project: Project) {
    setSelectedProjectSlug(project.slug);
    window.history.pushState(null, "", getLocalizedPath(getProjectPath(project), language));
    setRouteState({ pageId: "projects", projectSlug: project.slug });
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    if (!form.reportValidity()) {
      return;
    }

    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const labels = content.contact.fields;
    const draft = [
      content.contact.draftTitle,
      "",
      `${labels.name}: ${value("name")}`,
      `${labels.email}: ${value("email")}`,
      `${labels.phone}: ${value("phone") || content.contact.notProvided}`,
      `${labels.projectType}: ${value("projectType") || content.contact.notProvided}`,
      `${labels.projectLocation}: ${value("projectLocation") || content.contact.notProvided}`,
      "",
      `${labels.message}:`,
      value("message"),
    ].join("\n");

    const recipient = siteConfig.contact.email.trim();
    if (recipient) {
      const mailto = new URL(`mailto:${recipient}`);
      mailto.searchParams.set("subject", content.contact.subject);
      mailto.searchParams.set("body", draft);
      window.location.href = mailto.toString();
      setContactStatus({ message: content.contact.mailOpening });
      return;
    }

    setContactStatus({
      message: content.contact.prepared,
      draft,
    });
  }

  return (
    <div className={`min-h-screen overflow-x-hidden bg-ivory text-ink ${language === "th" ? "thai-copy" : ""}`} lang={htmlLanguage}>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-bone/90 backdrop-blur-xl">
        <nav className="mx-auto flex h-[72px] max-w-[1540px] items-center justify-between px-5 sm:px-7 lg:h-20 lg:px-10">
          <a
            href={getLocalizedPath("/", language)}
            className="group inline-flex flex-col"
            aria-label={content.header.homeLabel}
            onClick={(event) => handleNavigation(event, "/")}
          >
            <span className="font-serif text-[1.72rem] leading-none text-ink transition group-hover:text-clay">
              Aramphabot
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.28em] text-taupe">
              Studio Co., Ltd.
            </span>
          </a>

          <div className="hidden items-center gap-7 text-[11px] uppercase tracking-[0.22em] text-charcoal/68 xl:flex">
            {navigation.map((item) => {
              const navigationKey = getNavigationKey(item.href);

              return (
                <a
                  key={item.href}
                  href={getLocalizedPath(item.href, language)}
                  aria-current={
                    routeState.pageId === getRouteStateFromPath(item.href).pageId
                      ? "page"
                      : undefined
                  }
                  onClick={(event) => handleNavigation(event, item.href)}
                  className="nav-link py-3 transition hover:text-ink"
                >
                  {content.navigation[navigationKey]}
                </a>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitcher
              language={language}
              label={content.header.languageLabel}
              onChange={switchLanguage}
            />
            <a
              href={getLocalizedPath("/contact", language)}
              onClick={(event) => handleNavigation(event, "/contact")}
              className="inline-flex items-center gap-3 border border-ink/25 px-5 py-3 text-[11px] uppercase tracking-[0.22em] transition duration-300 hover:border-ink hover:bg-ink hover:text-bone"
            >
              {content.header.discuss}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>

          <button
            className="inline-flex size-11 items-center justify-center border border-ink/35 bg-bone text-ink shadow-soft transition hover:border-ink lg:hidden"
            type="button"
            aria-label={content.header.toggleNavigation}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {menuOpen ? (
          <div id="mobile-navigation" className="border-t border-ink/10 bg-bone px-5 py-6 lg:hidden">
            <div className="mb-5 flex items-center justify-between border-b border-ink/10 pb-5">
              <p className="text-[11px] uppercase tracking-[0.2em] text-taupe">
                {content.header.languageLabel}
              </p>
              <LanguageSwitcher
                language={language}
                label={content.header.languageLabel}
                onChange={switchLanguage}
              />
            </div>
            <div className="grid gap-1 text-sm uppercase tracking-[0.18em]">
              {navigation.map((item) => {
                const navigationKey = getNavigationKey(item.href);

                return (
                  <a
                    key={item.href}
                    href={getLocalizedPath(item.href, language)}
                    className="border-b border-ink/10 py-4 text-charcoal transition hover:text-ink"
                    onClick={(event) => handleNavigation(event, item.href)}
                  >
                    {content.navigation[navigationKey]}
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section
          id="home"
          aria-labelledby="home-heading"
          className="relative min-h-[100svh] overflow-hidden pt-[72px] lg:pt-20"
        >
          <img
            src="/images/architecture-hero.jpg"
            alt="Warm architectural planes representing Aramphabot Studio architecture and interior design in Bangkok"
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,27,22,0.86),rgba(31,27,22,0.38)_52%,rgba(244,239,228,0.05))]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory to-transparent" />

          <div className="relative mx-auto grid min-h-[calc(100svh-72px)] max-w-[1540px] content-end gap-10 px-5 pb-9 sm:px-7 md:pb-14 lg:min-h-[calc(100svh-80px)] lg:px-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.55fr)]">
            <div className="min-w-0 max-w-5xl text-bone">
              <p className="mb-6 max-w-[18rem] text-[11px] uppercase leading-6 tracking-[0.24em] text-bone/78 sm:max-w-none sm:tracking-[0.32em]">
                {content.hero.eyebrow}
              </p>
              <h1
                id="home-heading"
                className="max-w-[21.5rem] font-serif text-[3rem] leading-[0.98] sm:max-w-[44rem] sm:text-7xl md:text-8xl xl:max-w-5xl xl:text-[7.6rem]"
              >
                {content.hero.title}
              </h1>
              <p className="mt-7 max-w-[20.5rem] text-base leading-7 text-bone/82 sm:max-w-xl sm:text-lg sm:leading-8 md:max-w-2xl md:text-xl">
                {content.hero.description}
              </p>
            </div>

            <div className="hidden self-end border-y border-bone/30 py-5 text-bone/80 xl:block">
              <p className="mb-6 font-serif text-3xl leading-tight text-bone">
                {content.hero.statement}
              </p>
              <dl className="grid gap-5">
                {content.hero.facts.map(([label, value]) => (
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
            {content.registryBar.map((item) => (
              <p key={item} className="py-4 md:px-6 md:first:pl-0 md:last:pr-0">
                {item}
              </p>
            ))}
          </div>
        </section>

        <Section
          id="about"
          eyebrow={content.about.eyebrow}
          title={content.about.title}
        >
          <div className="grid gap-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
            <div className="max-w-xl space-y-7 text-[1.05rem] leading-8 text-charcoal/75 md:text-lg">
              {content.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="border-l border-clay/70 pl-5 text-base leading-7 text-charcoal">
                {content.about.verificationNote}
              </p>
            </div>

            <div className="grid border-t border-ink/15 md:grid-cols-2">
              {content.about.facts.map(([label, value]) => (
                <div key={label} className="border-b border-ink/15 py-6 md:odd:border-r md:odd:pr-8 md:even:pl-8">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">{label}</p>
                  <p className="mt-3 text-lg leading-8 text-ink">{value}</p>
                </div>
              ))}
              <div className="border-b border-ink/15 py-6 md:col-span-2">
                <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">
                  {content.about.officeLabel}
                </p>
                <p className="mt-3 max-w-3xl text-lg leading-8">{companyFacts.registeredOffice}</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="projects"
          eyebrow={content.projects.eyebrow}
          title={content.projects.title}
          className="bg-bone/55"
        >
          <div className="mb-10 flex gap-2 overflow-x-auto border-y border-ink/10 py-3" aria-label={content.projects.categoriesLabel}>
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
                {getCategoryLabel(category, language)}
              </button>
            ))}
          </div>

          <div className="grid gap-x-7 gap-y-11 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project, index) => {
              const projectCopy = getProjectCopy(project, language);

              return (
                <ProjectCard
                  key={project.slug}
                  project={projectCopy}
                  typeLabel={getCategoryLabel(project.type, language)}
                  statusLabel={getStatusLabel(project.status, language)}
                  ariaLabel={`${content.projects.viewDetails} ${projectCopy.title}`}
                  featured={index === 0 && activeCategory === "All"}
                  selected={selectedProject.slug === project.slug}
                  onSelect={() => handleProjectSelect(project)}
                />
              );
            })}
          </div>

          <ProjectDetail
            project={selectedProjectCopy}
            selectedTemplateLabel={content.projects.selectedTemplate}
            typeLabel={getCategoryLabel(selectedProject.type, language)}
            labels={content.projects.labels}
          />
        </Section>

        <Section
          id="services"
          eyebrow={content.services.eyebrow}
          title={content.services.title}
        >
          <div className="grid border-t border-ink/15 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const serviceCopy = getServiceCopy(service, language);

              return (
                <article
                  key={service.title}
                  className="group border-b border-ink/15 py-8 transition duration-300 hover:bg-bone md:px-7 md:odd:border-r xl:border-r xl:[&:nth-child(3n)]:border-r-0"
                >
                  <Building2 className="text-clay transition duration-300 group-hover:translate-x-1" size={22} aria-hidden="true" />
                  <h3 className="mt-7 font-serif text-[2rem] leading-none md:text-4xl">{serviceCopy.title}</h3>
                  <p className="mt-5 leading-7 text-charcoal/72">{serviceCopy.summary}</p>
                  <p className="mt-5 text-[11px] uppercase leading-6 tracking-[0.18em] text-taupe">
                    {serviceCopy.clientType}
                  </p>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="process"
          eyebrow={content.process.eyebrow}
          title={content.process.title}
          className="bg-linen/55"
        >
          <div className="grid gap-x-12 gap-y-2 md:grid-cols-2">
            {processSteps.map((step) => {
              const stepCopy = getProcessCopy(step, language);

              return (
                <article key={step.eyebrow} className="grid grid-cols-[3.5rem_1fr] gap-5 border-t border-ink/15 py-7">
                  <p className="font-serif text-3xl text-clay/85">{stepCopy.eyebrow}</p>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight">{stepCopy.title}</h3>
                    <p className="mt-3 leading-7 text-charcoal/72">{stepCopy.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="journal"
          eyebrow={content.journal.eyebrow}
          title={content.journal.title}
        >
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {journalPosts.map((post) => {
              const postCopy = getJournalCopy(post, language);

              return (
                <article key={post.slug} className="group border-t border-ink/15 pt-4">
                  <div className="image-frame aspect-[3/4] bg-stone">
                    <img
                      src={post.image.src}
                      alt={post.image.alt}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-taupe">
                      {postCopy.category} / {postCopy.readTime}
                    </p>
                    <h3 className="mt-3 font-serif text-3xl leading-[1.05]">{postCopy.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-charcoal/70">{postCopy.excerpt}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section
          id="research"
          eyebrow={content.research.eyebrow}
          title={content.research.title}
          className="bg-bone/60"
        >
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="space-y-5">
              {content.research.notes.map((note) => (
                <p key={note} className="flex gap-4 border-t border-ink/10 pt-5 leading-7 text-charcoal/74">
                  <CheckCircle2 className="mt-1 shrink-0 text-moss" size={18} aria-hidden="true" />
                  {note}
                </p>
              ))}
            </div>
            <div className="border-y border-ink/15 py-8">
              <p className="text-[11px] uppercase tracking-[0.22em] text-taupe">
                {content.research.businessObjectiveLabel}
              </p>
              <p className="mt-5 text-xl leading-9 md:text-2xl">{companyFacts.businessObjective}</p>
              <a
                href={companyFacts.sourceUrl}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-clay"
              >
                {content.research.sourcePrefix} {companyFacts.sourceLabel}
                <ArrowUpRight className="transition group-hover:translate-x-1 group-hover:-translate-y-1" size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="bg-ink px-5 py-24 text-bone sm:px-7 lg:px-10 lg:py-32"
        >
          <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.3em] text-bone/50">{content.contact.eyebrow}</p>
              <h2
                id="contact-heading"
                className="mt-6 font-serif text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-7xl"
              >
                {content.contact.title}
              </h2>
              <div className="mt-10 space-y-5 text-bone/68">
                <p className="flex items-start gap-4 leading-7">
                  <MapPin className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  {companyFacts.registeredOffice}
                </p>
                <p className="flex items-start gap-4">
                  <Mail className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  {content.contact.emailPending}
                </p>
                <p className="flex items-start gap-4">
                  <Phone className="mt-1 shrink-0" size={18} aria-hidden="true" />
                  {content.contact.phonePending}
                </p>
              </div>
            </div>

            <form className="grid gap-6" aria-label={content.contact.formLabel} onSubmit={handleContactSubmit}>
              <div className="grid gap-6 md:grid-cols-2">
                {contactFieldKeys.map((field) => {
                  const label = content.contact.fields[field.key];

                  return (
                    <label key={field.name} className="grid gap-3 border-b border-bone/20 pb-3 md:last:col-span-2">
                      <span className="text-[11px] uppercase tracking-[0.18em] text-bone/48">{label}</span>
                      <input
                        className="bg-transparent text-base text-bone outline-none placeholder:text-bone/30"
                        placeholder={label}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required={field.required}
                      />
                    </label>
                  );
                })}
              </div>
              <label className="grid gap-3 border-b border-bone/20 pb-3">
                <span className="text-[11px] uppercase tracking-[0.18em] text-bone/48">{content.contact.fields.message}</span>
                <textarea
                  className="min-h-32 bg-transparent text-base leading-7 text-bone outline-none placeholder:text-bone/30"
                  placeholder={content.contact.messagePlaceholder}
                  name="message"
                  required
                />
              </label>
              {contactStatus ? (
                <div
                  className="border border-bone/20 bg-bone/5 p-4 text-sm leading-7 text-bone/72"
                  role="status"
                  aria-live="polite"
                >
                  <p>{contactStatus.message}</p>
                  {contactStatus.draft ? (
                    <pre className="mt-4 max-h-56 overflow-auto whitespace-pre-wrap border-t border-bone/15 pt-4 font-sans text-xs leading-6 text-bone/62">
                      {contactStatus.draft}
                    </pre>
                  ) : null}
                </div>
              ) : null}
              <button
                className="group mt-2 inline-flex w-full items-center justify-between border border-bone/30 px-6 py-4 text-[11px] uppercase tracking-[0.2em] transition duration-300 hover:bg-bone hover:text-ink sm:w-auto sm:min-w-72"
                type="submit"
              >
                {content.contact.submit}
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
            {content.footer.note}
          </p>
          <a
            href={getLocalizedPath("/", language)}
            onClick={(event) => handleNavigation(event, "/")}
            className="justify-self-start text-[11px] uppercase tracking-[0.2em] transition hover:text-bone md:justify-self-end"
          >
            {content.footer.backToTop}
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
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`px-5 py-24 sm:px-7 lg:px-10 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-[1540px]">
        <div className="mb-12 grid gap-7 border-t border-ink/15 pt-7 lg:mb-16 lg:grid-cols-[0.32fr_0.68fr]">
          <p className="text-[11px] uppercase tracking-[0.28em] text-taupe">{eyebrow}</p>
          <h2
            id={headingId}
            className="max-w-5xl font-serif text-[2.65rem] leading-[1.02] text-ink sm:text-6xl lg:text-7xl"
          >
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function LanguageSwitcher({
  language,
  label,
  onChange,
}: {
  language: Language;
  label: string;
  onChange: (language: Language) => void;
}) {
  return (
    <div
      className="inline-flex items-center border border-ink/20 bg-ivory/45 p-1 text-[10px] uppercase tracking-[0.18em]"
      aria-label={label}
      role="group"
    >
      {languages.map((option) => (
        <button
          key={option.code}
          type="button"
          title={languageNames[option.code]}
          aria-pressed={language === option.code}
          onClick={() => onChange(option.code)}
          className={`px-3 py-2 transition duration-300 ${
            language === option.code
              ? "bg-ink text-bone"
              : "text-charcoal/64 hover:bg-bone hover:text-ink"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  selected,
  featured,
  typeLabel,
  statusLabel,
  ariaLabel,
  onSelect,
}: {
  project: Project;
  selected: boolean;
  featured: boolean;
  typeLabel: string;
  statusLabel: string;
  ariaLabel: string;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      aria-label={ariaLabel}
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
              {typeLabel} / {statusLabel}
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

function ProjectDetail({
  project,
  selectedTemplateLabel,
  typeLabel,
  labels,
}: {
  project: Project;
  selectedTemplateLabel: string;
  typeLabel: string;
  labels: ProjectDetailLabels;
}) {
  return (
    <article
      id="project-detail"
      aria-labelledby="project-detail-heading"
      className="mt-20 border-t border-ink/15 pt-8 lg:mt-28"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="image-frame aspect-[4/5] bg-stone lg:sticky lg:top-28 lg:aspect-[5/6]">
          <ProjectImage
            image={project.coverImage}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="lg:pl-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-clay">
            {selectedTemplateLabel} / {typeLabel}
          </p>
          <h3
            id="project-detail-heading"
            className="mt-5 font-serif text-[3rem] leading-[0.98] sm:text-6xl lg:text-7xl"
          >
            {project.title}
          </h3>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-charcoal/75">{project.concept}</p>

          <div className="mt-10 grid border-t border-ink/15 sm:grid-cols-2">
            {[
              [labels.location, project.location],
              [labels.year, project.year],
              [labels.scope, project.scope],
              [labels.area, project.area],
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
            {labels.materials}: {project.materials.join(", ")}
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

  useEffect(() => {
    setFailed(!image.src);
  }, [image.src]);

  return (
    <img
      src={source.src}
      alt={source.alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}

export default App;
