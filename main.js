//Desafio-1
//Calcular pago en cuotas sobre un monto determinado:


const color = () => {
    let total= 0;
    let camisa="";
    alert("Remera roja = $300, remera verde = $200, remera blanca = $100");
    do{
        camisa = prompt("Ingrese el color que desea las remeras (ROJO, VERDE, BLANCO)");
    }while(camisa.toLowerCase !== "rojo" && camisa.toLowerCase !== "verde" && camisa.toLowerCase !== "blanco");

    let valor = parseInt(prompt("Ingrese el numero de remeras que quiere"));
    switch(camisa){
        case "rojo":
            total = valor*300;
            break;
        case "verde":
            total = valor*200;
            break;
        case "blanco":
            total = valor*100;
            break;
    }
    return total;
    
}


const descuentos = (valor) =>{
    switch(valor){
        case valor<=1000:
            //sin descuento 
            console.log(`El monto a pagar es ${valor}`);
        case valor<=2000:
            //descuento 10%
            console.log(`El monto a pagar es ${valor*0.9} tiene un descuento del 10%`);
        case valor>4000:
            console.log(`El monto a pagar es ${valor*0.8} tiene un descuento del 20%`)
    }
}


descuentos(color());