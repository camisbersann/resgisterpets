class Pet{
    constructor(tutor, petname, species, pictureLink, birthdate){
        this.tutor = tutor;
        this.petname = petname;
        this.species = species;
        this.picture = pictureLink;
        this.birthdate = birthdate;
        this.yearAge = this.calculateAge();
        this.ageMonth = this.calculateAgeMonth();
    }

    calculateAge(){
        const birthDate = this.birthdate;
        const personYear = new Date(birthDate).getFullYear();
        const todayYear = new Date().getFullYear();
        const personMonth = new Date(birthDate).getMonth();
        const todayMonth = new Date(birthDate).getMonth() +1;

        const ageYear= todayYear - personYear;

       

        if(personMonth > todayMonth){
            return ageYear -1;
        }else{
            return ageYear;
        }
    }

    calculateAgeMonth(){
        const birthDate = this.birthdate;
        const personMonth = new Date(birthDate).getMonth();
        const todayMonth = new Date(birthDate).getMonth() +1;


        const ageMonth = todayMonth - personMonth;

        if(personMonth > todayMonth){
            return ageMonth -1;
        }else{
            return ageMonth;
        }
    }
}

class ListPet{
    constructor(){
        this.pets= [];
    }

    add(pet){
        if(verifyInputs() == false){
            this.pets.push(pet);
            clearInputs();

        }
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
            <p><strong>Data de Nascimento: </strong> ${dateinPTBR(pet.birthdate)}</p>
            <p><strong>Idade: </strong> ${pet.yearAge} anos e ${pet.calculateAgeMonth}</p>
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

    const formatedDate = Date(dateinPTBR)

    if(tutor == "" || petname == "" || species == "" || pictureLink == "" || birthdate == ""){
        sendMsg("Preencha todos os campos", "error");
        return true;
    }else if(isURLValida(pictureLink)){
        sendMsg("Link inválido", "error")
    }else if(formatedDate < dateinPTBR){
        sendMsg("Digite uma data válida")
    }else{
        sendMsg("Cadastrado com sucesso", "success");
        return false;
    }

}

function sendMsg(msg, typeMsg){
    let msgDiv = document.getElementById("msg");
    msgDiv.innerHTML= "";

    let msgForScreen= `
    <p class="${typeMsg}">${msg}`;

    msgDiv.innerHTML = msgForScreen;

    setTimeout(function(){
        msgDiv.innerHTML= '';
    },3000);

}

function clearInputs(){
    document.getElementById("input-tutor").value= "";
    document.getElementById("input-petname").value= "";
    document.getElementById("input-species").value= "";
    document.getElementById("input-picture").value= "";
    document.getElementById("input-birthdate").value= "";

}

function isURLValida(url) {
    if(url.match(/\.(jpeg|jpg|gif|png)$/) != null){
        return true;
    } else {
        return false;
    }
}

function dateinPTBR(date){
    let dateBR = date.split('-')
        dateBR.reverse()
        return dateBR.join('/')
}

