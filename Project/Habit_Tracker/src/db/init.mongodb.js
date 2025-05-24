const mongoose = require("mongoose");

// Load environment variables
const connectString = process.env.MONGO_URL;

class Database {
  constructor() {
    this.connect(); //Auto call this method when you import into app.js
  }

  connect() {
    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", { color: true });
    }

    mongoose
      .connect(connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("✅ Connected to MongoDB successfully");
      })
      .catch((err) => {
        console.error("❌ MongoDB connection error:", err.message);
      });
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDB = Database.getInstance();

module.exports = instanceMongoDB;
