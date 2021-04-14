module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";

export const ${componentName}: React.FC<${componentName}Props & React.HTMLAttributes<HTMLDivElement>> = ({ foo, className, ...props }) => (
  <div className="foo-bar" {...props}>{foo}</div>
);
`,
  extension: `.tsx`
});


