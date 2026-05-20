import type { ImageAsset, Project, ProjectCategory } from "@/types/content";

/*
  Aramphabot Studio project data
  --------------------------------
  This is the only file the studio owner needs to edit for project content.

  How to add a project:
  1. Copy one full object inside the projects array.
  2. Paste it below the existing projects.
  3. Change the slug, title, location, year, status, type, scope, area, and text.
  4. Add real images to public/images/projects/project-slug/.
  5. Replace coverImage and galleryImages with paths such as:
     /images/projects/project-slug/cover.jpg
     /images/projects/project-slug/01.jpg
  6. Keep placeholder: true until all project information and imagery are verified.

  How to remove a project:
  - Delete the full object from the opening { to the closing }, including the comma.

  Important:
  - Do not add fake clients, fake awards, fake completion years, or unapproved claims.
  - Use "To be confirmed" when a field is not yet verified.
  - If an image path is empty or wrong, the website will show the fallback image.
*/

const image = (src: string, alt: string): ImageAsset => ({
  src,
  alt,
});

export const projectImageFallback = image(
  "/images/architecture-hero.jpg",
  "Warm architectural placeholder for Aramphabot Studio architecture and interior design work"
);

export const projects: Project[] = [
  {
    slug: "boutique-hotel",
    title: "Boutique Hotel",
    location: "Phuket, Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Hospitality",
    scope: "Architecture and interior design",
    area: "To be confirmed",
    shortDescription:
      "A boutique hospitality placeholder shaped by arrival sequence, hillside views, and a quiet luxury atmosphere.",
    concept:
      "Architecture as a calm transition between landscape, guest memory, and the emotional rhythm of arrival.",
    designNarrative: [
      "Use this placeholder page for a boutique hotel or resort project once confirmed photography, site information, project area, and narrative are available.",
      "The page is structured around concept, design narrative, key moves, material palette, and gallery imagery so the studio can replace content without changing the template.",
    ],
    keyDesignMoves: [
      "Layered arrival sequence",
      "Framed landscape views",
      "Shaded guest thresholds",
      "Warm material transitions",
    ],
    materials: ["Limestone", "Textured plaster", "Timber", "Muted bronze metal"],
    coverImage: image(
      "/images/hospitality.jpg",
      "Boutique hotel design placeholder with layered warm materials for hospitality design in Thailand"
    ),
    galleryImages: [
      image("/images/gallery-light.jpg", "Architectural light study placeholder for a boutique hotel arrival sequence"),
      image("/images/gallery-material.jpg", "Material palette placeholder with stone, timber, and warm plaster tones"),
      image("/images/gallery-lounge.jpg", "Hospitality lounge atmosphere placeholder for a calm guest experience"),
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "pool-villa",
    title: "Pool Villa",
    location: "Southern Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Residential",
    scope: "Architecture and interior design",
    area: "To be confirmed",
    shortDescription:
      "A private villa placeholder organized around water, privacy, filtered light, and warm material textures.",
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
      "/images/residence.jpg",
      "Pool villa design Thailand placeholder with warm light, privacy, and water-led atmosphere"
    ),
    galleryImages: [
      image("/images/home-interior.jpg", "Warm residential interior placeholder for a private pool villa retreat"),
      image("/images/gallery-material.jpg", "Natural material detail placeholder for villa architecture and interiors"),
      image("/images/about-interior.jpg", "Soft light and spatial sequence placeholder for residential design"),
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "cafe",
    title: "Cafe",
    location: "Bangkok, Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Interior",
    scope: "Interior design",
    area: "To be confirmed",
    shortDescription:
      "A cafe placeholder designed around movement, texture, service clarity, and everyday rituals.",
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
      "/images/commercial.jpg",
      "Cafe design Bangkok placeholder with precise material contrast and a clear service counter rhythm"
    ),
    galleryImages: [
      image("/images/services-interior.jpg", "Commercial interior placeholder for cafe seating and service flow"),
      image("/images/gallery-material.jpg", "Material composition placeholder for a refined cafe interior"),
      image("/images/commercial.jpg", "Facade and threshold placeholder for an urban cafe in Bangkok"),
    ],
    featured: true,
    placeholder: true,
  },
  {
    slug: "restaurant",
    title: "Restaurant",
    location: "Eastern Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Restaurant",
    scope: "Architecture and interior design",
    area: "To be confirmed",
    shortDescription:
      "A restaurant placeholder that frames atmosphere, service flow, social gathering, and evening light.",
    concept:
      "A dining environment composed as a sequence of breeze, horizon, gathering, and warm evening memory.",
    designNarrative: [
      "Use this placeholder page for restaurant or hospitality work once official visuals and program details are ready.",
      "The template allows the studio to describe guest movement, service clarity, atmosphere, and material logic in one refined project story.",
    ],
    keyDesignMoves: [
      "Framed view moments",
      "Breeze-led seating orientation",
      "Layered roof and shade",
      "Evening light material palette",
    ],
    materials: ["Timber", "Stone aggregate", "Bronze-toned metal", "Lime plaster"],
    coverImage: image(
      "/images/journal-hospitality.jpg",
      "Restaurant design Thailand placeholder with layered hospitality atmosphere and warm evening light"
    ),
    galleryImages: [
      image("/images/hospitality.jpg", "Hospitality dining atmosphere placeholder for restaurant design"),
      image("/images/gallery-light.jpg", "Architectural light placeholder for a restaurant threshold and view sequence"),
      image("/images/journal-material.jpg", "Warm material palette placeholder for restaurant interiors"),
    ],
    placeholder: true,
  },
  {
    slug: "commercial-interior",
    title: "Commercial Interior",
    location: "Bangkok, Thailand",
    year: "To be confirmed",
    status: "Content placeholder",
    type: "Commercial Interior",
    scope: "Interior design and spatial experience",
    area: "To be confirmed",
    shortDescription:
      "A commercial interior placeholder for workplace, retail, showroom, or mixed-use interior environments.",
    concept:
      "A composed interior system where circulation, brand touchpoints, material restraint, and operational clarity work together.",
    designNarrative: [
      "Use this placeholder page for verified commercial interior work once the project owner approves photography, location, scope, and project story.",
      "The content supports commercial clarity while avoiding unverified performance claims, client names, or awards.",
    ],
    keyDesignMoves: [
      "Clear customer or user journey",
      "Flexible commercial planning",
      "Material palette with quiet identity",
      "Lighting and threshold hierarchy",
    ],
    materials: ["Warm gray render", "Stone tile", "Timber-look finish", "Bronze metal"],
    coverImage: image(
      "/images/workplace.jpg",
      "Commercial interior placeholder with layered workplace atmosphere and restrained material identity"
    ),
    galleryImages: [
      image("/images/workplace.jpg", "Workplace interior atmosphere placeholder for commercial interior design"),
      image("/images/services-interior.jpg", "Commercial material and light placeholder for a refined interior experience"),
      image("/images/adaptive.jpg", "Flexible commercial planning placeholder for showroom, retail, or workplace use"),
    ],
    placeholder: true,
  },
];

export const projectCategories: Array<"All" | ProjectCategory> = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.type))),
];

export const featuredProjects = projects.filter((project) => project.featured);

export const projectsBySlug = projects.reduce<Record<string, Project>>((index, project) => {
  index[project.slug] = project;
  return index;
}, {});

export function getProjectBySlug(slug: string) {
  return projectsBySlug[slug];
}
