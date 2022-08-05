var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animals = /** @class */ (function () {
    function Animals(animal) {
        this.type = animal.type;
        this.name = animal.name;
        this.color = animal.color;
        this.foot = animal.foot;
    }
    return Animals;
}());
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action(animal) {
        return _super.call(this, animal) || this;
    }
    Action.prototype.eat = function () {
        if (this.color === 'noir')
            console.log("Vous donnez a manger a un ".concat(this.type));
        else
            console.log("Vous ne pouvez pas nourrir un ".concat(this.type, " qui n'est pas noir"));
    };
    Action.prototype.swim = function () {
        if (this.type === 'poisson')
            console.log("Vous voyez nager un ".concat(this.name, "."));
        else
            console.log("Cet animal ne peut pas nager ici.");
    };
    Action.prototype.fly = function () {
        if (this.type === 'oiseau')
            console.log("Vous voyez voler un ".concat(this.name, "."));
        else
            console.log("Cet animal ne peut pas voler.");
    };
    Action.prototype.cry = function () {
        if (this.type === 'chat')
            console.log("Vous voyez miauler un ".concat(this.type, " ").concat(this.name, "."));
        else if (this.type === 'chien')
            console.log("Vous voyez aboyer un ".concat(this.type, " ").concat(this.name, "."));
        else
            console.log("Cet animal ne peut pas miauler ou aboyer.");
    };
    Action.prototype.caress = function () {
        if (this.foot === 4)
            console.log("Vous caressez un ".concat(this.type, " ").concat(this.name, "."));
        else
            console.log("Cet animal ne peut pas \u00EAtre caresser.");
    };
    Action.prototype.photo = function () {
        console.log("Vous prenez une photo de ".concat(this.type, " ").concat(this.name, "."));
    };
    return Action;
}(Animals));
var catOne = new Action({ type: 'chat', name: 'européen', color: 'noir', foot: 4 });
catOne.eat();
catOne.swim();
catOne.fly();
catOne.cry();
catOne.caress();
catOne.photo();
var catTwo = new Action({ type: 'chat', name: 'chartreux', foot: 4 });
catTwo.eat();
catTwo.swim();
catTwo.fly();
catTwo.cry();
catTwo.caress();
catTwo.photo();
var dogOne = new Action({ type: 'chien', name: 'terre-neuve', color: 'noir', foot: 4 });
dogOne.eat();
dogOne.swim();
dogOne.fly();
dogOne.cry();
dogOne.caress();
dogOne.photo();
var dogTwo = new Action({ type: 'chien', name: 'moon moon', foot: 4 });
dogTwo.eat();
dogTwo.swim();
dogTwo.fly();
dogTwo.cry();
dogTwo.caress();
dogTwo.photo();
var fishOne = new Action({ type: 'poisson', name: 'requin' });
fishOne.eat();
fishOne.swim();
fishOne.fly();
fishOne.cry();
fishOne.caress();
fishOne.photo();
var fishTwo = new Action({ type: 'poisson', name: 'thon' });
fishTwo.eat();
fishTwo.swim();
fishTwo.fly();
fishTwo.cry();
fishTwo.caress();
fishTwo.photo();
var birdOne = new Action({ type: 'oiseau', name: 'merle', color: 'noir', foot: 2 });
birdOne.eat();
birdOne.swim();
birdOne.fly();
birdOne.cry();
birdOne.caress();
birdOne.photo();
var birdTwo = new Action({ type: 'oiseau', name: 'mésange', foot: 2 });
birdTwo.eat();
birdTwo.swim();
birdTwo.fly();
birdTwo.cry();
birdTwo.caress();
birdTwo.photo();
var maggot = new Action({ type: 'asticot' });
maggot.eat();
maggot.swim();
maggot.fly();
maggot.cry();
maggot.caress();
maggot.photo();
