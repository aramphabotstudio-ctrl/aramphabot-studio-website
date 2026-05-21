export const siteConfig = {
  name: "Aramphabot Studio Co., Ltd.",
  shortName: "Aramphabot Studio",
  tagline: "Architecture of Place, Memory, and Quiet Experience.",
  description:
    "Aramphabot Studio creates architecture and interiors shaped by context, narrative, material sensitivity, and the emotional rhythm of space.",
  location: "Bangkok, Thailand",
  url: import.meta.env.VITE_SITE_URL ?? "https://aramphabot-studio.local",
  contact: {
    email: "",
    phone: "",
    address:
      "289/199 Pleno Phaholyothin Soi 24, Phahonyothin 54/1 Road, Sai Mai, Bangkok 10220",
  },
  social: {
    instagram: "",
    facebook: "https://www.facebook.com/share/1BRGV3LM3a/?mibextid=wwXIfr",
    line: "",
  },
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" },
];
