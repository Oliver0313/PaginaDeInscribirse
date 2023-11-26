const inputName = document.getElementById("Name");
const inputApellido = document.getElementById("Apellido");
const inputProvincia = document.getElementById("Provincia");
const inputCiudad = document.getElementById("Ciudad");
const inputSector = document.getElementById("Sector");
const inputCalle = document.getElementById("Calle");
const inputContact = document.getElementById("Contact");
const inputDireccion = document.getElementById("Direccion");
const inputTelefono = document.getElementById("Telefono");
const inputCorreo = document.getElementById("Correo");
const inputPagina = document.getElementById("Pagina");
const inputResumen = document.getElementById("Resumen");
const inputIdiomas = document.getElementById("Idiomas");
const inputEmpleos = document.getElementById("Empleos");
const inputEducacion = document.getElementById("Educacion");
const inputSkill = document.getElementById("Skill");
const inputCertificaciones = document.getElementById("Certificaciones");


function Clear(){
    inputName.value = "";
    inputName.classList.remove("input-success");
    inputName.classList.remove("input-error");
    inputName.focus();

    inputApellido.value = "";
    inputApellido.classList.remove("input-success");
    inputApellido.classList.remove("input-error");

    inputDireccion.value = "";
    inputDireccion.classList.remove("input-success");
    inputDireccion.classList.remove("input-error");

    inputTelefono.value = "";
    inputTelefono.classList.remove("input-success");
    inputTelefono.classList.remove("input-error");

    inputCorreo.value = "";
    inputCorreo.classList.remove("input-success");
    inputCorreo.classList.remove("input-error");

    inputPagina.value = "";
    inputPagina.classList.remove("input-success");
    inputPagina.classList.remove("input-error");

    inputResumen.value = "";
    inputResumen.classList.remove("input-success");
    inputResumen.classList.remove("input-error");

    inputIdiomas.value = "";
    inputIdiomas.classList.remove("input-success");
    inputIdiomas.classList.remove("input-error");

    inputEmpleos.value = "";
    inputEmpleos.classList.remove("input-success");
    inputEmpleos.classList.remove("input-error");

    inputEducacion.value = "";
    inputEducacion.classList.remove("input-success");
    inputEducacion.classList.remove("input-error");

    inputSkill.value = "";
    inputSkill.classList.remove("input-success");
    inputSkill.classList.remove("input-error");

    inputCertificaciones.value = "";
    inputCertificaciones.classList.remove("input-success");
    inputCertificaciones.classList.remove("input-error");
}

 function Guardar(){

    if(Validate()){

        const valueName = inputName.value;
        const valueApellido = inputApellido.value;
        const valueDireccion = inputDireccion.value;
        const valueTelefono = inputTelefono.value;
        const valueCorreo = inputCorreo.value;
        const valuePagina = inputPagina.value;
        const valueResumen = inputResumen.value;
        const valueIdiomas = inputIdiomas.value;
        const valueEmpleos = inputEmpleos.value;
        const valueEducacion = inputEducacion.value;
        const valueSkill = inputSkill.value;
        const valueCertificaciones = inputCertificaciones.value;

        const ContactContainer = document.getElementById("contact-container");

        const divCol3 = document.createElement("div");
        divCol3.setAttribute("class","col-12 col-sm-12 col-md-6 offset-md-3");

        const divMainCard = document.createElement("div");
        divMainCard.setAttribute("class","card");

        const divCardHeader = document.createElement("div");
        divCardHeader.setAttribute("class","card-header bg-dark text-light");

        const h5CardHeader = document.createElement("h5");
        h5CardHeader.setAttribute("class","text-center fw-bold");
        h5CardHeader.innerText = "Curriculum";

        const divCardBody = document.createElement("div");
        divCardBody.setAttribute("class","card-body");

        const divCardUl = document.createElement("div");
        divCardUl.setAttribute("class","card");

        const UlCardBody = document.createElement("ul");
        UlCardBody.setAttribute("class","list-group list-group-flush");

        const liName = document.createElement("li");
        liName.setAttribute("class","list-group-item");
        liName.innerText = `Nombre: ${valueName}`;

        const liApellido = document.createElement("li");
        liApellido.setAttribute("class","list-group-item");
        liApellido.innerText = `Apellido: ${valueApellido}`;

        const liDireccion = document.createElement("li");
        liDireccion.setAttribute("class","list-group-item");
        liDireccion.innerText = `Direccion: ${valueDireccion}`;

        const liTelefono = document.createElement("li");
        liTelefono.setAttribute("class","list-group-item");
        liTelefono.innerText = `Telefono: ${valueDireccion}`;

        const liCorreo = document.createElement("li");
        liCorreo.setAttribute("class","list-group-item");
        liCorreo.innerText = `Correo: ${valueCorreo}`;

        const liPagina = document.createElement("li");
        liPagina.setAttribute("class","list-group-item");
        liPagina.innerText = `Pagina: ${valuePagina}`;

        const liResumen = document.createElement("li");
        liResumen.setAttribute("class","list-group-item");
        liResumen.innerText = `Resumen: ${valueResumen}`;

        const liIdiomas = document.createElement("li");
        liIdiomas.setAttribute("class","list-group-item");
        liIdiomas.innerText = `Idiomas: ${valueIdiomas}`;

        const liEmpleos = document.createElement("li");
        liEmpleos.setAttribute("class","list-group-item");
        liEmpleos.innerText = `Empleos: ${valueEmpleos}`;

        const liEducacion = document.createElement("li");
        liEducacion.setAttribute("class","list-group-item");
        liEducacion.innerText = `Educacion: ${valueEducacion}`;

        const liSkill = document.createElement("li");
        liSkill.setAttribute("class","list-group-item");
        liSkill.innerText = `Skill: ${valueSkill}`;
        
        const liCertificaciones = document.createElement("li");
        liCertificaciones.setAttribute("class","list-group-item");
        liCertificaciones.innerText = `Certificaciones: ${valueCertificaciones}`;

        const btnDelete = document.createElement("button");
        btnDelete.type = "button";
        btnDelete.setAttribute("class","btn btn-dark float-end mt-3");
        btnDelete.innerText = "Eliminar";
        btnDelete.addEventListener("click", function(){

            if(confirm("¿Desea eliminar el Curriculum?")){
                ContactContainer.removeChild(divCol3);       
            }
            
        });
         
        divCardHeader.appendChild(h5CardHeader);

        divCardBody.appendChild(divCardUl);
        divCardBody.appendChild(btnDelete);

        divCardUl.appendChild(UlCardBody);

        UlCardBody.appendChild(liName);
        UlCardBody.appendChild(liApellido);
        UlCardBody.appendChild(liDireccion);
        UlCardBody.appendChild(liTelefono);
        UlCardBody.appendChild(liCorreo);
        UlCardBody.appendChild(liPagina);
        UlCardBody.appendChild(liResumen);
        UlCardBody.appendChild(liIdiomas);
        UlCardBody.appendChild(liEmpleos);
        UlCardBody.appendChild(liEducacion);
        UlCardBody.appendChild(liSkill);
        UlCardBody.appendChild(liCertificaciones);

        divMainCard.appendChild(divCardHeader);
        divMainCard.appendChild(divCardBody);

        divCol3.appendChild(divMainCard);

        ContactContainer.appendChild(divCol3);
        


        Clear();
    }else {
        alert("Debe completar las casillas vacías");
    }
} 

