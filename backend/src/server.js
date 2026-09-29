import dotenv from "dotenv";
import app from "./app.js";
import pool from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    // Test MySQL Connection
    const connection = await pool.getConnection();

    console.log("✅ MySQL Database Connected Successfully");

    connection.release();

    // Start Express Server
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("❌ Database Connection Failed");
    console.error(error.message);

    process.exit(1);
  }
}

startServer();