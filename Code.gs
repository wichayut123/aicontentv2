// Google Apps Script: Code.gs
// วิธีใช้:
// 1) เปิด Google Sheet ของคุณ > Extensions > Apps Script
// 2) วางโค้ดนี้ในไฟล์ Code.gs
// 3) Deploy > New deployment > Web app
// 4) Execute as: Me / Who has access: Anyone
// 5) Copy Web App URL ไปใส่ในไฟล์ index.html ตรงตัวแปร SCRIPT_URL

const SHEET_ID = "1sFbyLZo9inZpCjsdAp_Iw4FTUhekuoOwIEXunTOcAO8";
const SHEET_NAME = "ผู้สมัครอบรม";

function setupSheet() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = ss.insertSheet(SHEET_NAME);

  const headers = [
    "วันที่สมัคร",
    "ชื่อ-นามสกุล",
    "เบอร์โทร",
    "อีเมล",
    "ชื่อร้าน/ธุรกิจ",
    "ประเภทธุรกิจ",
    "จังหวัด",
    "ช่องทางขายหลัก",
    "ระดับการใช้ AI",
    "เป้าหมายที่อยากเรียน",
    "หมายเหตุ",
    "ยินยอมให้ติดต่อกลับ"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length)
      .setFontWeight("bold")
      .setBackground("#111827")
      .setFontColor("#ffffff");
    sheet.setFrozenRows(1);
    sheet.autoResizeColumns(1, headers.length);
  }
}

function doPost(e) {
  try {
    setupSheet();

    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(SHEET_NAME);

    sheet.appendRow([
      new Date(),
      data.fullName || "",
      data.phone || "",
      data.email || "",
      data.businessName || "",
      data.businessType || "",
      data.province || "",
      data.salesChannel || "",
      data.aiLevel || "",
      data.learningGoal || "",
      data.note || "",
      data.consent ? "ยินยอม" : "ไม่ยินยอม"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "บันทึกข้อมูลเรียบร้อย" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("AI Marketing Bootcamp Registration API is running.")
    .setMimeType(ContentService.MimeType.TEXT);
}
