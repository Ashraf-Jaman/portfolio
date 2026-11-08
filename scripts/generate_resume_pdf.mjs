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
let y = 745;

// Header: Name & Role
addText(40, y, 22, "MD ASHRAF JAMAN HRIDOY", "0.1 0.12 0.15", "F2");
y -= 20;
addText(40, y, 12, "Frontend Developer (Next.js / React)", "0.12 0.38 0.76", "F2");
y -= 18;

// Contact info
const contact1 = "Location: Bangladesh   |   Phone: 01841390122   |   Email: ashrafjaman680@gmail.com   |";
addText(40, y, 8.5, contact1, "0.25 0.25 0.28", "F1");
y -= 13;
const contact2 = "GitHub: github.com/Ashraf-Jaman   |   Portfolio: ashraf-jaman.vercel.app";
addText(40, y, 8.5, contact2, "0.25 0.25 0.28", "F1");
y -= 14;

// Accent blue line
addLine(40, y, 572, y, "0.12 0.38 0.76", 1.8);
y -= 22;

function sectionHeading(title) {
  addText(40, y, 11, title, "0.1 0.12 0.15", "F2");
  y -= 5;
  addLine(40, y, 572, y, "0.78 0.8 0.84", 0.75);
  y -= 14;
}

// 1. PROFESSIONAL SUMMARY
sectionHeading("PROFESSIONAL SUMMARY");
const summaryLines = [
  "Motivated and detail-oriented Frontend Developer specializing in Next.js, React, HTML5, and CSS3. Skilled in",
  "building responsive, high-performance web applications and converting Figma designs into functional,",
  "accessible UI components. Experienced in project-based web development, state management, and REST API",
  "integration while pursuing a Bachelor's degree in Mathematics."
];
summaryLines.forEach((line) => {
  addText(40, y, 9, line, "0.22 0.22 0.25", "F1");
  y -= 13;
});
y -= 10;

// 2. TECHNICAL SKILLS
sectionHeading("TECHNICAL SKILLS");
const skills = [
  ["Core Technologies:", "HTML5, CSS3, JavaScript (ES6+), React.js, Next.js"],
  ["Styling & Layouts:", "Tailwind CSS, CSS Modules, Flexbox, CSS Grid, Responsive Web Design"],
  ["Rendering & State:", "SSR, Client Components, React Hooks, State Management"],
  ["Tools & Version Control:", "Git, GitHub, Figma-to-Code Conversion, REST API Integration"],
  ["Best Practices:", "Cross-Browser Compatibility, Performance Optimization, Accessibility"]
];
skills.forEach(([category, list]) => {
  addText(40, y, 9, category, "0.1 0.12 0.15", "F2");
  addText(175, y, 9, list, "0.25 0.25 0.28", "F1");
  y -= 14;
});
y -= 10;

// 3. FEATURED PROJECTS
sectionHeading("FEATURED PROJECTS");

function addProject(title, category, stack, bullets) {
  addText(40, y, 10, `${title} — ${category}`, "0.1 0.12 0.15", "F2");
  addText(470, y, 9, "Live Demo | GitHub", "0.12 0.38 0.76", "F1");
  y -= 12;
  addText(40, y, 8.5, `Tech Stack: ${stack}`, "0.4 0.4 0.44", "F1");
  y -= 12;
  bullets.forEach((b) => {
    addText(48, y, 9, "•", "0.2 0.2 0.25", "F2");
    addText(58, y, 9, b, "0.25 0.25 0.28", "F1");
    y -= 12.5;
  });
  y -= 8;
}

addProject(
  "KGC Math",
  "Educational Platform",
  "Next.js, HTML5, CSS Modules / Tailwind CSS",
  [
    "Developed an intuitive educational frontend platform dedicated to mathematics study resources.",
    "Structured modular, reusable React components to ensure optimal page load performance and accessibility."
  ]
);

addProject(
  "Studio Space",
  "Digital Agency Frontend",
  "Next.js, React, Modern CSS Layouts",
  [
    "Converted complex UI layout designs into pixel-perfect, fully responsive client-side pages.",
    "Applied Next.js routing and UI interactive elements for smooth client navigation across screen sizes."
  ]
);

addProject(
  "Bazar Dor",
  "Daily Market Price Tracker",
  "Next.js, React, JavaScript, Tailwind CSS",
  [
    "Built a responsive web application to track daily commodity market prices with dynamic UI rendering.",
    "Implemented clean state management and search filtering logic for seamlessly viewing product rates."
  ]
);

// 4. EDUCATION
sectionHeading("EDUCATION");
addText(40, y, 9.5, "Bachelor of Science (B.Sc) in Mathematics", "0.1 0.12 0.15", "F2");
addText(480, y, 9, "1st Year (Ongoing)", "0.35 0.35 0.4", "F1");
y -= 12;
addText(40, y, 9.5, "National University, Bangladesh", "0.12 0.38 0.76", "F2");
y -= 12;
addText(48, y, 9, "•", "0.2 0.2 0.25", "F2");
addText(58, y, 9, "Currently pursuing undergraduate studies in Mathematics with a focus on analytical thinking and problem-solving skills.", "0.25 0.25 0.28", "F1");
y -= 14;

// 5. LANGUAGES
sectionHeading("LANGUAGES");
addText(40, y, 9, "Bengali: Native   |   English: Professional Working Proficiency", "0.25 0.25 0.28", "F1");
y -= 22;

// Footer
addLine(40, 42, 572, 42, "0.85 0.85 0.88", 0.5);
addText(40, 30, 8, "Md Ashraf Jaman Hridoy — Resume", "0.5 0.5 0.55", "F1");
addText(525, 30, 8, "Page 1 of 1", "0.5 0.5 0.55", "F1");

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
