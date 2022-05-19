// var toplam = 0;

// for(var i = 1; i <= 10; i++) { //burdaki kullanımda 3 parametre almakta for birincisi değişken ikincisi koşul üçüncüsü işlem.
//     toplam += i;
// }
// console.log(toplam);

var sayilar = [1,4,5,8,4,3,12,5,3,5];

var toplam = 0;

// for(var i=0; i < sayilar.length; i++) {
//     toplam += sayilar[i];    
// }

// for(var i in sayilar) {
//     toplam += sayilar[i]; //burda ise in operatörü sayesinde sayılarin index numaralarını almaktayız.
// }

for(var sayi of sayilar) { //burda of operatörü sayesinde index numaraları yerine direk sayıları almaktayız.
    toplam += sayi;
}

console.log(toplam);

var user = {
    "name": "Sadık Turan",
    "username": "sadikturan",
    "password": "12345",
    "email": "info@sadikturan.com"
};

for (var key in user) { //burdaki kullanımda keyler indexlere denk geldiği için indexleri alır ve değerlerini buluruz.
    console.log(key);
    console.log(user[key]);
}