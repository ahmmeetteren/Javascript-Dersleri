//1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturun.

var meyveler = ["Elma", "Armut", "Muz", "Çilek"];

//2- Dizi kaç elemanlıdır?

sonuc = meyveler.length;

//3- Dizinin ilk ve son elemanı nedir?

sonuc = meyveler[0]; //ilk eleman

sonuc = meyveler[meyveler.length - 1]; //son eleman

//4- Elma dizinin bir elemanı mıdır?

sonuc = meyveler.includes("Elma");

//5- Kiraz meyvesini listenin sonuna ekleyiniz.

sonuc = meyveler.push("Kiraz");

//6- Dizinin son 2 elemanını siliniz

sonuc = meyveler.splice(2, 2)

//7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

/*
    Öğrenci 1: Yiğit Bilgi 2010 (70,60,80)
    Öğrenci 2: Ada Bilgi 2012 (80,80,90)
    Öğrenci 3: Ahmet Turan 2009 (60,60,70)
*/

var ogrenci1 = ["Yiğit","Bilgi",2010,[70,60,80]];
var ogrenci2 = ["Ada","Bilgi",2012,[80,80,90]];
var ogrenci3 = ["Ahmet","Turan",2009,[60,60,70]];

var simdikiZaman = new Date();
var ogrenci1Yas = simdikiZaman.getFullYear() - ogrenci1[2];
var ogrenci2Yas = simdikiZaman.getFullYear() - ogrenci2[2];
var ogrenci3Yas = simdikiZaman.getFullYear() - ogrenci3[2];

var ogrenciYaslar = [ogrenci1Yas, ogrenci2Yas, ogrenci3Yas];

var ogrenci1NotOrt = (ogrenci1[3][0] + ogrenci1[3][1] + ogrenci1[3][2])/3;
var ogrenci2NotOrt = (ogrenci2[3][0] + ogrenci2[3][1] + ogrenci2[3][2])/3;
var ogrenci3NotOrt = (ogrenci3[3][0] + ogrenci3[3][1] + ogrenci3[3][2])/3;

var ogrenciOrtalamalar = [ogrenci1NotOrt, ogrenci2NotOrt, ogrenci3NotOrt];

console.log(ogrenciOrtalamalar);

