import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LaporanAbsensiSupir = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporanAbsensiSupir}>
      <View style={styles.laporanAbsensiSupirChild} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-20}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.iconchevronLeft}
        onPress={() => navigation.navigate("Crew")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left8.png")}
        />
      </Pressable>
      <Text style={styles.laporanAbsensiSupir1}>Laporan Absensi Supir</Text>
      <View
        style={[styles.laporanAbsensiSupirItem, styles.barcodeIconLayout]}
      />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[styles.barcodeIcon, styles.barcodeIconLayout]}
        contentFit="cover"
        source={require("../assets/barcode4.png")}
      />
      <Pressable
        style={styles.account}
        onPress={() => navigation.navigate("Acount")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/akun.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.news, styles.homePosition]}
        onPress={() => navigation.navigate("News2")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/news.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.administrasi, styles.homePosition]}
        onPress={() => navigation.navigate("Administrasi")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/administrasi.png")}
        />
      </Pressable>
      <View style={styles.google}>
        <View style={styles.googleChild} />
        <Text style={styles.pencarian}>Pencarian</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text
          style={[styles.namaBudiono, styles.namaTypo4]}
        >{`Nama                : Budiono
ID                       : 2457201
Keterangan      : Masuk
`}</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text
          style={[styles.namaAnto, styles.namaTypo3]}
        >{`Nama                : Anto
ID                       : 2757201
Keterangan      : Masuk
`}</Text>
        <View style={[styles.groupInner, styles.groupInnerLayout]} />
        <Text
          style={[styles.namaSeko, styles.namaTypo4]}
        >{`Nama                : Seko
ID                       : 2057201
Keterangan      : Masuk
`}</Text>
        <View style={[styles.rectangleView, styles.groupInnerLayout]} />
        <Text
          style={[styles.namaMarjo, styles.namaTypo3]}
        >{`Nama                : Marjo
ID                       : 2957201
Keterangan      : Masuk
`}</Text>
        <View style={[styles.groupChild1, styles.groupChildLayout2]} />
        <Text
          style={[styles.namaAnjas, styles.namaTypo2]}
        >{`Nama                : Anjas
ID                       : 21293291
Keterangan      : Alfa
`}</Text>
        <View style={[styles.groupChild2, styles.groupChildLayout2]} />
        <Text
          style={[styles.namaDeri, styles.namaTypo2]}
        >{`Nama                : Deri
ID                       : 2157201
Keterangan      : Izin
`}</Text>
        <View style={[styles.groupChild3, styles.groupChildLayout1]} />
        <Text
          style={[styles.namaYugo, styles.namaTypo1]}
        >{`Nama                : Yugo
ID                       : 22192932
Keterangan      : Masuk
`}</Text>
        <View style={[styles.groupChild4, styles.groupChildLayout1]} />
        <Text
          style={[styles.namaLiam, styles.namaTypo1]}
        >{`Nama                : Liam
ID                       : 220303
Keterangan      : Masuk
`}</Text>
        <View style={[styles.groupChild5, styles.groupChildLayout]} />
        <Text
          style={[styles.namaRatno, styles.namaTypo]}
        >{`Nama                : Ratno
ID                       : 232873
Keterangan      : Izin
`}</Text>
        <View style={[styles.groupChild6, styles.groupChildLayout]} />
        <Text
          style={[styles.namaBudi, styles.namaTypo]}
        >{`Nama                : Budi
ID                       : 2145201
Keterangan      : Masuk
`}</Text>
      </View>
      <View style={styles.laporanAbsensiSupirInner} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>...</Text>
      <Image
        style={[styles.iconchevronLeft1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconchevron-left1.png")}
      />
      <Image
        style={styles.iconchevronLeft2}
        contentFit="cover"
        source={require("../assets/iconchevron-left2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  barcodeIconLayout: {
    height: 50,
    position: "absolute",
  },
  homePosition: {
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
    position: "absolute",
  },
  groupLayout: {
    height: 97,
    width: 160,
    borderColor: Color.colorDarkgray_200,
    top: 0,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo4: {
    height: 85,
    width: 172,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  namaTypo3: {
    left: 187,
    height: 85,
    width: 172,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupInnerLayout: {
    top: 102,
    height: 97,
    width: 160,
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  groupChildLayout2: {
    top: 204,
    height: 97,
    width: 160,
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo2: {
    top: 227,
    height: 85,
    width: 172,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout1: {
    top: 306,
    height: 97,
    width: 160,
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo1: {
    top: 326,
    height: 85,
    width: 172,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    top: 411,
    height: 97,
    width: 160,
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo: {
    top: 431,
    height: 85,
    width: 172,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    top: 696,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  laporanAbsensiSupirChild: {
    top: -15,
    left: -2,
    backgroundColor: Color.colorDarkslategray_100,
    width: 377,
    height: 118,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconchevronLeft: {
    left: "5.87%",
    top: "6.12%",
    right: "90.59%",
    bottom: "91.45%",
    width: "3.55%",
    height: "2.43%",
    position: "absolute",
  },
  laporanAbsensiSupir1: {
    top: 71,
    left: 81,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    width: 209,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  laporanAbsensiSupirItem: {
    top: 762,
    width: 375,
    backgroundColor: Color.colorWhite,
    height: 50,
    left: 0,
  },
  home: {
    left: "8.53%",
    right: "83.47%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  barcodeIcon: {
    top: 750,
    left: 165,
    width: 50,
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  account: {
    left: 318,
    top: 773,
    width: 30,
    height: 30,
    position: "absolute",
  },
  news: {
    left: "27.47%",
    right: "64.53%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  administrasi: {
    left: "65.87%",
    right: "27.73%",
    width: "6.4%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  googleChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderColor: Color.colorBlack,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    height: "100%",
    borderRadius: Border.br_3xs,
    position: "absolute",
    width: "100%",
  },
  pencarian: {
    height: "54.23%",
    width: "19.3%",
    top: "8.08%",
    left: "15.2%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  google: {
    height: "3.2%",
    width: "91.2%",
    top: "14.16%",
    right: "4.53%",
    bottom: "82.64%",
    left: "4.27%",
    position: "absolute",
  },
  vectorIcon: {
    height: "1.85%",
    width: "4%",
    top: "14.75%",
    right: "88.53%",
    bottom: "83.4%",
    left: "7.47%",
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  namaBudiono: {
    top: 21,
    left: 15,
  },
  groupItem: {
    left: 174,
  },
  namaAnto: {
    top: 24,
  },
  groupInner: {
    left: 0,
  },
  namaSeko: {
    top: 125,
    left: 16,
  },
  rectangleView: {
    left: 174,
  },
  namaMarjo: {
    top: 127,
  },
  groupChild1: {
    left: 0,
  },
  namaAnjas: {
    left: 15,
  },
  groupChild2: {
    left: 174,
  },
  namaDeri: {
    left: 188,
  },
  groupChild3: {
    left: 0,
  },
  namaYugo: {
    left: 16,
  },
  groupChild4: {
    left: 174,
  },
  namaLiam: {
    left: 186,
  },
  groupChild5: {
    left: 1,
  },
  namaRatno: {
    left: 15,
  },
  groupChild6: {
    left: 175,
  },
  namaBudi: {
    left: 189,
  },
  rectangleParent: {
    top: 167,
    left: 12,
    width: 361,
    height: 516,
    position: "absolute",
  },
  laporanAbsensiSupirInner: {
    top: 695,
    left: 36,
    width: 19,
    height: 20,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text: {
    left: 44,
  },
  text1: {
    left: 77,
  },
  text2: {
    left: 107,
  },
  text3: {
    left: 130,
  },
  iconchevronLeft1: {
    height: "1.8%",
    width: "2.67%",
    top: "85.59%",
    right: "94.13%",
    bottom: "12.61%",
    left: "3.2%",
    position: "absolute",
  },
  iconchevronLeft2: {
    marginTop: 290,
    width: "2.69%",
    top: "50%",
    right: "54.64%",
    left: "42.67%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  laporanAbsensiSupir: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporanAbsensiSupir;
