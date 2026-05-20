import { companyFacts } from "@/data/company";
import {
  defaultLanguage,
  getProjectCopy,
  getServiceCopy,
  localeByLanguage,
  type Language,
} from "@/data/i18n";
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

export const seoPagesByLanguage: Record<Language, SeoEntry[]> = {
  en: [
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
  ],
  th: [
    {
      id: "home",
      path: "/",
      title: "Aramphabot Studio | สตูดิโอสถาปัตยกรรมในกรุงเทพฯ",
      description:
        "Aramphabot Studio คือสตูดิโอสถาปัตยกรรมและออกแบบภายในในกรุงเทพฯ สำหรับงานโรงแรม ที่อยู่อาศัย ร้านอาหาร คาเฟ่ และพื้นที่พาณิชย์ในประเทศไทย",
      image: heroImage,
    },
    {
      id: "about",
      path: "/about",
      title: "เกี่ยวกับ Aramphabot Studio | บริษัทสถาปัตยกรรมในประเทศไทย",
      description:
        "ทำความรู้จัก Aramphabot Studio Co., Ltd. สตูดิโอสถาปัตยกรรมและออกแบบภายในในกรุงเทพฯ ที่ให้ความสำคัญกับบริบท เรื่องเล่า วัสดุ และบรรยากาศ",
      image: "/images/about-interior.jpg",
    },
    {
      id: "projects",
      path: "/projects",
      title: "ผลงาน | Aramphabot Studio Architecture and Interior Portfolio",
      description:
        "สำรวจโครงสร้างผลงานตัวอย่างของ Aramphabot Studio สำหรับงานบูติกโฮเทล พูลวิลล่า คาเฟ่ ร้านอาหาร และพื้นที่พาณิชย์",
      image: "/images/hospitality.jpg",
    },
    {
      id: "services",
      path: "/services",
      title: "บริการ | สถาปัตยกรรม ออกแบบภายใน และ Hospitality Design",
      description:
        "บริการออกแบบสถาปัตยกรรม ออกแบบภายใน งานโรงแรม ที่อยู่อาศัย ร้านอาหาร คาเฟ่ และพื้นที่พาณิชย์ในกรุงเทพฯ และประเทศไทย",
      image: "/images/services-interior.jpg",
    },
    {
      id: "process",
      path: "/process",
      title: "กระบวนการออกแบบ | Aramphabot Studio",
      description:
        "กระบวนการออกแบบที่สงบและรัดกุม ตั้งแต่การอ่านบริบทของไซต์ แนวคิด การพัฒนาแบบ ทิศทางวัสดุ ไปจนถึงการประสานงาน",
      image: "/images/gallery-light.jpg",
    },
    {
      id: "journal",
      path: "/journal",
      title: "บทความ | สถาปัตยกรรม วัสดุ และ Hospitality Design",
      description:
        "บันทึกเชิงบรรณาธิการจาก Aramphabot Studio ว่าด้วยสถาปัตยกรรม บริบท วัสดุ ความหรูหราแบบเงียบ และการเล่าเรื่องผ่านพื้นที่",
      image: "/images/journal-material.jpg",
    },
    {
      id: "research",
      path: "/research",
      title: "ข้อมูลตรวจสอบ | Aramphabot Studio",
      description:
        "ข้อมูลบริษัท Aramphabot Studio Co., Ltd. จากแหล่งข้อมูลสาธารณะ โดยไม่กล่าวอ้างรางวัล ลูกค้า หรือผลงานที่ยังไม่ได้รับการยืนยัน",
      image: heroImage,
    },
    {
      id: "contact",
      path: "/contact",
      title: "ติดต่อ | Aramphabot Studio Bangkok",
      description:
        "ติดต่อ Aramphabot Studio ในกรุงเทพฯ เพื่อพูดคุยเกี่ยวกับงานสถาปัตยกรรม ออกแบบภายใน โรงแรม ร้านอาหาร คาเฟ่ ที่อยู่อาศัย หรือพื้นที่พาณิชย์",
      image: heroImage,
    },
  ],
};

