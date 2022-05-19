var ogrenciler = ["çınar","yiğit","ada"];

sonuc = ogrenciler.length;

//Diziyi stringe çevirme methodları
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" "); //parametre içine verilen karakterle bölerek sonucu döndürür.

//Diziden eleman silme
// sonuc = ogrenciler.pop();       //son elemanı siler ve silinen elemanı döndürür.
// sonuc = ogrenciler.shift();     //ilk elemanı siler ve silen elemanı döndürür.

//Diziye eleman ekleme
// sonuc = ogrenciler.push("sena");    //dizinin sonuna eleman ekler.
// sonuc = ogrenciler.unshift("sena"); //dizinin başına eleman ekler.

var markalar1 = ["mazda","toyota"];
var markalar2 = ["opel","renault"];
var markalar3 = ["mercedes"];

// sonuc = markalar1.concat(markalar2, markalar3); //birden fazla diziyi aynı dizi içerisinde birleştirme işlemi yapar
// sonuc = markalar1.splice(0, 1, "bmw","audi"); 

/*splice methodu hem silme hem ekleme görevi görür ve 3 bölümden oluşur.
ilk parametreye hangi indexten başlanacağı girilir. ikinci parametreye hangi elemanı silmek istiyorsak o girilir ama
silmek zorunda değiliz 0 değeri verilirse silme işlemini atlar ve son parametreyse eklemek istediğimiz değerleri bizden
bekler.*/

sonuc = markalar1.splice(0, 1);

//dizi methodları hakkında daha detaylı bilgi w3 school adresinden öğrenilebilir.

console.log(sonuc);
console.log(markalar1);