var ad = "Ahmet";
var soyad = "Eren";
var yas = 22;
var sehir = "İzmir";

//Alttaki kullanım kaba tabirle ilkel kullanımdır bunu backtick ile daha kolay ve sade hale getirebiliriz.

var mesaj = "Benim adım " + ad + ' ve soyadım ' + soyad + '. ' + sehir + '\'de yaşıyorum.' + 'Emekliliğe ' + (65 - yas) + ' yılım kaldı.';

// Allttaki kullanım ise backtick(``) ile kullanım şeklidir. Google yardımıyla daha fazla bilgi alabiliriz.
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.Emekliliğe ${65 - yas} yılım kaldı.`;

// Alttaki kullanım ise ternary operators başlığı altına girmektedir. ternary if else bloğu gibi düşünülebilir.
// var emeklilik = (65 - yas > 0) ? "" : "" soldaki çift tırnak true olduğunda sağdaki çift tırnak ise false olduğunda
// emeklilik değişkenin atılır.
var emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65-yas) + " yıl kaldı." : "Zaten emekli oldunuz.";

mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum.${emeklilik}`;

console.log(mesaj);