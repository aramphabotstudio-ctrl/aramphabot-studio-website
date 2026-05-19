# Aramphabot Studio Website — Codex Starter Pack

ชุดไฟล์นี้เตรียมไว้สำหรับนำไปใช้กับ Codex เพื่อสร้างเว็บไซต์บริษัทสถาปัตยกรรม Aramphabot Studio Co., Ltd. แบบมืออาชีพ

## วิธีใช้แบบเร็วที่สุด

1. แตกไฟล์ ZIP นี้
2. สร้าง GitHub Repository ชื่อ `aramphabot-studio-website`
3. อัปโหลดไฟล์ทั้งหมดในชุดนี้เข้า Repository
4. เปิด Codex แล้วเลือก Repository นี้
5. เปิดไฟล์ `02_prompts/01_master_prompt_create_website.txt`
6. คัดลอก prompt ทั้งหมดไปสั่ง Codex
7. รอให้ Codex สร้างเว็บ
8. ใช้ prompt ถัดไปในโฟลเดอร์ `02_prompts` ตามลำดับ

## ลำดับการใช้ Prompt

1. `01_master_prompt_create_website.txt` — สร้างเว็บเวอร์ชันแรก
2. `02_refine_premium_visual.txt` — ปรับภาพรวมให้พรีเมียมขึ้น
3. `03_project_data_system.txt` — ทำระบบข้อมูลโปรเจกต์ให้แก้ง่าย
4. `04_seo_optimization.txt` — ปรับ SEO
5. `05_production_review.txt` — ตรวจงานก่อนใช้งานจริง
6. `06_prepare_vercel_deployment.txt` — เตรียม deploy ขึ้น Vercel

## ไฟล์สำคัญ

- `AGENTS.md` = คู่มือหลักให้ Codex อ่านก่อนทำงาน
- `01_brief/` = ข้อมูลบริษัท แบรนด์ และโครงสร้างเว็บ
- `02_prompts/` = prompt สำหรับสั่ง Codex
- `03_guides/` = คู่มือใช้งานทีละขั้น
- `04_content_data/` = ตัวอย่างข้อมูลโปรเจกต์และคอนเทนต์

## หมายเหตุ

ยังไม่มีรูปจริงในแพ็กนี้ ให้ใส่รูปจริงของบริษัทภายหลังในโฟลเดอร์ `public/images` ของโปรเจกต์เว็บ
