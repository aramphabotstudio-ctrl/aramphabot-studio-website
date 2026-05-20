# 06_reference_training — Aramphabot Studio Website Training Layer 2

ชุดไฟล์นี้ใช้สำหรับเพิ่มความแม่นยำให้ Codex ในการพัฒนาเว็บไซต์ Aramphabot Studio ให้มี character ชัดเจนขึ้น ตามสูตรอ้างอิง:

- 60% K-Studio: hospitality storytelling, contextual architecture, project narrative
- 20% Norm Architects: calm minimalism, warm materiality, quiet luxury
- 10% PHTAA Living Design: Thai contemporary narrative, local sensitivity
- 10% Foster + Partners: professional credibility, clear information architecture

## วิธีใช้แบบเร็ว

1. ดาวน์โหลด ZIP นี้แล้วแตกไฟล์
2. นำโฟลเดอร์ `06_reference_training` ไปวางไว้ที่ root ของ GitHub repository เดิม
3. ตรวจว่าโครงสร้างเป็นแบบนี้:

```text
aramphabot-studio-website/
├── AGENTS.md
├── 01_brief/
├── 02_prompts/
└── 06_reference_training/
```

4. เปิด Codex แล้วเลือก repository `aramphabot-studio-website`
5. สั่ง Codex ด้วยข้อความนี้:

```text
Please read 06_reference_training/06_prompt_codex_apply_reference_training.txt and execute it completely.
```

หรือเปิดไฟล์ `06_prompt_codex_apply_reference_training.txt` แล้วคัดลอก prompt ทั้งหมดไปวางใน Codex ก็ได้

## ไฟล์ในชุดนี้

- `01_reference_strategy.md` — กลยุทธ์การใช้ reference โดยไม่ copy
- `02_aramphabot_website_design_bible.md` — design bible สำหรับเว็บ Aramphabot
- `03_project_page_storytelling_rules.md` — กติกาการเล่าเรื่องหน้า project
- `04_visual_ui_rules.md` — กติกา UI / visual / spacing / typography
- `05_quality_checklist.md` — checklist ตรวจคุณภาพก่อนส่งงาน
- `06_prompt_codex_apply_reference_training.txt` — prompt หลักให้ Codex ปรับเว็บตาม Layer 2
- `07_creative_director_review_prompt.txt` — prompt ให้ Codex ตรวจเว็บแบบ creative director
- `08_project_detail_upgrade_prompt.txt` — prompt เฉพาะสำหรับยกระดับหน้า project detail

## คำเตือน

อย่าสั่งให้ Codex copy เว็บไซต์ของบริษัทอ้างอิงโดยตรง ให้ใช้เป็นหลักคิดด้าน structure, mood, storytelling และ quality benchmark เท่านั้น
