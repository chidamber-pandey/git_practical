let{URL}=require('url');
let url=new URL("https://localhost:3000/path/abc?username='abc'#contact");
console.log(url.host);
console.log(url.hash);
console.log(url.hostname);
console.log(url.href);
console.log(url.searchParams.get('username'));
console.log(url.pathname);
console.log(url.port);
console.log(url.protocol);


let url1="https://example.com:8080/test/home?username='pqr'&id=12121#login"  