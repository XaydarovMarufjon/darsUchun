
//index bosh qiy;  shart ; qadam
//    for (let i = 20; i <= 30; i++) {
//       console.log( i );
//    }

// for (let i = 10; i > 4; i--) {
//       console.log(i , "danl");
//   }

/////           0        1       2       3
// const cars = ["Saab", "Volvo", "BMW" , "malubu"];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i] + " uzb");
// }

/////// ======>>  VAZIFA   <<======

/// SWICH CASE <==
// 1) 1-7 gacha butun son berilgan kiritilgan songa mos ravishda hafta kunini so'zlarda ifodolovchi dastur tuzing
// 2) K butun son berilgan Baho natijalarini chiqaruvchi dastur tuzing. 1-yomon, 2-qoniqarsiz, 3-qoniqarli, 4-yaxshi, 5 - alo
// 3) Oy raqami berilgan Kiritilgan oy qaysi faslga tegishli ekanin chiqaruvchi dastur tuzing. M - s 2 - qish
// 4) Bahoga qarab stependiyani aniqlovchi dastur tuzing

////    FOR  <===
//  1) k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing
 
// let k = 23; 
// let n = 5; 
// for (let i = 1; i <= n; i++) {
//       console.log(` ${i}-marta ${k}`);
// }


//  2) a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin
// let a = 45;
// let b = 25;
// for (let i = b; i <= a; i++) {
//   console.log(i);   
// }


// 3) a,b sonlar berilgan a b dan katta a va b orasidagi barcha butun sonlarni kamayish tartibida chiqaring a va b kirmasin 

// let a = 45;
// let b = 25;
// for (let i = a; i >= b; i--) {
//   console.log(i);   
// }




//////////////

// 4) 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing

// let narx = 10000;

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i}kg konfet ${i*narx}`);    
// }

// 6) 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping

// let narx = 10000;

// for (let i = 12; i <= 20; i++) {
 
//    if (i%2 == 0) {
//      let kg = i/10
//      console.log(` ${kg} kg konfet ${kg*narx} ` );   
//    }

// }


// 11) n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing
// let n = 52 ;
// for (let i = 0; i <=n; i++) {
//      if (i%2 ) { /// toq sonlar
//         console.log(i**2);
//      }
// }


// 16) n son berilgan 0 va n gacha sonlar orasida 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing

// let n = 52 ;
// for (let i = 0; i <=n; i++) {
//      if (i%5 ) { /// true 
//         console.log(i);
//      }
// }

// 17) n butun son berilgan ngacha butun sonlarni ko'paytmasini topuvchi dastur tuzing

// let n = 6 ;
// let summa = 1 ;
// for (let i = 1; i <= n; i++) {
//   summa = i*summa 
// }

// console.log(summa);

//// vazifa 
// 7) a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing
// 8) a,b sonlar berilgan. A dan b gacha barcha butun sonlarni ko'paytmasin topuvchi dastur yozing
// 9) a,b sonlar berilgan a dan b gacha bo'lgan sonlarni kvadratlarini yig'indisin topuvchi dastur toping


///// for sikl 

// console.log("davron");
// console.log("davron");
// console.log("davron");
// console.log("davron");
// console.log("davron");
// console.log("davron");

// for (let i = 5; i <= 10; i++) {
//     console.log(i , "davron");
// }


// let car = ["bmw" , "lambo" , "gm" , "firza" , "ferrari"] // 5

// for (let i = 0; i < car.length; i++) {
//     console.log(car[i] );
// }

/////// 


// 20) n va x sonlar berilgan 0 dan n gacha sonlar orasida x ga bo'linadigan sonlarni topuvchi dastur tuzing

// let n = 24;
// let x = 3;

// for (let i = 1; i <= n; i++) {
//   if (i%3 == 0) {
//     console.log(i);  
//   }  
// }


// 24) karra jadvalini chiqaruvchi dastur tuzing
// let x = +prompt("nechchi karrani bilmoqchisz");
// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} x ${x} = ${i*x}`);   
// }

/// misol 25;
// 1 dan 100 gacha bo'lgan butun sonlarni takrorlaydigan 
// JavaScript dasturini yozing. Lekin uchta ko'paytmalar uchun raqam o'rniga 
// "Fizz" ni va beshga karrali uchun "Buzz" ni bosing. Uch va beshga karrali 
// raqamlar uchun "FizzBuzz" ni chop eting

// for (let i = 1; i <=100; i++) {
//   if (i%3 == 0 && i%5 == 0) {
//     console.log("FizzBuzz");
//   } 
//   else if(i%3 == 0) {
//     console.log("Fizz");
//   }
//   else if(i%5 == 0) {
//     console.log("Buzz");
//   }
//   else {
//       console.log(i);
//   }
// }


////////// /

///
// *  
// * *  
// * * *  
// * * * *  
// * * * * *

