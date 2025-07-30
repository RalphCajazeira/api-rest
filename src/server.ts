import express from "express";
import { myMiddleware } from "./middlewares/my-middleware";

const PORT: number = 3333;

const app = express();
app.use(express.json());

// Middleware Global
// app.use(myMiddleware);

app.get("/products", (request, response) => {
  const { page, limit } = request.query;

  response.json(`Pagina ${page ?? 1} de ${limit ?? 10}`);
});

// Middleware local em uma rota especifica.
app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body;

  response.status(201).json({ name, price });
});

app.listen(PORT, () =>
  console.log(`Server is running at http://localhost:${PORT}/`)
);
