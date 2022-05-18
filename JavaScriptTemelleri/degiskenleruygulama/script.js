/*
2 adet öğrencinin{
    adını tanımlayın
    dogum yılını tanımlayın
    3 adet matematik notunu tanımlayın
}

bu öğrencilerin{
    yaş bilgilerini tanımlayın
    matematik ortalamalarını tanımlayın
    ortalamaları 50'nin üzerindeyse başarı durumunu tanımlayın.
}

*/







var ogrenci1Ad = "ada bilgi"
var ogrenci1dogumYil = 2012;
var ogrenci1MatNot1 = 70;
var ogrenci1MatNot2 = 70;
var ogrenci1MatNot3 = 80;

var ogrenci2Ad = "yiğit bilgi"
var ogrenci2dogumYil = 2010;
var ogrenci2MatNot1 = 40;
var ogrenci2MatNot2 = 40;
var ogrenci2MatNot3 = 50;

var ogrenci1Yas = (2022-ogrenci1dogumYil);
var ogrenci2Yas = (2022-ogrenci2dogumYil);

var ogrenci1Ortalama = ((ogrenci1MatNot1 + ogrenci1MatNot2+ ogrenci1MatNot3)/3);
var ogrenci2Ortalama = ((ogrenci2MatNot1 + ogrenci2MatNot2+ ogrenci2MatNot3)/3);

var ogrenci1Basari = (ogrenci1Ortalama > 50);
var ogrenci2Basari = (ogrenci2Ortalama > 50);




