function selamlama(msg) { //fonksiyon tanımı bu şekildedir. parantez içine parametre alır.
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");  //fonksiyonlar birden fazla kez çaprılabilir.
selamlama("iyi günler");

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili; //return methodu sonucu bize döndürmeye yarar.
}

var yasAhmet = yasHesapla(1985);
var yasAyse = yasHesapla(1987);

console.log(yasAhmet, yasAyse);

function emekliligeKacYilKaldi(dogumYili, isim) { //fonksiyonun içerisinde değişken tanımlanabilir ve if else blokları kullanılabilir.
    var yas = yasHesapla(dogumYili);
    var kalan_sene = 65 - yas;

    if (kalan_sene > 0) {
        console.log(`${isim}, emekli olmanıza ${kalan_sene} yıl kaldı.`); //backtick kullanımı
    } else {
        console.log("zaten emekli oldunuz.");
    }
}

emekliligeKacYilKaldi(1980, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");