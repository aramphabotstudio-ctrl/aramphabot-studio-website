import type { JournalPost } from "@/types/content";

const image = (src: string, alt: string) => ({
  src,
  alt,
});

export const journalPosts: JournalPost[] = [
  {
    slug: "designing-hospitality-through-atmosphere",
    title: "Designing Hospitality Through Atmosphere",
    category: "Hospitality",
    date: "Insight",
    readTime: "4 min read",
    excerpt:
      "Arrival, pause, reveal, intimacy, and service movement shape how a guest remembers a place.",
    image: image(
      "/images/hospitality.svg",
      "Placeholder hospitality atmosphere with layered seating"
    ),
  },
  {
    slug: "why-context-matters-in-architecture",
    title: "Why Context Matters in Architecture",
    category: "Context",
    date: "Insight",
    readTime: "4 min read",
    excerpt:
      "Architecture in Bangkok and Thailand asks for shade, breeze, tactility, and an attentive relationship with site.",
    image: image(
      "/images/context.svg",
      "Placeholder facade composition with patterned light"
    ),
  },
  {
    slug: "quiet-luxury-in-spatial-design",
    title: "Quiet Luxury in Spatial Design",
    category: "Material",
    date: "Insight",
    readTime: "3 min read",
    excerpt:
      "Stone, timber, plaster, metal, and fabric hold emotional temperature when they are composed with restraint.",
    image: image(
      "/images/material.svg",
      "Placeholder material study with warm light"
    ),
  },
  {
    slug: "from-concept-to-experience",
    title: "From Concept to Experience",
    category: "Process",
    date: "Insight",
    readTime: "4 min read",
    excerpt:
      "A strong concept becomes valuable when it guides sequence, detail, buildability, and how people remember a place.",
    image: image("/images/context.svg", "Placeholder architectural light study"),
  },
];
