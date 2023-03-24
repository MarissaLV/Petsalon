let pets = []; //arreglo vacio
//crear constructor
function Pet(nombreP, generoP, razaP, edadP, dueñop, metodoP, servicioP) {
    this.Nombre = nombreP;
    this.Genero = generoP;
    this.Raza = razaP
    this.Edad = edadP
    this.nombredueño = dueñop
    this.Servicio = servicioP;
    this.metododepago = metodoP;
}

// variables globales
//obtener los valores de los inputs
let inputNombre = document.getElementById("txtNombre");
let inputGenero = document.getElementById("txtGenero");
let inputRaza = document.getElementById("txtRaza");
let inputEdad = document.getElementById("txtEdad");
let inputnombredueño = document.getElementById("txtdueño");
let inputmetododepago = document.getElementById("txtmetododelpago");
let inputServicio = document.getElementById("selServicio");

function validacion(pet) {
    let valida = true; //todo bien
    if (pet.Nombre == "") { //comparacion (utilizar ==><>=<=!=)
        //si entro aquí no es valida la mascota
        alert("Ingresa Nombre");
        inputNombre.classList.add = ("error");
        valida = false;
    }
//validar que el servicio no quede vacio
    return valida;

    if (pet.Servicio == "") { //comparacion (utilizar ==><>=<=!=)
        //si entro aquí no es valida la mascota
        alert("ingresa Servicio");
        inputServicio.classList.add("error");
        valida = false;
    }
    return valida;
}

//crear function de registro
function registro() {
    console.log("Registrando mascota...");
    //crear objeto
    let newPet = new Pet(inputNombre.value, inputGenero.value, inputRaza.value, inputEdad.value, inputnombredueño.value, inputmetododepago.value, inputServicio.value);

    if (validacion(newPet) == true) {
        //imprimir el objeto en consola
        console.log(newPet);
        pets.push(newPet);
        displayCards();
        //limpiar
        limpiarForm();
    }

}
function limpiarForm() {
    inputNombre.value = "";
    inputGenero.value = "";
    inputRaza.value = "";
    inputEdad.value = "";
    inputnombredueño.value = "";
    inputmetododepago.value = "";
    inputServicio.value = "";

}
function init() {
    console.log("Register");
    //objeto
    let pet1 = new Pet("chewbaca", "Female", "golden", "2", "Marissa", "efectivo", "vacuna");
    let pet2 = new Pet("sonic", "Male", "golden", "1", "Mario", "tarjeta", "Desparacitación");
    let pet3 = new Pet("Rafael","Male","golden","3","Santi","tarjeta","vacuna");
    let pet4 = new Pet("LaPocha","Fmale","mestizo","5","Feli","efectivo","shower");
    let pet5 = new Pet("Godzilla","Male","chihuahua","3", "Martha", "tarjeta","vacuna");
    pets.push(pet1,pet2,pet3,pet4,pet5);
        displayCards();
}





window.onload = init;  //ejecuta init cuando termina de renderizar el HTML
