import { app } from "./app";
import { productsRouter } from "./Controller/Routes/ProductsRouter";

//Rotas de Produtos
app.use("/products", productsRouter)