// let chr;
// for(x=1; x <=6; x++)
// {
//      for (y=1; y < x; y++){
//            chr=chr+("*");        
//       }
//     console.log(chr);
//     chr='';    
// }


//////  for in 
// const odam = {             
//   // key : value               
//      ism: "Davron", 
//      yosh: 12, 
//      talaba: false,
//      ball: [2,4,65,7,90]
//     };

//     for (const key in odam) {
//       console.log(odam[key]);// value 
//     //console.log(key);     // key 
//     }


////===> for of /// arrayning ichidagi elementlarni olib beradi 
///              0    1    2
// const array1 = ['a', 'b', 'c'];
// for (const element of array1) {
//   console.log(element);
// }

///// ==== ///// vazifa

// let list = [
//     {ism: "Ali",yosh: 26},
//     {ism: "vali",yosh: 40},
//     {ism: "Gani",yosh: 13},
//     {ism: "Toshmat",yosh: 14},
//     {ism: "Xolmat",yosh: 5},
//   ]
// let kino =[
//     { age: 12 , name : "titanic"},
//     { age: 7 , name :   "avatar"},
//     { age: 24 , name : "Panterra"},
// ]

//  for (let i = 0; i < list.length; i++) {
//      for (let a = 0; a < kino.length; a++) {

//        if (list[i].yosh > kino[a].age) {
//          console.log(` ${list[i].ism}ning yoshi ${list[i].yosh}da , ${kino[a].name} kinosiga bora oladi yosh chegarasi ${kino[a].age} `);
//        }
//        else {
//          console.log(` ${list[i].ism}ning  yoshi ${list[i].yosh}da  , ${kino[a].name} kinosiga bora olmaydi yosh chegarasi ${kino[a].age}  `);
//        }

//      }
//  }


///  yosh oraligiga qarab royxat tuzing , kinaga bora oladimi yoqmi 
//// Javob 
  /// Gani Titanik kinosiga bora oladi
  /// Gani Avatar kinosiga bora oladi  
  /// Gani Avatar kinosiga bora olmaydi  

 
/// 2) vazifa 
// * * * * *
// * * * * 
// * * *  
// * * 
// *  
///////////

// arrow funk , anomoym funk 
// funksyadan qiymatni tashqariga olib chiqish  return , argument , parametr 
// local o'zgaruvchi , global o'garuvchi 

// let a =  54;
// /// 
// const x = ( ...rest )=>{ // parametr
//   //  let nat = a + b
//    return  rest
//  }
// // console.log(a);
// console.log(x(1 , 2 , 3 , 23 , 532, 23,73,86,97, 96,80,7)); /// argument

// const Java = {
//   mylog :  function (...rest) {
//     con.innerHTML = rest
//   }
// }

// Java.mylog(a , "DAvron ")


//////  loop method
// foreach 
// // Callback function
// forEach(callbackFn)  // parametr

// // Arrow function
// forEach((element) => { /* … */ })
// forEach((element, index) => { /* … */ })
// forEach((element, index, array) => { /* … */ })



// const array1 = ['a', 'b', 'c'];

// array1.forEach((x , y , z) => {
//    console.log(x , y , z)
// } );

// for (let i = 0; i < array1.length; i++) {
//    console.log(array1[i] , i , array1);  
// }


//// map 


// // Arrow function
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })

// // Callback function
// map(callbackFn)



// let x = 65 ;
// x = 45 ;
// console.log(x); // map 45 // foeach 65



// /////  1) Birinchi massivning ikki barobari bo‘lgan sonlar massivini tuzing
// function doubleNumbers(arr){
//  return  arr.map( x => x*2)
// }

// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

//// 2 stringga aylantir

// function stringItUp(arr){
//    return arr.map( x => x.toString() )
// }

// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

///3) Ismlar massivining har birini bosh harf bilan yozing

// function capitalizeNames(arr){
//   return arr.map( x => x.toUpperCase() )
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

/// 
// function namesOnly(arr){
//   return arr.map( x => x.name )
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 
// // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


///////======>  vazifa   <======

// function makeStrings(arr){
//   arr.map( (x)=>{
//     if (x.age > 18) {
//        console.log(`${x.name}  can go to The Matrix` )    
//     }else{
//        console.log(`${x.name}  is under age!!` )    
//     }
//   })
// }
// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])); 

/////////////// ============== 

// 6) s dagi otlardan, s h1dagi yoshlardan massiv tuzing
// let z  = []
// function readyToPutInTheDOM(arr){
//   arr.map( (indx)=>{
//     z.push( `<h1> ${indx.name} </h1>  <h2> ${indx.age}</h2>` )
//   })

//   return z
// }
//  let nat = readyToPutInTheDOM([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ])

// console.log(nat);
// let con = document.querySelector("#con");
// con.innerHTML  = nat.join("")








