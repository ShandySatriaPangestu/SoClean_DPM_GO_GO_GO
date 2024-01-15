import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Newsletter = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.newsletter, styles.iconLayout]}>
      <View style={[styles.frameScrollNews, styles.frameLayout]}>
        <View style={[styles.frameNews, styles.frameNewsPosition]}>
          <Image
            style={styles.idntimes1Icon}
            contentFit="cover"
            source={require("../assets/idntimes-1.png")}
          />
          <Image
            style={[
              styles.images8279d33dcf26b8daf5cc11Icon,
              styles.frameLayout,
            ]}
            contentFit="cover"
            source={require("../assets/images8279d33dcf26b8daf5cc11924916b444b6d75940f64d3719ef4ed4c1c02e7337b-600x400-1.png")}
          />
          <View style={[styles.judul, styles.frameLayout]}>
            <Text
              style={[styles.faktaGunungSampah, styles.newsTypo]}
            >{`5 Fakta Gunung Sampah Ghazipur, Racuni Satu Kota!
`}</Text>
            <Text
              style={[
                styles.disebutSebagaiGunung,
                styles.disebutSebagaiGunungTypo,
              ]}
            >{`Disebut sebagai gunung sampah terbesar di dunia
`}</Text>
          </View>
          <Text
            style={[
              styles.sampahMerupakanSalah,
              styles.disebutSebagaiGunungTypo,
            ]}
          >{`Sampah merupakan salah satu masalah utama yang harus dihadapi negara berkembang lantaran masyarakatnya yang konsumtif.

Di Indonesia sendiri terdapat gunung sampah di TPST Bantargebang, Bekasi yang menjadi sorotan dunia. Namun, ada gunung sampah yang jauh lebih besar jika dibandingkan TPST Bantargebang. Ia adalah gunung sampah Ghazipur di India.

Disebut sebagai gunung sampah terbesar di dunia yang menjadi bom waktu, berikut 5 fakta gunung sampah Ghazipur. Menjadi salah satu fenomena yang patut diwaspadai, Indonesia harus banyak belajar agar tak mengalami hal serupa.

Apa saja sih faktanya?

1. Terletak di pemukiman penduduk

Menurut The Indian Express, Ghazipur adalah tempat pembuangan sampah terbesar di Asia. Letaknya bersebelahan dengan pemukiman penduduk. Bahkan, penduduk setempat menjadikan gunung sampah ini sebagai sumber mata pencaharian.

Sayangnya, banyak warga di sana mengaku sampah-sampah yang ada kerap membuat mereka susah bernapas karena bau busuk yang menyengat.

Ada yang mengatakan jika hidup di kawasan ini bagaikan tinggal di neraka. Gunung sampah Ghazipur mengeluarkan bau beracun yang mengancam sistem pernapasan. Tak hanya itu, cairan hitam beracun hasil dari pembusukan sampah diketahui turut merembes ke saluran air penduduk.

2. Tingginya melampaui Taj Mahal

Science Discovery19 Jun 22 | 15:15
5 Fakta Gunung Sampah Ghazipur, Racuni Satu Kota!
Disebut sebagai gunung sampah terbesar di dunia
5 Fakta Gunung Sampah Ghazipur, Racuni Satu Kota!kehidupan di area gunung sampah Ghazipur (nytimes.com)
Putri Anggraeni	
Verified Writer
Putri Anggraeni Verified Writer
 Share to Facebook  Share to Twitter	
Sampah merupakan salah satu masalah utama yang harus dihadapi negara berkembang lantaran masyarakatnya yang konsumtif.

Di Indonesia sendiri terdapat gunung sampah di TPST Bantargebang, Bekasi yang menjadi sorotan dunia. Namun, ada gunung sampah yang jauh lebih besar jika dibandingkan TPST Bantargebang. Ia adalah gunung sampah Ghazipur di India.

Disebut sebagai gunung sampah terbesar di dunia yang menjadi bom waktu, berikut 5 fakta gunung sampah Ghazipur. Menjadi salah satu fenomena yang patut diwaspadai, Indonesia harus banyak belajar agar tak mengalami hal serupa.

3. Kapasitas penuh sejak 2002

Arthur TV sempat menayangkan dokumenter Ghazipur sebagai tempat pembuangan sampah yang dibuka pada tahun 1984. Kapasitasnya telah penuh sejak 2002 lalu karena kawasan ini menjadi pusat pembuangan sampah dari sejumlah wilayah India.

Pemerintah yang tidak menemukan area pembuangan akhir di tempat lain memutuskan untuk menampung sampah-sampah yang ada lebih dulu.

Sayangnya niat itu berakhir fatal. Ghazipur masih menampung ribuan ton sampah baru yang masuk setiap harinya hingga saat ini. Tak heran bila hal  tersebut menciptakan timbunan sampah yang sukses meraih gelar sebagai gunung sampah terbesar di dunia.

4. Memakan korban jiwa

Kawasan gunung sampah Ghazipur sempat ditutup karena memakan dua orang korban di tahun 2018. Peristiwa tersebut diakibatkan dari tingginya curah hujan yang menimbulkan bencana longsor. Sayangnya, lagi-lagi karena pemerintah tak memiliki area pembuangan akhir, penutupan Ghazipur hanya bertahan beberapa hari.

India diketahui sebagai salah satu produsen sampah terbesar di dunia dan tengah mengalami krisis limbah. Seorang dokter di New Delhi mengatakan jika ada sekitar 70 orang setiap harinya mengalami sakit perut dan gangguan pernapasan akibat udara tercemar.

Antara tahun 2013 dan 2017 sendiri terdapat 981 kematian di Delhi terkait infeksi saluran pernapasan akut.

5. Sering terjadi kebakaran

Shambhavi Sukhla, seorang peneliti senior di pusat Sains dan Lingkungan New Delhi, memaparkan bahwa gas metana yang dihasilkan dari tumpukan sampah bisa lebih mematikan jika bercampur dengan atmosfer. Gas tersebut juga disebut sebagai pemicu utama seringnya terjadi kebakaran di gunung sampah Ghazipur.

Jika kebakaran terjadi, penduduk akan mengalami masalah penglihatan dan pernapasan yang jauh lebih ekstrem.

Kebakaran besar terakhir kali melanda tempat ini pada 28 Maret 2022. Kepulan asap menyelimuti wilayah Ghazipur dan tetangga. Perisitiwa mengerikan ini berlangsung selama lebih dari satu minggu dan mengerahkan sebagian besar petugas pemadam kebakaran di Delhi. Lamanya proses pemadaman dipengaruhi sulitnya akses pemadam kebakaran menjangkau titik kebakaran.

Nah, itulah 5 fakta mengenai gunung sampah terbesar dunia yang ada di Ghazipur. Kerap dianggap sebagai masalah sepele, sampah bisa menjadi masalah yang mengancam bila diabaikan terus-terusan.

`}</Text>
        </View>
      </View>
      <View style={[styles.newsletterChild, styles.frameNewsPosition]} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={414}
        themeDarkNotchTrueCallIHeight={44}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("News")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector27.png")}
        />
      </Pressable>
      <Text style={[styles.news, styles.newsTypo]}>News</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  frameLayout: {
    width: 324,
    position: "absolute",
  },
  frameNewsPosition: {
    top: 0,
    left: 0,
  },
  newsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  disebutSebagaiGunungTypo: {
    lineHeight: 12,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 0,
    position: "absolute",
  },
  idntimes1Icon: {
    top: 11,
    width: 107,
    height: 18,
    left: 0,
    position: "absolute",
  },
  images8279d33dcf26b8daf5cc11Icon: {
    top: 125,
    height: 210,
    left: 0,
  },
  faktaGunungSampah: {
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    lineHeight: 24,
    height: 49,
    color: Color.colorBlack,
    width: 324,
    left: 0,
    top: 0,
  },
  disebutSebagaiGunung: {
    color: Color.colorDarkgray_100,
    width: 272,
    height: 13,
    top: 49,
  },
  judul: {
    height: 62,
    top: 49,
    left: 0,
  },
  sampahMerupakanSalah: {
    top: 349,
    height: 1485,
    color: Color.colorBlack,
    width: 324,
  },
  frameNews: {
    height: 1834,
    left: 0,
    width: 324,
    position: "absolute",
  },
  frameScrollNews: {
    top: 120,
    left: 18,
    height: 692,
  },
  newsletterChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 375,
    height: 105,
    left: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "4.88%",
    top: "6.4%",
    right: "91.65%",
    bottom: "91.13%",
    width: "3.47%",
    height: "2.46%",
    position: "absolute",
  },
  news: {
    top: 69,
    left: 150,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    color: Color.colorWhite,
    width: 75,
    height: 18,
  },
  newsletter: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
  },
});

export default Newsletter;
