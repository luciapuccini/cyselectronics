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
const tsxContent = `import { Card, CardContent, CardHeader, CardTitle } from "../../@/components/ui/card";

const ${componentName} = () => (
  <Card className="w-full max-w-md">
    <CardHeader>
      <CardTitle>${componentName} Component</CardTitle>
    </CardHeader>
    <CardContent>
      <p>This is a new component using shadcn/ui components and Tailwind CSS.</p>
    </CardContent>
  </Card>
);

export default ${componentName};
`;

fs.writeFileSync(path.join(componentDir, "index.tsx"), tsxContent);

console.log(
  `✅ Component "${componentName}" created successfully at ${componentDir}`,
);
console.log(`📁 Created files:`);
console.log(`   - ${componentName}/index.tsx`);
