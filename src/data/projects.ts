import type { Project } from "@/types/content";

const image = (src: string, alt: string) => ({
  src,
  alt,
});

// Project editing guide:
// 1. Copy one complete project object.
// 2. Change slug, title, location, year, status, type, scope, area, and copy.
// 3. Replace coverImage and galleryImages with real photos in public/images/projects/[slug]/.
// 4. Keep placeholder: true until the project information and imagery are verified.
export const projects: Project[] = [
  {
    slug: "hillside-boutique-hotel",
    title: "Hillside Boutique Hotel",
    location: "Phuket, Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Hospitality",
    scope: "Architecture and interior design",
    area: "To be confirmed",
    shortDescription:
      "A boutique hospitality project shaped by hillside views, arrival sequence, and quiet luxury atmosphere.",
    concept:
      "Architecture as a quiet transition between landscape, guest memory, and the emotional rhythm of arrival.",
    designNarrative: [
      "Use this placeholder page for a boutique hotel or resort project once confirmed photography, site information, project area, and narrative are available.",
      "The page is structured around concept, design narrative, key moves, material palette, and gallery imagery so the studio can replace the content without changing the template.",
    ],
    keyDesignMoves: [
      "Layered arrival sequence",
      "Framed hillside views",
      "Shaded guest thresholds",
      "Warm material transitions",
    ],
    materials: ["Limestone", "Textured plaster", "Timber", "Muted bronze metal"],
    coverImage: image(
      "/images/hospitality.svg",
      "Abstract boutique hotel placeholder with layered warm materials"
    ),
    galleryImages: [
      image("/images/context.svg", "Placeholder image of light and architectural planes"),
      image("/images/material.svg", "Placeholder image of material-toned spatial composition"),
      image("/images/hospitality.svg", "Placeholder image of hospitality lounge atmosphere"),
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "courtyard-pool-villa",
    title: "Courtyard Pool Villa",
    location: "Southern Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Residential",
    scope: "Architecture and interior design",
    area: "To be confirmed",
    shortDescription:
      "A private pool villa organized around a calm courtyard, filtered light, and warm material textures.",
    concept:
      "A domestic retreat shaped by privacy, courtyard air, water, and the slow sequence of daily rituals.",
    designNarrative: [
      "Use this placeholder page for a pool villa or private residence once the verified site, project area, drawings, and photography are ready.",
      "The structure supports both residential and hospitality positioning without inventing client names, awards, or completion claims.",
    ],
    keyDesignMoves: [
      "Courtyard-centered planning",
      "Filtered tropical light",
      "Indoor-outdoor privacy layers",
      "Warm surfaces at human scale",
    ],
    materials: ["Timber", "Limestone", "Textured plaster", "Soft neutral fabric"],
    coverImage: image(
      "/images/residential.svg",
      "Abstract pool villa placeholder with warm light planes"
    ),
    galleryImages: [
      image("/images/interior-warm.svg", "Placeholder image of warm interior atmosphere"),
      image("/images/material.svg", "Placeholder image of warm material detail"),
      image("/images/context.svg", "Placeholder image of soft light and spatial sequence"),
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "urban-cafe-interior",
    title: "Urban Cafe Interior",
    location: "Bangkok, Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Interior",
    scope: "Interior design",
    area: "To be confirmed",
    shortDescription:
      "A cafe interior designed around perception, movement, texture, and everyday rituals.",
    concept:
      "An urban interior where material, counter rhythm, seating pockets, and light shape a memorable daily pause.",
    designNarrative: [
      "Use this placeholder page for a cafe project after verified project status, photography, and operational context are confirmed.",
      "The editorial structure supports a concise commercial story while keeping claims factual and easy to update.",
    ],
    keyDesignMoves: [
      "Clear service counter sequence",
      "Layered seating atmospheres",
      "Material identity without noise",
      "Street-to-interior transition",
    ],
    materials: ["Stone", "Timber veneer", "Warm metal", "Textured wall finish"],
    coverImage: image(
      "/images/commercial.svg",
      "Abstract cafe interior placeholder with precise material contrast"
    ),
    galleryImages: [
      image("/images/commercial.svg", "Placeholder image of commercial interior composition"),
      image("/images/material.svg", "Placeholder image of material-toned spatial composition"),
      image("/images/context.svg", "Placeholder image of architectural facade lines"),
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "seaside-restaurant",
    title: "Seaside Restaurant",
    location: "Eastern Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Restaurant",
    scope: "Architecture and interior design",
    area: "To be confirmed",
    shortDescription:
      "A restaurant concept that frames sea breeze, sunset light, and social gathering.",
    concept:
      "A dining environment composed as a sequence of breeze, horizon, gathering, and warm evening memory.",
    designNarrative: [
      "Use this placeholder page for restaurant or seaside hospitality work once official visuals and program details are ready.",
      "The template allows the studio to describe guest movement, service clarity, atmosphere, and material logic in one refined project story.",
    ],
    keyDesignMoves: [
      "Framed horizon views",
      "Breeze-led seating orientation",
      "Layered roof and shade",
      "Evening light material palette",
    ],
    materials: ["Timber", "Stone aggregate", "Bronze-toned metal", "Lime plaster"],
    coverImage: image(
      "/images/hospitality.svg",
      "Abstract restaurant placeholder with layered hospitality atmosphere"
    ),
    galleryImages: [
      image("/images/hospitality.svg", "Placeholder image of hospitality lounge atmosphere"),
      image("/images/context.svg", "Placeholder image of light and architectural planes"),
      image("/images/material.svg", "Placeholder image of warm material palette"),
    ],
    placeholder: true,
  },
  {
    slug: "compact-premium-apartment",
    title: "Compact Premium Apartment",
    location: "Phuket, Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Concept",
    scope: "Feasibility, concept strategy, and architecture",
    area: "To be confirmed",
    shortDescription:
      "A compact apartment development study focused on livability, operational efficiency, and market positioning.",
    concept:
      "A feasibility-led residential concept balancing efficient planning, calm shared spaces, and premium everyday experience.",
    designNarrative: [
      "Use this placeholder page for rental apartment, residential development, or feasibility work once verified project data is approved.",
      "The content keeps development strategy clear without claiming unverified performance, clients, or commercial outcomes.",
    ],
    keyDesignMoves: [
      "Efficient unit planning",
      "Shared threshold experience",
      "Compact luxury material cues",
      "Operational clarity from concept stage",
    ],
    materials: ["Warm gray render", "Stone tile", "Timber-look finish", "Bronze metal"],
    coverImage: image(
      "/images/development.svg",
      "Abstract residential development placeholder with textured planes"
    ),
    galleryImages: [
      image("/images/development.svg", "Placeholder image of development planning atmosphere"),
      image("/images/interior-warm.svg", "Placeholder image of calm interior daylight"),
      image("/images/architecture-hero.svg", "Placeholder image of layered geometric architecture"),
    ],
    placeholder: true,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
