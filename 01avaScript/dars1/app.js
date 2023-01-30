//// Variable - o'zgaruvchi 

/// data type 
// let x = 3457 ; 
// let y = x ;
// let son = '5' ; //  srting 
// let a1 = typeof(y) // malumot turini aniqlaydi 
// console.log( a1 )
// console.log(typeof(son));

// console.log("davron");
// console.log("davron");
// console.log("davron" , son);

// var ism = "ali" ;
// const names = 'ism' ///  string 
// console.log(names);


/// number , string , boolean 
// // true , false -- rost , yolg'on 
// let ads = true ; 
// console.log(typeof(ads));


// let a = '14fh' ; 
// let b = 2 ; 

/// num + num = num    ; 
// str + num = string ;   
// str(num) * num = num ; 
// str(str) * num = NaN   =>  not a nummer

//// === Number methods 

// let x = '25' ; 
// console.log(typeof(x));

// // 1 -usul
// // x = x * 1 ;
// // console.log(typeof(x));

// // 2 -usul
// let son = Number(x)
// console.log(typeof(son));

// // 3 -usul
// let son2 = parseInt(x)
// console.log(typeof(son2));

// // 4 -usul
// let son3 = +x
// console.log(typeof(son3));

//// 
// let abc = +"davron"
// // let aaa = +abc ; 
// console.log(typeof(abc) , typeof(d) , d * abc);



//// ==== operators   + , - , * , / , % , ** , -- ,++

// % => qoldiq 
// let x =  10  ; 
// let y = 7 ; 
// console.log(x % y);


// // ** => daraja 
// let x =  10  ; 
// let y = 4 ; 
// console.log(x ** y);

// ++ => incerement  
// let x =  10  ; 
// x++  //   x  = x + 1 
// console.log(x);

// -- => decerement  
// let y =  10  ; 
// y-- 
// y = y - 4//   y  = y + 1 
// console.log(y);

/////  String methods ==== 

// let txt = "ASDFGF" ; 
// let son = 5 ; 
//  console.log(typeof( son.toString() ));  // stringga o'tish 
//  console.log(txt.length); /// uzunlik

       //   123456 
// let text = "davron"
// /// ===  slice(start, end) ;
// console.log(text.slice(2 , -1 ));

// /// === substring(start, end)
// console.log(text.substring(2 , -4 ));

// /// === substr(start, length)
// console.log(text.substr(-2 , 4 ));

// let txt = "Please visit Microsoft and Microsoft , nd Microsoft";

// console.log(txt.replace(/Microsoft/g,"davron"));

// let newText = txt.replace("Microsoft", "davron");
// let newTexaat = newText.replace("Microsoft", "davron");

// console.log(txt);
// console.log(newText);
// console.log(newTexaat);

///// Object == obyekt 
//  // x , y  ,s , roadsider  , cybertruck , 
// const odam = {
//   ///  key  : value
//        ism : "davron" , 
//        fam : "aliyev" ,
//        yosh : 15  , 
//        student : false ,
//        talim : {
//               maktab : "78-maktab" , 
//               sinf : "7a" ,
//               addres : {
//                      tuman : "Chilonzor" , 
//                      daha : 23 
//               }
//        }  
// }


// let malumot = ` mening ismim ${odam.ism} , yoshim ${odam.yosh}da `
// console.log(malumot);

// console.log(odam.talim.maktab);
// console.log(odam.fam);

// /////================================================

// let info = prompt("NICKNAME kirit ... ");
// let info1 = prompt("LOGIN kirit ... ");
// let info2 = prompt("PAROL kirit ... ");

// let person = {
//        nickname : info, 
//        login : info1 , 
//        pass : info2 
// }
// person.nickname = "Zubaydullo" ;  /// update 
// person.addres = "toshkent"

// console.log(person); 

////////////////////

// JavaScript has 8 Datatypes
// 1. String // 
// 2. Number  // 
// 3. Bigint -- 
// 4. Boolean  // 
// 5. Undefined 
// 5. Null
// 7. Symbol --
// 8. Object // 

// let aa =2423
//  let person = {
//        nickname : 'info', 
//        login : 'info1' ,
//        pass : 'aa' 
//  }
// person.
// console.log(null);
// console.log(undefined);
// console.log("hello");



///////////////   ===== Math 
/// pow  daRAJA
// console.log(Math.pow(3 , 4));
// let x = +prompt("asosni kirit") ; 
// let y = +prompt("daraja kirit")  ; 
// let nat = Math.pow(x , y)
// console.log(nat);


//// === modul
// console.log(Math.abs(-4623));

/// ===  yaxlidlash 
// let nat = Math.floor(4.9); /// pastga yaxlidlaydi
// let nat1 = Math.ceil(4.6);  // tepaga  yaxlidlaydi
// let nat2 = Math.round(-4.6);  // matematik  yaxlidlaydi
// let nat3 = Math.trunc(-4.6);  // matematik  yaxlidlaydi
// console.log(nat2);
// console.log(nat3);


/// random == tasodifiy
// let a = Math.round(Math.random()*100) ; 
// let d = Math.floor(Math.random()*10) ; 
// ///// ikki xonali son asos , 1 xonali son daraja 
// let matem = {
//        asos : a ,  /// random 
//        dar : d     /// random 
// }
// let nat = `${matem.asos} ning ${matem.dar} chi darajasi
//  ${Math.pow(matem.asos , matem.dar)} ga teng`

// console.log(nat);

////   15 ning 2 chi darajasi 225 ga teng 


///// 2 misol 

// let yosh = prompt("yoshini kirirt " ) ; 
// let ism = prompt("ism kirirt " ) ; 
// console.log(`menig ismim ${ism} , yoshim ${yosh}`);

//// 3 - misol

// let yil = +prompt("tugulgan yilingizni kiriting " ) ; 
// console.log( `siz ${yil } tugulgansz yoshingiz ${2022 - yil}`);

/// 4 - misol 
// let text = "bu yil 2022-yil" ;
// console.log(text.slice(7 , 11 ));
// console.log(text.substr(7 , 4 ));
// console.log(text.replace("yil" , "kun")); /// birinchi uchragan
// console.log(text.replaceAll("yil" , "kun")); /// xammasini almashtiradi 

////// 5  - misol 

// let yozuv = prompt("dastur tilini yoz");
// let language = `Java Script juda ajoyib til , Java Script da ko'p funksiyalar
//  bajarsa boladi , Java Script ga 1997-yil asos solingan `;
// console.log(language.replaceAll('Java Script' , yozuv));

/////////


// let txt = "aliJON" ; 
// let a = txt.toLocaleUpperCase()
// console.log(a);

// let b = txt.toLocaleLowerCase()
// console.log(b);

//// 6- misol
// let language = `java Script juda ajoyib til`;
// let nat = language.slice(0,1).toLocaleUpperCase() + language.slice(1)
// console.log(nat);

/////  7- misol 

// let yozuv = prompt("some text") ;
// console.log(yozuv.toLocaleLowerCase());




