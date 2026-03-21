const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

const lcp = report.audits['largest-contentful-paint-element'];
if (lcp && lcp.details && lcp.details.items && lcp.details.items.length > 0) {
  console.log("LCP Element:", lcp.details.items[0].node.snippet);
}

const cls = report.audits['layout-shifts'];
if (cls && cls.details && cls.details.items) {
  cls.details.items.forEach(item => {
    console.log("CLS Element:", item.node ? item.node.snippet : 'none', "Score:", item.score);
  });
}
