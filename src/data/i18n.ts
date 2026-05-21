import type { JournalPost, ProcessStep, Project, ProjectCategory, ProjectStatus, Service } from "@/types/content";

export const languages = [
  { code: "en", label: "EN", name: "English", htmlLang: "en" },
  { code: "th", label: "TH", name: "ไทย", htmlLang: "th" },
] as const;

export type Language = (typeof languages)[number]["code"];

export const defaultLanguage: Language = "en";

export const localeByLanguage: Record<Language, string> = {
  en: "en_TH",
  th: "th_TH",
};

export const languageNames: Record<Language, string> = {
  en: "English",
  th: "ไทย",
};

export function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "th";
}

export const siteContent = {
  en: {
    navigation: {
      home: "Home",
      about: "About",
      projects: "Projects",
      services: "Services",
      process: "Process",
      journal: "Journal",
      contact: "Contact",
    },
    header: {
      homeLabel: "Aramphabot Studio home",
      discuss: "Discuss",
      toggleNavigation: "Toggle navigation",
      languageLabel: "Language",
    },
    hero: {
      eyebrow: "Bangkok architecture and interior design studio",
      title: "Architecture of Place, Memory, and Quiet Experience.",
      description:
        "Aramphabot Studio creates architecture and interiors shaped by context, narrative, material sensitivity, and the emotional rhythm of space.",
      statement: "Spatial stories shaped by proportion, material, light, and memory.",
      facts: [
        ["Base", "Bangkok, Thailand"],
        ["Focus", "Architecture / Interior"],
        ["Language", "Context, material, atmosphere"],
      ],
    },
    registryBar: [
      "Architecture as the Beginning of Experience",
      "Narrative before form",
      "Memorable x Sustainable",
    ],
    manifesto: {
      eyebrow: "Design DNA",
      title: "Every project begins with a story before it becomes form.",
      paragraphs: [
        "Aramphabot Studio works as an Architecture & Experience Design Studio: a practice that treats buildings and interiors as the beginning of experience, memory, and long-term value.",
        "The studio reads climate, culture, site, movement, material, and business ambition before shaping form. The result should feel calm, grounded, operationally clear, and emotionally memorable without relying on decoration or spectacle.",
      ],
      principles: [
        ["Narrative", "Define the story and desired feeling before drawing the form."],
        ["Atmosphere", "Shape light, shadow, material, sound, touch, and movement into a remembered sequence."],
        ["Value", "Create emotional value and commercial value through clarity, durability, maintenance logic, and strong positioning."],
      ],
    },
    method: {
      eyebrow: "Studio method",
      title: "Narrative becomes atmosphere, sequence, memory, and value.",
      intro:
        "The studio uses the Aramphabot DNA as a practical decision system. Each project is tested through story, context, movement, material, human memory, and the value it can create for the owner.",
      sequenceLabel: "Experience sequence",
      sequence: ["Approach", "Threshold", "Compression", "Release", "Pause", "Memory Point", "Afterglow"],
      pillars: [
        ["Narrative", "A clear project story is established before style, form, or decoration."],
        ["Atmosphere", "Light, shadow, texture, sound, movement, and comfort are composed as one sensory field."],
        ["Context", "Climate, culture, site condition, operation, and market position become design material."],
        ["Memory", "Each project should hold one to three moments people can remember after leaving."],
        ["Business Value", "Design should support positioning, usability, operation, perceived value, and long-term asset value."],
      ],
      qualityTitle: "How the work is judged",
      qualityChecks: [
        "Can the concept be understood in one sentence?",
        "Does the plan support real users, staff, operations, and maintenance?",
        "Does the material palette create atmosphere without unnecessary decoration?",
        "Does the space create emotional memory and practical value at the same time?",
      ],
    },
    about: {
      eyebrow: "Studio",
      title: "An Architecture & Experience Design Studio shaped by narrative, atmosphere, and long-term value.",
      paragraphs: [
        "Aramphabot Studio sees architecture and interior design as a sequence of experiences rather than a single object. A project moves through approach, threshold, compression, release, pause, memory point, and afterglow.",
        "The studio language is quiet, warm, tactile, and context-led: proportion, light, material, climate, culture, operation, and human memory work together to create places that can be remembered and sustained over time.",
      ],
      verificationNote:
        "Studio positioning and design language are drawn from the Aramphabot Studio DNA Handbook and article supplied by the owner.",
      facts: [
        ["Studio position", "Architecture & Experience Design Studio"],
        ["Core belief", "Architecture as the Beginning of Experience"],
        ["Project lens", "Hospitality, lifestyle, private developments, and commercial spaces"],
        ["Experience sequence", "Approach, threshold, release, pause, memory point, afterglow"],
        ["Material language", "Stone, warm wood, soft plaster, bronze, linen, water, and landscape"],
        ["Value lens", "Emotional value and long-term business value working together"],
      ],
      officeLabel: "Studio base",
    },
    projects: {
      eyebrow: "Projects",
      title: "An editorial portfolio structure ready for verified photographs and owner-approved detail.",
      categoriesLabel: "Project categories",
      selectedTemplate: "Selected template",
      labels: {
        location: "Location",
        year: "Year",
        status: "Status",
        type: "Type",
        scope: "Scope",
        area: "Area",
        overview: "Project overview",
        siteContext: "Site and context",
        spatialSequence: "Spatial sequence",
        brandPromise: "Brand promise",
        spatialMetaphor: "Spatial metaphor",
        experienceSequence: "Experience sequence",
        memoryMoments: "Memory moments",
        materialLogic: "Material logic",
        businessLogic: "Business logic",
        designNarrative: "Design narrative",
        keyDesignMoves: "Key design moves",
        materialAtmosphere: "Material and atmosphere",
        clientValue: "Client value",
        materials: "Materials",
        gallery: "Gallery",
        relatedProjects: "Related projects",
      },
      viewDetails: "View project details for",
      placeholderNote:
        "Placeholder project narrative. Replace with verified project facts, photographs, team information, and owner-approved copy before public launch.",
      discussProject: "Discuss a project with similar ambition",
    },
    services: {
      eyebrow: "Services",
      title: "Design services for architecture, interiors, hospitality, and spatial experience in Thailand.",
    },
    process: {
      eyebrow: "Process",
      title: "A quiet, rigorous path from brief to coordination.",
    },
    journal: {
      eyebrow: "Journal",
      title: "Notes on atmosphere, material restraint, and context.",
    },
    research: {
      eyebrow: "Design reference",
      title: "A working design language built from the studio DNA.",
      businessObjectiveLabel: "Studio lens",
      sourcePrefix: "Reference:",
      notes: [
        "Narrative leads the design before form, style, or decoration.",
        "Atmosphere is shaped through light, proportion, material, movement, and sensory memory.",
        "Quiet luxury comes from restraint, detail, comfort, and long-term value.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Start with a site, a story, and the atmosphere people should remember.",
      formLabel: "Project enquiry form",
      emailPending: "Email to be confirmed",
      phonePending: "Phone to be confirmed",
      intro:
        "Share the site, project ambition, approximate scale, timeline, and the atmosphere you want to create. Until a backend is connected, this form prepares a safe email draft or shows the enquiry text for review.",
      prepareNote:
        "Helpful information to prepare: site address, project type, approximate area, timeline, budget range, existing drawings or photos, and any operational goals.",
      briefTitle: "Brief questions we use to begin",
      briefQuestions: [
        "What should people feel when they arrive?",
        "Who are the main users, and what problems should the space solve for them?",
        "How should the owner, brand, or place be remembered?",
        "Which spaces create revenue, and which spaces create memory?",
        "What constraints should guide the work: budget, time, law, maintenance, or operations?",
        "How will the owner measure success after the project opens or is used?",
      ],
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        company: "Company / Organization",
        projectType: "Project type",
        projectLocation: "Project location",
        projectSize: "Approximate project size",
        timeline: "Timeline",
        budgetRange: "Budget range",
        message: "Message",
      },
      messagePlaceholder: "Tell us about the site, timeline, scope, and atmosphere.",
      submit: "Prepare Enquiry",
      draftTitle: "New project enquiry for Aramphabot Studio",
      notProvided: "Not provided",
      mailOpening: "Your email app is opening with the prepared enquiry.",
      prepared:
        "Enquiry prepared. Add the studio email in src/data/site.ts to enable the mail draft link.",
      subject: "Project enquiry for Aramphabot Studio",
    },
    footer: {
      note:
        "Aramphabot Studio is shaped by narrative, atmosphere, context, human memory, and the belief that design should create both emotional and long-term value.",
      backToTop: "Back to top",
    },
  },
  th: {
    navigation: {
      home: "หน้าแรก",
      about: "สตูดิโอ",
      projects: "ผลงาน",
      services: "บริการ",
      process: "กระบวนการ",
      journal: "บทความ",
      contact: "ติดต่อ",
    },
    header: {
      homeLabel: "กลับสู่หน้าแรก Aramphabot Studio",
      discuss: "พูดคุยงาน",
      toggleNavigation: "เปิดหรือปิดเมนู",
      languageLabel: "ภาษา",
    },
    hero: {
      eyebrow: "สตูดิโอสถาปัตยกรรมและออกแบบภายในในกรุงเทพฯ",
      title: "สถาปัตยกรรมแห่งสถานที่ ความทรงจำ และประสบการณ์ที่เงียบงาม",
      description:
        "Aramphabot Studio สร้างสรรค์สถาปัตยกรรมและงานภายในที่หล่อหลอมจากบริบท เรื่องเล่า ความละเอียดอ่อนของวัสดุ และจังหวะทางอารมณ์ของพื้นที่",
      statement: "เรื่องเล่าของพื้นที่ที่เกิดจากสัดส่วน วัสดุ แสง และความทรงจำ",
      facts: [
        ["ที่ตั้ง", "กรุงเทพฯ ประเทศไทย"],
        ["งานหลัก", "สถาปัตยกรรม / งานภายใน"],
        ["ภาษาในการออกแบบ", "บริบท วัสดุ บรรยากาศ"],
      ],
    },
    registryBar: [
      "Architecture as the Beginning of Experience",
      "เรื่องเล่าก่อนรูปทรง",
      "น่าจดจำ x ยั่งยืนในคุณค่า",
    ],
    manifesto: {
      eyebrow: "Design DNA",
      title: "ทุกโครงการเริ่มจากเรื่องเล่า ก่อนจะกลายเป็นรูปทรง",
      paragraphs: [
        "Aramphabot Studio ทำงานในฐานะ Architecture & Experience Design Studio โดยมองอาคารและพื้นที่ภายในเป็นบทเริ่มต้นของประสบการณ์ ความทรงจำ และคุณค่าระยะยาว",
        "สตูดิโออ่านภูมิอากาศ วัฒนธรรม ไซต์ จังหวะการเคลื่อนไหว วัสดุ และเป้าหมายทางธุรกิจ ก่อนแปลงเป็นรูปทรงที่สงบ ชัดเจน ใช้งานได้จริง และน่าจดจำโดยไม่ต้องพึ่งความหวือหวา",
      ],
      principles: [
        ["Narrative", "วางเรื่องเล่าและความรู้สึกที่ต้องการ ก่อนเริ่มกำหนดรูปทรง"],
        ["Atmosphere", "จัดแสง เงา วัสดุ เสียง ผิวสัมผัส และจังหวะการเดินทางให้กลายเป็นความทรงจำ"],
        ["Value", "สร้างทั้งคุณค่าทางอารมณ์และคุณค่าทางธุรกิจผ่านความชัดเจน ความทนทาน การดูแลรักษา และการวางตำแหน่งโครงการ"],
      ],
    },
    method: {
      eyebrow: "วิธีคิดของสตูดิโอ",
      title: "เรื่องเล่ากลายเป็นบรรยากาศ ลำดับประสบการณ์ ความทรงจำ และคุณค่า",
      intro:
        "สตูดิโอใช้ Aramphabot DNA เป็นระบบตัดสินใจในการออกแบบ ทุกโครงการจึงถูกอ่านผ่านเรื่องเล่า บริบท การเคลื่อนที่ วัสดุ ความทรงจำของผู้คน และคุณค่าที่พื้นที่ควรสร้างให้เจ้าของโครงการ",
      sequenceLabel: "ลำดับประสบการณ์",
      sequence: ["Approach", "Threshold", "Compression", "Release", "Pause", "Memory Point", "Afterglow"],
      pillars: [
        ["Narrative", "วางเรื่องเล่าของโครงการให้ชัด ก่อนเริ่มพูดเรื่องสไตล์ รูปทรง หรือการตกแต่ง"],
        ["Atmosphere", "จัดแสง เงา ผิวสัมผัส เสียง จังหวะการเดิน และความสบายให้เป็นบรรยากาศเดียวกัน"],
        ["Context", "ภูมิอากาศ วัฒนธรรม เงื่อนไขไซต์ การใช้งาน และตำแหน่งทางธุรกิจคือวัตถุดิบของการออกแบบ"],
        ["Memory", "แต่ละโครงการควรมีหนึ่งถึงสามช่วงเวลาที่ผู้คนจำได้หลังจากออกจากพื้นที่"],
        ["Business Value", "งานออกแบบควรช่วยเรื่องภาพจำ การใช้งาน การดูแลรักษา มูลค่าที่รับรู้ และมูลค่าระยะยาวของทรัพย์สิน"],
      ],
      qualityTitle: "เกณฑ์ที่ใช้มองคุณภาพงาน",
      qualityChecks: [
        "แนวคิดอธิบายได้ชัดในหนึ่งประโยคหรือไม่",
        "ผังรองรับผู้ใช้จริง ทีมงาน การดำเนินงาน และการดูแลรักษาหรือไม่",
        "วัสดุสร้างบรรยากาศได้โดยไม่ต้องพึ่งการตกแต่งเกินจำเป็นหรือไม่",
        "พื้นที่สร้างทั้งความทรงจำทางอารมณ์และคุณค่าที่ใช้งานได้จริงพร้อมกันหรือไม่",
      ],
    },
    about: {
      eyebrow: "สตูดิโอ",
      title: "Architecture & Experience Design Studio ที่ขับเคลื่อนด้วยเรื่องเล่า บรรยากาศ และคุณค่าระยะยาว",
      paragraphs: [
        "Aramphabot Studio มองสถาปัตยกรรมและงานภายในเป็นลำดับของประสบการณ์ ไม่ใช่เพียงวัตถุชิ้นเดียว แต่เป็นการเดินทางผ่าน approach, threshold, compression, release, pause, memory point และ afterglow",
        "ภาษาของสตูดิโอมีความสงบ อบอุ่น สัมผัสได้ และยึดโยงกับบริบท โดยให้สัดส่วน แสง วัสดุ ภูมิอากาศ วัฒนธรรม การใช้งานจริง และความทรงจำของผู้คนทำงานร่วมกัน",
      ],
      verificationNote:
        "จุดยืนและภาษาการออกแบบนี้สรุปจาก Aramphabot Studio DNA Handbook และบทความที่เจ้าของส่งมาให้ใช้เป็นแหล่งอ้างอิง",
      facts: [
        ["จุดยืนของสตูดิโอ", "Architecture & Experience Design Studio"],
        ["ความเชื่อหลัก", "Architecture as the Beginning of Experience"],
        ["มุมมองโครงการ", "Hospitality, lifestyle, private developments และพื้นที่เชิงพาณิชย์"],
        ["ลำดับประสบการณ์", "Approach, threshold, release, pause, memory point, afterglow"],
        ["ภาษาวัสดุ", "หิน ไม้โทนอุ่น ปูนฉาบนุ่ม โลหะบรอนซ์ ผ้า น้ำ และภูมิทัศน์"],
        ["มุมมองคุณค่า", "คุณค่าทางอารมณ์และคุณค่าทางธุรกิจระยะยาวต้องทำงานร่วมกัน"],
      ],
      officeLabel: "ฐานของสตูดิโอ",
    },
    projects: {
      eyebrow: "ผลงาน",
      title: "โครงสร้างพอร์ตโฟลิโอเชิงบรรณาธิการ พร้อมรองรับภาพจริงและรายละเอียดที่เจ้าของอนุมัติ",
      categoriesLabel: "ประเภทโครงการ",
      selectedTemplate: "แม่แบบผลงาน",
      labels: {
        location: "ที่ตั้ง",
        year: "ปี",
        status: "สถานะ",
        type: "ประเภท",
        scope: "ขอบเขตงาน",
        area: "พื้นที่",
        overview: "ภาพรวมโครงการ",
        siteContext: "ไซต์และบริบท",
        spatialSequence: "ลำดับประสบการณ์",
        brandPromise: "คำมั่นของแบรนด์",
        spatialMetaphor: "อุปมาเชิงพื้นที่",
        experienceSequence: "ลำดับประสบการณ์",
        memoryMoments: "ช่วงเวลาที่ควรจดจำ",
        materialLogic: "เหตุผลของวัสดุ",
        businessLogic: "ตรรกะทางธุรกิจ",
        designNarrative: "เรื่องเล่าการออกแบบ",
        keyDesignMoves: "แนวคิดสำคัญ",
        materialAtmosphere: "วัสดุและบรรยากาศ",
        clientValue: "คุณค่าต่อลูกค้า",
        materials: "วัสดุ",
        gallery: "แกลเลอรี",
        relatedProjects: "โครงการที่เกี่ยวข้อง",
      },
      viewDetails: "ดูรายละเอียดโครงการ",
      placeholderNote:
        "เรื่องเล่าโครงการนี้ยังเป็นข้อมูลตัวอย่าง ควรแทนที่ด้วยข้อเท็จจริง ภาพถ่าย ทีมงาน และข้อความที่เจ้าของอนุมัติก่อนเปิดใช้งานจริง",
      discussProject: "พูดคุยโครงการที่มีเป้าหมายใกล้เคียงกัน",
    },
    services: {
      eyebrow: "บริการ",
      title: "บริการออกแบบสถาปัตยกรรม งานภายใน งานโรงแรม และประสบการณ์เชิงพื้นที่ในประเทศไทย",
    },
    process: {
      eyebrow: "กระบวนการ",
      title: "เส้นทางการทำงานที่สงบและรัดกุม ตั้งแต่โจทย์แรกจนถึงการประสานงาน",
    },
    journal: {
      eyebrow: "บทความ",
      title: "บันทึกเรื่องบรรยากาศ ความพอดีของวัสดุ และบริบท",
    },
    research: {
      eyebrow: "Design reference",
      title: "ภาษาการออกแบบที่ต่อยอดจาก DNA ของสตูดิโอ",
      businessObjectiveLabel: "มุมมองของสตูดิโอ",
      sourcePrefix: "อ้างอิง:",
      notes: [
        "เรื่องเล่านำการออกแบบก่อนรูปทรง สไตล์ หรือการตกแต่ง",
        "บรรยากาศเกิดจากแสง สัดส่วน วัสดุ จังหวะการเคลื่อนไหว และความทรงจำของประสาทสัมผัส",
        "Quiet luxury มาจากความพอดี รายละเอียด ความสบาย และคุณค่าระยะยาว",
      ],
    },
    contact: {
      eyebrow: "ติดต่อ",
      title: "เริ่มจากที่ตั้ง เรื่องเล่า และบรรยากาศที่ผู้คนควรจดจำ",
      formLabel: "แบบฟอร์มสอบถามโครงการ",
      emailPending: "รอยืนยันอีเมล",
      phonePending: "รอยืนยันเบอร์โทร",
      intro:
        "เล่าเรื่องไซต์ เป้าหมาย ขนาดโดยประมาณ ระยะเวลา และบรรยากาศที่อยากสร้าง ระหว่างที่ยังไม่มี backend แบบฟอร์มนี้จะเตรียมข้อความอีเมล หรือแสดงข้อความสอบถามเพื่อให้ตรวจทาน",
      prepareNote:
        "ข้อมูลที่ช่วยให้เริ่มคุยงานได้ชัดขึ้น: ที่ตั้งไซต์ ประเภทโครงการ พื้นที่โดยประมาณ ระยะเวลา งบประมาณเบื้องต้น แบบหรือภาพถ่ายเดิม และเป้าหมายด้านการใช้งาน",
      briefTitle: "คำถามที่ใช้เริ่มต้นบรีฟ",
      briefQuestions: [
        "ผู้คนควรรู้สึกอย่างไรเมื่อมาถึงพื้นที่นี้",
        "ใครคือผู้ใช้หลัก และพื้นที่ควรแก้ปัญหาอะไรให้พวกเขา",
        "เจ้าของ แบรนด์ หรือสถานที่นี้ควรถูกจดจำอย่างไร",
        "พื้นที่ส่วนไหนสร้างรายได้ และพื้นที่ส่วนไหนสร้างความทรงจำ",
        "ข้อจำกัดใดควรนำทางงานออกแบบ: งบประมาณ เวลา กฎหมาย การดูแลรักษา หรือการปฏิบัติงาน",
        "หลังโครงการเปิดใช้งาน เจ้าของจะวัดความสำเร็จจากอะไร",
      ],
      fields: {
        name: "ชื่อ",
        email: "อีเมล",
        phone: "โทรศัพท์",
        company: "บริษัท / องค์กร",
        projectType: "ประเภทโครงการ",
        projectLocation: "ที่ตั้งโครงการ",
        projectSize: "ขนาดโครงการโดยประมาณ",
        timeline: "ระยะเวลา",
        budgetRange: "งบประมาณโดยประมาณ",
        message: "ข้อความ",
      },
      messagePlaceholder: "เล่าเรื่องไซต์ ระยะเวลา ขอบเขตงาน และบรรยากาศที่ต้องการ",
      submit: "เตรียมข้อความ",
      draftTitle: "ข้อความสอบถามโครงการสำหรับ Aramphabot Studio",
      notProvided: "ไม่ได้ระบุ",
      mailOpening: "ระบบกำลังเปิดแอปอีเมลพร้อมข้อความที่เตรียมไว้",
      prepared:
        "เตรียมข้อความแล้ว กรุณาเพิ่มอีเมลของสตูดิโอใน src/data/site.ts เพื่อเปิดใช้งานลิงก์อีเมล",
      subject: "สอบถามโครงการกับ Aramphabot Studio",
    },
    footer: {
      note:
        "Aramphabot Studio ขับเคลื่อนด้วยเรื่องเล่า บรรยากาศ บริบท ความทรงจำของผู้คน และความเชื่อว่างานออกแบบควรสร้างทั้งคุณค่าทางอารมณ์และคุณค่าระยะยาว",
      backToTop: "กลับด้านบน",
    },
  },
} as const;

