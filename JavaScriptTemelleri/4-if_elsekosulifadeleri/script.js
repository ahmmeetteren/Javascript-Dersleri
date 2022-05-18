var username = "ahmmeetteren";
var password = "1234";

if (username == "ahmmeetteren") {  //eğer username ahmmeetteren'e eşitse alt satırı çalıştırır.
    if (password == "1234") {   //eğer password 12345'e eşitse alt satırı çalıştırır.
        console.log("uygulamaya giriş yapıldı.");
    } else { //password'un 12345 olmadığı durumların tamamında bu blok çalışır.
        console.log("parola yanlış.");
    }
}
else { //username'in ahmmeetteren olmadığı her durumda bu blok çalışır.
    console.log("kullanıcı adı yanlış.");
}

//alttaki gibi de kullanabilir çünkü if koşulu parantez içine yazılan durum doğruysa alt satıra geçer.

if (username) {  //eğer username ahmmeetteren'e eşitse alt satırı çalıştırır.
    if (password) {   //eğer password 12345'e eşitse alt satırı çalıştırır.
        console.log("uygulamaya giriş yapıldı.");
    } else { //password'un 12345 olmadığı durumların tamamında bu blok çalışır.
        console.log("parola yanlış.");
    }
}
else { //username'in ahmmeetteren olmadığı her durumda bu blok çalışır.
    console.log("kullanıcı adı yanlış.");
}


