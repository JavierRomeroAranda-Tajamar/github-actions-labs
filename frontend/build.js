const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/frontend-build.txt", "Frontend build generado correctamente");

console.log("Frontend build generado correctamente");
