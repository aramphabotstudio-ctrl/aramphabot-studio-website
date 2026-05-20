import type { JournalPost, ProcessStep, Project, ProjectCategory, ProjectStatus, Service } from "@/types/content";
import { companyFacts } from "@/data/company";

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
      `Verified registry no. ${companyFacts.registrationNumber}`,
      `${companyFacts.status} company`,
      "Registered in Sai Mai, Bangkok",
    ],
    about: {
      eyebrow: "Studio",
      title: "A measured practice for atmosphere, context, and sensory memory.",
      paragraphs: [
        "Aramphabot Studio is positioned as a Bangkok-based architecture and interior design practice for hospitality, residential, commercial, restaurant, cafe, and concept-led development work.",
        "Its studio language is warm, minimal, material-sensitive, and narrative-driven: spaces are shaped through proportion, sequence, climate, context, and the quiet memory people carry after they leave.",
      ],
      verificationNote:
        "Public research confirms company registration facts. Awards, client names, completed project records, phone, email, and social channels are intentionally left unclaimed until owner verification.",
      facts: [
        ["Legal name", companyFacts.legalNameEn],
        ["Thai legal name", "บริษัท อารัมภบท สตูดิโอ จำกัด"],
        ["Registration no.", companyFacts.registrationNumber],
        ["Registered date", companyFacts.registeredDate],
        ["Status", companyFacts.status],
        ["Registered capital", companyFacts.registeredCapital],
      ],
      officeLabel: "Registered office",
    },
    projects: {
      eyebrow: "Projects",
      title: "An editorial portfolio structure ready for verified photographs and owner-approved detail.",
      categoriesLabel: "Project categories",
      selectedTemplate: "Selected template",
      labels: {
        location: "Location",
        year: "Year",
        scope: "Scope",
        area: "Area",
        materials: "Materials",
      },
      viewDetails: "View project details for",
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
      eyebrow: "Verification",
      title: "A factual foundation, with unverified claims deliberately left out.",
      businessObjectiveLabel: "Business objective from public registry",
      sourcePrefix: "Source:",
      notes: [
        "Public registry data confirms the company name, registration number, active status, registered capital, registered office, and stated business objective.",
        "The public business category is listed as legal activities, while the business description includes engineering, architecture, and advertising services.",
        "No verified public awards, client names, completed project list, phone number, email address, or social media channels were found during this research pass.",
        "Project stories on this website are intentionally marked as placeholders until the studio owner supplies verified photos, areas, completion years, and client-approved copy.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Start with a site, a story, and the atmosphere people should remember.",
      formLabel: "Project enquiry form",
      emailPending: "Email to be confirmed",
      phonePending: "Phone to be confirmed",
      fields: {
        name: "Name",
        email: "Email",
        phone: "Phone",
        projectType: "Project type",
        projectLocation: "Project location",
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
        "Verified facts are sourced from public registry data. Project imagery and case studies remain placeholders until owner-approved material is supplied.",
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
      `เลขทะเบียนนิติบุคคล ${companyFacts.registrationNumber}`,
      "สถานะบริษัท: ยังดำเนินกิจการ",
      "ที่ตั้งจดทะเบียน เขตสายไหม กรุงเทพฯ",
    ],
    about: {
      eyebrow: "สตูดิโอ",
      title: "แนวปฏิบัติที่ค่อยเป็นค่อยไป เพื่อบรรยากาศ บริบท และความทรงจำของประสาทสัมผัส",
      paragraphs: [
        "Aramphabot Studio วางตำแหน่งเป็นสตูดิโอสถาปัตยกรรมและออกแบบภายในในกรุงเทพฯ สำหรับงานโรงแรม ที่อยู่อาศัย พื้นที่พาณิชย์ ร้านอาหาร คาเฟ่ และโครงการพัฒนาที่ขับเคลื่อนด้วยแนวคิด",
        "ภาษาการออกแบบของสตูดิโอมีความอบอุ่น เรียบ สงบ ใส่ใจวัสดุ และขับเคลื่อนด้วยเรื่องเล่า พื้นที่จึงถูกสร้างผ่านสัดส่วน ลำดับการเดินทาง ภูมิอากาศ บริบท และความทรงจำเงียบ ๆ ที่ผู้คนพกกลับไปหลังจากออกจากสถานที่",
      ],
      verificationNote:
        "ข้อมูลสาธารณะยืนยันข้อเท็จจริงด้านทะเบียนบริษัท ส่วนรางวัล รายชื่อลูกค้า รายการผลงานที่สร้างเสร็จ เบอร์โทร อีเมล และช่องทางโซเชียล จะยังไม่ถูกกล่าวอ้างจนกว่าจะได้รับการยืนยันจากเจ้าของสตูดิโอ",
      facts: [
        ["ชื่อบริษัทภาษาอังกฤษ", companyFacts.legalNameEn],
        ["ชื่อบริษัทภาษาไทย", "บริษัท อารัมภบท สตูดิโอ จำกัด"],
        ["เลขทะเบียน", companyFacts.registrationNumber],
        ["วันที่จดทะเบียน", "6 มิถุนายน 2568"],
        ["สถานะ", "ยังดำเนินกิจการ"],
        ["ทุนจดทะเบียน", "1,000,000 บาท"],
      ],
      officeLabel: "ที่ตั้งจดทะเบียน",
    },
    projects: {
      eyebrow: "ผลงาน",
      title: "โครงสร้างพอร์ตโฟลิโอเชิงบรรณาธิการ พร้อมรองรับภาพจริงและรายละเอียดที่เจ้าของอนุมัติ",
      categoriesLabel: "ประเภทโครงการ",
      selectedTemplate: "แม่แบบผลงาน",
      labels: {
        location: "ที่ตั้ง",
        year: "ปี",
        scope: "ขอบเขตงาน",
        area: "พื้นที่",
        materials: "วัสดุ",
      },
      viewDetails: "ดูรายละเอียดโครงการ",
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
      eyebrow: "การยืนยันข้อมูล",
      title: "ฐานข้อมูลที่ยึดข้อเท็จจริง โดยตั้งใจละเว้นสิ่งที่ยังไม่ได้รับการยืนยัน",
      businessObjectiveLabel: "วัตถุประสงค์บริษัทจากข้อมูลสาธารณะ",
      sourcePrefix: "แหล่งข้อมูล:",
      notes: [
        "ข้อมูลทะเบียนสาธารณะยืนยันชื่อบริษัท เลขทะเบียน สถานะ ทุนจดทะเบียน ที่ตั้งจดทะเบียน และวัตถุประสงค์ทางธุรกิจ",
        "หมวดธุรกิจสาธารณะระบุเป็นกิจกรรมด้านกฎหมาย ขณะที่คำอธิบายธุรกิจรวมถึงงานวิศวกรรม สถาปัตยกรรม และโฆษณา",
        "ยังไม่พบข้อมูลสาธารณะที่ยืนยันรางวัล รายชื่อลูกค้า รายการโครงการที่สร้างเสร็จ เบอร์โทร อีเมล หรือช่องทางโซเชียล",
        "เรื่องราวโครงการในเว็บไซต์นี้จึงตั้งใจระบุเป็นข้อมูลตัวอย่าง จนกว่าเจ้าของสตูดิโอจะส่งภาพจริง พื้นที่ ปีที่เสร็จ และข้อความที่อนุมัติแล้ว",
      ],
    },
    contact: {
      eyebrow: "ติดต่อ",
      title: "เริ่มจากที่ตั้ง เรื่องเล่า และบรรยากาศที่ผู้คนควรจดจำ",
      formLabel: "แบบฟอร์มสอบถามโครงการ",
      emailPending: "รอยืนยันอีเมล",
      phonePending: "รอยืนยันเบอร์โทร",
      fields: {
        name: "ชื่อ",
        email: "อีเมล",
        phone: "โทรศัพท์",
        projectType: "ประเภทโครงการ",
        projectLocation: "ที่ตั้งโครงการ",
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
        "ข้อเท็จจริงอ้างอิงจากข้อมูลทะเบียนสาธารณะ ภาพโครงการและกรณีศึกษายังคงเป็นข้อมูลตัวอย่างจนกว่าจะได้รับวัสดุที่เจ้าของอนุมัติ",
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
