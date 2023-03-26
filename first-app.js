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
{   console.log(req.url);
    const getUrl= req.url;
    res.setHeader('Content-Type','text/html');
    if(getUrl==='/home')
    {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><p>Welcome Home</p></body>');
        res.write('</html>');
        res.end();
    }
    if(getUrl==='/about')
    {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><p>Welcome to about us page</p></body>');
        res.write('</html>');
        res.end();
    }
    if(getUrl==='/node')
    {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><p>Welcome to my node js project</p></body>');
        res.write('</html>');
        res.end();
    }
}
);
server.listen(3000);

