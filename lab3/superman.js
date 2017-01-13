const Singleton = require("./singleton");

class Superman {
    constructor(power,bHuman){
        console.log("Superman Construction");
        this.power = power;
        this.bHuman = bHuman;
    }

    getText(){
        return ` Power Level  ${ this.power } in ${ this.bHuman? "human" : "superman" } form`;
    }

    print(){
        console.log(this.getText());
        Singleton.myWord = "Superman Lover";
    }
}

//export { Superman } es6
//exports = module.exports;
module.exports = Superman;
