
function getHTMLForCauroselItem(animal, index) {
  return `
    <div class='carousel-item ${index===0?"active":""}'>
      <img src="${animal.imageURL}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>${animal.name}</h5>
        <p>Age: ${animal.age} Sex: ${animal.sex}</p>
      </div>
    </div>
  `;
}

function setupCaurosel() {
  let lions = zoo.animals.filter(x=>x.typeId==1);

  let div = document.getElementById('carousel-content'); 
  div.innerHTML = lions.map((x,index)=> {
      return getHTMLForCauroselItem(x, index);
    }).join("");
}

function processForm(event) {
  event.preventDefault();
}

function setupFormEventHandler() {
  
  // when user clicks "Submit" on form
  let submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", processForm);
}

setupFormEventHandler();
setupCaurosel();