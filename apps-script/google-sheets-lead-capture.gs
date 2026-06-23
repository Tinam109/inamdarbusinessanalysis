const SHEET_NAME = "Sample Report Leads";
const HEADERS = [
  "Submitted At",
  "Name",
  "Email",
  "Phone",
  "Source",
  "Page",
  "User Agent",
];

function doGet() {
  return jsonResponse({
    ok: true,
    message: "Inamdar Business Analysis lead capture is active.",
  });
}

function doPost(e) {
  try {
    const payload = parsePayload(e);
    const sheet = getLeadSheet();

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      clean(payload.name),
      clean(payload.email),
      clean(payload.phone),
      clean(payload.source),
      clean(payload.page),
      clean(payload.userAgent),
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({
      ok: false,
      error: error && error.message ? error.message : "Unknown error",
    });
  }
}

function parsePayload(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error("Missing request body.");
  }

  const payload = JSON.parse(e.postData.contents);

  if (!payload.name || !payload.email || !payload.phone) {
    throw new Error("Name, email and phone are required.");
  }

  return payload;
}

function getLeadSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  ensureHeaders(sheet);
  return sheet;
}

function ensureHeaders(sheet) {
  const currentHeaders = sheet
    .getRange(1, 1, 1, HEADERS.length)
    .getValues()[0];

  const hasHeaders = HEADERS.every(function (header, index) {
    return currentHeaders[index] === header;
  });

  if (!hasHeaders) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.autoResizeColumns(1, HEADERS.length);
  }
}

function clean(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim().slice(0, 500);
}

function jsonResponse(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
