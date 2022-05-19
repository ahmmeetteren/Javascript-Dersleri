//1- sipariş bilgilerini obje içerisinde saklayınız.

var siparis1 = {
    "id": 101,
    "siparisTarih": "31.12.2022",
    "odemeYontemi": "Kredi Kartı",
    "kargoAdres": "Yaylacık Mahallesi, Buca/İzmir",
    "satinAlinanlar": [
        {
            "urunid": 5,
            "urunBaslik": "IPhone 13 Pro",
            "urunUrl": "www.abc.com.tr/iphone-13-pro",
            "urunFiyat": 22000
        },
        {
            "urunid": 6,
            "urunBaslik": "IPhone 13 Pro MAX",
            "urunUrl": "www.abc.com.tr/iphone-13-pro-max",
            "urunFiyat": 25000
        }
    ],
    "musteri":{
        "musteriid":12,
    },
    "saticiFirma":{
        "firmaid":34,
        "firmaAdi":"Apple Türkiye"
    },
};

//2- Siparişin kdv dahil toplam ödenen ücreti hesaplayınız. (kdv %18)

var siparisToplam;

siparisToplam = siparis1.satinAlinanlar[0].urunFiyat + siparis1.satinAlinanlar[1].urunFiyat;

var kdvDahilToplam;

kdvDahilToplam = (siparisToplam*0.18) + siparisToplam;

console.log(kdvDahilToplam);