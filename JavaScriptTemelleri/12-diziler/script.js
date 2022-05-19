var urunler = ["iphone 12","iphone 13","iphone 13 pro"]; //diziler bu şekilde tanımlanırlar.
var fiyatlar = [9000, 12000, 20000];
var renkler = ["gold","siyah","beyaz"];

var urun1 = ["iphone 12", 9000, "gold"];

var urun2 = [];
urun2[0] = "iphone 13";  //dizilere bu şekilde sonradan eleman da ekleyebiliriz.
urun2[1] = 12000;
urun2[2] = "siyah";

var urun3 = [
    "iphone 13 pro", 
    20000, 
    ["siyah","beyaz","mavi"] //dizi içerisinde dizi de tanımlayabiliriz
];

console.log(urun3[2]);
console.log(urun3[2][0]);
console.log(urun3[2][1]); //dizi içerisindeki dizinin karakterlerine bu şekilde ulaşılabilir.
console.log(urun3[2][2]);
console.log(typeof urun3[2]);

console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);

console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`); //backtick yardımıyla bir cümle içerisinde belirlenen değişkenler yazdırılabilir.
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);

var kursAdi = "JavaScript Dersleri";
console.log(kursAdi[1]);
console.log(kursAdi.split(" ")[1]);