const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  await page.goto('file:///Users/trangtruong/Documents/Claude/Projects/yts-yt-1/index.html', { waitUntil: 'networkidle2' });
  
  // Switch to sbo212
  await page.evaluate(() => {
     // Assuming there's a way to navigate to sbo212. Let's just render the template directly.
     document.getElementById('content-area').innerHTML = window.SBO_TEMPLATES['sbo212'];
  });
  
  console.log("Template rendered. Clicking case 1...");
  await page.evaluate(() => {
     const btn = document.querySelector('.causal-step');
     if (btn) {
         btn.click();
     } else {
         console.log("Button not found!");
     }
  });
  
  // Give it a moment to process the click
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const simBoxContent = await page.evaluate(() => {
      const box = document.getElementById('sbo212-sim-box');
      return box ? box.innerHTML : "sim box not found";
  });
  
  console.log("SimBox Content after click:\n", simBoxContent);
  
  await browser.close();
})();
