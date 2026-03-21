const fs = require('fs');
if (!fs.existsSync('lighthouse-report.json')) {
  console.log("Not ready yet.");
  process.exit(1);
}
const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));
const performanceScore = report.categories.performance.score * 100;
console.log(`\n\n=== PERFORMANCE SCORE: ${performanceScore.toFixed(0)} ===`);

const metrics = [
  'first-contentful-paint',
  'largest-contentful-paint',
  'total-blocking-time',
  'cumulative-layout-shift',
  'speed-index',
  'interactive'
];

console.log("\n=== METRICS ===");
metrics.forEach(m => {
  if(report.audits[m]) {
    console.log(`${report.audits[m].title}: ${report.audits[m].displayValue}`);
  }
});

console.log("\n=== TOP OPPORTUNITIES ===");
Object.values(report.audits)
  .filter(a => a.details && a.details.type === 'opportunity' && a.details.overallSavingsMs > 50)
  .sort((a,b) => b.details.overallSavingsMs - a.details.overallSavingsMs)
  .slice(0, 5)
  .forEach(a => {
    console.log(`- ${a.title} (${a.details.overallSavingsMs.toFixed(0)}ms)`);
  });

console.log("\n=== TOP DIAGNOSTICS ===");
['mainthread-work-breakdown', 'bootup-time', 'network-requests', 'network-server-latency', 'dom-size', 'non-composited-animations', 'uses-long-cache-ttl']
  .forEach(d => {
    if(report.audits[d] && report.audits[d].displayValue) {
      console.log(`- ${report.audits[d].title}: ${report.audits[d].displayValue || report.audits[d].score}`);
    }
  });
