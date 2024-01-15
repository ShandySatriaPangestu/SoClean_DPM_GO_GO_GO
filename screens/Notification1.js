import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Notification1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notification}>
      <View style={[styles.notif4, styles.notifLayout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.bankSampah, styles.bankSampahTypo]}>
          Bank Sampah
        </Text>
        <Pressable
          style={styles.vector}
          onPress={() => navigation.navigate("News3")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
        </Pressable>
        <Image
          style={[styles.geeMe074Icon, styles.propertyIconLayout]}
          contentFit="cover"
          source={require("../assets/gee-me-074.png")}
        />
      </View>
      <View style={[styles.notif3, styles.notifLayout]}>
        <View style={styles.childShadowBox} />
        <Image
          style={[styles.geeMe035Icon, styles.geeIconPosition]}
          contentFit="cover"
          source={require("../assets/gee-me-035.png")}
        />
        <Pressable
          style={[styles.vector1, styles.vectorPosition]}
          onPress={() => navigation.navigate("AbsensiQR1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
        </Pressable>
        <Text
          style={[styles.kamuMelakukanPekerjaan, styles.lihatPadaHalamanTypo]}
        >
          Kamu melakukan pekerjaan tepat waktu, cepat dan profesional, dan
          jangan lupa absensi hariannya
        </Text>
        <Text style={[styles.kerjaBagus, styles.bankSampahTypo]}>
          Kerja Bagus!!!
        </Text>
      </View>
      <View style={[styles.notif2, styles.notifLayout]}>
        <View style={styles.childShadowBox} />
        <Text style={[styles.heyApaKabar, styles.bankSampahTypo]}>
          Hey!, apa kabar?
        </Text>
        <Text
          style={[styles.sistemKamiMelacak, styles.lihatPadaHalamanTypo]}
        >{`sistem kami melacak anda sudah lama tidak membuka aplikasi. apa anda masalah? `}</Text>
        <Pressable
          style={[styles.vector1, styles.vectorPosition]}
          onPress={() => navigation.navigate("CustomerService1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
        </Pressable>
        <Image
          style={[styles.geeMe075Icon, styles.propertyIconLayout]}
          contentFit="cover"
          source={require("../assets/gee-me-075.png")}
        />
      </View>
      <View style={[styles.notif1, styles.notifLayout]}>
        <View style={styles.childShadowBox} />
        <Image
          style={[styles.geeMe035Icon1, styles.geeIconPosition]}
          contentFit="cover"
          source={require("../assets/gee-me-0351.png")}
        />
        <Pressable
          style={[styles.vector3, styles.vectorPosition]}
          onPress={() => navigation.navigate("News3")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector34.png")}
          />
        </Pressable>
        <Text
          style={[styles.lihatPadaHalaman, styles.lihatPadaHalamanTypo]}
        >{`Lihat pada halaman berita untuk mendapatkan berita terbaru `}</Text>
        <Text style={[styles.kerjaBagus, styles.bankSampahTypo]}>
          Ada berita terbaru nih, jangan lupa lihat...
        </Text>
      </View>
      <Text style={[styles.beritaTerbaruAda, styles.lihatPadaHalamanTypo]}>
        Berita terbaru ada pada halaman berita nikmati berbagai berita yang
        menarik disana
      </Text>
      <View style={[styles.notificationChild, styles.barcodeLayout]} />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("AbsensiQR1")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/barcode.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount2")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/account.png")}
        />
      </Pressable>
      <Image
        style={[styles.notificationIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/notification1.png")}
      />
      <Pressable
        style={[styles.news, styles.homePosition]}
        onPress={() => navigation.navigate("News3")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/news.png")}
        />
      </Pressable>
      <Image
        style={[styles.notificationItem, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <View style={[styles.property, styles.propertyChildLayout]}>
        <View style={[styles.propertyChild, styles.propertyChildLayout]} />
        <Text style={[styles.notfication, styles.bankSampahTypo]}>
          Notfication
        </Text>
      </View>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  notifLayout: {
    height: 140,
    width: 353,
    left: 9,
    position: "absolute",
  },
  bankSampahTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  propertyIconLayout: {
    height: 100,
    position: "absolute",
  },
  geeIconPosition: {
    width: 55,
    height: 100,
    left: "50%",
    top: "50%",
    marginTop: -50,
    position: "absolute",
  },
  vectorPosition: {
    right: "6.74%",
    left: "89.52%",
    height: "14.36%",
    width: "3.74%",
    position: "absolute",
  },
  lihatPadaHalamanTypo: {
    height: 23,
    width: 221,
    color: Color.colorDimgray_200,
    lineHeight: 10,
    letterSpacing: -0.2,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  barcodeLayout: {
    height: 50,
    position: "absolute",
  },
  homePosition: {
    height: "3.69%",
    width: "8%",
    bottom: "1.11%",
    top: "95.2%",
    position: "absolute",
  },
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  propertyChildLayout: {
    width: 375,
    left: 0,
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 140,
    width: 353,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  bankSampah: {
    width: 115,
    height: 27,
    left: 77,
    top: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "89.24%",
    top: "60.71%",
    right: "7.03%",
    bottom: "24.93%",
    height: "14.36%",
    width: "3.74%",
    position: "absolute",
  },
  geeMe074Icon: {
    marginLeft: -152.5,
    width: 45,
    left: "50%",
    top: "50%",
    marginTop: -50,
    height: 100,
  },
  notif4: {
    top: 581,
  },
  geeMe035Icon: {
    marginLeft: -164.5,
  },
  vector1: {
    top: "61.43%",
    bottom: "24.21%",
  },
  kamuMelakukanPekerjaan: {
    top: 85,
    left: 77,
  },
  kerjaBagus: {
    width: 239,
    height: 54,
    left: 77,
    top: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
  },
  notif3: {
    top: 426,
  },
  heyApaKabar: {
    width: 136,
    height: 25,
    left: 77,
    top: 20,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
  },
  sistemKamiMelacak: {
    top: 86,
    left: 77,
  },
  geeMe075Icon: {
    marginLeft: -157.5,
    width: 45,
    left: "50%",
    top: "50%",
    marginTop: -50,
    height: 100,
  },
  notif2: {
    top: 271,
  },
  geeMe035Icon1: {
    marginLeft: -163.5,
  },
  vector3: {
    top: "62.86%",
    bottom: "22.79%",
  },
  lihatPadaHalaman: {
    top: 87,
    left: 77,
  },
  notif1: {
    top: 116,
  },
  beritaTerbaruAda: {
    top: 666,
    left: 86,
  },
  notificationChild: {
    width: 375,
    left: 0,
    top: 762,
    backgroundColor: Color.colorWhite,
  },
  home: {
    left: "8.53%",
    right: "83.47%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  barcode: {
    left: 165,
    top: 750,
    width: 50,
  },
  account: {
    left: 318,
    top: 773,
    height: 30,
  },
  notificationIcon: {
    right: "26.93%",
    left: "65.07%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  news: {
    left: "27.47%",
    right: "64.53%",
  },
  notificationItem: {
    left: 244,
    height: 6,
    top: 762,
  },
  propertyChild: {
    height: 100,
    position: "absolute",
    top: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
  },
  notfication: {
    top: 69,
    left: 142,
    width: 92,
    height: 18,
  },
  property: {
    height: 100,
    position: "absolute",
    top: 0,
    width: 375,
  },
  notification: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Notification1;
