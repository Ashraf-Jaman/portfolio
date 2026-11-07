import fs from "node:fs";

const esc = (value) => value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
const text = (x, y, size, value, color = "0.1 0.1 0.12") => `BT /F1 ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${esc(value)}) Tj ET`;
const lines = [];
lines.push("0.96 0.96 0.97 rg 0 660 612 132 re f");
lines.push(text(42, 750, 10, "FULL STACK WEB DEVELOPER", "0.95 0.34 0.08"));
lines.push(text(42, 710, 25, "Md Ashraf Jaman Hridoy"));
lines.push(text(42, 682, 10, "Building reliable, scalable, and user-focused web products from idea to launch.", "0.32 0.32 0.35"));
lines.push(text(42, 650, 8, "ashrafjaman680@gmail.com  |  Dhaka, Bangladesh  |  linkedin.com/in/ashraf-jaman  |  github.com/Ashraf-Jaman", "0.32 0.32 0.35"));
lines.push("0.95 0.34 0.08 RG 1 w 42 628 m 570 628 l S");
lines.push(text(42, 592, 11, "EXPERIENCE"));
lines.push(text(42, 565, 11, "Senior Full Stack Developer"));
lines.push(text(42, 548, 9, "Independent - Remote - 2022 - Present", "0.95 0.34 0.08"));
lines.push(text(42, 528, 9, "Designing and shipping production-ready applications with", "0.32 0.32 0.35"));
lines.push(text(42, 513, 9, "Next.js, Express, MongoDB, and TypeScript.", "0.32 0.32 0.35"));
lines.push(text(42, 478, 11, "Web Developer"));
lines.push(text(42, 461, 9, "Digital Studio - 2019 - 2022", "0.95 0.34 0.08"));
lines.push(text(42, 441, 9, "Built responsive websites, REST APIs, dashboards, and", "0.32 0.32 0.35"));
lines.push(text(42, 426, 9, "reusable component systems for growing teams.", "0.32 0.32 0.35"));
lines.push(text(42, 382, 11, "SELECTED PROJECTS"));
lines.push(text(42, 360, 10, "ShopSphere  -  TaskFlow  -  Devfolio", "0.32 0.32 0.35"));
lines.push("0.86 0.86 0.88 RG 0.7 w 370 600 m 370 345 l S");
lines.push(text(395, 592, 11, "SKILLS"));
lines.push(text(395, 565, 9, "Next.js - Express.js - MongoDB", "0.32 0.32 0.35"));
lines.push(text(395, 548, 9, "React - TypeScript - REST APIs", "0.32 0.32 0.35"));
lines.push(text(395, 531, 9, "Node.js - Responsive UI", "0.32 0.32 0.35"));
lines.push(text(395, 480, 11, "TOOLS"));
lines.push(text(395, 453, 9, "VS Code - ChatGPT - Docker", "0.32 0.32 0.35"));
lines.push(text(395, 436, 9, "GitHub - Postman - Vercel", "0.32 0.32 0.35"));
lines.push(text(395, 385, 11, "EDUCATION"));
lines.push(text(395, 358, 9, "Computer Science & Engineering", "0.32 0.32 0.35"));
lines.push(text(395, 341, 9, "2015 - 2019", "0.32 0.32 0.35"));

const stream = lines.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => { offsets[index + 1] = Buffer.byteLength(pdf); pdf += `${index + 1} 0 obj\n${object}\nendobj\n`; });
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i += 1) pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
fs.writeFileSync("public/resume.pdf", pdf);
