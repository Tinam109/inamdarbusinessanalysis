# Google Sheets Lead Capture Setup

Use this once to connect `/sample-report` leads to Google Sheets.

## 1. Create the Sheet

Create a Google Sheet with columns:

```text
Submitted At | Name | Email | Phone | Source | Page | User Agent
```

## 2. Add Apps Script

In the Sheet, open `Extensions -> Apps Script`, paste:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.submittedAt || new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.phone || "",
    data.source || "",
    data.page || "",
    data.userAgent || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Deploy the Script

Click `Deploy -> New deployment`.

Choose:

```text
Type: Web app
Execute as: Me
Who has access: Anyone
```

Copy the Web App URL.

## 4. Add Vercel Environment Variable

In Vercel, add this Production environment variable:

```text
GOOGLE_SHEETS_WEBHOOK_URL=<your Apps Script Web App URL>
```

Redeploy the site after adding it.
