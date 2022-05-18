// 1-Bir sayının 10 ile 50 arasında olup olmadığını kontrol ediniz.

var sayi = 10;

if((sayi >= 10) && (sayi <=50)){
    console.log("Sayı 10 ile 50 arasındadır.")
}else{
    console.log("Sayı 10 ile 50 arasında değildir.")
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

var sayi = 0;

if((sayi % 2 != 0) && (sayi > 0)){
    console.log("Sayı pozitif tek sayıdır.")
}else{
    console.log("Sayı pozitif tek sayı değildir.")
}

// 3- x, y, z sayılarının x'e göre büyüklük karşılaştırmasını yapınız.

var x = 6;
var y = 5;
var z = 8;

if((x > y) && (x > z)){
    console.log("x sayısı y ve z sayısından büyüktür.")
}else if((x < y) && (x > z)){
    console.log("x sayısı y sayısından küçük, z sayısından büyüktür.")
}else if((x > y) && (x < z)){
    console.log("x sayısı y sayısından büyük, z sayısından küçüktür.")
}else if((x < y) && (x < z)){
    console.log("x sayısı y ve z sayısından küçüktür.")
}else{
    console.log("Bilinmeyen durum.")
}

// 4- 2 vize ve 1 final notuna göre hesaplanan ortalama için;
    // a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazılsın.
    // b- Geçmek için ortalama 50 bile olsa final notu 50 olmalıdır.
    // c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin.

//a
var vize1 = 90;
var vize2 = 70;
var final = 40;

var ortalamaNot = (vize1 + vize2 + final)/3

if(ortalamaNot >= 50){
    console.log("Geçti.")
}else{
    console.log("Kaldı.")
}

//b

if((ortalamaNot >= 50) && (final >= 50)){
    console.log("Geçti.")
}else{
    console.log("Kaldı.")
}

//c

if(final >= 70){
    console.log("Geçti.")
}else{
    console.log("Kaldı.")
}