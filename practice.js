class Student{
    constructor(name){
        this.myName = name;
    }
    //instance method
    details(){
        return "My name "+this.myName;
    }
    //static method we don't call from child class
    static biodata(){
        console.log("Static")
    }
}


class Product extends Student{
        constructor(name,game){
            super(name);
            this.myGame = game;
        }
        list(){
            return "My name is " + this.myName + " This game is "+ this.myGame;
        }
        playerDetails(){
            return `${super.details()}`;
        }
        
}


let Obj = new Product("Rishi","polo")
Obj.details()
Obj.list()
Obj.playerDetails()
