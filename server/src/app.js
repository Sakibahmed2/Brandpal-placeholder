import express from "express";
import cors from "cors";
import notFound from "./app/middlewares/notFound.js";
import { userRoutes } from "./app/routes/user.routes.js";
import globalErrorHandler from "./app/middlewares/globalErrorHandler.js";
import { authRoutes } from "./app/routes/auth.routes.js";
import { paymentRoutes } from "./app/routes/payment.routes.js";
import { serviceRoutes } from "./app/routes/service.routes.js";
import { contactRoutes } from "./app/routes/contact.routes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// Routes
app.use("/api/v1/user", userRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/payment", paymentRoutes);

app.use("/api/v1/services", serviceRoutes);

app.use("/api/v1/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Not found error handler
app.use(notFound);

// global error handler
app.use(globalErrorHandler);

export default app;
