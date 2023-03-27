// function myFunction() {
//     alert("Hello! I am an alert box!");
//   }
//   myFunction();
//   console.log(myFunction);

//   alert("I'm invoked");
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`World`);
// alert(3 
//   +1 +
//    2); // this is multiple line code and its working

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+" "+lname;
// alert( admin ); // "Guvi geek"

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// name = fname+" "+lname;
// alert( "hello"+" "+name ); //hello Guvi geek

// var a = prompt("first number?");
// var b = prompt("second number?");
// var x=parseInt(a);
// var y=parseInt(b);

// alert(x+y);

// var a = 2;
// var b = 12;
// var c ;// value need to seperate and enter then we need to set the condition
// //Don't touch below this
// if (c=a>b) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }   //without entering any values by giving nan value we could get success

// let value = prompt('How many runs you scored in this ball');
// if (value == 4) {
//       console.log("You hit a Four");
// } else if (value == 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// } //by entering the == we can set the condition

// let login = 'Employee';
// let message = ((login == 'Employee') ? 
//   (login == 'Director') ? 'Greetings' 
//   (login == '') ? 'No login' :
//   '');
// console.log(message);

// You cant change the value of the msg
// let message;
// char 2;
// if (null != 2 && != 'undefined')
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

//   let message;
// let lock = 0;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);//by setting empty value to lock we would get answer

//   let message;
// let lock = 0;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message");//by adding the extra character then by settinng the lock values in zero

//You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( i-- );
// } //--i to change has i--

// let num;
// for (num = 1;num<=10;num+= 1)
// {
// console.log(num)
// }

// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

// let gifts = ["teddy bear","drone","doll"];
// for (let i = 0; i < 3; i++) 
// {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = " ";
 
// for (var i = 1; i < 11; i++) {
//  new_string += numsArr[i] 
// }
// console.log(new_string);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var new_string = "";
 
// for (var i = 1; i < 11; i--) {
//  new_string += numsArr[i] + ","
// }
// console.log(new_string);

// var new_string = "";
 
// for (var i = 11; i > 0; i++ ) {
//     if(numsArr[i]%2==1)
//     {
//         numsArr[i]=even
//     }
//  new_string += numsArr[i] + "even" 
// }
// console.log(new_string);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = odd
//  }
// }
// console.log(numsArr);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i] %2 == 0 )
//  {
//  numsArr[i] = even
//  }
// }
// console.log(numsArr);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// for (var i = 0; i <=10; i++) {
//  var sum;
//  sum += numsArr[i]
// }
// console.log(sum);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=0;
// for (var i = 0; i <10; i++) {
//  if(numsArr[i]%2==0);
//  sum += numsArr[i]
// }
// console.log(sum);

// var numsArr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// var sum=100;
// for (var i = 0; i <=10; i++) {
//  if(numsArr[i]%2!=0);
//  {
//  sum += numsArr[i]
//  }
//  else
//  {
//  sum -= numsArr[i]
//  }
// }
// console.log(sum);

// var numsArr = [[1, 2, 3, 4, 5][ 6, 7, 8, 9, 10, 11]];
// for (var i = 0; i < numsArr.length; i++); {
//  console.log( numsArr[i])
// }

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;i++ )
//       if(numsArr[i] %2 == 0 )
//       {
//          numsArr[i] = even
//        }
// }
// console.log(numsArr);

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var str_all=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = inner_array.length; j < 0 ;j-- )
//      str_all +=inner_array[j]
// }
// console.log(str_all);

// var numsArr = [[1, 2, 3, 4, 5],[ 6, 7, 8, 9, 10, 11]];
// var sum_odd=0;
// var sum_even=0;
// for (var i = 0; i < numsArr.length; i++) {
//  var inner_array = numsArr[i];
//  for(var j = 0 ; j < inner_array.length;j++ ){
//  if(numsArr[i]%2!=0)
//  {
//  sum_odd += numsArr[i]
//  }
//  else
//  {
//  sum_even += numsArr[i]
//  }
// }
// }
// console.log(sum_odd);
// console.log(sum_even);

// //Code:

// aa = (f,s,t) => {
//  let f,s,t;
//  console.log(f,s,t);
//  if(f>s &&f>t){
//  console.log(f)}
//  else if(s>f && s>t){
//  console.log(s)}
//  else{
//  console.log(t)}
// }
// aa(1,2,3);

// //Code:

// let n = 123;
// console.log(add(n));
// function add(n)
// {
// let sum = 10;
// for(var i=0;i<n.length;i++){
//  sum+=n[i]
//  }
//  return sum;
// }

// //Code:

// const arr = [9,8,5,6,4,3,2,1];
// (function() {
//  let sum = 0;
//  for (var i = 0; i <= arr.length; i++);{
//  sum += arr[i];
//  }
//  console.log(sum);
//  return sum;
// })();

// //Code:

// var arr = [“guvi”, “geek”, “zen”, “fullstack”];
// var ano = function(arro) {
//  for (var i = 0; i <= arro.length; i++) {
//  console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
//  }
// }
// ano();

// //Code:

// const newArray=[1,3,2,5,10];
// const myPrime=newArray.filter(num=>{
//  for(let i=2;i<=num;i++){
//  if(num%i===0)
//  {
//  return true;
//  }
//  }
//  return num===1;
// });
// console.log(myPrime);

// //Code:

// const num = [10, 20, 30, 40,50,60,70,80,90,100] 
// const sum = (a, b) =>
//  a + b
// const sum = num.reduce(sum)
// console.log(sum);

// //Code:

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();

// //Code:

// var arr = [“guvi”, “geek”, “zen”, “fullstack”];
// (function() {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[0][i].toUpperCase() + arr[i].substr(1));
//  }
// })();

// //Code:

// var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
// (function() {
//  for (var i = 0; i < arr.length; i++) {
//  if (arr[i] % 2 === 0) {
//  console.log(arr[i]);
//  }}
// })();

// //Code:

// var res = function(arr){
//  for(var i=0; i < arr.length; i++){
//  newArr = [];
//  if(newArr.indexOf(arr[i]) == -1) {
//  newArr.push(arr[i]);
//  } }
//  console.log(newArr)
// }
// res(["guvi","geek","guvi","duplicate","geeK"])

// //Code:

// var array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
// var final=[]
// while(array.length!=0)
// {
//  var outer_remove = array.shift();
 
//  while(outer_remove.length!=0)
//  {
//  var inner_remove = outer_remove.shift()
//  var key = inner_remove[0]
//  var value =inner_remove[1]
//  new_object[key]=value
//  }
//  final.push(new_object)
// }


// // Fix the code to give the below output:

// // Sum of odd numbers in an array

// // Code:


// var as=[12,34,5,6,2,56,6,2,1];
// var s=as.reduce(function(a,c){
//  if(c%2!=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(s);


// //Fix the code to give the below output:

// //Swap the odd and even digits

// //Code:

// aa = data=>{
//  var a=data;
// for(i=0;i<a.length-1;i++){
//  var l='';
//  var s=a[i+1]
//  var b=a[i]
//  l+=s
//  l+=b
//  i=i+1
// }
// if((a.length%2)!=0){
//  l+=a[a.length-1]
// }
// console.log(l);
// }
// aa("1234");