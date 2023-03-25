/* let arr= ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(arr.map(fruit=>{
    if(fruit===' ')
    return 'empty string';
    else
    return fruit;
})); 

console.log('a');

console.log('b');

let promise = new Promise((res,rej)=>{
    res(setTimeout(console.log('c'), 3000));
});
let promise1 = new Promise((res,rej)=>{
    res(setTimeout(console.log('d'), 0));
});
//promise.then(promise1);
console.log('e'); */
const http= require('http');
const server = http.createServer((req,res)=>
{console.log('Server created by Abhay');}
);
server.listen(4000);

