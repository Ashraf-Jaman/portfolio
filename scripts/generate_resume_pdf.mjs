import fs from "node:fs";

const esc = (value) =>
  String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll("(", "\\(")
    .replaceAll(")", "\\)");

function createPdfGenerator() {
  const lines = [];

  const addText = (x, y, size, value, color = "0.12 0.12 0.15", font = "F1") => {
    lines.push(
      `BT /${font} ${size} Tf ${color} rg 1 0 0 1 ${x} ${y} Tm (${esc(value)}) Tj ET`
    );
  };

  const addLine = (x1, y1, x2, y2, color = "0.85 0.85 0.88", width = 0.75) => {
    lines.push(`${color} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
  };

  return { addText, addLine, lines };
}

const { addText, addLine, lines } = createPdfGenerator();

// Page size: 612 x 792 (Letter)
let y = 746;

// Center/Left Header: Name & Role (matching screenshot layout)
addText(40, y, 22, "MD ASHRAF JAMAN HRIDOY", "0.08 0.08 0.1", "F2");
y -= 20;
addText(40, y, 12, "Full Stack Web Developer", "0.15 0.15 0.18", "F2");
y -= 17;

// Contact info
const contact1 = "Location: Bangladesh   |   Phone: 01841390122   |   Email: ashrafjaman680@gmail.com";
addText(40, y, 8.5, contact1, "0.22 0.22 0.25", "F1");
y -= 13;
const contact2 = "GitHub: github.com/Ashraf-Jaman   |   Portfolio: ashraf-jaman.vercel.app   |   LinkedIn: linkedin.com/in/ashraf-jaman";
addText(40, y, 8.5, contact2, "0.22 0.22 0.25", "F1");
y -= 14;

// Divider line
addLine(40, y, 572, y, "0.15 0.15 0.18", 1.5);
y -= 20;

function sectionHeading(title) {
  addText(40, y, 10.5, title, "0.08 0.08 0.1", "F2");
  y -= 5;
  addLine(40, y, 572, y, "0.75 0.75 0.78", 0.75);
  y -= 13;
}

// 1. PROFESSIONAL SUMMARY
sectionHeading("PROFESSIONAL SUMMARY");
const summaryLines = [
  "Motivated and detail-oriented Full Stack Web Developer proficient in building responsive front-end interfaces and robust",
  "back-end systems using Node.js, Express.js, and MongoDB. Experienced in API integration, authentication, modern state",
  "management, and deploying scalable web applications with clean architecture. Dedicated to writing maintainable code",
  "and solving complex computational problems while pursuing a B.Sc in Mathematics."
];
summaryLines.forEach((line) => {
  addText(40, y, 8.5, line, "0.2 0.2 0.24", "F1");
  y -= 12;
});
y -= 8;

// 2. TECHNICAL SKILLS
sectionHeading("TECHNICAL SKILLS");
const skills = [
  ["Frontend & UI:", "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js, Tailwind CSS, shadcn/ui, Flexbox, Grid"],
  ["Backend & Database:", "Node.js, Express.js, MongoDB, REST APIs, JWT, CORS, Better Auth, Zod Validation"],
  ["Tools & DevOps:", "Git, GitHub, Postman, Docker, Figma-to-Code Conversion"],
  ["AI & Developer Tools:", "Claude, Codex, Copilot, OpenCode, ChatGPT, Antigravity, Gemini"],
  ["Best Practices:", "SSR, State Management, Cross-Browser Compatibility, Optimization, Accessibility"]
];
skills.forEach(([category, list]) => {
  addText(40, y, 8.5, category, "0.1 0.1 0.12", "F2");
  addText(175, y, 8.5, list, "0.2 0.2 0.24", "F1");
  y -= 13.5;
});
y -= 8;

// 3. FEATURED PROJECTS
sectionHeading("FEATURED PROJECTS");

function addProject(title, category, stack, bullets) {
  addText(40, y, 9.5, `${title} - ${category}`, "0.08 0.08 0.1", "F2");
  addText(472, y, 8.5, "Live Demo | GitHub", "0.15 0.15 0.18", "F1");
  y -= 11.5;
  addText(40, y, 8, `Tech Stack: ${stack}`, "0.38 0.38 0.42", "F1");
  y -= 11.5;
  bullets.forEach((b) => {
    addText(48, y, 8.5, "•", "0.2 0.2 0.24", "F2");
    addText(58, y, 8.5, b, "0.2 0.2 0.24", "F1");
    y -= 12;
  });
  y -= 6;
}

addProject(
  "KGC Math",
  "Educational Platform",
  "Next.js, HTML5, CSS Modules / Tailwind CSS, Node.js",
  [
    "Developed an intuitive educational frontend platform dedicated to mathematics study resources.",
    "Structured modular, reusable React components to ensure optimal page load performance and accessibility."
  ]
);

addProject(
  "Studio Space",
  "Digital Agency Frontend",
  "Next.js, React, Modern CSS Layouts, Express.js",
  [
    "Converted complex UI layout designs into pixel-perfect, fully responsive client-side pages.",
    "Applied Next.js routing and UI interactive elements for smooth client navigation across screen sizes."
  ]
);

addProject(
  "Bazar Dor",
  "Daily Market Price Tracker",
  "Next.js, React, JavaScript, Tailwind CSS, MongoDB",
  [
    "Built a responsive web application to track daily commodity market prices with dynamic UI rendering.",
    "Implemented clean state management and search filtering logic for seamlessly viewing product rates."
  ]
);

// 4. EDUCATION
sectionHeading("EDUCATION");
addText(40, y, 9, "Bachelor of Science (B.Sc) in Mathematics", "0.08 0.08 0.1", "F2");
addText(480, y, 8.5, "2nd Year (Ongoing)", "0.3 0.3 0.35", "F1");
y -= 11.5;
addText(40, y, 9, "National University, Bangladesh", "0.15 0.15 0.18", "F2");
y -= 11.5;
addText(48, y, 8.5, "•", "0.2 0.2 0.24", "F2");
addText(58, y, 8.5, "Currently pursuing undergraduate studies in Mathematics with a focus on analytical thinking and problem-solving skills.", "0.2 0.2 0.24", "F1");
y -= 14;

// 5. LANGUAGES
sectionHeading("LANGUAGES");
addText(40, y, 8.5, "Bengali: Native   |   English: Professional Working Proficiency", "0.2 0.2 0.24", "F1");
y -= 20;

// Footer
addLine(40, 42, 572, 42, "0.85 0.85 0.88", 0.5);
addText(40, 30, 8, "Md Ashraf Jaman Hridoy Resume", "0.45 0.45 0.5", "F1");
addText(525, 30, 8, "Page 1 of 1", "0.45 0.45 0.5", "F1");

const stream = lines.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
];
let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets[index + 1] = Buffer.byteLength(pdf);
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xref = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
for (let i = 1; i <= objects.length; i += 1) {
  pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
}
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
fs.writeFileSync("public/resume.pdf", pdf);
console.log("public/resume.pdf updated cleanly, remaining bottom y =", y);
