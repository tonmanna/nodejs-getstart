class Singleton {
    constructor(){
        console.log("Singleton Construction");
        this.myWord = "Hello Everyone";
    }
}

var singleton = {};
singleton.instance = null;
singleton.getInstance = function(){
    if(this.instance === null){
        this.instance = new Singleton();
    }
    return this.instance;
};
module.exports = singleton.getInstance();
