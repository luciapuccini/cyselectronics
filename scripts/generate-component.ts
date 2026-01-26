#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";

const componentName = process.argv[2];
const targetDir = process.argv[3] || "./src/components";

if (!componentName) {
  console.error("Error: Please provide a component name");
  console.log("Usage: npm run scaffold <ComponentName>");
  process.exit(1);
}

// Validate component name (basic validation)
if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error(
    "Error: Component name must start with an uppercase letter and contain only alphanumeric characters",
  );
  process.exit(1);
}

const componentDir = path.join(targetDir, componentName);

// Check if directory already exists
if (fs.existsSync(componentDir)) {
  console.error(`Error: Directory "${componentName}" already exists`);
  process.exit(1);
}

// Create component directory
fs.mkdirSync(componentDir, { recursive: true });

// Create index.tsx file
const tsxContent = `import style from "./${componentName}.module.scss";

const ${componentName} = () => (
  <div className={style.container}>
    <h1>${componentName} Component</h1>
  </div>
);

export default ${componentName};
`;

fs.writeFileSync(path.join(componentDir, "index.tsx"), tsxContent);

// Create SCSS file
const scssContent = `.container {
  padding: 1rem;
  
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
}
`;

fs.writeFileSync(
  path.join(componentDir, `${componentName}.module.scss`),
  scssContent,
);

console.log(
  `✅ Component "${componentName}" created successfully at ${componentDir}`,
);
console.log(`📁 Created files:`);
console.log(`   - ${componentName}/index.tsx`);
console.log(`   - ${componentName}/${componentName}.module.scss`);
