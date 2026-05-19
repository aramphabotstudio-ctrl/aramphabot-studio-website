# คู่มือใช้งาน Codex สร้างเว็บไซต์ Aramphabot Studio แบบจับมือทำ

## เป้าหมาย

สร้างเว็บไซต์บริษัทสถาปัตยกรรม Aramphabot Studio Co., Ltd. ที่ดูมืออาชีพ นำไปใช้จริงได้ และแก้ข้อมูลโปรเจกต์ต่อได้ง่าย

---

# Part 1 — เตรียมบัญชีและพื้นที่ทำงาน

## Step 1: เตรียมสิ่งที่ต้องมี

คุณต้องมี:

1. บัญชี ChatGPT ที่ใช้งาน Codex ได้
2. บัญชี GitHub
3. บัญชี Vercel สำหรับ deploy เว็บไซต์
4. โลโก้บริษัท ถ้ามี
5. รูปโปรเจกต์ ถ้ามี

ถ้ายังไม่มีรูปจริง ไม่เป็นไร ให้ใช้ placeholder ก่อน

---

## Step 2: สร้าง GitHub Repository

1. เข้า GitHub
2. กด New Repository
3. ตั้งชื่อว่า:

```text
aramphabot-studio-website
```

4. เลือก Private ก่อนก็ได้
5. กด Create Repository

---

## Step 3: อัปโหลด Starter Pack นี้เข้า GitHub

หลังจากแตก ZIP แล้ว ให้อัปโหลดไฟล์ทั้งหมดเข้า repository

ไฟล์สำคัญที่ต้องอยู่ใน repo:

```text
AGENTS.md
README_TH.md
01_brief/
02_prompts/
03_guides/
04_content_data/
05_assets_placeholder/
```

---

# Part 2 — เชื่อม Codex กับ GitHub

## Step 4: เปิด Codex

1. เปิด ChatGPT
2. ไปที่ Codex
3. เลือก Connect GitHub หรือเลือก repository ที่เชื่อมไว้แล้ว
4. เลือก repo:

```text
aramphabot-studio-website
```

ถ้าหา repo ไม่เจอ ให้ลองเข้า GitHub แล้ว search ด้วยรูปแบบนี้:

```text
repo:YOUR_USERNAME/aramphabot-studio-website import
```

รอสักครู่แล้วกลับมาค้นหาใหม่

---

# Part 3 — สั่ง Codex สร้างเว็บ

## Step 5: ใช้ Prompt แรก

เปิดไฟล์นี้:

```text
02_prompts/01_master_prompt_create_website.txt
```

คัดลอกข้อความทั้งหมด แล้ววางใน Codex

Codex จะเริ่มสร้างเว็บให้

เมื่อ Codex ทำเสร็จ ให้ดูว่าเขาสรุปว่า:

- สร้างไฟล์อะไรบ้าง
- รัน build ผ่านไหม
- ยังมี placeholder อะไรที่ต้องแก้ทีหลัง

---

## Step 6: ให้ Codex ปรับเว็บให้พรีเมียมขึ้น

เปิดไฟล์:

```text
02_prompts/02_refine_premium_visual.txt
```

คัดลอกไปวางใน Codex

เป้าหมายของ prompt นี้คือทำให้เว็บดูแพงขึ้น ไม่เหมือน template ทั่วไป

---

## Step 7: ให้ Codex ทำระบบข้อมูลโปรเจกต์

เปิดไฟล์:

```text
02_prompts/03_project_data_system.txt
```

ใช้ prompt นี้เพื่อให้ Codex ทำระบบข้อมูลกลาง เช่น `data/projects.ts`

หลังจากนี้คุณจะเพิ่มโปรเจกต์ใหม่ได้ง่ายขึ้น โดยแก้ไฟล์ข้อมูลเพียงจุดเดียว

---

## Step 8: ให้ Codex ทำ SEO

เปิดไฟล์:

```text
02_prompts/04_seo_optimization.txt
```

ใช้ prompt นี้เพื่อทำให้เว็บเหมาะกับ Google และการแชร์ใน social media

---

## Step 9: ตรวจเว็บก่อนใช้งานจริง

เปิดไฟล์:

```text
02_prompts/05_production_review.txt
```

ใช้ prompt นี้ให้ Codex ตรวจงานทั้งหมดก่อน deploy

---

## Step 10: เตรียม deploy ขึ้น Vercel

เปิดไฟล์:

```text
02_prompts/06_prepare_vercel_deployment.txt
```

