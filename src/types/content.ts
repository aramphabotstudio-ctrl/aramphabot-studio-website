export type ProjectCategory =
  | "Residential"
  | "Hospitality"
  | "Commercial"
  | "Interior"
  | "Restaurant"
  | "Commercial Interior"
  | "Concept";

export type ProjectStatus =
  | "Content placeholder"
  | "Concept"
  | "In progress"
  | "Completed"
  | "To be confirmed";

export type ProjectImageCategory = "Completed" | "Before" | "Diagram" | "Plan";

export type ImageAsset = {
  src: string;
  alt: string;
  category?: ProjectImageCategory;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  status: ProjectStatus;
  type: ProjectCategory;
  scope: string;
  area: string;
  shortDescription: string;
  concept: string;
  overview: string;
  siteContext: string;
  spatialSequence: string;
  brandPromise: string;
  spatialMetaphor: string;
  experienceSequence: string[];
  memoryMoments: string[];
  materialLogic: string;
  businessLogic: string;
  designNarrative: string[];
  keyDesignMoves: string[];
  materialAtmosphere: string;
  clientValue: string;
  editorialClosing: string;
  materials: string[];
  photoCredit?: string;
  coverImage: ImageAsset;
  galleryImages: ImageAsset[];
  featured?: boolean;
  placeholder?: boolean;
};

export type Service = {
  title: string;
  summary: string;
  clientType: string;
  details: string[];
};

export type ProcessStep = {
  eyebrow: string;
  title: string;
  description: string;
};

export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: ImageAsset;
};
