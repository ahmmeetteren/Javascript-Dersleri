var sayilar = [1,5,7,15,3,25,10,20,12];

//1- sayilar listesindeki her bir elemanın karesini yazdırınız.

for(sayi of sayilar){
    sonuc = sayi*sayi;
    console.log(sonuc);
}

//2- sayilar listesindeki hangi sayilar 5'in katıdır?

for(sayi of sayilar){
    if(sayi % 5 == 0){
        console.log(sayi)
    }
}

//3- sayilar listesindeki çift sayıların toplamını bulunuz.

var toplam = 0;

for(sayi of sayilar){
    if(sayi % 2 == 0){
        toplam += sayi;
    }
}
console.log(toplam);

var urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23"];

//4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

for(kelime of urunler){
    console.log(kelime.toUpperCase());
}

//5- urunler listesi içerisinde samsung geçen kaç kelime vardır?

var i = 0;

for(kelime of urunler){
    if(kelime.includes("samsung")){
        i += 1;
    }
}
console.log(i);