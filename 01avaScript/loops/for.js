///  for  -- loop , sikl 
// let summa = 7 ;
// for (let i = 1; i <= 10; i++) {
//     //   let summa = 5 ;  /// update bomidi 
//       summa = summa + 1 ;
//       console.log(i ,  summa);
// }


// for (let i = 10; i > 1; i--) {
//     //   let summa = 5 ;  /// update bomidi 
//     //   summa = summa + 1 ;
//       console.log(i , "asfjbasl");
// }


////////////// 
/////            0            1        2       3       4 
// const fruits = ["Banana", "Orange", "Mango" ,"nok" , "anor" , "bans"];

// for (let i = 0; i < fruits.length ; i++) {
// //    console.log(i);
//    console.log(fruits[i] + " ye ");
// }

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);









// const arr = [
// {Company: "Beeline", kod: 90},
// {Company: "Beeline", kod: 91},
// {Company: "Mobiuz", kod: 88},
// {Company: "Mobiuz", kod: 97},
// {Company: "Ucell", kod: 93},
// {Company: "Ucell", kod: 94},
// {Company: "Uzmobile", kod: 99},
// {Company: "Uzmobile", kod: 95},
// {Company: "Humans", kod: 33},
// {Company: "Perfectum Mobile", kod: 98}
// ]

// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i].kod == 94) {
//         console.log(arr[i].Company);
//         break;
//     }
// }

//// console definition 

// console.log("sfosd");  // argument => parametr

// const consoles = {
//    logs : function (data){
//      con.innerHTML = data
//     }
// }

// // consoles.logs("marufjon" , "salom" , "dlkfhoasf") 
// // ...

// // console.log();

// console.log("marufjon" , "salom" , "asojfhoasjf");

//
// let a = function () {}
///
// function a(x) {
//     console.log(x);
// }
// a("axror");


// /// 
// let a = ()=>{}


////////////////////////

/// 1) k va n butun son berilgan. K ni n marta chiqaruvchi dastur tuzing

// let k = 30 ; 
// let n = 6 ;

// for (let i = 0; i < n ; i++) {
//     console.log(k);  
// }


//// 2) a, b sonlar beilgan. A b dan katta a va b orasidagi butun sonlarni chiqaruvchi dastur tuzing. A va B ni ozi ham chiqsin

// let a = 20 ; 
// let b = 2 ; 
// for (let i = b; i <= a; i++) {
//      console.log(i); 
// }

// for (let i = a-1; i > b; i--) {
//     console.log(i); 
// }


// 4) 1kg konfet 10000so'm berilgan. 1 kgdan 10 kggacha barchasin narxini chiqaruvchi dastur tuzing

// ///  
// let summa = 10000;
// for (let i = 1; i <= 10; i++) {
//    console.log(`${i} kg konfet ${i*summa} so'm`); 
// }

///// 6) 1kg konfet 10000so'm. 1,2kg, 1,4, 1,6, 1,8, 2kg konfetlarni narxini toping

// let summa = 10000;
// for (let i = 11; i <= 20; i++) {
//   if (i%2 == 0) {
//      console.log( `${i/10} kg konfet ${(i/10)*summa} som ` );
//   }
// }


//// 7) a,b sonlar berilgan. A dan b gacha barcha butun sonlarni yig'indisin topuvchi dastur yozing

// let a = 3 ; 
// let b = 5 ;
// let s = ((a+b)/2)*(b-a+ 1)
// console.log(s);

// 16) n son berilgan 0 va ngacha sonlar orasida 5 ga karralisini tashlab o'tib ketuvchi dastur tuzing

// let n  = 36 ;
// for (let i = 0; i <=n; i++) {
//     if (i > 0) {
//         if (i%5) {
//             console.log(i);
//         }
//         else{
//             console.log(`${i} soni 5 ga karrali `);
//         }
//     }
// }


let n  = 36 ;
let x = 4
for (let i = 0; i <=n; i++) {
    if (i > 0) {
        if (i%x == 0 ) {
            continue 
        }
        else{
            console.log(i);
        }
    }
}

/// vazifa

// 11) n soni berilgan shu soni ichidan toqlarin ko'ruvchi dastur yozing
// 12) n soni berilgan shu sonlarni ichidan juftlarini koruvchi dastur yozing
// 13) n soni berilgan shu son ichidan faqat murakkab sonlarni aniqlovchi dastur yozing
// 14) n soni berilgan shu sonlarni ichidan jufat va toq sonlarni kvadratlarini chiqaring
// 15) n son berilgan n sonidan kamayish tartibida sonlar chiqarilsin


// 24) karra jadvalini chiqaruvchi dastur tuzing;

// 2x0=0
// 2x1=2













