/* শর্ত :- arror handling এর জন্য   শুধু try  ব্যবহার করা যাবে না! 
try এর সাথে catch আথবা catch + finally  sintex use করে arror handle করতে হবে.....!!!! 

Java Script error handle  করার নিয়ম হলো :- 

try *{
console.log('inside');
}

যদি try এর ভিতর arror ধরা পড়ে তাহলে catch  এর ভিতরের   function  runn হবে।  

catch {
console.log(error);
console.log('inside catch');
}
যদি যদি try এর ভিতর arror না থাকে তাহলে catch  এর ভিতরের programme runn  না হয়ে 
finally {
console.log('inside');
} 
 function runn হয়ে যা */


try {
    console.log('inside-try');
}


catch (error) {
    console.log(error);
    console.log('aigdfhiauw');
}


finally {
    console.log('finally-don!');
}

