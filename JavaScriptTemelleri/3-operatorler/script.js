var sonuc;
var a = 10, b = 20, c = 32;

//Aritmetik Operatörler
sonuc = a + b;  //toplama
sonuc = a - b;  //çıkarma
sonuc = a * b;  //çarpma
sonuc = a / b;  //bölme
sonuc = c % a;  //mod değerini bulma

// sonuc = a++;  // a + 1 ifadesine eşittir
// sonuc = ++a;  // a + 1 ifadesine eşittir fakat sonuca 1 ekleyerek a değişkenini üzerine ekler.
// sonuc = --a;  // a - 1 ifadesine eşittir fakat sonuçtan 1 çıkararak sonuçtan a değişkenini çıkarır.
// sonuc = a--;  // a - 1 ifadesine eşittir

//Atama Operatörleri
sonuc = a;
sonuc += a // sonuc = sonuc + a 
sonuc -= a // sonuc = sonuc - a 
sonuc *= a // sonuc = sonuc * a 
sonuc /= a // sonuc = sonuc / a 
sonuc %= a // sonuc = sonuc % a 

//Karşılaştırma Operatörleri
sonuc = (a == b)    //a b'ye eşit mi sorusunu sorar.
sonuc = (a != b)    //a b'ye eşit değil midir sorusunu sorar.
sonuc = (3 === "3") //hem iki değişkenin değerini hem de tipini aynı anda sorgular.
sonuc = (a > b) //a b'den büyük mü sorusudur.
sonuc = (a < b) //a b'den küçük mü sorusudur.
sonuc = (a <= b) //a b'den küçük ve eşit mi sorusunu sorar.

//yukarıdaki karşılaştırma operatörleri sonuç olarak boolean değer döndürmektedir. (true-false)
console.log(sonuc);