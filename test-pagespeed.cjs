const https = require('https');

const url = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.sistemasva.com.br/&strategy=mobile';

console.log("Testing PageSpeed Insights API...");

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const response = JSON.parse(data);
      if(response.error) {
        console.error("API Error:", response.error.message);
        return;
      }
      
      const score = response.lighthouseResult.categories.performance.score * 100;
      const metrics = response.lighthouseResult.audits;
      
      console.log(`\n=== GOOGLE PAGESPEED SCORE (MOBILE) ===`);
      console.log(`SCORE: ${score}`);
      console.log(`-------------------------------------`);
      console.log(`FCP (First Contentful Paint): ${metrics['first-contentful-paint'].displayValue}`);
      console.log(`LCP (Largest Contentful Paint): ${metrics['largest-contentful-paint'].displayValue}`);
      console.log(`TBT (Total Blocking Time): ${metrics['total-blocking-time'].displayValue}`);
      console.log(`CLS (Cumulative Layout Shift): ${metrics['cumulative-layout-shift'].displayValue}`);
      console.log(`Speed Index: ${metrics['speed-index'].displayValue}`);
      
    } catch(e) {
      console.error("Failed parsing", e);
    }
  });}).on('error', err => {
    console.error("HTTP Error: ", err.message);
});
