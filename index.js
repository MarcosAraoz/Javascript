
/*let producto = parseInt(prompt(
      "Selecciona el producto que deseas comprar: 1.Zapatillas - 2.Campera - 3.Remera"
    )
  )
  let totalCompra = 0
  let seguirComprando = true
  let decision
  const productosExistentes = [] 

  class Producto{
    constructor(id,nombre,precio){
      this.id = id
      this.nombre = nombre
      this.precio = precio
    }
  }
    const zapatillas = new Producto (1,`Zapatillas`,35000)
    productosExistentes.push(zapatillas)
    const campera = new Producto (2,`Campera`,10000)
    productosExistentes.push(campera)
    const remera = new Producto (3,`Remera`,8000)
    productosExistentes.push(remera)
    

    console.log(productosExistentes);

  while (seguirComprando === true) {
    if (producto == 1) {
      totalCompra = totalCompra + zapatillas.precio
    } else if (producto === 2) {
      totalCompra = totalCompra + campera.precio
    } else if (producto === 3) {
      totalCompra = totalCompra + remera.precio
    } else {
      producto = parseInt(prompt("Selecciona un producto habilitado: 1.Zapatillas - 2.Campera - 3.Remera "))
      continue
  }
    decision = parseInt(prompt('Quieres seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
      producto = parseInt(
        prompt(
          "Selecciona el producto que deseas comprar: 1.Zapatillas - 2.Campera - 3.Remera"
        )
      )
    } else {
      seguirComprando = false
    }
  }
  alert("El total de tu compra es " + totalCompra)*/
  
  class Producto{
    constructor(id,nombre,precio,stock){
      this.id = id
      this.nombre = nombre
      this.precio = precio
      this.stock = stock
    }
  }
  const zapatilla = new Producto (1, `Zapatilla Nike`, 35000, 20)
  
    const campera = new Producto (2, `Campera De Cuero`, 10000, 30)
   
    const remera = new Producto (3, `Remera Deportiva Nike`, 8000, 45)
   
    const productos = [zapatilla, campera, remera]
    
    const divProductos = document.getElementById("divProductos")


     productos.forEach(prodArray =>{
      divProductos.innerHTML +=
     
    `<div id= "producto${prodArray.id}" class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${prodArray.nombre}</h5>
      <p class="card-text">Precio: $${prodArray.precio}</p>
      <p class="card-text">Stock: ${prodArray.stock}</p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>` 
})
  