export const categoryLabels: Record<Language, Record<"All" | ProjectCategory, string>> = {
  en: {
    All: "All",
    Residential: "Residential",
    Hospitality: "Hospitality",
    Commercial: "Commercial",
    Interior: "Interior",
    Restaurant: "Restaurant",
    "Commercial Interior": "Commercial Interior",
    Concept: "Concept",
  },
  th: {
    All: "ทั้งหมด",
    Residential: "ที่อยู่อาศัย",
    Hospitality: "โรงแรม",
    Commercial: "พาณิชย์",
    Interior: "งานภายใน",
    Restaurant: "ร้านอาหาร",
    "Commercial Interior": "งานภายในเชิงพาณิชย์",
    Concept: "แนวคิด",
  },
};

export const statusLabels: Record<Language, Record<ProjectStatus, string>> = {
  en: {
    "Content placeholder": "Content placeholder",
    Concept: "Concept",
    "In progress": "In progress",
    Completed: "Completed",
    "To be confirmed": "To be confirmed",
  },
  th: {
    "Content placeholder": "ข้อมูลตัวอย่าง",
    Concept: "แนวคิด",
    "In progress": "อยู่ระหว่างดำเนินการ",
    Completed: "เสร็จสมบูรณ์",
    "To be confirmed": "รอยืนยัน",
  },
};

