interface AnimalConf {
    type: string;
    name?: string;
    color?: string;
    foot?: number;
}


class Animals implements AnimalConf {
    type: string;
    name?: string;
    color?: string;
    foot?: number;
    constructor(animal: AnimalConf) {
        this.type = animal.type;
        this.name = animal.name;
        this.color = animal.color;
        this.foot = animal.foot;
    }
}

class Action extends Animals {
    constructor(animal: AnimalConf) {
        super(animal);
    }
    eat() {
        if(this.color === 'noir')
           console.log(`Vous donnez a manger a un ${this.type}`);
        else
            console.log(`Vous ne pouvez pas nourrir un ${this.type} qui n'est pas noir`);
    }
    swim () {
        if(this.type === 'poisson')
            console.log(`Vous voyez nager un ${this.name}.`);
        else
            console.log(`Cet animal ne peut pas nager ici.`);
    }
    fly () {
        if(this.type === 'oiseau')
            console.log(`Vous voyez voler un ${this.name}.`);
        else
            console.log(`Cet animal ne peut pas voler.`);
    }
    cry () {
        if(this.type === 'chat')
            console.log(`Vous voyez miauler un ${this.type} ${this.name}.`);
        else if(this.type === 'chien')
            console.log(`Vous voyez aboyer un ${this.type} ${this.name}.`);
        else
            console.log(`Cet animal ne peut pas miauler ou aboyer.`);
    }
    caress() {
        if(this.foot === 4)
            console.log(`Vous caressez un ${this.type} ${this.name}.`);
        else
            console.log(`Cet animal ne peut pas être caresser.`);
    }
    photo() {
        console.log(`Vous prenez une photo de ${this.type} ${this.name}.`);
    }
}

let catOne = new Action({type: 'chat', name: 'européen', color: 'noir', foot: 4});
catOne.eat();
catOne.swim();
catOne.fly();
catOne.cry();
catOne.caress();
catOne.photo();
let catTwo = new Action({type: 'chat', name: 'chartreux', foot: 4});
catTwo.eat();
catTwo.swim();
catTwo.fly();
catTwo.cry();
catTwo.caress();
catTwo.photo();
let dogOne = new Action({type: 'chien', name: 'terre-neuve', color: 'noir', foot: 4});
dogOne.eat();
dogOne.swim();
dogOne.fly();
dogOne.cry();
dogOne.caress();
dogOne.photo();
let dogTwo = new Action({type: 'chien', name: 'moon moon', foot: 4});
dogTwo.eat();
dogTwo.swim();
dogTwo.fly();
dogTwo.cry();
dogTwo.caress();
dogTwo.photo();
let fishOne = new Action({type: 'poisson', name: 'requin'});
fishOne.eat();
fishOne.swim();
fishOne.fly();
fishOne.cry();
fishOne.caress();
fishOne.photo();
let fishTwo = new Action({type: 'poisson', name: 'thon'});
fishTwo.eat();
fishTwo.swim();
fishTwo.fly();
fishTwo.cry();
fishTwo.caress();
fishTwo.photo();
let birdOne = new Action({type: 'oiseau', name: 'merle', color: 'noir', foot: 2});
birdOne.eat();
birdOne.swim();
birdOne.fly();
birdOne.cry();
birdOne.caress();
birdOne.photo();
let birdTwo = new Action({type: 'oiseau', name: 'mésange', foot: 2});
birdTwo.eat();
birdTwo.swim();
birdTwo.fly();
birdTwo.cry();
birdTwo.caress();
birdTwo.photo();
let maggot = new Action({type: 'asticot'});
maggot.eat();
maggot.swim();
maggot.fly();
maggot.cry();
maggot.caress();
maggot.photo();









    


