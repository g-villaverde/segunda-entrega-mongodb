import { Router } from "express";
import {
    getProductos, 
    addProducto,
    updateProducto, 
    deleteProducto
} from "../controller/product.controller.js";

const productosRouter = Router();

productosRouter
    .get("/:id?", getProductos)
    .post("/", addProducto)
    .put("/:id", updateProducto)
    .delete("/:id", deleteProducto);

export default productosRouter;