const projectTranslations: Record<string, Partial<Record<Language, Partial<Project>>>> = {
  "boutique-hotel": {
    th: {
      title: "โรงแรมบูทีค",
      location: "ภูเก็ต ประเทศไทย",
      year: "รอยืนยัน",
      scope: "สถาปัตยกรรมและออกแบบภายใน",
      area: "รอยืนยัน",
      shortDescription:
        "ข้อมูลตัวอย่างสำหรับงานโรงแรมบูทีคที่วางบรรยากาศผ่านลำดับการมาถึง วิวภูมิทัศน์ และความหรูหราเงียบงาม",
      concept:
        "สถาปัตยกรรมในฐานะช่วงเปลี่ยนผ่านที่สงบ ระหว่างภูมิทัศน์ ความทรงจำของแขก และจังหวะทางอารมณ์ของการมาถึง",
      brandPromise:
        "ที่พักที่ควรถูกจดจำจากการมาถึงที่สงบ ความเป็นส่วนตัว และความรู้สึกของสถานที่ มากกว่าความหวือหวาของการตกแต่ง",
      spatialMetaphor:
        "ธรณีประตูอันเงียบสงบระหว่างการเดินทางและการพักผ่อน ที่ค่อย ๆ ให้ภูมิทัศน์เข้ามาอยู่ในประสบการณ์ของแขก",
      experienceSequence: [
        "Approach ผ่านการมาถึงที่ถูกบีบให้สงบ",
        "Threshold เข้าสู่พื้นที่ต้อนรับที่ร่มและเย็น",
        "Release ไปสู่มุมมองและเลานจ์ของแขก",
        "Pause ที่ห้องพัก สวน และขอบพื้นที่ภายนอก",
        "Afterglow ผ่านความทรงจำของแสง หิน และงานบริการที่สงบ",
      ],
      memoryMoments: [
        "ช่วงแรกของการมาถึงหลังการเดินทาง",
        "วิวภูมิทัศน์ที่ถูกกรอบไว้จากล็อบบี้",
        "แสงยามเย็นบนหิน ไม้ และน้ำ",
      ],
      materialLogic:
        "หิน ปูนฉาบ ไม้ และโลหะโทนหม่นถูกเลือกเพื่อความทนทานในภูมิอากาศเขตร้อน เงาที่นุ่ม ความรู้สึกสัมผัส และภาพจำของงานบริการที่สงบ",
      businessLogic:
        "เรื่องเล่าเชิงพื้นที่ช่วยวางตำแหน่งโครงการ เพิ่มมูลค่าที่รับรู้ของห้องพัก รองรับภาพถ่าย ช่วยให้แขกเข้าใจพื้นที่ และสร้างความทรงจำของการมาถึง",
      designNarrative: [
        "ใช้หน้าตัวอย่างนี้สำหรับโครงการโรงแรมบูทีคหรือรีสอร์ต เมื่อมีภาพถ่าย ข้อมูลไซต์ พื้นที่โครงการ และเรื่องเล่าที่ได้รับการยืนยันแล้ว",
        "โครงสร้างหน้านี้รองรับแนวคิด เรื่องเล่าการออกแบบ จุดสำคัญของงาน วัสดุ และแกลเลอรี เพื่อให้สตูดิโอแทนที่เนื้อหาได้โดยไม่ต้องแก้แม่แบบ",
      ],
      keyDesignMoves: [
        "ลำดับการมาถึงแบบเป็นชั้น",
        "การกรอบวิวภูมิทัศน์",
        "ขอบเขตที่ร่มและนุ่มนวลสำหรับแขก",
        "การเปลี่ยนผ่านของวัสดุที่อบอุ่น",
      ],
      materials: ["หินปูน", "ปูนฉาบผิวสัมผัส", "ไม้", "โลหะโทนบรอนซ์หม่น"],
    },
  },
  "pool-villa": {
    th: {
      title: "พูลวิลล่า",
      location: "ภาคใต้ ประเทศไทย",
      year: "รอยืนยัน",
      scope: "สถาปัตยกรรมและออกแบบภายใน",
      area: "รอยืนยัน",
      shortDescription:
        "ข้อมูลตัวอย่างสำหรับวิลล่าส่วนตัวที่จัดวางรอบน้ำ ความเป็นส่วนตัว แสงที่กรองผ่าน และผิววัสดุอบอุ่น",
      concept:
        "บ้านพักผ่อนที่ถูกกำหนดด้วยความเป็นส่วนตัว อากาศของคอร์ทยาร์ด น้ำ และลำดับช้าของกิจวัตรประจำวัน",
      brandPromise:
        "บ้านพักส่วนตัวที่เปลี่ยนกิจวัตรธรรมดาให้กลายเป็นลำดับของน้ำ ร่มเงา ความเป็นส่วนตัว และความทรงจำของครอบครัว",
      spatialMetaphor:
        "บ้านคอร์ทยาร์ดที่มีน้ำเป็นศูนย์กลางของจังหวะชีวิตประจำวัน",
      experienceSequence: [
        "การมาถึงที่เงียบและมีชั้นความเป็นส่วนตัว",
        "Release เข้าสู่อากาศของคอร์ทยาร์ดและเงาสะท้อนของสระน้ำ",
        "พื้นที่นั่งเล่นเปิดที่อยู่ใต้ร่มเงา",
        "ห้องส่วนตัวที่ถูกวางหลัง threshold ที่นุ่มลง",
        "Afterglow ผ่านแสงเช้า น้ำ และกิจวัตรที่ค่อยเป็นค่อยไป",
      ],
      memoryMoments: [
        "มุมมองแรกของน้ำหลังทางเข้า",
        "ขอบพื้นที่รวมตัวของครอบครัวใต้ร่มเงา",
        "แสงเย็นบนปูนฉาบและไม้โทนอุ่น",
      ],
      materialLogic:
        "ไม้ หินปูน ปูนฉาบ และผ้าโทนกลางสร้างความอบอุ่นในสเกลมนุษย์ พร้อมรองรับร่มเงา การดูแลรักษา และความสบายระยะยาวในบริบทเขตร้อน",
      businessLogic:
        "การออกแบบช่วยยกระดับความสบายของบ้าน ความพร้อมสำหรับการพักผ่อน ความเป็นส่วนตัว มูลค่าที่รับรู้ของทรัพย์สิน และภาพจำที่ถ่ายถ่ายทอดได้โดยไม่ต้องตกแต่งเกินจำเป็น",
      designNarrative: [
        "ใช้หน้าตัวอย่างนี้สำหรับโครงการพูลวิลล่าหรือบ้านพักอาศัยส่วนตัว เมื่อไซต์ พื้นที่โครงการ แบบ และภาพถ่ายได้รับการยืนยันแล้ว",
        "โครงสร้างนี้รองรับทั้งการเล่าเรื่องงานที่อยู่อาศัยและงานพักผ่อน โดยไม่สร้างรายชื่อลูกค้า รางวัล หรือข้ออ้างเรื่องปีที่เสร็จขึ้นมาเอง",
      ],
      keyDesignMoves: [
        "ผังที่มีคอร์ทยาร์ดเป็นศูนย์กลาง",
        "แสงเขตร้อนที่ถูกกรอง",
        "ชั้นความเป็นส่วนตัวระหว่างในและนอก",
        "ผิววัสดุอบอุ่นในสเกลมนุษย์",
      ],
      materials: ["ไม้", "หินปูน", "ปูนฉาบผิวสัมผัส", "ผ้าโทนกลางนุ่ม"],
    },
  },
  cafe: {
    th: {
      title: "คาเฟ่",
      location: "กรุงเทพฯ ประเทศไทย",
      year: "รอยืนยัน",
      scope: "ออกแบบภายใน",
      area: "รอยืนยัน",
      shortDescription:
        "ข้อมูลตัวอย่างสำหรับคาเฟ่ที่ออกแบบจากการเคลื่อนไหว ผิวสัมผัส ความชัดเจนของบริการ และกิจวัตรประจำวัน",
      concept:
        "พื้นที่ภายในเมืองที่วัสดุ จังหวะเคาน์เตอร์ มุมที่นั่ง และแสง สร้างช่วงพักสั้น ๆ ที่น่าจดจำ",
      brandPromise:
        "คาเฟ่ที่สงบ ชัดเจน และน่าจดจำพอให้การแวะสั้น ๆ กลายเป็นส่วนหนึ่งของกิจวัตรประจำวัน",
      spatialMetaphor:
        "ช่วงพักที่ถูกจัดวางอย่างพอดีในเมือง ผ่านจังหวะเคาน์เตอร์ ผิววัสดุ และแสงที่กรองผ่าน",
      experienceSequence: [
        "หน้าร้านและภาพจำแรกจากถนน",
        "Threshold เข้าสู่จังหวะการสั่งที่ชัดเจน",
        "การเลือกมุมนั่งที่เปิดและใกล้ชิดต่างกัน",
        "Pause ผ่านแสง กลิ่น วัสดุ และบทสนทนา",
        "กลับสู่เมืองพร้อมความทรงจำเรียบง่ายของผิวสัมผัสและบริการ",
      ],
      memoryMoments: [
        "ช่วงเวลาที่เคาน์เตอร์",
        "ผิววัสดุในระดับมือสัมผัส",
        "แสงที่กรองลงบนขอบพื้นที่นั่ง",
      ],
      materialLogic:
        "หิน วีเนียร์ไม้ โลหะโทนอุ่น และผนังผิวสัมผัสสร้างอัตลักษณ์ในพื้นที่จำกัด พร้อมทนต่อการใช้งานสาธารณะที่เกิดขึ้นบ่อย",
      businessLogic:
        "งานออกแบบทำให้ flow การสั่งชัดขึ้น เพิ่มคุณภาพเวลาที่ลูกค้าอยู่ในร้าน สร้างภาพจำของแบรนด์ และให้ภาษาภาพสำหรับสื่อสังคมออนไลน์",
      designNarrative: [
        "ใช้หน้าตัวอย่างนี้สำหรับโครงการคาเฟ่ หลังจากยืนยันสถานะโครงการ ภาพถ่าย และบริบทการใช้งานแล้ว",
        "โครงสร้างเชิงบรรณาธิการช่วยเล่าเรื่องพื้นที่พาณิชย์อย่างกระชับ โดยยังรักษาความถูกต้องและแก้ไขง่าย",
      ],
      keyDesignMoves: [
        "ลำดับเคาน์เตอร์บริการที่ชัดเจน",
        "บรรยากาศที่นั่งหลายระดับ",
        "อัตลักษณ์วัสดุที่ไม่รบกวน",
        "การเปลี่ยนผ่านจากถนนสู่พื้นที่ภายใน",
      ],
      materials: ["หิน", "วีเนียร์ไม้", "โลหะโทนอุ่น", "ผนังผิวสัมผัส"],
    },
  },
  restaurant: {
    th: {
      title: "ร้านอาหาร",
      location: "ภาคตะวันออก ประเทศไทย",
      year: "รอยืนยัน",
      scope: "สถาปัตยกรรมและออกแบบภายใน",
      area: "รอยืนยัน",
      shortDescription:
        "ข้อมูลตัวอย่างสำหรับร้านอาหารที่วางกรอบบรรยากาศ การบริการ การรวมตัว และแสงยามค่ำ",
      concept:
        "พื้นที่รับประทานอาหารที่เรียงลำดับจากลม เส้นขอบฟ้า การพบปะ และความทรงจำอุ่นในช่วงค่ำ",
      brandPromise:
        "พื้นที่รับประทานอาหารที่ถูกจดจำจากบรรยากาศ การรวมตัว ความชัดเจนของบริการ และการเปลี่ยนผ่านจากกลางวันสู่กลางคืน",
      spatialMetaphor:
        "ภูมิทัศน์ของโต๊ะอาหารที่มีลม เส้นขอบฟ้า และแสงยามเย็นเป็นตัวจัดลำดับประสบการณ์",
      experienceSequence: [
        "การมาถึงและจุดต้อนรับที่ชัดเจน",
        "Release เข้าสู่บรรยากาศของห้องอาหารร่วม",
        "การวางที่นั่งตามวิวและทิศทางลม",
        "การเปลี่ยนจากพื้นที่รวมตัวไปสู่โต๊ะที่ใกล้ชิดขึ้น",
        "Afterglow ผ่านแสงอุ่น จังหวะบริการ และความทรงจำของการพบปะ",
      ],
      memoryMoments: [
        "วิวที่ถูกกรอบจากห้องอาหาร",
        "แสงยามเย็นบนโต๊ะอาหาร",
        "การเปลี่ยนจากการรวมตัวสู่บทสนทนาที่เงียบลง",
      ],
      materialLogic:
        "ไม้ หิน aggregate โลหะโทนบรอนซ์ และปูน lime plaster เก็บความอุ่นของแสงช่วงค่ำ พร้อมความทนทานสำหรับการใช้งานสาธารณะ",
      businessLogic:
        "การออกแบบช่วยเรื่องบรรยากาศของโต๊ะอาหาร flow บริการ ภาพถ่ายของแขก การวางตำแหน่งร้าน และตัวตนของร้านที่จดจำได้มากกว่ามื้อเดียว",
      designNarrative: [
        "ใช้หน้าตัวอย่างนี้สำหรับงานร้านอาหารหรืองานโรงแรม เมื่อภาพทางการและรายละเอียดโปรแกรมพร้อมแล้ว",
        "แม่แบบนี้ช่วยให้สตูดิโอเล่าเรื่องการเคลื่อนที่ของแขก ความชัดเจนของบริการ บรรยากาศ และตรรกะของวัสดุในเรื่องเดียวที่สงบและประณีต",
      ],
      keyDesignMoves: [
        "ช่วงเวลาที่กรอบมุมมองอย่างตั้งใจ",
        "การวางที่นั่งตามทิศทางลม",
        "ชั้นหลังคาและร่มเงา",
        "วัสดุโทนอุ่นสำหรับแสงยามค่ำ",
      ],
      materials: ["ไม้", "หินล้าง", "โลหะโทนบรอนซ์", "ปูนไลม์"],
    },
  },
  "commercial-interior": {
    th: {
      title: "งานภายในเชิงพาณิชย์",
      location: "กรุงเทพฯ ประเทศไทย",
      year: "รอยืนยัน",
      scope: "ออกแบบภายในและประสบการณ์เชิงพื้นที่",
      area: "รอยืนยัน",
      shortDescription:
        "ข้อมูลตัวอย่างสำหรับสำนักงาน รีเทล โชว์รูม หรือพื้นที่ภายในเชิงพาณิชย์แบบผสม",
      concept:
        "ระบบพื้นที่ภายในที่การสัญจร จุดสัมผัสของแบรนด์ ความพอดีของวัสดุ และความชัดเจนด้านการใช้งานทำงานร่วมกัน",
      brandPromise:
        "พื้นที่ภายในเชิงพาณิชย์ที่ทำให้แบรนด์ สถานที่ทำงาน หรือประสบการณ์รีเทลดูนิ่ง ชัดเจน และมีคุณค่าอย่างเงียบงาม",
      spatialMetaphor:
        "กรอบพื้นที่ภายในที่เป็นระเบียบ ซึ่งรวมการเคลื่อนที่ การแสดงสินค้า การทำงาน และพื้นที่สนับสนุนไว้ในระบบเดียว",
      experienceSequence: [
        "ทางเข้าและการรับรู้แรก",
        "เส้นทางที่ชัดไปสู่โซนพาณิชย์หลัก",
        "จุดแสดงสินค้า ทำงาน หรือปรึกษาที่ตั้งใจ",
        "พื้นที่สนับสนุนที่สงบและใช้งานชัดเจน",
        "การออกจากพื้นที่พร้อมภาพจำของระเบียบและความพอดีของวัสดุ",
      ],
      memoryMoments: [
        "ภาพจำแรกที่ทางเข้า",
        "จังหวะวัสดุหรือแสงที่ผูกกับแบรนด์",
        "เส้นทางที่ทำให้พื้นที่ใช้งานง่าย",
      ],
      materialLogic:
        "ปูนฉาบโทนอุ่น กระเบื้องหิน วัสดุลายไม้ และโลหะบรอนซ์สร้างบรรยากาศที่ทนทาน ดูแลรักษาง่าย และเป็นมืออาชีพโดยไม่รกสายตา",
      businessLogic:
        "การออกแบบช่วยให้การนำทาง การทำงาน ความมั่นใจของลูกค้า flow ของทีม มูลค่าที่รับรู้ และตัวตนทางกายภาพของแบรนด์ชัดขึ้น",
      designNarrative: [
        "ใช้หน้าตัวอย่างนี้สำหรับงานภายในเชิงพาณิชย์ที่ได้รับการยืนยัน เมื่อเจ้าของโครงการอนุมัติภาพ ที่ตั้ง ขอบเขตงาน และเรื่องราวโครงการแล้ว",
        "เนื้อหารองรับความชัดเจนทางธุรกิจ โดยหลีกเลี่ยงการอ้างผลลัพธ์ รายชื่อลูกค้า หรือรางวัลที่ยังไม่ได้ยืนยัน",
      ],
      keyDesignMoves: [
        "เส้นทางลูกค้าหรือผู้ใช้งานที่ชัดเจน",
        "ผังพาณิชย์ที่ปรับใช้ได้",
        "วัสดุที่มีอัตลักษณ์อย่างสงบ",
        "ลำดับชั้นของแสงและธรณีพื้นที่",
      ],
      materials: ["ผิวฉาบเทาอุ่น", "กระเบื้องหิน", "ผิวลายไม้", "โลหะบรอนซ์"],
    },
  },
};

