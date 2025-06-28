// git add .
//git commit -m "mensagem do que fez"
//git push

class superHeroi{
    constructor(name, age, typ){
     this.name = name;
     this.age= age;
     this.typ = typ
    }
attack(){
    let attack = "";

    if(this.typ === "Wizard"){
        attack = "Magic";
    } else if (this.typ === "Warrior"){
        attack = "Sword";
    } else if(this.typ === "Monk"){
        attack = "Martial arts";
    } else if (this.typ === "Ninja"){
        attack = "Shuriken";
    }else {
        attack = "An unknown attack"
    }
    
    console.log(`The ${this.typ} attacked using ${attack}`)
}    
}

let superHeroi_1 = new superHeroi("Cassio", 29, "Warrior");
let superHeroi_2=  new superHeroi("Caio", 31, "Wizard");
let superHeroi_3=  new superHeroi("Rodrigo", 42, "Monk");
let superHeroi_4=  new superHeroi("Brenda", 17, "Ninja");

superHeroi_1.attack();
superHeroi_2.attack();
superHeroi_3.attack();
superHeroi_4.attack();