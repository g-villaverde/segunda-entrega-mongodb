import { Router } from "express";
import{
    getProductoCarrito,
    addCarrito,
    deleteCarrito, 
    deleteProdCarrito
} from "../controller/carrito.controller.js";

const carritoRouter = Router();

carritoRouter
    .get("/:id/productos", getProductoCarrito)
    .post("/", addCarrito)
    .delete("/:id/productos/:id_pod", deleteProdCarrito)
    .delete("/:id", deleteCarrito)


export default carritoRouter;