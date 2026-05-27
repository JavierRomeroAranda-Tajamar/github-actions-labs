const fs = require("fs");

fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/backend-build.txt", "Backend build generado correctamente");

console.log("Backend build generado correctamente");
