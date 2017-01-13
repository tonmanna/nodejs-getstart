/**
 * Created by Tonman on 14/1/2560.
 */
/////Serial

function ran() {
    //return parseInt(Math.random()*5000);
    return 2000;
}

function a(cb) {
    console.log("Start A");
    setTimeout(function(){
       cb("Function A");
    },ran())
}

function b(cb) {
    console.log("Start B");
    setTimeout(function(){
        cb("Function B");
    },ran())
}

function c(cb) {
    console.log("Start C");
    setTimeout(function(){
        cb("Function C");
    },ran())
}

function d(cb) {
    console.log("Start D");
    setTimeout(function(){
        cb("Function D")
    },ran())
}

// a(function(result){
//     console.log(result);
//     b(function(result){
//         console.log(result);
//         c(function(result){
//             console.log(result);
//             d(function(result){
//                 console.log(result);
//                 console.log("END");
//             })
//         })
//     })
// });

var callFunction = [];
callFunction.push(a);
callFunction.push(b);
callFunction.push(c);
callFunction.push(d);
callFunction.push(a);
callFunction.push(b);
callFunction.push(c);
callFunction.push(d);
callFunction.push(a);
callFunction.push(b);
callFunction.push(c);
callFunction.push(d);
// callFunction.forEach(function(v){
//     v(function(result){
//         console.log(result);
//     });
// });

running = 0;
limit = 2;
index = 0;
maxitem = 12;
function callLimit() {
    while (running < limit && index < maxitem) {
        callFunction[index++](function (result) {
            running--;
            if (index < maxitem) callLimit();
            console.log(result);
        });

        running++;
    }
}

callLimit();