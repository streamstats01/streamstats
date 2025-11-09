import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

app.get("/health", (_, res) => res.json({ ok: true }));
app.get("/", (_, res) => res.send("API OK — StreamStats"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening on ${PORT}`));
