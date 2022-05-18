var urunSayisi = "100"; //String
var urunFiyat = "50";

console.log(urunSayisi + urunFiyat); //Çıktısı 10050 olacaktır çünkü değişkenler string türündedir.
console.log(Number(urunSayisi) + Number(urunFiyat)); //Bu şekilde numbera dönüştürerek 150 sonucunu elde edebiliriz.

var maasPersonel = 1000; //Number
var zam = 0.3;

console.log(maasPersonel.toString() + zam.toString()); //Bu şekilde de değişkenleri numverdan stringe dönüştürebiliyoruz.

var boolean = true;
var boolean2 = false; //3 tane farklı boolean değişken tipinin kullanım türleri verilmiştir.
var boolean3 = (50 > 30);

console.log(boolean3); //True sonucunu verir.

var yas; //undefined değişken türü kullanımı eğer bir değer vermezsek değişken undefined olmaktadır.

console.log(typeof yas); //typeof komutuyle değişkenin tipini öğrenebilmekteyiz.