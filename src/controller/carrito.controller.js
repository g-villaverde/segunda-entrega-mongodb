// logica del carrito


// POST: '/' - Crea un carrito y devuelve su id.

export const addCarrito = async (req, res) => {
    
    const cartSaved = new cart(req.body);
    await cartSaved.save()
    res.send(`Recibido ${cartSaved}`);

}   

// DELETE: '/:id' - Vacía un carrito y lo elimina.

export const deleteCarrito = async (req, res) => {
    
    const removedCarrito = await carrito.deleteMany({});
    console.log("Elemento borrado");
    res.send(removedCarrito);

}


// GET: '/:id/productos' - Me permite listar todos los productos guardados en el carrito

export const getProductoCarrito = async (req, res) => {
    
    const { id } = req.params;
    let getCarrito = await carrito.findById(id);
    res.send(getCarrito);


};

// DELETE: '/:id/productos/:id_prod' - Eliminar un producto del carrito por su id de carrito y de producto

export const deleteProdCarrito = async (req, res) => {
    
    const {id} = req.params;
    const removedCarrito = await carrito.deleteOne({_id: id});
    console.log("Elemento borrado");
    res.send(removedCarrito);

}

