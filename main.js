/* Algoritmo con condicional*/
class Alimento{
        constructor (nombre, precio, cantidad){
            this.nombre = nombre;
            this.precio = precio;
            this.cantidad = cantidad;
        }
        vender(){
            if(this.cantidad !=0){
            this.cantidad -=1;
        }
        else{
            console.log("No hay sufieciente stock para vender")
        }
    }
}
const DogChow = new Alimento("Dog Chow",29000,1);
console.log(DogChow);
DogChow.vender();
console.log(DogChow);
DogChow.vender();
console.log(DogChow);


/*Algoritmo con ciclo*/
for (let i=2;i<=6;i=i+2){
    console.log("Numeros pares: " + i);
}


/*Simulador interactivo de edad*/ 
let nac =prompt("Ingrese su año de nacimiento");
let edad= 2024-nac;
alert("Usted tiene "+edad + " Años");
