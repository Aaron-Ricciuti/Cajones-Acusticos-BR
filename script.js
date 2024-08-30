document
    .getElementById("comentario-form")
    .addEventListener("submit", function (event) {
    event.preventDefault()

    //traer valores del fomrulario 6 datos
    const title = document.getElementById("comentario-title").value;
    const description = document.getElementById("comentario-description").value;
    const imageUrl = 
      document.getElementById("comentario-image").value ||
      "https://picsum.photos/200";
    const bgColor = document.getElementById("comentario-bg-color").value;
    const borderColor = document.getElementById("comentario-border-color").value;
    const rating = document.querySelector('input[name="star"]:checked').value;

if (rating === null) {
    alert("Por favor, selecciona una calificación.");
    return; // Detiene la ejecución si no hay calificación seleccionada
}

    //Mostrar por consola los valores del fomrulario
    console.log({
        title: title,
        description: description,
        imageUrl: imageUrl,
        bgColor: bgColor,
        borderColor: borderColor,
        rating: rating,
    });

    //Crear nueva card
    const cardContainer = document.getElementById("comentario-container");
    const newCard = document.createElement("div");
    newCard.className = "comentario";
    newCard.style.backgroundColor = bgColor;
    newCard.style.borderColor = borderColor;
    

    //Maquetar la card
    newCard.innerHTML = `
         <img src="${imageUrl}" alt="comentario Image">
         <div class="comentario-content">
            <h2>${title}</h2>
            <p>${description}</p>
            <p class="star-color">${'★'.repeat(rating)}</p>
         </div>
    `;

    //Añadir la nueva card al contenedor
    cardContainer.appendChild(newCard);

    //Limpiar campos del formulario
    document.getElementById("comentario-form").reset();



});