function Validate(){
    let isValid = true;
    const valueName = inputName.value;
    if(valueName == ""|| valueName == null || valueName == undefined) {
       inputName.classList.add("input-error");
       inputName.classList.remove("input-success");
       isValid = false;
    }
    else{
        inputName.classList.remove("input-error");
        inputName.classList.add("input-success");
    }
        const valueApellido = inputApellido.value;
    if(valueApellido == ""|| valueApellido == null || valueApellido == undefined) {
        inputApellido.classList.add("input-error");
        inputApellido.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputApellido.classList.remove("input-error");
        inputApellido.classList.add("input-success");
    }
        const valueDireccion = inputDireccion.value;
    if(valueDireccion == ""|| valueDireccion == null || valueDireccion == undefined) {
        inputDireccion.classList.add("input-error");
        inputDireccion.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputDireccion.classList.remove("input-error");
        inputDireccion.classList.add("input-success");
    }
    const valueTelefono = inputTelefono.value;
    if(valueTelefono == ""|| valueTelefono == null || valueTelefono == undefined) {
        inputTelefono.classList.add("input-error");
        inputTelefono.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputTelefono.classList.remove("input-error");
        inputTelefono.classList.add("input-success");
    }
    const valueCorreo = inputCorreo.value;
    if(valueCorreo == ""|| valueCorreo == null || valueCorreo == undefined) {
        inputCorreo.classList.add("input-error");
        inputCorreo.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputCorreo.classList.remove("input-error");
        inputCorreo.classList.add("input-success");
    }
    const valuePagina = inputPagina.value;
    if(valuePagina == ""|| valuePagina == null || valuePagina == undefined) {
        inputPagina.classList.add("input-error");
        inputPagina.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputPagina.classList.remove("input-error");
        inputPagina.classList.add("input-success");
    }
    const valueResumen = inputResumen.value;
    if(valueResumen == ""|| valueResumen == null || valueResumen == undefined) {
        inputResumen.classList.add("input-error");
        inputResumen.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputResumen.classList.remove("input-error");
        inputResumen.classList.add("input-success");
    }
    const valueIdiomas = inputIdiomas.value;
    if(valueIdiomas == ""|| valueIdiomas == null || valueIdiomas == undefined) {
        inputIdiomas.classList.add("input-error");
        inputIdiomas.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputIdiomas.classList.remove("input-error");
        inputIdiomas.classList.add("input-success");
    }
    const valueEmpleos = inputEmpleos.value;
    if(valueEmpleos == ""|| valueEmpleos == null || valueEmpleos == undefined) {
        inputEmpleos.classList.add("input-error");
        inputEmpleos.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputEmpleos.classList.remove("input-error");
        inputEmpleos.classList.add("input-success");
    }
    const valueEducacion = inputEducacion.value;
    if(valueEducacion == ""|| valueEducacion == null || valueEducacion == undefined) {
        inputEducacion.classList.add("input-error");
        inputEducacion.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputEducacion.classList.remove("input-error");
        inputEducacion.classList.add("input-success");
    }
    const valueSkill = inputSkill.value;
    if(valueSkill == ""|| valueSkill == null || valueSkill == undefined) {
        inputSkill.classList.add("input-error");
        inputSkill.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputSkill.classList.remove("input-error");
        inputSkill.classList.add("input-success");
    }
    const valueCertificaciones = inputCertificaciones.value;
    if(valueCertificaciones == ""|| valueCertificaciones == null || valueCertificaciones == undefined) {
        inputCertificaciones.classList.add("input-error");
        inputCertificaciones.classList.remove("input-success");
        isValid = false;
    }
    else{
        inputCertificaciones.classList.remove("input-error");
        inputCertificaciones.classList.add("input-success");
    }
    
    return isValid;

}



