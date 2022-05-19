var sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10"); //değişkenin türünü sayıya dönüştürür.
sonuc = parseInt("10.6"); //yine değişkenin türünü değiştirir ama sadece 10 sayısını alır
sonuc = parseFloat("10.6"); //10.6 sayısını alır ve türünü değiştirir.
sonuc = parseInt("10a"); //bu methodta ise dönüştürebileceği karakterleri sayıya dönüştürür ve verir sonucu 10'dur.
sonuc = parseInt("a10"); //NaN yani not a number hatası verir.

sonuc = isNaN("10"); //burda girilen değer sayı değil midir sorusunu sorar.

var sayi = 15.12355467;

sonuc = sayi.toPrecision(5); //soldan itibaren 5 basamağını alır ve son basamağı kalan basamaklara göre yuvarlar.Stringtir.
sonuc = sayi.toFixed(5); //sadece noktadan sonra 5 sayı alır ve kalan sayıya göre son basamağı yuvarlar.Stringtir.

sonuc = Math.round(2.4); //içine verilen değeri en yakına yuvarlar.
sonuc = Math.ceil(2.2); //içine verilen değeri her zaman yukarıya yuvarlar.
sonuc = Math.floor(2.6); //içine verilen değeri her zaman alta yuvarlar.
sonuc = Math.sqrt(25); //karekök almadır.
sonuc = Math.pow(2,3); //2 üzeri 3 anlamına gelir üstel sayı mantığıyla çalışır.
sonuc = Math.abs(-10); //mutlak değer mantığıyla çalışır ve 10 sonucunu verir.
sonuc = Math.min(4,6,8,3,9); //verilen sayılar içerisindeki minumum değeri bulur.
sonuc = Math.max(4,6,8,3,9); //verilen sayılar içerisindeki maksimum değeri bulur.
sonuc = Math.floor(Math.random() * 100) + 50; //randım fonksiyonu 0 ile 1 arasında random sayılar üretir.

console.log(typeof sonuc);
console.log(sonuc);