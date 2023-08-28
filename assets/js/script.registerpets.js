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