export const seoPages = seoPagesByLanguage.en;
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

export function getSeoById(id: SeoPageId, language: Language = defaultLanguage) {
  return seoPagesByLanguage[language].find((page) => page.id === id) ?? seoById[id] ?? defaultSeo;
}

export function getLocalizedPath(path: string, language: Language = defaultLanguage) {
  if (language === defaultLanguage) {
    return path;
  }

  return `${path}${path.includes("?") ? "&" : "?"}lang=${language}`;
}

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

export function getProjectSeo(project: Project, language: Language = defaultLanguage): SeoEntry {
  const localizedProject = getProjectCopy(project, language);

  if (language === "th") {
    return {
      id: "projects",
      path: getProjectPath(project),
      title: `${localizedProject.title} | ผลงาน Aramphabot Studio`,
      description: `${localizedProject.title} เป็นโครงสร้างหน้าโครงการของ Aramphabot Studio สำหรับ ${localizedProject.location} โดยวางแนวคิดจาก${localizedProject.concept}`,
      image: project.coverImage.src || heroImage,
    };
  }

  return {
    id: "projects",
    path: getProjectPath(project),
    title: `${localizedProject.title} | Aramphabot Studio Project`,
    description: `${localizedProject.title} is an Aramphabot Studio ${localizedProject.type.toLowerCase()} project template for ${localizedProject.location}, shaped around ${localizedProject.concept.toLowerCase()}`,
    image: project.coverImage.src || heroImage,
  };
}

function isStructuredDataEntry(value: Record<string, unknown> | null): value is Record<string, unknown> {
  return value !== null;
}

export function getStructuredData(
  page: SeoEntry,
  project?: Project,
  language: Language = defaultLanguage
): Array<Record<string, unknown>> {
  const localizedHome = getSeoById("home", language);
  const localizedProject = project ? getProjectCopy(project, language) : undefined;
  const localizedProjects = projects.map((item) => getProjectCopy(item, language));
  const localizedServices = services.map((service) => getServiceCopy(service, language));
  const inLanguage = language === "th" ? "th" : "en";
  const pageUrl = getAbsoluteUrl(getLocalizedPath(page.path, language));

  const organization: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.shortName,
    legalName: language === "th" ? companyFacts.legalNameTh : companyFacts.legalNameEn,
    description: localizedHome.description,
    url: getAbsoluteUrl(getLocalizedPath("/", language)),
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
    serviceType: localizedServices.map((service) => service.title),
    inLanguage,
  };

  const website: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: getAbsoluteUrl(getLocalizedPath("/", language)),
    description: localizedHome.description,
    inLanguage,
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
    url: pageUrl,
    image: getAbsoluteAssetUrl(page.image),
    inLanguage,
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: getAbsoluteUrl(getLocalizedPath("/", language)),
    },
  };

  const projectData: Record<string, unknown> | null = project && localizedProject
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: localizedProject.title,
        description: localizedProject.shortDescription,
        url: getAbsoluteUrl(getLocalizedPath(getProjectPath(project), language)),
        image: getAbsoluteAssetUrl(project.coverImage.src || heroImage),
        creator: {
          "@type": "Organization",
          name: siteConfig.shortName,
        },
        inLanguage,
        locationCreated: localizedProject.location,
      }
    : null;

  const projectList: Record<string, unknown> | null =
    page.id === "projects"
      ? {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: language === "th" ? "ผลงานของ Aramphabot Studio" : "Aramphabot Studio project portfolio",
          inLanguage,
          itemListElement: localizedProjects.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.title,
            url: getAbsoluteUrl(getLocalizedPath(getProjectPath(projects[index]), language)),
          })),
        }
      : null;

  return [organization, website, webpage, projectData, projectList].filter(
    isStructuredDataEntry
  );
}
