import products from '../models/product.mongo.js'


// GET: '/:id?' - Me permite listar todos los productos disponibles ó un producto por su id (disponible para usuarios y administradores)

export const getProductos = async(req, res) => {

    let getProductos = await products.find()
    return res.status(200).send(getProductos);

}

// POST: '/' - Para incorporar productos al listado (disponible para administradores)

export const addProducto = async(req, res) => {

    const item = new products(req.body); 
    await item.save();
    res.send(`Recibido ${item}`)
    
}


// PUT: '/:id' - Actualiza un producto por su id (disponible para administradores)


export const updateProducto = async(req, res) => {

    const {id} = req.params;
    const{name, description, code, photo, price, stock} = req.body;
    const newProduct = await products.updateOne({_id: id}, req.body);

    console.log("producto actualizado");
    res.send(newProduct)

}
// DELETE: '/:id' - Borra un producto por su id (disponible para administradores)

export const deleteProducto = async(req, res) => {

    const {id} = req.params; 
    const removedItem = await products.deleteOne({_id: id}); 
    res.send(removedItem); 

    
} 
