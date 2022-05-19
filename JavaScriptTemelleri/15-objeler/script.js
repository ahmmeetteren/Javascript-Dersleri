//pythondaki sözlüklerin kullanımına benzemektedir.
var kullaniciA = {
    "ad": "Ahmet",
    "soyad": "Yılmaz",
    "yas": 23,                  //iç içe kullanma şekilleri, sol taraf anahtar kelime sağ taraf ise ona karşılık gelen değer.
    "adres": {
        "sehir": "İzmir",
        "ilce": "Buca"
    },
    "hobiler": ["Futbol","kodlama"]
}
var kullaniciB = {
    "ad": "Arda",
    "soyad": "Yılmaz",
    "yas": 20,
    "adres": {
        "sehir": "Ordu",
        "ilce": "Ünye"
    },
    "hobiler": ["GYM","Futbol"]
}

var sonuc;

sonuc = kullaniciA.ad;  //a kullanıcısının ad anahtar kelimesindeki değeri döndürür
sonuc = kullaniciA.soyad;
sonuc = kullaniciA["yas"];  //a kullanıcısının yas anahtar kelimesindeki değeri döndürür
sonuc = kullaniciA.adres.sehir; //a kullanıcısının adres anahtar kelimesinin altındaki dict ögesinin sehir anahtar kelimesindeki değeri döndürür
sonuc = kullaniciA.adres.ilce;
sonuc = kullaniciA.hobiler[0]; //a kullanıcısının hobiler dizisindeki 0. indexin değerini döndürür
sonuc = kullaniciA.hobiler[1];

var kullanicilar = [
    kullaniciA,             //dışarıda tanımlanan dictler bu şekilde dizi içine atılabilir.
    kullaniciB
];
sonuc = kullanicilar[1].ad;

var urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000         //bu şekilde direk dizi içine de tanımlama yapılabilmektedir.
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    }
]

sonuc = urunler[0].urun_adi;

console.log(sonuc);