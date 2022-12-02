function dibujarLinea() {
    console.log("--------------------------------------");
}

function dineroSuficiente(dinero, precioYerba) {
    if (dinero >= precioYerba) {
        return true;
    } else {
        console.log("No tienes dinero suficiente... Estas queriendo comprar una yerba al valor de $" + precioYerba + ", y dispones de " + dinero);
        return false;
    }
}

function comprarYerba(dinero, precioYerba) {
    console.log("Usted tiene " + dinero);
    console.log("Usted gastará: " + precioYerba);
    console.log("COMPRA REALIZADA, dinero restante: " + (dinero - precioYerba));
    return (dinero = dinero - precioYerba);
}

function mostrarListado() {
    console.log("\nBIENVENIDO A NUESTRO SHOP ONLINE DE YERBAS \nLos productos disponibles son los siguientes:\n");
    dibujarLinea();
    console.log("01 -Yerba La Tronquera $" + precioLT + " : " + yerbaLT + "\n02 -Yerba Playadote: $" + precioPL + " : " + yerbaPL + "\n03 -Yerba Rezamonjes $" + precioRM + " : " + yerbaRM + "\n04 -Yerba Tardaluis $" + precioTL + " : " + yerbaTL + "\n");
    dibujarLinea();
}


let yerbaLT = 5, yerbaPL = 5, yerbaRM = 5, yerbaTL = 5;
let precioLT = 960, precioPL = 600, precioRM = 500, precioTL = 690;
let dinero = 5000;

let usuario = prompt("Ingrese su nombre.");
console.log("Bienvenid@ " + usuario + ", un placer tenerte de vuelta.");
console.log("\nDispones de $" + dinero + " para gastar en los productos disponibles en el stock.");

mostrarListado();

let yerba = prompt("Ingrese ID de yerba, escriba \"lista\", o ingrese -1 para SALIR.");
while (yerba != -1) {
    if (yerba == "lista") {
        mostrarListado();
    }
    else {
        switch (yerba) {
            case "01":
                if (dineroSuficiente(dinero, precioLT) == true) {
                    dinero = comprarYerba(dinero, precioLT);
                }
                break;
            case "02":
                if (dineroSuficiente(dinero, precioPL) == true) {
                    dinero = comprarYerba(dinero, precioPL);
                }
                break;
            case "03":
                if (dineroSuficiente(dinero, precioRM) == true) {
                    dinero = comprarYerba(dinero, precioRM);
                }
                break;
            case "04":
                if (dineroSuficiente(dinero, precioTL) == true) {
                    dinero = comprarYerba(dinero, precioTL);
                }
                break;
            default:
                console.log("Ha ingresado una opcion incorrecta... Intente nuevamente");
                break;
        }
    }
    yerba = prompt("Ingrese ID de yerba, escriba \"lista\", o ingrese -1 para SALIR.");
}

console.log("¡Gracias por su compra!")
console.log(yerba);
