var simdi = new Date(); //şimdiki tarih ve saati simdi değişkeninin içerisine atar.

// Get Methotları
sonuc = simdi;
sonuc = simdi.getDate();    //gün bilgisini getirir
sonuc = simdi.getDay();     //gün bilgisini getirir ama index şeklinde getirmektedir. 0: pazar 6: cumartesi
sonuc = simdi.getFullYear(); //yıl bilgisini getirir
sonuc = simdi.getHours();   //saat bilgisini getirir
sonuc = simdi.getTime(); //şu anki zamanı milisaniye olarak getirir.

// Set Methotları
simdi.setFullYear(2025); //yılı 2025 olarak ayarlar
simdi.setMonth(7);          //ayı 7 olarak ayarlar ama aylar indexlere göredir. 0. index Ocağı temsil eder.
simdi.setDate(15); //günü 15 olarak ayarlar

sonuc = simdi;

var dogumTarihi = new Date(1999, 8, 20); //burda Date fonksiyonunun farklı bir kullanımı var burda kendimiz de parametreler
//atayabilmekteyiz.

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi; //burda ise bize yaşımızı milisaniye olarak geçen süre şeklinde verir ve biz bunu
//saniye dakika saat gün şeklinde dönüştürebilmekteyiz.
let saniye = milisecond / 1000;     //saniye cinsinden hali gibi.
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

sonuc = gun;

//date ve times hakkında daha detaylı bilgi w3 school adresinden öğrenilebilir.

console.log(sonuc);
console.log(typeof sonuc);

