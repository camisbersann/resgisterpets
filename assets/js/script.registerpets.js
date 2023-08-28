class Pet{
    constructor(tutor, petname, species, picture, birthdate){
        this.tutor = tutor;
        this.petname = petname;
        this.species = species;
        this.picture = picture;
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
    let picture = document.getElementById("input-picture").value;
    let birthdate = document.getElementById("input-birthdate").value;

    const pet = new Pet(tutor, petname, species, picture, birthdate);

    console.log(pet);

    libraryPet.add(pet);

    showPet();


}