var isim = "Ahmet"; // global scope
const adres = "İstanbul"; //sabit değişendir daha sonra değiştirmek istesek hata verir. const değişmeyen değişkendir.

function yazdir() {
    var isim = "Ayşe";  //function scope sadece function içerisinde barınır.
    var yas = 20;
    console.log("function scope: ", isim, yas);
}

if(true) {
    let cinsiyet = "Kadın"; //
    let isim = "Zeynep"; //isim burda kullanılabilir çünkü en yukarıda tanımlanmıştı ama cinsiyet hata verir çünkü cinsiyet
                         // şeklinde bir değişken tanımlanmadı           
    console.log(isim, cinsiyet);
}

console.log(isim);

yazdir();

// fonksiyonlar kendi scope alanlarını oluşturur.
// block içerisinde yeni bir scope oluşmaz. (const)