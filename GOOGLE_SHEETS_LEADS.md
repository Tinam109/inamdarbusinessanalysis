# Google Sheets Lead Capture Setup

Use this once to connect `/sample-report` leads to Google Sheets.

## 1. Create the Sheet

Create a Google Sheet with columns:

```text
Submitted At | Name | Email | Phone | Source | Page | User Agent
```

## 2. Add Apps Script

In the Sheet, open `Extensions -> Apps Script`, paste the full contents of:

```text
apps-script/google-sheets-lead-capture.gs
```

The script creates a tab called `Sample Report Leads`, adds headers if needed,
and appends every `/sample-report` download request as a new row.

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
