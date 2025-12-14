const { chromium } = require("playwright");

const BASE = "https://vbilto.github.io/rum-demo";

const pages = [
  "/index.html",
  "/journey.html",
  "/search.html",
  "/checkout.html",
  "/payment.html",
  "/resource.html",
  "/slow.html",
  "/errors.html",
  "/spa.html",
  "/geo-sim.html"
];

async function run() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  for (const p of pages) {
    const url = BASE + p;
    console.log("Visiting:", url);
    await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });

    // Trigger some interactions (click buttons if present)
    const buttons = await page.locator("button").all();
    for (let i = 0; i < Math.min(buttons.length, 3); i++) {
      try { await buttons[i].click({ timeout: 3000 }); } catch (e) {}
    }

    // Wait to ensure beacons flush
    await page.waitForTimeout(5000);
  }

  await browser.close();
}

run().catch(e => { console.error(e); process.exit(1); });
