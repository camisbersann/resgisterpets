class Pet{
    constructor(tutor, petname, species, pictureLink, birthdate){
        this.tutor = tutor;
        this.petname = petname;
        this.species = species;
        this.picture = pictureLink;
        this.birthdate = birthdate;
    }
}

class ListPet{
    constructor(){
        this.pets= [];
    }

    add(pet){
        this.pets.push(pet);
    }
}

const libraryPet= new ListPet();

function createPet(){
    let tutor = document.getElementById("input-tutor").value;
    let petname= document.getElementById("input-petname").value;
    let species = document.getElementById("input-species").value;
    let pictureLink = document.getElementById("input-picture").value;
    let birthdate = document.getElementById("input-birthdate").value;

    const pet = new Pet(tutor, petname, species, pictureLink, birthdate);

    console.log(pet);

    libraryPet.add(pet);

    showPet();
}

function showPet(){
    const listHTML = document.getElementById("container-list");
    listHTML.innerHTML = "";

    let listArray = libraryPet.pets;

    listArray.forEach(pet => {
        const html = `
            <div class="petdetail">
            <img src= "${pet.pictureLink}" alt="${pet.petname}" 
            <p><strong>Tutor: </strong> ${pet.tutor}</p>
            <p><strong>Nome do Pet: </strong> ${pet.petname}</p>
            <p><strong>Espécie: </strong> ${pet.species}</p>
            <p><strong>Data de Nascimento: </strong> ${pet.birthdate}</p>
            </div>
        
        `
        listArray.innerHTML += html;
    });
}

function verifyInputs(){
    let tutor = document.getElementById("input-tutor").value;
    let petname= document.getElementById("input-petname").value;
    let species = document.getElementById("input-species").value;
    let pictureLink = document.getElementById("input-picture").value;
    let birthdate = document.getElementById("input-birthdate").value;

    if(tutor == "" || petname == "" || species == "" || pictureLink == "" || birthdate == ""){
        sendMsg("Preencha todos os campos", "error");
        return true;
    }else if(isURLValida(pictureLink)){
        sendMsg("Link inválido", "error")
    }else{
        sendMsg("Cadastrado com sucesso", "success");
        return false;
    }
}


function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}