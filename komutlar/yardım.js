const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  const kanal = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(`Kenshin | Yardım`, client.user.avatarURL)
   .addField("Özel mesajlarını kontrol et!", "*Komutları özel mesaj olarak gönderdim.*")
  return message.channel.sendEmbed(kanal).then(m => {
    const yardım = new Discord.RichEmbed()
    .setColor("#ffb65d")
    .setAuthor(`Kenshin | Yardım`, client.user.avatarURL)
    .addField("❯ Ayarlar", "`ayarlar`: Sunucu ayarları gösterir.\n`dm-ayarla`: Sunucuya girenlere gönderilecek özel mesajları ayarlar.\n`giriş-çıkış-ayarla`: Sunucuya giren ve çıkanların hangi odada tutulacağını ayarlar.\n`giriş`: Sunucuya birisi katıldığında ayarlanan odaya gönderilecek mesajı ayarlar.\n`çıkış`: Sunucudan birisi ayrıldığında ayarlanan odaya gönderilecek mesajı ayarlar.\n`log-ayarla`: Sunucuda olan olayların kayıt edildiği odayı ayarlar.\n`küfür-engeli`: Sunucuda küfür yasağını ayarlar.\n`reklam-engeli`: Sunucuda reklam yasağını ayarlar.\n`oto-rol-ayarla`: Sunucuya giren kişiye otomatik rol vermeyi ayarlar.\n`prefix-ayarla`: Sunucuda kullanılan ön eki değiştirmeye yarar.\n`prefix-sıfırla`: Mevcut ön eki `!` yapar.\n`sayaç-ayarla`: Sunucuya birisi geldiği veya çıktığı zaman geri sayım yapar\n`sayaç-odası-ayarla`: Sayaçın hangi odada geri sayım yapacağını ayarlar.\n`sayaç-sıfırla`: Ayarlanan sayaç miktarını sıfırlar.")
    .addField("❯ Moderasyon Komutları", "`at`: Seçtiğiniz kullanıcıyı sunucudan atar.\n`uyar`: Seçtiğiniz kullanıcıyı uyarır.\n`yasakla`: Seçtiğiniz kullanıcıyı sunucudan yasaklar.\n`sustur`: Seçtiğiniz kullanıcıyı istediğiniz süre boyunca susturur.\n`sustur-aç`: Susturulmuş kullanıcının susturma cezasını kaldırır.\n`rol-ver`: Seçtiğiniz kullanıcıya seçtiğiniz rolü verir.\n`rol-al`: Seçtiğiniz kullanıcıdan seçtiğiniz rolü alır.\n`yazdır`: İstediğiniz şeyi bota yazdırır.\n`temizle`: Belirttiğiniz miktarda sohbeti temizler.\n`duyuru`: İstediğiniz mesajı bota duyurur.\n`reklam-taraması`: Sunucunuzun oynuyor kısmındaki reklamları tespit eder.\n`çekiliş`: Sunucudan rastgele birini seçer.")
    .addField("❯ Bot Komutları", "`canlı-destek`: Bot aracılığıyla yetkili ekibimizden destek almanızı sağlar.\n`davet`: Botun davet linkini atar.\n`istatistik`: Botun istatistiklerini verir.\n`bilgi`: Bot ile ilgili bilgi verir.\n`ping`: Botun ping değerini verir.\n`sunucular`: Botun hangi sunucularda olduğunu gösterir.\n`öneri`: Bot hakkındaki önerilerinizi bot sahibine ulaştırır.\n`bildir`: Bot hakkındaki hataları bot sahiplerine ulaştırır.\n`çekiliş`: Sunucudan rastgele birini seçer.")
    .addField("❯ Sunucu Komutları", "`sunucu-bilgi`: Sunucunun bilgilerini verir.\n`rol-bilgi`: Belirtilen rolün bilgilerini gösterir.\n`roller`: Sunucunun rollerini gösterir.")
    .addField("❯ Eğlence Komutları", "`aşk-ölçer`: Belirttiğiniz kişiyle aranızdaki aşkı ölçer.\n`öp`: Belirttiğiniz oyuncuyu öper.\n`özlüsöz`: Özlüsözler yollar.\n`mesaj-döndür`: Yazdığınız mesajın ters döndürülmüş halini yazar.\n`emoji-yazı`: Yazdıklarınızı emoji olarak yazar.\n`espri`: İğrenç espriler yapar.\n`köpek`: Köpek fotoğrafları yollar.\n`kedi`: Kedi fotoğrafları yollar.")
    .addField("❯ Kullanıcı Komutları", "`hava-durumu`: Belirttiğiniz ilin hava durumu bilgilerini gösterir.\n`hesapla`: Belirttiğiniz işlemin sonucunu hesaplar.\n`avatar`: Birini belirtirseniz onun, belirtmezseniz kendi profilinizi gösterir.\n`kitap-ara`: Belirttiğiniz kitabın bilgilerini gösterir.\n`kullanıcı-bilgi`: Birini belirtirseniz onun, belirtmezseniz kendi kullanıcı bilgilerinizi gösterir.")
    .addField("❯ Çerçeve Komutları", "`wasted`: Profilinize `watsed` efekti ekler.\n`hacked`: Profilinize `hacked` efekti ekler.\n`winner`: Profilinize `winner` efekti ekler.\n`atatürk-çerçeve`: Profilinize `atatürk çerçevesi` efekti ekler.\n`hpbalance`: Profilinize `hpbalance` efekti ekler.\n`hpbravery`: Profilinize `hpbravery` efekti ekler.\n`hpbrillance`: Profilinize `hpbrillance` efekti ekler.\n`hpevent`: Profilinize `hpevent` efekti ekler.\n`dcpartner`: Profilinize `dcpartner` efekti ekler.\n`dcstaff`: Profilinize `dcstaff` efekti ekler.\n`dcbughunter`: Profilinize `dcbughunter` efekti ekler.")
    .addField("❯ Oyun Komutları", "`mcbaşarım`: Girdiğiniz metine göre minecraft başarımı atar\n`mckafa`: Girdiğiniz kullanıcının minecraft kafasını atar.\n`mcskin`: Girdiğiniz kullanıcının minecraft skinini atar.\n`mcsunucu`: Girdiğiniz sunucu adresinin bilgilerini gösterir.\n`steam-oyun`: Belirttiğiniz oyunun steam bilgilerini verir.")
    .addField("❯ Profil Komutları", "`kimlik`: Kimliğinizi gösterir.\n`isim`: Kimliğinize isminizi ekler.\n`cinsiyet`: Kimliğinize cinsiyet ekler.\n`yaş`: Kimliğinize yaş ekler.\n`biyografi`: Kimliğinize biyografi ekler.\n`instagram`: Kimliğinize instagram adresinizi ekler.")
    .addField("❯ Ekonomi Komutları", "`para`: Kullanıcının parası hakkında bilgi verir.")
    .addField("❯ Seviye Komutları", "`seviye`: Kullanıcının seviyesi hakkında bilgi verir.")
    return message.author.sendEmbed(yardım)
  });
};

// \n``: 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
   