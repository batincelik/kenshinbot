const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
  const kanal = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setAuthor(`Kenshin | Yardım`, client.user.avatarURL)
   .addField("Özel mesajlarını kontrol et!", "*Komutları özel mesaj olarak gönderdim.*")
  return message.channel.sendEmbed(kanal).then(m => {
    message.author.send("```                                        Normal Komutlar```\n**Ayarlar:**\n`ayarlar`: Ayarlar sayfasını gösterir.\n`dm-ayarla`: Sunucuya girenlere gönderilecek özel mesajları ayarlar.\n`giriş-çıkış-ayarla`: Sunucuya giren ve çıkanların hangi odada tutulacağını ayarlar.\n`giriş`: Sunucuya birisi katıldığında ayarlanan odaya gönderilecek mesajı ayarlar.\n`çıkış`: Sunucudan birisi ayrıldığında ayarlanan odaya gönderilecek mesajı ayarlar.\n`log-ayarla`: Sunucuda olan olayların kayıt edildiği odayı ayarlar.\n`küfür-engeli`: Sunucuda küfür yasağını ayarlar.\n`reklam-engeli`: Sunucuda reklam yasağını ayarlar.\n`oto-rol-ayarla`: Sunucuya giren kişiye otomatik rol vermeyi ayarlar.\n`prefix-ayarla`: Sunucuda kullanılan ön eki değiştirmeye yarar.\n`prefix-sıfırla`: Mevcut ön eki `f!` yapar.\n`sayaç-ayarla`: Sunucuya birisi geldiği veya çıktığı zaman geri sayım yapar\n`sayaç-odası-ayarla`: Sayaçın hangi odada geri sayım yapacağını ayarlar.\n`sayaç-sıfırla`: Ayarlanan sayaç miktarını sıfırlar.\n\n**Moderasyon Komutları:**\n`moderasyon`: Moderasyon sayfasını gösterir.\n`at`: Seçtiğiniz kullanıcıyı sunucudan atar.\n`uyar`: Seçtiğiniz kullanıcıyı uyarır.\n`yasakla`: Seçtiğiniz kullanıcıyı sunucudan yasaklar.\n`rol-ver`: Seçtiğiniz kullanıcıya seçtiğiniz rolü verir.\n`rol-al`: Seçtiğiniz kullanıcıdan seçtiğiniz rolü alır.\n`yazdır`: İstediğiniz şeyi bota yazdırır.\n`temizle`: Belirttiğiniz miktarda sohbeti temizler.\n`duyuru`: İstediğiniz mesajı bota duyurur.\n`reklam-taraması`: Sunucunuzun oynuyor kısmındaki reklamları tespit eder.\n`çekiliş`: Sunucudan rastgele birini seçer.\n\n**Bot Komutları:**")
    message.author.send("`bot`: Bot sayfasını gösterir.\n`davet`: Botun davet linkini atar.\n`istatistik`: Botun istatistiklerini verir.\n`bilgi`: Bot ile ilgili bilgi verir.\n`ping`: Botun ping değerini verir.\n`sunucular`: Botun hangi sunucularda olduğunu gösterir.\n`öneri`: Bot hakkındaki önerilerinizi bot sahibine ulaştırır.\n`bildir`: Bot hakkındaki hataları bot sahiplerine ulaştırır.\n`çekiliş`: Sunucudan rastgele birini seçer.\n\n**Sunucu Komutları:**\n`sunucu`: Sunucu sayfasını gösterir.\n`sunucu-bilgi`: Sunucunun bilgilerini verir.\n`rol-bilgi`: Belirtilen rolün bilgilerini gösterir.\n`roller`: Sunucunun rollerini gösterir.\n\n**Eğlence Komutları:**\n`eğlence`: Eğlence sayfasını gösterir.\n`aşk-ölçer`: Belirttiğiniz kişiyle aranızdaki aşkı ölçer.\n`öp`: Belirttiğiniz oyuncuyu öper.\n`özlüsöz`: Özlüsözler yollar.\n`mesaj-döndür`: Yazdığınız mesajın ters döndürülmüş halini yazar.\n`emoji-yazı`: Yazdıklarınızı emoji olarak yazar.\n`espri`: İğrenç espriler yapar.\n\n**Kullanıcı Komutları:**\n`kullanıcı`: Kullanıcı sayfasını gösterir.\n`hava-durumu`: Belirttiğiniz ilin hava durumu bilgilerini gösterir.\n`hesapla`: Belirttiğiniz işlemin sonucunu hesaplar.\n`avatar`: Birini belirtirseniz onun, belirtmezseniz kendi profilinizi gösterir.\n`kitap-ara`: Belirttiğiniz kitabın bilgilerini gösterir.\n`kullanıcı-bilgi`: Birini belirtirseniz onun, belirtmezseniz kendi kullanıcı bilgilerinizi gösterir.\n\n**Çerçeve Komutları:**")
    message.author.send("`çerçeve`: Çerçeve sayfasını gösterir.\n`wasted`: Profilinize `watsed` efekti ekler.\n`hacked`: Profilinize `hacked` efekti ekler.\n`winner`: Profilinize `winner` efekti ekler.\n`atatürk-çerçeve`: Profilinize `atatürk çerçevesi` efekti ekler.\n`hpbalance`: Profilinize `hpbalance` efekti ekler.\n`hpbravery`: Profilinize `hpbravery` efekti ekler.\n`hpbrillance`: Profilinize `hpbrillance` efekti ekler.\n`hpevent`: Profilinize `hpevent` efekti ekler.\n`dcpartner`: Profilinize `dcpartner` efekti ekler.\n`dcstaff`: Profilinize `dcstaff` efekti ekler.\n`dcbughunter`: Profilinize `dcbughunter` efekti ekler.\n\n**Oyun Komutları:**\n`oyun`: Oyun sayfasını gösterir.\n`mcbaşarım`: Girdiğiniz metine göre minecraft başarımı atar\n`mckafa`: Girdiğiniz kullanıcının minecraft kafasını atar.\n`mcskin`: Girdiğiniz kullanıcının minecraft skinini atar.\n`mcsunucu`: Girdiğiniz sunucu adresinin bilgilerini gösterir.\n`steam-oyun`: Belirttiğiniz oyunun steam bilgilerini verir.\n\n**Profil Komutları:**\n`profil`: Profil sayfasını gösterir.\n`kimlik`: Kimliğinizi gösterir.\n`isim`: Kimliğinize isminizi ekler.\n`cinsiyet`: Kimliğinize cinsiyet ekler.\n`yaş`: Kimliğinize yaş ekler.\n`biyografi`: Kimliğinize biyografi ekler.\n`instagram`: Kimliğinize instagram adresinizi ekler.\n\n**Ekonomi Komutları:**")
    message.author.send("\n`ekonomi`: Ekonomi sayfasını gösterir.\n`para`: Kullanıcının parası hakkında bilgi verir.\n\n**Level Komutları:**\n`level`: Level sayfasını gösterir.\n`seviye`: Kullanıcının seviyesi hakkında bilgi verir.\n\n```                                       Premium Komutlar```\n*Premium komutlar yakında eklenecektir.*\n\n**Özel Komut Sistemi:**\n`özel-komut-listesi`: Sunucuda oluşturulan özel komutları listeler.\n`özel-komut-ekle`: Sunucuya özel komut oluşturur.\n`özel-komut-sil`: Sunucuya özel oluşturulan komutu siler.\n\n**Ek Moderasyon Komutları:**\n`toplu-rol-ver`: Belirtilen rolü bütün kullanıcılara verir.\n`toplu-rol-al`: Belirtilen rolü bütün kullanıcılardan alır.")
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
  name: 'yardım2',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
