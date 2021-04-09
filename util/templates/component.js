module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props } from "./${componentName}.types";

export const ${componentName}: React.FC<${componentName}Props> = ({ foo, ...props }) => (
  <div className="foo-bar" {...props}>{foo}</div>
);
`,
  extension: `.tsx`
});


