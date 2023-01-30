
// const arr = ['fdfhj','hgdag','tera','gb']
// arr.sort()
// console.log(arr);
 

// const arr1 = [3,13,65,0,23]
// arr1.sort()
// document.querySelector('#tera').innerHTML=arr1

// function git() {
//     arr1.sort(function(a,b) {
//         return (b-a)  
//     })
//    document.querySelector('#tera1').innerHTML=arr1
// }


/// pop()  , push()
/// shift() , unshift() 
//  sort() , join() , concat() , slice(0 , 2) , splice( 1 , 4)
// 

// at()
///              0  1  2  3     4
// const array1 = [5, "davron", 8, 130, 44];
// console.log(array1[1] , array1.at(-2)) ;

/////   flat()
// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(2));


////// Array.from()
// console.log(Array.from('davron'));


/////    includes()
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));

// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));

/// indexof
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison' , 2));

//// lastIndexOf

// const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
// console.log(animals.lastIndexOf('Dodo'));   // last oxirgi
// console.log(animals.lastIndexOf('Tiger'));

///// reverse teskari almashtirish
// const array1 = ['one', 'two', 'three'];
// console.log( array1.reverse());


/////////////  Arrow function   , call back hell 
// function set(params) {
//     alert("fasd")
// }


// ()=>{}

// let helo = document.querySelector('.helo');

// helo.addEventListener( 'click' , (x)=>{
//      let a = 3 ;
//      let nat = a + 5
// })


///// filter 
/// filter(callbackFn)
// const words = ['spray', 'limit', 'elite', "spray", 'exuberant', 'destruction',"asf" ,'present'];
// const result = words.filter( (x)=>{ 
//     return x == "spray"
// } );
// console.log(result);

///// find()

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);
// // const found1 = array1.find((element) =>{
// //     return element > 10
// // });

// console.log(found);

//////// 
// const array1 = [5, 12, 8, 20 ,10, 44];
// console.log(array1.findIndex((element) => element > 13));

//// arrayning ichida objectlar bor 

// const arr = [
//     {
//       age: 16 , 
//       names: "ali"
//     },
//     {
//       age: 20 , 
//       names: "gani"
//     },
//     {
//       age: 16 , 
//       names: "vali"
//     },
//     {
//       age: 15 , 
//       names: "umar"
//     }
//   ]
  
//   ////// vazifa : yoshi bir xil odamlarni ismini bitta arrayga soling  | yosh 16
  
// arr.map( (x) => {
//   if (x.age == 16) {
//      console.log(x.names);
//   }
// })



/////// if else -- condtions 
// =
// == tekshirish

// console.log(x = 6 );
// console.log(x === '6');  /// == uzunlik ozini ,  === data type 
 ///  =!,  ==! , < , > , <= , >=

// let x = +prompt("son kirit")
// let x = 5
// if (x == 7) {
//   console.log("teng 1");
// }
// else if(x === 5){
//   console.log("teng 2");
// }
// else if(x === 4){
//   console.log("teng 3");
// }
// else {
//   console.log(`teng emas`);
// }


// 1) A butun son berilgan. Jumlani rostlikka tekshiring: A son musbat
// let a = 4;
// if (a > 0) {
//   console.log(true);
// }
// else{
//   console.log(false);
// }
///////
// a > 0 ? console.log(true) : console.log(false);

////// 2) A butun son berilgan. Jumlani rostlikka tekshiring: A toq son
/////  3) A butun son berilgan. Junlani rostlikka tekshiring: A juft son
// let a = 3 ;
// if (a == 0) {
//   console.log("son 0 ga teng toq ham juft ham emas");
// }
// else{
//   if (a%2) { // 2 ga bolinganda qoldiq qolsa // true
//     console.log("toq son");
//   }
//   else {
//     console.log("juft son");
//   }
// }

// 4) Ikkita butun son berilgan. Jumlani rostlikka tekshiring. a > 0 && b > 0
/// va &&  ,   yoki ||
// let a = 5 ;
// let b = 2 ;

// if (a > 0 && b > 0) {
//   console.log("2 si ham 0 dan katta");
// }
// else{
//   console.log("2 si ham 0 dan kichkina");
// }

//=== 5) 3 ta son berilgan a,b,c. a bdan katta b c dan katta rostlikka tekshiring
//=== 6) a, b, c, son berilgan. B son a va c sonlarni orasida yotadi.
// let a = 4;
// let b = 5;
// let c = 1;

// if (a > b && b > c) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 7) a, b sonlar berilgan sonlarni toq songa tekshiring.

// let a = 5 ;
// let b = 7  
// if ((a+b)%2 == 0) { //    (a%2 && b%2)
//   console.log(true);
// } else {
//   console.log(false);
// }

// 9) a,b,c sonlar berilgan kamida ikkitasi musbat berilgan
// let a = 3;
// let b = 0;
// let c = -4;

// if (a > 0 && b > 0 || a > 0 && c > 0 || c>0 && b>0) {
//    console.log(true);
// } else {
//   console.log(false);
// }

// 10) hafta kunlari berilgan raqamga qarab hafta kunlarini nomini chiqaring

// let son = +prompt("hafta kuni soni");
// console.log( isNaN(son*1)  ); // isNaN
// console.log(5 == 5);
// if (son == '') {
//   console.log("son kirit ");
// }
// else if(isNaN(son*1)){ // NaN
//    console.log("harf yozma ");
// }
// else{

//   if (son == 1) {
//     console.log("dush");
//   }
//   else if (son == 2) {
//     console.log("sesh");
//   }
//   else if (son == 7) {
//     console.log("yak");
//   }
//   else{
//     console.log("hafta kuni xato");
//   }
  
// }



/// typeof NaN   // 'Number'
//   123 === 123 // true
//   NaN === NaN // false
//   NaN == NaN  // false

/// vazifa  
// 11) Telefon nomer kodi orqali qaysi kompaniya ekanligini tekshiring
// 12) Butun son berilgan agar son musbat bo'lsa unda sonni bittaga oshiring aks xolda 1taga kamaytiring
// 13) Butun son berilgan agar son musbat bo'lsa sonni 3 ga oshiring manfiy bo'lsa unda 2ga kamaytiring
// 14) Ikkita butun son berilgan kattasin aniqlovchi dastur tuzing
// 15) 3 ta butun son berilgan eng kattasini aniqlovchi dastur tuzing
  


/// 25) 3 xonali son berilgan har bir raqamlari har xil

// let x = '322';
// let xArr = Array.from(x)

// if (xArr[0] != xArr[1]  && xArr[0] != xArr[2] && xArr[1] != xArr[2]) {
//   console.log(true);
// } else {
//   console.log(false);
// }


// //// 26) 3 xonali son berilgan raqamlari ketma ket o'sib boruvchi joylashgan
// let x = '356';
// let xArr = Array.from(x)
// if ( +xArr[2] < +xArr[1] < +xArr[0] ) {
//     console.log(true);
// }else{
//     console.log(false);
// }



////// swich case 

// switch (1) {
//   case 1:
    
//     break;

//   default:
//     break;
// }


// let key = +prompt("hafta kuni sonini kirit")
// switch (key) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//      day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }
// console.log(day);









