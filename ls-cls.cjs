const fs = require('fs');
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));

if (report.audits['cumulative-layout-shift'].details && report.audits['cumulative-layout-shift'].details.items) {
  report.audits['cumulative-layout-shift'].details.items.forEach(item => {
    console.log(`Node: ${item.node ? item.node.snippet : 'Unknown'} | Score: ${item.score}`);
  });
}
