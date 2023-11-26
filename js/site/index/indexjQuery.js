$(document).ready(function(){

    //Variables globales
    let valueName = "";
    let valueProvincia = "";
    let valueCiudad = "";
    let valueSector = "";
    let valueCalle = "";
    let valueContact = "";

    //Events

    $("#content-container").on("click","#btn-save",function(){
     Guardar();

    });

    $("#content-container").on("click","#btn-clear",function(){
    Clear();

    });

    $("#contact-container").on("click",".btn-delete", function(){
        if(confirm("¿Seguro que desea eliminar este contacto?")){
        const mainContainer = $(this).closest("div.col-12")
        mainContainer.remove();
        }
    });

    $("#content-container").on("click","#back", function(){
      GenerateForm();
    });

    $("#content-container").on("click","#btn-Continuar", function(){
      ConfirmRadio();
    });

     $("#content-container").on("click","#back1", function(){
      GenerateHtmlContact();
    });

     $("#content-container").on("click","#btn-Inicio", function(){
      if(confirm("¿Seguro que desea volver al Inicio?")){
        GenerateForm();
      }

    });

    $("#content-container").on("click","#btn-Imprimir", function(){
      alert("Error: función no disponible")

    });


    //Functions

    function GenerateConfirm(){

      let valueContactType = $("input[name='ContactType']:checked").val();
      let valueContactType1 = $("input[name='ContactType1']:checked").val();
      let valueContactType2 = $("input[name='ContactType2']:checked").val();
      let valueContactType3 = $("input[name='ContactType3']:checked").val();
      let valueContactType4 = $("input[name='ContactType4']:checked").val();

    if(valueContact == "Software"){

      const FormConfirm = `
    
      <div>
      <p> <a id="back"  href="#">Informacion Personal</a> ><a id="back1" href="#">Seleccion </a> > Confirmacion </p>
      <div class="card">
      <div class="card header bg-dark text-light">
      <h4 class="text-center">Confirmacion</h4>
      </div>
      <div class="card-body">
      <ul class="list-group" "list-group-flush">
      <li class="list-group-item">Nombre: ${valueName}</li>
      <li class="list-group-item">Provincia: ${valueProvincia}</li>
      <li class="list-group-item">Ciudad: ${valueCiudad}</li>
      <li class="list-group-item">Sector: ${valueSector}</li>
      <li class="list-group-item">Calle: ${valueCalle}</li>
      <li class="list-group-item">Carrera: ${valueContact}</li>
      </ul>
      <br>
              <table class="table table-dark table-hover">
              <thead>
                <tr>
                    <th scope="col">Materia:</th>
                    <th scope="col">Horario:</th>
                   
                    </tr>
                  </thead>
                  <tbody>
                    <th scope="row">Programacion Web</th>
                    <td>${valueContactType}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Inteligencia Artficial</th>
                    <td>${valueContactType1}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Base de Datos Avanzadas</th>
                    <td>${valueContactType2}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row"> Fundamentos de Programacion</th>
                    <td>${valueContactType3}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Programacion 2</th>
                    <td>${valueContactType4}</td>

                    </tr>
                    </tbody>
                </table>
                <button id="btn-Inicio" type="button" class="btn btn-dark float-end">Inicio</button>
                <button id="btn-Imprimir" type="button" class="btn btn-dark float-end me-2 mb-1">Imprimir</button>
            </div>
        </div>
    </div>   
      `;

      $("#content-container").html(FormConfirm);

    }else if (valueContact == "Redes"){

      const FormConfirm=` 

      <div>
      <p> <a id="back"  href="#">Informacion Personal</a> ><a id="back1" href="#">Seleccion </a> > Confirmacion </p>
      <div class="card">
      <div class="card header bg-dark text-light">
      <h4 class="text-center">Confirmacion</h4>
      </div>
      <div class="card-body">
      <ul class="list-group" "list-group-flush">
      <li class="list-group-item">Nombre: ${valueName}</li>
      <li class="list-group-item">Provincia: ${valueProvincia}</li>
      <li class="list-group-item">Ciudad: ${valueCiudad}</li>
      <li class="list-group-item">Sector: ${valueSector}</li>
      <li class="list-group-item">Calle: ${valueCalle}</li>
      <li class="list-group-item">Carrera: ${valueContact}</li>
      </ul>
      <br>
              <table class="table table-dark table-hover">
              <thead>
                <tr>
                <th scope="col">Materia:</th>
                <th scope="col">Horario:</th>

                  </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <th scope="row">Sistemas Operativos 2</th>
                    <td>${valueContactType}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Fisica General</th>
                    <td>${valueContactType1}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Pre Calculo</th>
                    <td>${valueContactType2}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Redaccion Castellana</th>
                    <td>${valueContactType3}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Fundamentos de Seguridad</th>
                    <td>${valueContactType4}</td>

                    </tr>
                    </tbody>
                </table>
                <button id="btn-Inicio" type="button" class="btn btn-dark float-end">Inicio</button>
                <button id="btn-Imprimir" type="button" class="btn btn-dark float-end me-2 mb-1">Imprimir</button>
            </div>
        </div>
    </div>   
      `;

      $("#content-container").html(FormConfirm);

    }else if (valueContact == "Multimedia"){

      const FormConfirm =` 

      <div>
      <p> <a id="back"  href="#">Informacion Personal</a> ><a id="back1" href="#">Seleccion </a> > Confirmacion </p>
      <div class="card">
      <div class="card header bg-dark text-light">
      <h4 class="text-center">Confirmacion</h4>
      </div>
      <div class="card-body">
      <ul class="list-group" "list-group-flush">
      <li class="list-group-item">Nombre: ${valueName}</li>
      <li class="list-group-item">Provincia: ${valueProvincia}</li>
      <li class="list-group-item">Ciudad: ${valueCiudad}</li>
      <li class="list-group-item">Sector: ${valueSector}</li>
      <li class="list-group-item">Calle: ${valueCalle}</li>
      <li class="list-group-item">Carrera: ${valueContact}</li>
      </ul>
      <br>
              <table class="table table-dark table-hover">
              <thead>
              
                <tr>
                <th scope="col">Materia:</th>
                <th scope="col">Horario:</th>
                   
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <th scope="row">Marketing</th>
                    <td>${valueContactType}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Estadistica Basica</th>
                    <td>${valueContactType1}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Historia Universal</th>
                    <td>${valueContactType2}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Interactividad</th>
                    <td>${valueContactType3}</td>
                    
                    </tr>
                    <tr>
                    <th scope="row">Animacion 2D</th>
                    <td>${valueContactType4}</td>

                    </tr>
                    </tbody>
                </table>
                <button id="btn-Inicio" type="button" class="btn btn-dark float-end">Inicio</button>
                <button id="btn-Imprimir" type="button" class="btn btn-dark float-end me-2 mb-1">Imprimir</button>
            </div>
        </div>
    </div>   
      `;

      $("#content-container").html(FormConfirm);
    }

    }

    function GenerateForm(){

      const Form = `
        
      <div class="card">
      <div class="card header bg-dark text-light">
      <h4 class="text-center">Modulo de Inscripcion</h4>
      </div>
      <div class="card-body">
      <h4 class="card-title text-center">Complete la Información</h4>
      <div class="mb-3">
          <label for="Name" class="form-label">Nombre:</label>
          <input id="Name" for="Name" type="text" class="form-control" value="${valueName}">
      </div> 
      
      <div class="mb-3">
          <label for="Apellido" class="form-label">Provincia:</label>
          <input id="Provincia" for="Apellido" type="text" class="form-control" value="${valueProvincia}">
      </div> 
      
      <div class="mb-3">
          <label for="direccion" class="form-label">Ciudad:</label>
          <input id="Ciudad" for="direccion" type="text" class="form-control" value="${valueCiudad}">
      </div> 
      
      <div class="mb-3">
          <label for="direccion" class="form-label">Sector:</label>
          <input id="Sector" for="direccion" type="text" class="form-control" value="${valueSector}">
      </div> 

      <div class="mb-3">
          <label for="correo" class="form-label">Calle:</label>
          <input id="Calle" for="correo" type="text" class="form-control" value="${valueCalle}"> 
      </div>

      <label for="contact-type" class="form-label">Carrera:</label>
      <select id="Contact" class="form-select" value="${valueContact}">
                  <option value="" selected>Seleccione una opcion</option>
                  <option value="Software">Software</option>
                  <option value="Multimedia">Multimedia</option>
                  <option value="Redes">Redes</option>
              </select>
          </div>

        <div>   
      <button id="btn-save" type="button" class="btn btn-dark float-end me-3">Continuar</button>  
      <button id="btn-clear" type="button" class="btn btn-dark float-end me-2 mb-1">Limpiar</button>   
      </div>
`;

  
    $("#content-container").html(Form);
  
    }

    function GenerateHtmlContact(){

       if(valueContact == "Software"){
        const htmlContact = `

        <p> <a id="back"  href="#">Información Personal</a> > Seleccion </p>
      <div class="card">
      <div class="card-header bg-dark text-light">
      <h5 class="text-center fw-bold text-light">Selección - ${valueContact}</h5></div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Programacion Web
          </button>
        </h2>

        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Lun 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Lun 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Ma 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Ma 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Ma 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Mi 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Inteligencia Artificial
          </button>
        </h2>
        
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Lun 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Lun 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Mi 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Mi 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Ju 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Ju 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Base de Datos Avanzadas
          </button>
        </h2>

        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Vi 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Vi 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Do 9:00 - 12:00">
          <label for="academic-radio" class="form-check-label">Do 9:00 - 12:00</label>

          <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Sa 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Sa 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
            Fundamentos de Programacion
          </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Do 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Do 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Vi 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Vi 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Ma 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Ma 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
            Programacion 2
          </button>
        </h2>
        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Do 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Do 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Ju 9:00 - 12:00">
          <label for="academic-radio" class="form-check-label">Ju 9:00 - 12:00</label>

          <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Mi 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Mi 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <button id="btn-Continuar" class="btn btn-dark float-end mt-3 btn-delete me-2 mb-3">Continuar</button>    </div>  
    </div>
  </div>  
    `;

    $("#content-container").html(htmlContact);

      } else if(valueContact == "Multimedia"){

        const htmlContact = `

        <p> <a id="back"  href="#">Información Personal</a> > Seleccion </p>
        <div class="card">
        <div class="card-header bg-dark text-light">
        <h5 class="text-center fw-bold text-light">Selección - ${valueContact}</h5></div>
        <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Marketing
            </button>
          </h2>

          <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Lun 18:00 - 20:00">
            <label for="academic-radio" class="form-check-label">Lun 18:00 - 20:00</label>

            <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Ma 18:00 - 20:00">
            <label for="academic-radio" class="form-check-label">Ma 18:00 - 20:00</label>

            <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Mi 18:00 - 22:00">
            <label for="academic-radio" class="form-check-label">Mi 18:00 - 22:00</label>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Estadistica Basica
            </button>
          </h2>
          
          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Lun 18:00 - 20:00">
            <label for="academic-radio" class="form-check-label">Lun 18:00 - 20:00</label>

            <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Sa 8:00 - 12:00">
            <label for="academic-radio" class="form-check-label">Sa 8:00 - 12:00</label>

            <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Ju 18:00 - 22:00">
            <label for="academic-radio" class="form-check-label">Ju 18:00 - 22:00</label>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Historia Universal
            </button>
          </h2>

          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Vi 18:00 - 20:00">
            <label for="academic-radio" class="form-check-label">Vi 18:00 - 20:00</label>

            <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Do 9:00 - 12:00">
            <label for="academic-radio" class="form-check-label">Do 9:00 - 12:00</label>

            <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Sa 18:00 - 22:00">
            <label for="academic-radio" class="form-check-label">Sa 18:00 - 22:00</label>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
              Interactividad
            </button>
          </h2>
          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Do 18:00 - 20:00">
            <label for="academic-radio" class="form-check-label">Do 18:00 - 20:00</label>

            <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Vi 18:00 - 20:00">
            <label for="academic-radio" class="form-check-label">Vi 18:00 - 20:00</label>

            <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Ma 18:00 - 22:00">
            <label for="academic-radio" class="form-check-label">Ma 18:00 - 22:00</label>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
              Animacion 2D
            </button>
          </h2>
          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
            <div class="accordion-body">
            <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Do 18:00 - 20:00">
            <label for="academic-radio" class="form-check-label">Do 18:00 - 20:00</label>

            <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Sa 12:00 - 3:00">
            <label for="academic-radio" class="form-check-label">Sa 12:00 - 3:00</label>

            <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Mi 18:00 - 22:00">
            <label for="academic-radio" class="form-check-label">Mi 18:00 - 22:00</label>
            </div>
          </div>
        </div>

        <button id="btn-Continuar" class="btn btn-dark float-end mt-3 btn-delete me-2 mb-3">Continuar</button>

      </div>  
      </div>
    </div>  
      `;

    $("#content-container").html(htmlContact);


      } else if(valueContact == "Redes"){

      const htmlContact = `

      <p> <a id="back"  href="#">Información Personal</a> > Seleccion </p>
      <div class="card">
      <div class="card-header bg-dark text-light">
      <h5 class="text-center fw-bold text-light">Selección - ${valueContact}</h5></div>
      <div class="accordion accordion-flush" id="accordionFlushExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
            Sistemas Operativos 2
          </button>
        </h2>

        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Lun 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Lun 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Ma 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Ma 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType" id="radio" value="Mi 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Mi 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            Fisica General
          </button>
        </h2>
        
        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Lun 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Lun 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Mi 18:00 - 21:00">
          <label for="academic-radio" class="form-check-label">Mi 18:00 - 21:00</label>

          <input type="radio" class="form-check-input" name="ContactType1" id="radio1" value="Ju 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Ju 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            Pre Calculo
          </button>
        </h2>

        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Vi 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Vi 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Ma 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Ma 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType2" id="radio2" value="Sa 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Sa 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseThree">
            Redaccion Castellana
          </button>
        </h2>
        <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Do 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Do 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Vi 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Vi 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType3" id="radio3" value="Ma 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Ma 18:00 - 22:00</label>4
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="flush-headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseThree">
            Fundamentos de Seguridad
          </button>
        </h2>
        <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
          <div class="accordion-body">
          <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Do 18:00 - 20:00">
          <label for="academic-radio" class="form-check-label">Do 18:00 - 20:00</label>

          <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Ju 9:00 - 12:00">
          <label for="academic-radio" class="form-check-label">Ju 9:00 - 12:00</label>

          <input type="radio" class="form-check-input" name="ContactType4" id="radio4" value="Mi 18:00 - 22:00">
          <label for="academic-radio" class="form-check-label">Mi 18:00 - 22:00</label>
          </div>
        </div>
      </div>

      <button id="btn-Continuar" class="btn btn-dark float-end mt-3 btn-delete me-2 mb-3">Continuar</button>

    </div>  
    </div>
  </div>  
    `;

    $("#content-container").html(htmlContact);
    
  }
  
  }

    function Guardar(){ 

        valueName = $("#Name").val();
        valueProvincia = $("#Provincia").val();
        valueCiudad = $("#Ciudad").val();
        valueSector = $("#Sector").val();
        valueCalle = $("#Calle").val();
        valueContact = $("#Contact").val();
        valueRadio = $("#Radio-Container input[type='radio']:checked").val();
        

        if(Validate()){
            GenerateHtmlContact();
            Clear();
        }
        else {
            alert("Debe completar todas las casillas");
        }
    }

    function Clear(){
        $("#Name").val("").removeClass("input-error").removeClass("input-success").focus();
        $("#Provincia").val("").removeClass("input-error").removeClass("input-success");
        $("#Ciudad").val("").removeClass("input-error").removeClass("input-success");
        $("#Sector").val("").removeClass("input-error").removeClass("input-success");
        $("#Calle").val("").removeClass("input-error").removeClass("input-success");
        $("#Contact").val("").removeClass("input-error").removeClass("input-success");
    }
    
    function Validate(){
      
      let isValid = true;
      const valueName = $("#Name").val();
      const valueProvincia = $("#Provincia").val();
      const valueCiudad = $("#Ciudad").val();
      const valueSector = $("#Sector").val();
      const valueCalle = $("#Calle").val();
      const valueContact = $("#Contact").val();


        if(valueName == ""|| valueName == null || valueName == undefined) {
            isValid = false;
            $("#Name").addClass("input-error");
            $("#Name").removeClass("input-success");
         }
         else{
            $("#Name").addClass("input-success");
            $("#Name").removeClass("input-error");

         }

         if(valueProvincia == ""|| valueProvincia == null || valueProvincia == undefined) {
            isValid = false;
            $("#Provincia").addClass("input-error");
            $("#Provincia").removeClass("input-success");
         }
         else{
            $("#Provincia").addClass("input-success");
            $("#Provincia ").removeClass("input-error");

         }

         if(valueCiudad == ""|| valueCiudad == null || valueCiudad == undefined) {
            isValid = false;
            $("#Ciudad").addClass("input-error");
            $("#Ciudad").removeClass("input-success");
         }
         else{
            $("#Ciudad").addClass("input-success");
            $("#Ciudad").removeClass("input-error");

         }

         if(valueSector == ""|| valueSector == null || valueSector == undefined) {
            isValid = false;
            $("#Sector").addClass("input-error");
            $("#Sector").removeClass("input-success");
         }
         else{
            $("#Sector").addClass("input-success");
            $("#Sector").removeClass("input-error");

         }

         if(valueCalle == ""|| valueCalle == null || valueCalle == undefined) {
            isValid = false;
            $("#Calle").addClass("input-error");
            $("#Calle").removeClass("input-success");
         }
         else{
            $("#Calle").addClass("input-success");
            $("#Calle").removeClass("input-error");

         }

         if(valueContact == ""|| valueContact == null || valueContact == undefined) {
            isValid = false;
            $("#Contact").addClass("input-error");
            $("#Contact").removeClass("input-success");
         }
         else{
            $("#Contact").addClass("input-success");
            $("#Contact").removeClass("input-error");

         }
         

         return isValid;
    }

    function ValidateRadio(){

    let isValidd = true;

    const valueContactType = document.querySelector('input[name="ContactType"]:checked');
    const valueContactType1 = document.querySelector('input[name="ContactType1"]:checked');
    const valueContactType2 = document.querySelector('input[name="ContactType2"]:checked');
    const valueContactType3 = document.querySelector('input[name="ContactType3"]:checked');
    const valueContactType4 = document.querySelector('input[name="ContactType4"]:checked');

    if(valueContactType || valueContactType1 || valueContactType2 || valueContactType3 || valueContactType4 ){

    }else{
      isValidd = false
    }
    return isValidd;

    }

    function ConfirmRadio(){
     if(ValidateRadio()){
        GenerateConfirm();
      }
    else{
      alert("Error: debe elegir mínimo una asignatura");
      }
    }
})
