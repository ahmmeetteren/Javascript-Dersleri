// yas >= 18
// mezuniyet == "lise" ya da mezuniyet == "üniversite"

var mezuniyet = "üniversite";
var yas = 20;

if (yas >= 18 && (mezuniyet == "lise" || mezuniyet == "üniversite")) { //yaşı 18'den büyük ve lise veya üniversiteden mezunsa ehliyet alabilir anlamına gelir.
    console.log("ehliyet alabilir");
} else {
    console.log("ehliyet şartları tutmuyor.")
}

//Mantıksal Operatörler

// && (and, ve anlamlarına gelmektedir.)
// true , true => true      iki değerinde true olması durumunda true döndürür.
// true , false => false    iki değerden herhangi biri false ise false değerini döndürmektedir.

// || (or, veya anlamlarına gelmektedir.)
// true, true => true   iki değerden herhangi biri true ise sonucu true döndürmektedir.
// true, false => true
// false, false => false    iki değerde false ise false değerini döndürmektedir.