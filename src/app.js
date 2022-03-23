import Express from "express";
import {errorHandlerMiddleware} from "./middlewares/errorHandler.js";
import carritoRouter from "./routes/carrito.routes.js";
import productosRouter from "./routes/productos.routes.js";
import mongoose from "mongoose";

const app = Express();
app.use(Express.json());

// conexión con mongodb

mongoose.connect('mongodb://localhost/crud-mongo')
    .then(db => console.log('Base de datos conectada'))  
    .catch(err => console.log(err))

app.get("/", (_, res) => {
    res.json("hola")
})

app.use("api/productos", productosRouter);
app.use("api/carrito", carritoRouter);
app.use(errorHandlerMiddleware);

export default app;

