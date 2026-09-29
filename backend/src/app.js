import express from "express";
import cors from "cors";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
const app = express();


/* ---------------- Global Middlewares ---------------- */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ---------------- API Routes ---------------- */

app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
/* ---------------- Health Check ---------------- */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Feedback System Backend Running 🚀",
  });
});
/* ---------------- Route Not Found ---------------- */

app.use(notFound);

/* ---------------- Global Error Handler ---------------- */

app.use(errorHandler);

export default app;