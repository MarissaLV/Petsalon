function displayCards() {
    // declaracion de variables en html
    const DIV = document.getElementById("mascotas");
    let card = "";
    //recorrer el arreglo pets[]
    for (let i = 0; i < pets.length; i++) {           //console.log(pets[i].nombre);
        card += `

            <div class="card">
            <p>Nombre: ${pets[i].Nombre}</p>
            <p>Genero: ${pets[i].Genero}</p>
            <p>Raza: ${pets[i].Raza}</p>
            <p>Edad: ${pets[i].Edad}</p>
            </div>
        `;
    }
    //console.log(card);
    // crear el template de la tarjeta (HTML)
    // inserto la tarjeta en HTML
    DIV.innerHTML = card;
}
