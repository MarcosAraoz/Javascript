
let producto = parseInt(prompt(
      "Selecciona el producto que deseas comprar: 1.Zapatillas - 2.Campera - 3.Remera"
    )
  )
  let totalCompra = 0
  let seguirComprando = true
  let decision
  while (seguirComprando === true) {
    if (producto === 1) {
      totalCompra = totalCompra + 35000
    } else if (producto === 2) {
      totalCompra = totalCompra + 10000
    } else if (producto === 3) {
      totalCompra = totalCompra + 8000
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
  alert("El total de tu compra es " + totalCompra)
  