const serviceTranslations: Record<string, Partial<Record<Language, Partial<Service>>>> = {
  "Architecture Design": {
    th: {
      title: "ออกแบบสถาปัตยกรรม",
      summary: "อาคารที่เกิดจากไซต์ ภูมิอากาศ โปรแกรม สัดส่วน และบรรยากาศที่โครงการต้องการโอบรับ",
      clientType: "สำหรับเจ้าของที่ดิน นักพัฒนา ทีมโรงแรม และลูกค้าส่วนตัวที่กำลังวางแผนอาคารใหม่",
    },
  },
  "Interior Design": {
    th: {
      title: "ออกแบบภายใน",
      summary: "พื้นที่ภายในที่ประสานวัสดุ แสง เฟอร์นิเจอร์ และบรรยากาศให้เป็นประสบการณ์ที่ชัดเจน",
      clientType: "สำหรับบ้าน วิลล่า คาเฟ่ ร้านอาหาร พื้นที่โรงแรม สำนักงาน และพื้นที่พาณิชย์",
    },
  },
  "Hospitality Design": {
    th: {
      title: "ออกแบบโรงแรมและงานบริการ",
      summary: "โรงแรมบูทีค รีสอร์ต พูลวิลล่า และพื้นที่ต้อนรับที่ออกแบบจากการมาถึง ความทรงจำ และการปฏิบัติงาน",
      clientType: "สำหรับเจ้าของโรงแรม ผู้พัฒนารีสอร์ต ผู้ประกอบการวิลล่า และแบรนด์งานบริการ",
    },
  },
  "Commercial Design": {
    th: {
      title: "ออกแบบพื้นที่พาณิชย์",
      summary: "คาเฟ่ ร้านอาหาร รีเทล พื้นที่ชุมชน และงานภายในเชิงพาณิชย์ที่มีประสบการณ์ลูกค้าชัดเจน",
      clientType: "สำหรับเจ้าของธุรกิจและนักพัฒนาที่ต้องการอัตลักษณ์เชิงพื้นที่และความชัดเจนในการใช้งาน",
    },
  },
  "Residential Design": {
    th: {
      title: "ออกแบบที่อยู่อาศัย",
      summary: "บ้านส่วนตัว วิลล่า และอพาร์ตเมนต์ที่จัดวางจากกิจวัตร ความเป็นส่วนตัว ความสบาย และบริบท",
      clientType: "สำหรับเจ้าของบ้าน ครอบครัว เจ้าของวิลล่า และผู้พัฒนาโครงการที่อยู่อาศัย",
    },
  },
  "Feasibility & Concept Strategy": {
    th: {
      title: "ความเป็นไปได้และกลยุทธ์แนวคิด",
      summary: "การคิดช่วงต้นที่ช่วยทำให้ศักยภาพโครงการ ตำแหน่งทางการตลาด โปรแกรม และทิศทางออกแบบชัดขึ้น",
      clientType: "สำหรับเจ้าของและนักพัฒนาที่ต้องการทิศทางก่อนเข้าสู่ขอบเขตออกแบบเต็มรูปแบบ",
    },
  },
  "Brand Spatial Experience": {
    th: {
      title: "ประสบการณ์พื้นที่ของแบรนด์",
      summary: "การแปลอัตลักษณ์แบรนด์สู่พื้นที่จริงผ่านลำดับ แสง วัสดุ และจุดสัมผัส",
      clientType: "สำหรับแบรนด์โรงแรม รีเทล อาหารและเครื่องดื่ม และพื้นที่พาณิชย์",
    },
  },
  "Design Development": {
    th: {
      title: "พัฒนาแบบ",
      summary: "การต่อยอดแนวคิดที่อนุมัติแล้วสู่ผัง รูปด้าน รูปตัด วัสดุ และรายละเอียดที่ชัดเจนขึ้น",
      clientType: "สำหรับโครงการที่กำลังเดินจากแนวคิดสู่การประสานงานเชิงเทคนิค",
    },
  },
  "Presentation & Visualization Direction": {
    th: {
      title: "ทิศทางพรีเซนเทชันและภาพเล่าเรื่อง",
      summary: "การกำกับพรีเซนเทชันเชิงบรรณาธิการที่สื่อสารเจตนาการออกแบบต่อลูกค้า พาร์ตเนอร์ และนักลงทุน",
      clientType: "สำหรับโครงการที่ต้องการการเล่าเรื่อง ความชัดเจนทางภาพ หรือการอนุมัติจากผู้มีส่วนเกี่ยวข้อง",
    },
  },
};

