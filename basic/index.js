//   alert("Hello Kant How Are You?");
//   console.log("hello buddy");
//  let a="454";
//  console.log(a);
//  console.log(typeof Number(a));

// let s = "my name is kant";
// console.log(s.indexOf("a")); // 'include' to find existing or not

// let w ="i m the Don of the Universe";
// console.log(w.split(" "));
// console.log(w.replace("m","am"));
// console.log(w.length);
// console.log(w.substring(4, 5));
// console.log(w.substr(1, 6));

// let e="kant"; //not working shows error in innerText

// let heading=document.getElementById("myHeading");
// heading.innerText=e;
// heading.style.backgroundColor ="red";
// heading.style.color = "white";

// console.log(s.myHeading);


// let iceCream = Number(prompt("Type a number"));

// if (iceCream === 10){
//   console.log("ice-Cream is blue Lagoon");
// }
// else if(iceCream === 30){
// console.log("ice Cream is cone");
// }else if(iceCream <= 9.99){
//   console.log("ice Cream lenge  Bhag Sale");
// }
// else if(iceCream >= 500){
//   console.log("ice Cream lenge  Bhag Sale chhuta nahi hai");
// }

//               <!-------- Switch ------->
// switch (iceCream) {
//   case 10:
//     console.log("iceCream is blue lagoon");    
//     break;
//     case 30:
//       console.log("iceCream is Cone");    
//       break;

//   default:
//       console.log("iceCream is Random ne haii");    
//     break;
// }

//   ------------ loop -------------

// for(let i=5; i<10; i=i+1){
//   console.log(Math.random());
// }

// for(let i=0; i<10; ++i){
//   console.log("Hi");
//   console.log(Math.random());
// }

// ------------ While loop ------------
// let i=0;
// while(i<10){
//   console.log("Hello");
//   ++i;
// }

// ------------- Do While loop ---------

// let i=0;
// do{
//   console.log("hello");
//   ++i
// }
// while(i<10);

// ------------- Array ------------

// let arr= [23,45,24,25,0,88];
// let arr2=["kant","amit","Sumit","Bablu","Asish"];
// console.log (arr[0]);
// console.log (arr);
// console.log (arr2);
// console.log (arr2[0]);

// let arr = [];              -- // not happen in c++ 
// arr[0]=12;
// arr[1]=15;
// arr[2]=18;
// arr[3]=78;
// arr[4]=46;
// arr[5]=1;

// console.log(arr);
// console.log(arr.length);

// let arr= new Array(5);      -- //adding array

// console.log(arr);

// let arr = [1,2,3,5,76,67,99,23,56,66];

// arr.push(7);                   -- // back add
// arr.push(7);
// arr.pop();                     --  //  back delete
// arr.shift();                   -- // remove the first element of the array
// arr.unshift(55);                 --  // add in the first element of the array
// arr.splice(2,3);               --   //  remove data from any where in the array


// let newArr = arr.slice(1, 5);

// console.log(arr);
// console.log(newArr);

// console.log(arr);
// console.log(arr.includes(5));


// let arr = [];

// for(let i=0; i<10; ++i){
// arr.push("kant");
// }
// console.log(arr);

// const myObj = {
//   name: "Kant",
//   surname: "Bhai",
//   income:200000000000000000,
//   male:true,
// };

// const myObj2 = {
//   0: "Kant",
//   1: "Bhai",
//   2:200000000000000000,
//   3:true,
// };

// console.log(myObj);
// console.log(myObj2[2]);

// myObj.newData ="Beta";
// myObj.date = "pata nahi";
// console.log(myObj);


// ---------- function ----------

// function printtheValue(a,b,c){
//   let result=(a*10 + b*10 +c*10)/10;
//   result=result*2*10;
//   console.log(result);
//   result=result/20;
//   console.log(result);

// }

// printtheValue(45,45,45);
// printtheValue(23,23,23);


// const myFunc = function (a=0,b=0,c=0) {
//   let result = (a*10+b*10+c*10);
//   return result;

// };
// console.log(myFunc(10,45,45));

// function intro(name,channel) {
//   console.log(`hi i m ${name}. Please subscribe my channel ${channel}`);
//   console.log(`my income is $ ${myFunc(1,2,3)}`);
// }

// intro("Kant","codebank_universe");


// -------------- Array addition ----------

// function totalofArray(arr=[]) {
//   let total=0;

//   for (let i=0; i<arr.length; ++i){
//     total=total+arr[i];
//   }
//   return total;
// }

// const arr = [1,2,3,4,5,6];
// console.log(totalofArray(arr));

// ------------ scope --------------

// function totalofArray(arr=[]) {
//   let total=0;

//   for (let i=0; i<arr.length; ++i){
//     total=total+arr[i];
//   }
//   return total;
// }

// {
//   console.log(`checking.....   `);
// }


//---------------------- document style / DOM - doc menupulation --------------
//  console.log(document.getElementsByClassName("okey")); 

// const thisOne =document.getElementsByName("email")); 
// console.log(thisOne);

const thisOne = document.getElementsByTagName("span");
// thisOne[0].innerHTML =`<span class="myClass">Nice</span>`;

thisOne[0].style.backgroundColor = "navy";
thisOne[0].style.color = "#fff";
thisOne[0].style.font = "100 1.5rem 'roboto'";
console.log(thisOne[0]);
const myBtn = document.getElementById("myBtn");

myBtn.style.backgroundColor = "blue";
myBtn.style.color ="#fff";
myBtn.style.border = "none";
myBtn.style.padding = "2vmax 4vmax";
myBtn.style.cursor ="pointer";


// console.log(document.documentElement);
//console.log(document.body.firstElementChild);

//console.log(document.body.childNodes);
// console.log(document.body.children);

// const arr = document.body.children;
// const newArr = Array.from(arr);
// for(let i=0; i< newArr.length; ++i){
//   console.log(newArr[i]);
// }


// console.log(document.getElementById("thisOne"));