Codex จะช่วยตรวจว่าเว็บพร้อม deploy หรือยัง และสร้างคู่มือ deployment ให้

---

# Part 4 — เปิดดูเว็บบนเครื่องตัวเอง ถ้าต้องการ

ถ้าคุณใช้คอมพิวเตอร์เองและลง Node.js แล้ว ให้เปิด terminal ในโฟลเดอร์เว็บ แล้วใช้คำสั่ง:

```bash
npm install
npm run dev
```

จากนั้นเปิด browser ที่:

```text
http://localhost:3000
```

ถ้าไม่ถนัดใช้ terminal ให้ทำผ่าน Codex และ Vercel ก่อนก็ได้

---

# Part 5 — Deploy ขึ้น Vercel

1. เข้า Vercel
2. กด Add New Project
3. เลือก GitHub repo:

```text
aramphabot-studio-website
```

4. Framework ควรขึ้นเป็น Next.js อัตโนมัติ
5. กด Deploy
6. รอจนเสร็จ
7. Vercel จะให้ลิงก์เว็บทดลอง เช่น:

```text
aramphabot-studio-website.vercel.app
```

---

# Part 6 — เชื่อม Domain บริษัท

ถ้ามี domain เช่น:

```text
aramphabotstudio.com
```

ให้เข้า Vercel > Project > Settings > Domains แล้วเพิ่ม domain

จากนั้นทำตามคำแนะนำ DNS ที่ Vercel ให้

---

# Part 7 — วิธีแก้ข้อมูลโปรเจกต์ภายหลัง

หลังจาก Codex ทำระบบ project data แล้ว ให้มองหาไฟล์ประมาณนี้:

```text
data/projects.ts
```

เวลาเพิ่มโปรเจกต์ใหม่ ให้คัดลอก object เดิม แล้วเปลี่ยนข้อมูล เช่น:

```ts
{
  slug: "new-boutique-hotel",
  title: "New Boutique Hotel",
  location: "Phuket, Thailand",
  year: "2026",
  status: "Concept Design",
  type: "Hospitality",
  scope: "Architecture and Interior Design",
  area: "TBC",
  shortDescription: "A calm hospitality project shaped by landscape, light, and arrival sequence.",
  concept: "Architecture as a quiet transition between city, nature, and memory.",
  designNarrative: "The project is organized through a sequence of shaded thresholds, framed views, and warm material surfaces.",
  keyDesignMoves: ["Arrival court", "Layered facade", "Framed landscape", "Warm material palette"],
  materials: ["Limestone", "Timber", "Bronze metal", "Textured plaster"],
  coverImage: "/images/projects/new-boutique-hotel/cover.jpg",
  galleryImages: []
}
```

---

# Part 8 — วิธีสั่ง Codex แก้เฉพาะจุด

## แก้หน้า Home

```text
Please improve only the Home page. Make it feel more like a premium architecture magazine, with stronger hero composition, better spacing, and more elegant project preview sections. Do not change the overall site structure. Run build and fix errors.
```

## แก้หน้า Projects

```text
Please improve only the Projects page. Make the project grid more refined, add elegant filters, improve image proportions, and make the cards feel like an architecture portfolio. Run build and fix errors.
```

## แก้หน้า Contact

```text
Please improve only the Contact page. Make it more professional for architecture project inquiries. Add fields for project type, location, approximate area, timeline, and message. Run build and fix errors.
```

---

# Part 9 — Checklist ก่อนใช้งานจริง

ตรวจว่า:

- โลโก้ถูกต้อง
- ชื่อบริษัทถูกต้อง
- เบอร์โทรถูกต้อง
- อีเมลถูกต้อง
- รูปภาพมีสิทธิ์ใช้งาน
- ไม่มีข้อมูลลูกค้าปลอม
- ไม่มีรางวัลปลอม
- เว็บดูดีในมือถือ
- ปุ่ม contact ใช้งานได้
- Project detail เปิดได้ทุกโปรเจกต์
- SEO title และ description ถูกต้อง

---

# Part 10 — วิธีทำงานที่แนะนำ

อย่าสั่ง Codex ทำทุกอย่างพร้อมกันตลอดเวลา ให้ทำเป็นรอบ:

1. สร้างเว็บ
2. ดูผล
3. ปรับดีไซน์
4. ดูผล
5. เพิ่มข้อมูล
6. ดูผล
7. ทำ SEO
8. ตรวจ production
9. deploy

วิธีนี้จะควบคุมคุณภาพได้ดีกว่า
