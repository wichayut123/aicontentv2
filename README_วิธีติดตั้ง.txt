วิธีติดตั้งแบบฟอร์มสมัครอบรม AI Marketing Bootcamp

1) เปิด Google Sheet ตามลิงก์ของคุณ
2) ไปที่ Extensions > Apps Script
3) วางโค้ดจากไฟล์ Code.gs
4) กด Run ฟังก์ชัน setupSheet 1 ครั้ง และอนุญาตสิทธิ์
5) กด Deploy > New deployment > Web app
   - Execute as: Me
   - Who has access: Anyone
6) Copy Web App URL
7) เปิดไฟล์ index.html แล้วแทนที่ข้อความ:
   PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE
   ด้วย Web App URL ที่ได้
8) อัปโหลด index.html ไปยังโฮสติ้ง หรือเปิดใช้งานบนเว็บไซต์ของคุณ

หมายเหตุ:
- ข้อมูลจะเข้า Sheet ชื่อ “ผู้สมัครอบรม”
- หลังส่งข้อมูลสำเร็จ จะแสดงป๊อบอัพขอบคุณและปุ่มแอด Line
