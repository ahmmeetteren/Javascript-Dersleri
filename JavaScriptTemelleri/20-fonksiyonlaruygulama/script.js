//1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu oluşturunuz.

function kelimeTekrar(tekrarSayisi, kelime){

    for(var i = 0; i < tekrarSayisi; i++){
        console.log(kelime);
    }
}

//2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.

function dikdortgenAlanCevre(genislik, uzunluk){
    var dikdortgenAlan = genislik*uzunluk;
    var dikdortgenCevre = (genislik*2) + (uzunluk*2);
    
    var sonuc = `Dikdörtgenin alanı: ${dikdortgenAlan} Dikdörtgenin çevresi: ${dikdortgenCevre}`;

    return sonuc;
}

//3- Yazı tura uygulamasını fonksiyon olarak oluşturunuz.

function yaziTura(){
    var sayi= Math.floor(Math.random() * 2) + 0;
    
    if (sayi == 1){
        console.log("Yazı");
    }else{
        console.log("Tura");
    }
}

//4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu oluşturunuz.

function tamBolen(sayi){
    var tamBolenler = [];
    
    for(var i = 2; i < sayi; i++){
        sayilar.push(i);
    }
    return tamBolenler;
}