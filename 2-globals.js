console.log(__dirname);
console.log(__filename);
let a = 1;
setTimeout(() => {
    console.log(a);
    a = a+1;
}, 5000);