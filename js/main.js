

 //validador de stock
  
 let stock = 20;
 let vendido = 0;
 let producto = 0;
 

 while (true){
producto = prompt("cuantas unidades queres vender? (o escribi ´fin´ para finalizar")

if (producto.toLowerCase() == "fin"){
    break;
} else {
    vendido = Number(producto);
 } if (stock < vendido){
    alert("lo siento! no quedan unidades suficientes")
 } else {
    stock = stock - vendido;
    alert("te quedan " + stock + " unidades en stock");

 }
}
 




    
   
    
    
 