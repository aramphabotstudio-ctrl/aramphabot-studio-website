export type ProjectCategory =
  | "Residential"
  | "Hospitality"
  | "Commercial"
  | "Interior"
  | "Restaurant"
  | "Concept";

export type ImageAsset = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  status: string;
  type: ProjectCategory;
  scope: string;
  area: string;
  shortDescription: string;
  concept: string;
  designNarrative: string[];
  keyDesignMoves: string[];
  materials: string[];
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
