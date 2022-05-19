var url = "https://www.ahmeterenyilmaz.com/";
var kursAdi = "JavaScript Dersleri";

//1-url kaç karakterlidir?

sonuc = url.length;

//2-kursAdi kaç kelimeden oluşmaktadır?

sonuc = kursAdi.split(" ").length;

//3-url https ile mi başlıyor?

sonuc = url.startsWith("https");

//4-kursAdi içerisinde Eğitimi kelimesi var mı ?

sonuc = kursAdi.includes("Eğitimi");

//5- url ve kursAdi değişkenlerini kullanarak https://www.ahmeterenyilmaz.com/JavaScript-Dersleri adresini oluşturun

var kursAdiWeb = kursAdi.replace(" ","-");

sonuc = url+kursAdiWeb;

















console.log(sonuc)