const processTranslations: Record<string, Partial<Record<Language, Partial<ProcessStep>>>> = {
  "01": {
    th: {
      title: "ค้นหาโจทย์และบรีฟ",
      description: "เริ่มจากเป้าหมาย ผู้ใช้งาน ระยะเวลา งบประมาณโดยประมาณ ความต้องการทางธุรกิจ และอารมณ์ของพื้นที่ที่ต้องการสร้าง",
    },
  },
  "02": {
    th: {
      title: "วิเคราะห์ไซต์และบริบท",
      description: "ภูมิอากาศ ทิศทางการวางตัว การเข้าถึง วิว สภาพเดิม ผังเมือง และบริบทวัฒนธรรม กลายเป็นวัสดุของการออกแบบ",
    },
  },
  "03": {
    th: {
      title: "กลยุทธ์แนวคิด",
      description: "แนวคิดที่ชัดเจนช่วยจัดตำแหน่ง บรรยากาศ สัดส่วน การสัญจร และลำดับประสบการณ์ให้ไปในทิศทางเดียวกัน",
    },
  },
  "04": {
    th: {
      title: "ออกแบบเบื้องต้น",
      description: "ผัง มวลอาคาร การจัดพื้นที่ รูปตัดหลัก และแนวคิดวัสดุเบื้องต้นถูกจัดวางเพื่อการทบทวนร่วมกัน",
    },
  },
  "05": {
    th: {
      title: "พัฒนาแบบ",
      description: "แนวคิดที่อนุมัติแล้วถูกพัฒนาเป็นชุดแบบที่ชัดเจนขึ้น พร้อมรูปด้าน รายละเอียด ทิศทางวัสดุ และการประสานงาน",
    },
  },
  "06": {
    th: {
      title: "ภาพเล่าเรื่องและพรีเซนเทชัน",
      description: "ภาพ ไดอะแกรม บอร์ด และลำดับการนำเสนอช่วยสื่อสารการออกแบบอย่างชัดเจนต่อผู้ตัดสินใจ",
    },
  },
  "07": {
    th: {
      title: "แบบก่อสร้าง",
      description: "เจตนาการออกแบบถูกแปลเป็นชุดข้อมูลและแบบที่สนับสนุนการประเมินราคา การประสานงาน และการก่อสร้าง",
    },
  },
  "08": {
    th: {
      title: "ประสานงานและสนับสนุนไซต์",
      description: "สตูดิโอสนับสนุนที่ปรึกษา ผู้รับเหมา และช่างผลิต เพื่อรักษาบรรยากาศของแนวคิดไว้ในงานจริง",
    },
  },
};

