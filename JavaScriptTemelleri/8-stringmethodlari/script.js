var kursAdi = "Komple Uygulamalı JavaScript Geliştirme Eğitimi.";

var sonuc;

sonuc = kursAdi.toLowerCase();  //tüm harfleri küçük yapar
sonuc = kursAdi.toUpperCase();  //tüm harfleri büyük hale getirir
sonuc = kursAdi.length; //tanımlanan stringin uzunluğunu verir
sonuc = kursAdi[1]; //1. indexi getirir.
sonuc = kursAdi.slice(0, 6); //slice methodu stringi belirtilen indexlerden bölmeye yaramaktadır.
sonuc = kursAdi.slice(10);
sonuc = kursAdi.slice(-10); //-10 demek sondan 10. indexten başla anlamına gelir.
sonuc = kursAdi.slice(-10, -5);

sonuc = kursAdi.substring(0, 6); //slice ile aynı görevi görmektedir.
sonuc = kursAdi.substring(10);

sonuc = kursAdi.replace("Eğitimi","Kursu"); //sol tarafına yazılan kelimenin yerine sağ taraftakini eklemektedir.
sonuc = kursAdi.trim(); //sağ ve soldaki boşlukları siler
sonuc = kursAdi.trimEnd(); //sadece sağdaki boşlukları siler
sonuc = kursAdi.trimStart(); //sadece soldaki boşlukları siler

sonuc = kursAdi.indexOf("Komple"); //"Komple" kelimesinin index numarasını verir.
sonuc = kursAdi.split(" "); //parantez içine yazılan karakterden itibaren stringi böler ve dizi halinde verir.
sonuc = kursAdi.split(" ")[0]; //dizinin 0. indexini getirir.
sonuc = kursAdi.split(" ")[3]; //dizinin 3. indexini getirir.


//daha detaylı bilgilere w3 school adresinde bulabilmekteyiz. Javascript string methods yazarak.

console.log(sonuc);