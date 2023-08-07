// Sum of digits using function:

// var a = [1,2,3,4,5,6];
// var b = 0;
// function sum(a)
// {
//   for(var i=0;i<a.length;i++)
//   {
//     b = b+a[i];
//   }
// return b;
// }
// console.log(sum(a));


// Sum of digits using Anonymous Function:

// var a = [1,2,3,4,5,6];
// var b = 0;
// var c = function (a)
// {
//   for(var i =0;i<a.length;i++)
//   {
//     b = b+a[i];
//   }
//   return b;
// }
// console.log(c(a));


// Sum of digits using IIFE Function:

// (function sum(a){
//   var b = 0;
// for(var i =0;i<a.length;i++)
// {
//    b = b+a[i];
// }
// console.log(b)
// })
// ([1,2,3,4,5,6])


// Sum of digits using Arrow Function:

// const a= (sum) => {
//   var b = 0;
//   for(var i =0;i<sum.length;i++)
//   {
//     b = b + sum[i];
//   }
//   return b;
// };
// console.log(a([1,2,3,4,5,6]));


// Title Caps using function:

// function caps(str) {
//     str = str.toLowerCase().split(' ');
//     for (let i = 0; i < str.length; i++) {
//         str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//     }
//     return str.join(' ');
// }
// console.log(caps("WELCOME TO GUVI"));


// Title Caps using Anonymous Function:

// var a = function (str){
//   str = str.toLowerCase().split(" ");
//   for (let i = 0; i < str.length; i++){
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(' ');
// };
// console.log(a("WELCOME TO GUVI"));


// Title Caps using IIFE Function:

// (function a(str){
//   str = str.toLowerCase().split(" ");
//   for (let i = 0; i < str.length; i++){
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   console.log(str.join(" "));
// })("WELCOME TO GUVI");


// Title Caps using Arrow Function:

// const a = (str) => {
//   str = str.toLowerCase().split(" ");
//   for (let i = 0; i < str.length; i++){
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return (str.join(" "));
// };
// console.log(a("WELCOME TO GUVI"));


// Palindrome using Function:

// function a(str) {
//     var rev=str.split("").reverse().join("");
  
//     if(rev == str){
//         return true
//     }
//     return false           
// } 
// var str1 = "madam";
// var str2 = "guvi"; 
// console.log(a(str1));
// console.log(a(str2));


// Palindrome using Anonymous Function:

// var a = function (str) {
//   var rev=str.split("").reverse().join("");
//   if(rev == str){
//      return true
//   }
//   return false
// };
// var str1 = "malayalam";
// var str2 = "racer";
// console.log(a(str1));
// console.log(a(str2));


// Palindrome using IIFE Function:

// (  function a(arr)
// {
// for (let i = 0; i<arr.length; i++)
// {
//     var rev = arr[i].split("").reverse().join("");
//     if(rev==arr[i])
//     {
//         console.log("true");
//     }
//     else
//     {
//         console.log("false");
//     }
//             }
// })(["level","hello","10"]);

// Palindrome using Arrow Function:

// const a = (str) => {
// for (let i = 0; i<str.length; i++)
// {
//     var rev = str[i].split("").reverse().join("");
//     if(rev==str[i])
//     {
//         console.log("true");
//     }
//     else
//     {
//         console.log("false");
//     }
// }
            
// };
// (a(["civic","malayalam","121"]));

// Find odd numbers in an array using function:

// var a=[1,2,3,4,5,6,7,8,9];
// var b=[];
// function odd(a)
// {
//   for( var i=0; i<a.length; i++)
//   {
//     if(a[i]%2!=0)
//     {
//       b.push(a[i]);
//     }
//   }
//   return b;
// }
// console.log(odd(a));

// Find odd numbers in an array using Anonymous function:

// var a=[1,2,3,4,5,6,7,8,9];
// var b=[];
// var odd=function (a)
// {
//   for( var i=0; i<a.length; i++)
//   {
//     if(a[i]%2!=0)
//     {
//       b.push(a[i]);
//     }
//   }
//   return b;
// }
// console.log(odd(a));

// Find odd numbers in an array using IIFE function:

// (function odd(a) {
//     var b = [];
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] % 2 != 0) {
//         b.push(a[i]);
//       }
//     }
//     console.log(b);
//   })([1,2,3,4,5,6,7,8,9]);

// Find odd numbers in an array using Arrow function:

// const odd = (a) => {
//     var b = [];
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] % 2 != 0) {
//         b.push(a[i]);
//       }
//     }
//     return b;
//   };
//   console.log(odd([1,2,3,4,5,6,7,8,9]));


