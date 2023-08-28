let thereIsPet = false;

class Pet {
    constructor(tutor, petname, species, pictureLink, birthdate) {
        this.id = gerarId()
        this.tutor = tutor;
        this.petname = petname;
        this.species = species;
        this.picture = pictureLink;
        this.birthdate = birthdate;
        this.yearAge = this.calculateAge();
        
    }

    calculateAge() {
        let today = new Date();
        const birthDate = new Date(this.birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();

        if(month < 0 || (month == 0 && today.getDate() < birthDate.getDate())){
            age--;
        }

        if(month == 1){
            month += ` mês`;
        }else{
            month += ` meses`
        }

        if(age == 1){
            age= `${age} ano`
        }else{
            age = `${age} anos`
        }
        return `${age} e ${month}`; 
    }


}

class ListPet {
    constructor() {
        this.pets = [];
    }

    add(pet) {
        if (verifyInputs() == false) {
            this.pets.push(pet);
            clearInputs();
            thereIsPet = true;
        }
    }

    getAll() {
        return this.pets;
    }

    delete(id){
        this.pets = this.pets.filter(pet => (pet.id != id));
    }

     edit(id){
         if(flagId == id){
             let pet = this.pets.find((pet) => pet.id == id)

             pet.tutor = document.getElementById("input-tutor").value;
             pet.petname= document.getElementById("input-petname").value;
             pet.species = document.getElementById("input-species").value;
             pet.birthdate = document.getElementById("input-birthdate").value;
             pet.pictureLink = document.getElementById("input-picture").value;
             pet.id = flagId
             
             this.pets.forEach(pett =>{
                if(pett.id == flagId){
                    pett = pet;
                    flagId = -1;
                }
            })
         }
     }

      
}

 var flagId= -1;

const libraryPet = new ListPet();

function createPet() {
    let tutor = document.getElementById("input-tutor").value;
    let petname = document.getElementById("input-petname").value;
    let species = document.getElementById("input-species").value;
    let pictureLink = document.getElementById("input-picture").value;
    let birthdate = document.getElementById("input-birthdate").value;

    const pet = new Pet(tutor, petname, species, pictureLink, birthdate);

    // console.log(pet);

    if (flagId < 0) {
        libraryPet.add(pet);
        console.log(libraryPet)
    } else {
        editPet(flagId)
    }

    
    registerPet()
    showPet();
}

function showPet() {

    const listHTML = document.getElementById("container-list");
    listHTML.innerHTML = "";

    let listArray = libraryPet.pets;

    listArray.forEach(pet => {
        const html = `
            <div class="petdetail">
            <img src= "${pet.picture}" alt="${pet.species}" 
            <p><strong>Tutor: </strong> ${pet.tutor}</p>
            <p><strong>Nome do Pet: </strong> ${pet.petname}</p>
            <p><strong>Espécie: </strong> ${pet.species}</p>
            <p><strong>Data de Nascimento: </strong> ${dateinPTBR(pet.birthdate)}</p>
            <p><strong>Idade: </strong> ${pet.yearAge}</p>
            <button class="button" onclick="remove(${pet.id})">🗑</button>
            <button class="button" onclick="editPet(${pet.id})">🖊</button>
            </div>
        
        `
        document.getElementById("container-list").innerHTML += html;
    });

}

function verifyInputs() {
    let tutor = document.getElementById("input-tutor").value;
    let petname = document.getElementById("input-petname").value;
    let species = document.getElementById("input-species").value;
    let pictureLink = document.getElementById("input-picture").value;
    let birthdate = document.getElementById("input-birthdate").value;

    if (tutor == "" || petname == "" || species == "" || pictureLink == "" || birthdate == "") {
        sendMsg("Preencha todos os campos", "error");
        return true;
    } else if (!isURLValida(pictureLink)) {
        sendMsg("Link inválido", "error")
    } 
    else {
        sendMsg("Cadastrado com sucesso", "success");
        return false;
    }
}


function sendMsg(msg, typeMsg) {
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML = "";

    let msgForScreen = `
    <p class="${typeMsg}">${msg}`;

    msgDiv.innerHTML = msgForScreen;

    setTimeout(function () {
        msgDiv.innerHTML = '';
    }, 3000);

}

function clearInputs() {
    document.getElementById("input-tutor").value = "";
    document.getElementById("input-petname").value = "";
    document.getElementById("input-species").value = "";
    document.getElementById("input-picture").value = "";
    document.getElementById("input-birthdate").value = "";

}

function isURLValida(url) {
    if (url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
        return true;
    } else {
        return false;
    }
}

function dateinPTBR(date) {
    let dateBR = date.split('-')
    dateBR.reverse()
    return dateBR.join('/')
}

function registerPet() {
    document.getElementById("container-principal").classList.remove("hidden");
    document.getElementById("container-list").classList.add("hidden");
}

function listALotOfPets() {
    const tamanho = libraryPet.getAll().length;
    console.log(tamanho);
    
    if (tamanho == 0) {
        sendMsg("Não há usuários cadastrados","error");
        return;}
        else{
            document.getElementById("container-principal").classList.add("hidden");
            document.getElementById("container-list").classList.remove("hidden");
        }
  
}

function remove(id){
    libraryPet.delete(id);
    showPet();
}

function gerarId(){
    return Math.floor(Math.random()*9999)
}

function editPet(id) {
   libraryPet.edit(id);
   flagId = id
   let pet= libraryPet.pets.find((pet) => pet.id == id)

    document.getElementById("input-tutor").value = pet.tutor;
   document.getElementById("input-petname").value = pet.petname;
   document.getElementById("input-species").value = pet.species;
    document.getElementById("input-picture").value = pet.picture;
    document.getElementById("input-birthdate").value = pet.birthdate;
 }





