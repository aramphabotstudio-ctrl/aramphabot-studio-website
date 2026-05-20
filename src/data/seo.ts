import { companyFacts } from "@/data/company";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import type { Project } from "@/types/content";

export type SeoPageId =
  | "home"
  | "about"
  | "projects"
  | "services"
  | "process"
  | "journal"
  | "research"
  | "contact";

export type SeoEntry = {
  id: SeoPageId;
  path: string;
  title: string;
  description: string;
  image: string;
};

const heroImage = "/images/architecture-hero.jpg";
const baseUrl = siteConfig.url.replace(/\/$/, "");

export const architectureKeywords = [
  "architecture studio Bangkok",
  "architecture firm Thailand",
  "hospitality design Thailand",
  "interior design studio Bangkok",
  "boutique hotel design",
  "pool villa design Thailand",
  "cafe design Bangkok",
  "restaurant design Thailand",
  "Aramphabot Studio",
];

export const seoPages: SeoEntry[] = [
  {
    id: "home",
    path: "/",
    title: "Aramphabot Studio | Architecture Studio Bangkok",
    description:
      "Aramphabot Studio is a Bangkok architecture and interior design studio creating refined spatial experiences for hospitality, residential, restaurant, cafe, and commercial projects in Thailand.",
    image: heroImage,
  },
  {
    id: "about",
    path: "/about",
    title: "About Aramphabot Studio | Architecture Firm Thailand",
    description:
      "Learn about Aramphabot Studio Co., Ltd., a Bangkok-based architecture and interior design practice shaped by context, narrative, material sensitivity, and atmosphere.",
    image: "/images/about-interior.jpg",
  },
  {
    id: "projects",
    path: "/projects",
    title: "Projects | Aramphabot Studio Architecture and Interior Portfolio",
    description:
      "Explore Aramphabot Studio project templates for boutique hotel design, pool villa design in Thailand, cafe design in Bangkok, restaurant design, and commercial interiors.",
    image: "/images/hospitality.jpg",
  },
  {
    id: "services",
    path: "/services",
    title: "Services | Architecture, Interior, and Hospitality Design Thailand",
    description:
      "Architecture, interior design, hospitality design, residential design, commercial design, and spatial experience services for projects in Bangkok and across Thailand.",
    image: "/images/services-interior.jpg",
  },
  {
    id: "process",
    path: "/process",
    title: "Design Process | Aramphabot Studio",
    description:
      "A calm and rigorous architecture and interior design process moving from site reading and concept narrative to design development, material direction, and coordination.",
    image: "/images/gallery-light.jpg",
  },
  {
    id: "journal",
    path: "/journal",
    title: "Journal | Architecture, Material, and Hospitality Design Notes",
    description:
      "Editorial notes from Aramphabot Studio on architecture, context, quiet luxury interiors, hospitality design, material restraint, and spatial storytelling.",
    image: "/images/journal-material.jpg",
  },
  {
    id: "research",
    path: "/research",
    title: "Verification | Aramphabot Studio Company Facts",
    description:
      "Verified public company information for Aramphabot Studio Co., Ltd., with unverified awards, client names, and project claims deliberately excluded.",
    image: heroImage,
  },
  {
    id: "contact",
    path: "/contact",
    title: "Contact | Aramphabot Studio Bangkok",
    description:
      "Contact Aramphabot Studio in Bangkok to discuss architecture, interior design, hospitality, restaurant, cafe, residential, or commercial spatial design enquiries.",
    image: heroImage,
  },
];

export const defaultSeo = seoPages[0];

export const seoByPath = seoPages.reduce<Record<string, SeoEntry>>((index, page) => {
  index[page.path] = page;
  return index;
}, {});

export const seoById = seoPages.reduce<Record<SeoPageId, SeoEntry>>(
  (index, page) => {
    index[page.id] = page;
    return index;
  },
  {} as Record<SeoPageId, SeoEntry>
);

export function getAbsoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
}

export function getAbsoluteAssetUrl(path: string) {
  if (/^https?:\/\//i.test(path)) {
    return path;
  }

  return getAbsoluteUrl(path);
}

export function getProjectPath(project: Project) {
  return `/projects/${project.slug}`;
}

export function getProjectSeo(project: Project): SeoEntry {
  return {
    id: "projects",
    path: getProjectPath(project),
    title: `${project.title} | Aramphabot Studio Project`,
    description: `${project.title} is an Aramphabot Studio ${project.type.toLowerCase()} project template for ${project.location}, shaped around ${project.concept.toLowerCase()}`,
    image: project.coverImage.src || heroImage,
  };
}

function isStructuredDataEntry(value: Record<string, unknown> | null): value is Record<string, unknown> {
  return value !== null;
}

export function getStructuredData(page: SeoEntry, project?: Project): Array<Record<string, unknown>> {
  const organization: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.shortName,
    legalName: companyFacts.legalNameEn,
    description: defaultSeo.description,
    url: getAbsoluteUrl("/"),
    image: getAbsoluteAssetUrl(heroImage),
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "289/199 Pleno Phaholyothin Soi 24, Phahonyothin 54/1 Road, Sai Mai",
      addressLocality: "Bangkok",
      postalCode: "10220",
      addressCountry: "TH",
    },
    areaServed: ["Bangkok", "Thailand"],
    knowsAbout: architectureKeywords,
    serviceType: services.map((service) => service.title),
  };

  const website: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getAbsoluteUrl("/"),
    description: defaultSeo.description,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: siteConfig.shortName,
    },
  };

  const webpage: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.title,
    description: page.description,
    url: getAbsoluteUrl(page.path),
    image: getAbsoluteAssetUrl(page.image),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: getAbsoluteUrl("/"),
    },
  };

  const projectData: Record<string, unknown> | null = project
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.title,
        description: project.shortDescription,
        url: getAbsoluteUrl(getProjectPath(project)),
        image: getAbsoluteAssetUrl(project.coverImage.src || heroImage),
        creator: {
          "@type": "Organization",
          name: siteConfig.shortName,
        },
        locationCreated: project.location,
      }
    : null;

  const projectList: Record<string, unknown> | null =
    page.id === "projects"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Aramphabot Studio project portfolio",
          itemListElement: projects.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            url: getAbsoluteUrl(getProjectPath(item)),
          })),
        }
      : null;

  return [organization, website, webpage, projectData, projectList].filter(
    isStructuredDataEntry
  );
}
