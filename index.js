


// 1
var myPenguin = {
  character: "Gunter",
  origin: "Adventure Time ",
  notes: "The penguin of the ice king who likes to steal things",

  //4
  saludar() {
    console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`);
  }


};

// 2
console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`)

// 3
myPenguin.puedeVolar = false;

//4
myPenguin.graznar = "kaww kaww!!";

//5
myPenguin.saludar = function() {
  console.log(`Hola, soy un pingüino y mi nombre es ${myPenguin.character}`)
};

//6
myPenguin.character = "Señor Pingu";
myPenguin.saludar();

//7 
myPenguin.volar = function() {
  if (myPenguin.puedeVolar == true) {
    console.log("¡Puedo volar!")
  } else {
    console.log("No puedo volar :(")
  }
}
myPenguin.volar();

//8
myPenguin.puedeVolar = true;
myPenguin.volar();

//9
var recetaMole = {
  titulo: "Mole",
  porciones: 2,
  ingredientes: ["canela", "comino", "cocoa"]
};

console.log(recetaMole.titulo);
console.log(`Porciones: ${recetaMole.porciones}`);
console.log("ingredientes:")
for (var i = 0; i <= recetaMole.ingredientes.length; i++) {
  console.log(recetaMole.ingredientes[i])
}

//10
var libros = [
  {
    titulo: "Ojos de Perro Azul",
    autor: "Gabriel García Márquez",
    leido: false
  },
  {
    titulo: "48 leyes del poder",
    autor: "Robert Greene",
    leido: true
  }
];

for (let i = 0; i < libros.length; i++){

  console.log(`Título: ${libros[i].titulo}, Autor: ${libros[i].autor}`);
   if(libros[i].leido == true){
     console.log("Ya has leído este libro");
   } else {
     console.log("No has leído este libro");
   }

}

//11
class Persona{
  constructor(nombre, edad, sexo, peso, altura) {
    this.nombre = nombre
    this.edad = edad
    this.sexo = sexo
    this.peso = peso
    this.altura = altura
  }

  calcularIMC() {
    // formula para calcular IMC (IMC = peso [kg]/ estatura [m]).
    console.log("Su indice de masa corporal es: " + Math.round((this.peso/(this.altura*this.altura))));
  }

  esMayorDeEdad(){
    if(this.edad >= 18){
      console.log("Usted es mayor de edad");
    }
    else{
      console.log("Usted es menor de edad");
    }
  }

  generarRfc() {
    console.log(`${this.nombre} | ${this.edad} | ${this.sexo}`);
  }

}

var persona1 = new Persona("Fernando", 18, "H", 60, 1.50 );
persona1.calcularIMC();
persona1.esMayorDeEdad();
persona1.generarRfc();

//12

class Cuenta{
  constructor(titular, cantidad, estado){
    this.titular = titular;
    this.cantidad = cantidad;
    this.estado = estado;
  }

  ingresar(cantidad){
    if(this.cantidad + cantidad > 900){
      console.log("Ha llegado a su límite, no puede tener más de $900.");
    }else {
      this.cantidad = this.cantidad + cantidad;
      console.log(`Ha ingresado ${cantidad}, ahora tiene ${this.cantidad}.`);
    }
  }

  retirar(cantidad){
    if(this.cantidad - cantidad < 10){
      console.log("No puede tener menos de $10 en su cuenta.");
    }else{
      this.cantidad = this.cantidad - cantidad;
      console.log(`Ha retirado ${cantidad}, ahora tiene ${this.cantidad}.`);
    }
  }
}

const fernando = new Cuenta("Fernando", 200, true );
fernando.ingresar(1000);
fernando.retirar(8000);

const pipe = new Cuenta("Pipe", 100, true);
pipe.ingresar(700);
pipe.retirar(300);