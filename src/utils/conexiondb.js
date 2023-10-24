const mongoose = require("mongoose");
(async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log("conectado a db", db.connection.name);
  } catch (error) {
    console.error(error);
  }
})();
