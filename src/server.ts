import fastify from "fastify";
import { productRoutes } from "./routes/product.routes";
const app = fastify();

app.register(productRoutes);

app.listen({ port: 3000 }).then(() => {
  console.log(`Server running at http://localhost:3000`);
});
