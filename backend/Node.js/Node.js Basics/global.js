// Global Object
// console.log(global);
global.setTimeout(()=>{
    console.log("in the timeout");
    //will clear/stps the interval after 3sec
    clearInterval(int);
},3000)
//onlu run after 3sec
setTimeout(()=>{
    console.log("in the timeout");
},3000)
//run every 1sec
const int=setInterval(()=>{
    console.log("in the interval")
},1000)
// gets us the absolute path of the current folder
console.log(__dirname);
//gets us the absolute path of the folder with the file name added
console.log(__filename)