const app = require("./app");
require("./utils/conexiondb");

app.listen(app.get("port"));
console.log(`server on port ${app.get("port")}`);
