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

  Storytelling fields:
  - brandPromise: one sentence about what the project should help the owner communicate.
  - spatialMetaphor: the guiding image or idea that turns the story into space.
  - experienceSequence: the visitor/user journey in clear steps.
  - memoryMoments: 1-3 moments people should remember after leaving.
  - materialLogic: why the material palette fits atmosphere, budget, maintenance, and context.
  - businessLogic: how design supports positioning, operations, perceived value, or repeat memory.

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
    overview:
      "This placeholder frames a boutique hotel or resort as an atmosphere-led hospitality project, where arrival, guest orientation, privacy, and memory become the primary design material.",
    siteContext:
      "The story should be adapted to the verified site, but the intended structure reads tropical climate, landscape views, shaded thresholds, service access, and the moment guests shift from public arrival into a quieter guest world.",
    spatialSequence:
      "The experience moves from a compressed arrival into a shaded lobby, then toward framed views, guest lounges, rooms, and slower outdoor edges that let light and landscape pace the stay.",
    brandPromise:
      "A hospitality retreat that should be remembered for calm arrival, privacy, and a sense of place rather than decorative spectacle.",
    spatialMetaphor:
      "A quiet threshold between journey and rest, where landscape slowly enters the guest experience.",
    experienceSequence: [
      "Approach through compressed arrival",
      "Threshold into shaded reception",
      "Release toward framed view and guest lounge",
      "Pause at room, garden, and outdoor edges",
      "Afterglow through a clear memory of light, stone, and quiet hospitality",
    ],
    memoryMoments: [
      "The first shaded arrival after travel",
      "A framed landscape view held from the lobby",
      "Evening light across stone, timber, and water",
    ],
    materialLogic:
      "Stone, plaster, timber, and muted metal are selected for tropical durability, soft shadow, tactile calm, and a restrained hospitality identity that can age well.",
    businessLogic:
      "The spatial story supports project positioning, room-rate perception, photography, guest orientation, and a stronger memory of arrival for repeat communication.",
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
    materialAtmosphere:
      "Limestone, textured plaster, timber, and muted bronze should create hospitality value through calm texture, filtered daylight, and a sense of quiet arrival rather than decorative excess.",
    clientValue:
      "For a hotel owner or developer, the design direction supports stronger guest memory, clearer positioning, and a spatial experience that can be translated into operations, photography, and brand communication.",
    editorialClosing:
      "The project should express luxury through sequence, restraint, and the emotional memory of arrival.",
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
    overview:
      "This placeholder positions a pool villa as a private retreat where domestic life, hospitality comfort, and tropical ease are composed through water, privacy, and warm material tactility.",
    siteContext:
      "The future verified story should respond to sun path, prevailing breeze, privacy from neighboring plots, landscape edges, and the way daily rituals unfold between interior rooms and outdoor living areas.",
    spatialSequence:
      "Arrival is kept quiet, then the plan opens toward a protected courtyard, pool edge, shaded living space, private rooms, and intimate corners for slower morning and evening routines.",
    brandPromise:
      "A private retreat that turns everyday rituals into a calm sequence of water, shade, privacy, and family memory.",
    spatialMetaphor:
      "A sheltered courtyard house where water becomes the center of domestic rhythm.",
    experienceSequence: [
      "Quiet arrival and privacy screen",
      "Release into courtyard air and pool reflection",
      "Open living at the shaded edge",
      "Private rooms held behind softer thresholds",
      "Afterglow through morning light, water, and slow domestic rituals",
    ],
    memoryMoments: [
      "The first view of water after entry",
      "A shaded family gathering edge",
      "Soft evening light across warm plaster and timber",
    ],
    materialLogic:
      "Timber, limestone, plaster, and neutral fabric create warmth at human scale while supporting shade, maintenance, and long-term comfort in a tropical setting.",
    businessLogic:
      "The design supports residential comfort, villa guest-readiness, privacy, perceived property value, and memorable photography without relying on excess decoration.",
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
    materialAtmosphere:
      "Timber, limestone, textured plaster, and soft neutral fabric should make the villa feel grounded, shaded, tactile, and comfortable across daylight and evening use.",
    clientValue:
      "For private owners or villa developers, the design improves privacy, daily comfort, guest-readiness, and the long-term emotional value of the property.",
    editorialClosing:
      "The villa should feel less like a showpiece and more like a calm framework for living with air, water, and shade.",
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
    overview:
      "This placeholder describes a cafe as a compact urban experience where service clarity, customer rhythm, seating variety, and material identity work together without visual noise.",
    siteContext:
      "The future project story should read street visibility, pedestrian approach, frontage, acoustic conditions, morning and evening use, and the operational needs behind the counter.",
    spatialSequence:
      "Customers move from the street threshold to the ordering counter, then into seating pockets with different levels of openness before returning to the city with a clear memory of material and light.",
    brandPromise:
      "A cafe that feels calm, precise, and memorable enough for a short visit to become part of an everyday ritual.",
    spatialMetaphor:
      "A composed pause inside the city, shaped by counter rhythm, material touch, and filtered light.",
    experienceSequence: [
      "Street frontage and first glance",
      "Clear threshold into ordering rhythm",
      "Choice of open and intimate seating pockets",
      "Pause through light, scent, material, and conversation",
      "Exit with a simple memory of texture and calm service",
    ],
    memoryMoments: [
      "A distinct counter moment",
      "Material texture at hand level",
      "Filtered light on the seating edge",
    ],
    materialLogic:
      "Stone, timber veneer, warm metal, and textured walls create identity within compact space while remaining durable for high-frequency public use.",
    businessLogic:
      "The design clarifies ordering flow, improves customer dwell quality, strengthens brand recall, and gives the cafe a visual language for social content.",
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
    materialAtmosphere:
      "Stone, timber veneer, warm metal, and textured wall finishes should create a distinct cafe identity while staying durable, calm, and commercially practical.",
    clientValue:
      "For a food and beverage owner, the design clarifies service flow, strengthens spatial identity, and gives everyday customers a place they can remember and return to.",
    editorialClosing:
      "The cafe should turn a short daily visit into a composed sequence of threshold, service, pause, and return.",
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
    overview:
      "This placeholder frames a restaurant as a hospitality setting where guest arrival, service movement, table atmosphere, and evening memory are designed as one integrated experience.",
    siteContext:
      "The verified project story should clarify view, noise, outdoor comfort, kitchen and service access, dining capacity, weather protection, and how the restaurant meets its local market.",
    spatialSequence:
      "Guests arrive through a defined threshold, pass into a shared dining room, find framed view moments, and move through zones that shift from open gathering to more intimate tables.",
    brandPromise:
      "A dining place remembered for atmosphere, gathering, service clarity, and the warm transition from day to evening.",
    spatialMetaphor:
      "A layered table landscape where breeze, horizon, and evening light organize the meal.",
    experienceSequence: [
      "Defined arrival and host threshold",
      "Release into shared dining atmosphere",
      "View and breeze orientation",
      "Shift from open gathering to intimate tables",
      "Afterglow through warm light, service rhythm, and social memory",
    ],
    memoryMoments: [
      "A framed view from the dining room",
      "Warm evening light across the table",
      "The transition from open gathering to quieter conversation",
    ],
    materialLogic:
      "Timber, aggregate stone, bronze-toned metal, and lime plaster hold evening warmth while staying robust for restaurant operations and public use.",
    businessLogic:
      "The design supports table atmosphere, service flow, guest photography, clearer positioning, and a dining identity that can be remembered beyond a single meal.",
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
    materialAtmosphere:
      "Timber, stone aggregate, bronze-toned metal, and lime plaster should hold warm evening light while remaining robust for public hospitality use.",
    clientValue:
      "For a restaurant operator, the design supports clearer service, stronger guest atmosphere, better photo memory, and a dining identity that can grow beyond decoration.",
    editorialClosing:
      "The restaurant should create value through atmosphere, movement, and the memory of gathering.",
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
    overview:
      "This placeholder positions a commercial interior as a disciplined spatial system for workplace, retail, showroom, or mixed-use environments that need both identity and operational clarity.",
    siteContext:
      "The future story should read building constraints, user journey, public/private boundaries, lighting conditions, customer or staff flow, and how the interior supports the business model.",
    spatialSequence:
      "The experience should guide people from entry and first impression through orientation points, active working or display zones, quieter support areas, and a clear exit memory.",
    brandPromise:
      "A commercial interior that makes a brand, workplace, or retail experience feel composed, legible, and quietly valuable.",
    spatialMetaphor:
      "An ordered interior framework where movement, display, work, and support spaces are held in one calm system.",
    experienceSequence: [
      "Entry and first orientation",
      "Clear route toward active commercial zones",
      "Focused display, work, or consultation moments",
      "Support areas kept calm and operationally clear",
      "Exit with a strong impression of order and material restraint",
    ],
    memoryMoments: [
      "A clear first impression at entry",
      "A material or lighting moment tied to the brand",
      "A legible path that makes the space easy to use",
    ],
    materialLogic:
      "Warm render, stone tile, timber-look finish, and bronze metal create a durable, maintainable, and professional atmosphere without visual clutter.",
    businessLogic:
      "The design improves orientation, operations, customer confidence, staff flow, perceived value, and the physical expression of brand identity.",
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
    materialAtmosphere:
      "Warm gray render, stone tile, timber-look finish, and bronze metal should give the interior a restrained identity that feels durable, professional, and easy to maintain.",
    clientValue:
      "For commercial owners, the design can clarify navigation, support operations, improve customer confidence, and translate brand character into a physical environment.",
    editorialClosing:
      "The interior should make business use feel composed, legible, and quietly memorable.",
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
