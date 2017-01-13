// How many way to declare variable
const A = 100;
const Color = {
    RED : 0,
    BLUE : 1,
    GREEN : 2,
}
let B = 10.9;

// Declare function in js have many way
// JS is not support overloadding function
let variableScope = ()=> {
    //const B = 10.1;
    if(true) {
        var A = 10;
        console.log("Local:",A);
    }
    console.log("Should be global:",A);
    let color = Color.BLUE;
    switch(color){
        case Color.BLUE :
            console.log("Value:",B);
            break;
    }

};
function notoverloadinJS(x,...b){
    console.log("Function A: "+x,b);
}
let objectFunction ={
    walk : function(){

    },
    run : ()=>{

    }
};

//variableScope();
//notoverloadinJS(1,2,3,4,5);



/// Type in Javascript and Enumerable data
let intTest = 10;
intTest = "Hello";
intTest = Date.now();
//console.log(Date(intTest));

let color = [ "red" , "green" ];
color.push("blue");
let [c,type1,type2] = color;
console.log([c,type1,type2]);

color.forEach((value,index,alldata)=>{
   console.log(value,index,alldata);

});