const journalTranslations: Record<string, Partial<Record<Language, Partial<JournalPost>>>> = {
  "designing-hospitality-through-atmosphere": {
    th: {
      title: "ออกแบบงานบริการผ่านบรรยากาศ",
      category: "งานบริการ",
      readTime: "อ่าน 4 นาที",
      excerpt: "การมาถึง การหยุดพัก การเปิดเผย ความใกล้ชิด และการเคลื่อนที่ของบริการ ล้วนกำหนดวิธีที่แขกจดจำสถานที่",
    },
  },
  "why-context-matters-in-architecture": {
    th: {
      title: "ทำไมบริบทจึงสำคัญในสถาปัตยกรรม",
      category: "บริบท",
      readTime: "อ่าน 4 นาที",
      excerpt: "สถาปัตยกรรมในกรุงเทพฯ และประเทศไทยต้องการร่มเงา ลม ผิวสัมผัส และความสัมพันธ์ที่ใส่ใจกับไซต์",
    },
  },
  "quiet-luxury-in-spatial-design": {
    th: {
      title: "ความหรูหราเงียบงามในงานออกแบบพื้นที่",
      category: "วัสดุ",
      readTime: "อ่าน 3 นาที",
      excerpt: "หิน ไม้ ปูนฉาบ โลหะ และผ้า เก็บอุณหภูมิทางอารมณ์ไว้ได้เมื่อถูกจัดวางด้วยความพอดี",
    },
  },
  "from-concept-to-experience": {
    th: {
      title: "จากแนวคิดสู่ประสบการณ์",
      category: "กระบวนการ",
      readTime: "อ่าน 4 นาที",
      excerpt: "แนวคิดที่แข็งแรงจะมีคุณค่าเมื่อมันนำทางลำดับ รายละเอียด ความเป็นไปได้ในการก่อสร้าง และความทรงจำของผู้คน",
    },
  },
  "design-as-business-value": {
    th: {
      title: "งานออกแบบในฐานะคุณค่าทางธุรกิจ",
      category: "กลยุทธ์",
      readTime: "อ่าน 4 นาที",
      excerpt: "พื้นที่ที่ดีช่วยเรื่องตำแหน่งทางการตลาด มูลค่าที่รับรู้ การปฏิบัติงาน ภาพถ่าย และความทรงจำที่ทำให้ผู้คนกลับมา",
    },
  },
};

export function getCategoryLabel(category: "All" | ProjectCategory, language: Language) {
  return categoryLabels[language][category];
}

export function getStatusLabel(status: ProjectStatus, language: Language) {
  return statusLabels[language][status];
}

export function getProjectCopy(project: Project, language: Language): Project {
  return {
    ...project,
    ...projectTranslations[project.slug]?.[language],
  };
}

export function getServiceCopy(service: Service, language: Language): Service {
  return {
    ...service,
    ...serviceTranslations[service.title]?.[language],
  };
}

export function getProcessCopy(step: ProcessStep, language: Language): ProcessStep {
  return {
    ...step,
    ...processTranslations[step.eyebrow]?.[language],
  };
}

export function getJournalCopy(post: JournalPost, language: Language): JournalPost {
  return {
    ...post,
    ...journalTranslations[post.slug]?.[language],
  };
}
