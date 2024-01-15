import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LaporanGajiSupir = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporanGajiSupir}>
      <View style={styles.laporanGajiSupirChild} />
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
        onPress={() => navigation.navigate("Laporan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left9.png")}
        />
      </Pressable>
      <Text style={styles.laporanDataPengeluaran}>
        Laporan Data Pengeluaran
      </Text>
      <Image
        style={[styles.laporanGajiSupirItem, styles.laporanLayout]}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View style={styles.rectangleViewPosition} />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Image
        style={[styles.groupIcon, styles.laporanLayout]}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View style={[styles.laporanGajiSupirChild1, styles.barcodeLayout]} />
      <Pressable
        style={[styles.home, styles.homePosition]}
        onPress={() => navigation.navigate("HomeSuperuser")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("GPSScreen")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/barcode3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount1")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/account.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.news, styles.newsPosition]}
        onPress={() => navigation.navigate("News1")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/news.png")}
        />
      </Pressable>
      <Image
        style={[styles.rectangleIcon, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <Image
        style={[styles.administrasiIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/administrasi.png")}
      />
      <View style={styles.google}>
        <View style={styles.googleChild} />
        <Text style={styles.pencarian}>Pencarian</Text>
      </View>
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector20.png")}
      />
      <View style={styles.laporanGajiSupirChild2} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>...</Text>
      <Image
        style={[styles.iconchevronLeft1, styles.newsPosition]}
        contentFit="cover"
        source={require("../assets/iconchevron-left1.png")}
      />
      <Image
        style={styles.iconchevronLeft2}
        contentFit="cover"
        source={require("../assets/iconchevron-left2.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.lineIcon, styles.laporanChildLayout3]}
        contentFit="cover"
        source={require("../assets/line-49.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild3, styles.laporanChildLayout2]}
        contentFit="cover"
        source={require("../assets/line-48.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild4, styles.laporanChildLayout3]}
        contentFit="cover"
        source={require("../assets/line-51.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild5, styles.laporanChildLayout3]}
        contentFit="cover"
        source={require("../assets/line-52.png")}
      />
      <Text style={[styles.no, styles.noTypo]}>No</Text>
      <View
        style={[styles.laporanGajiSupirChild6, styles.laporanChildLayout1]}
      />
      <Text style={[styles.namaPengeluaran, styles.namaTypo]}>
        Nama Pengeluaran
      </Text>
      <Text style={[styles.jumlah, styles.jumlahTypo]}>Jumlah</Text>
      <Text style={[styles.total, styles.totalTypo]}>Total</Text>
      <Text style={[styles.gajiSupir, styles.text4Position]}>Gaji Supir</Text>
      <Text style={[styles.orang, styles.orangTypo]}>{`30 Orang `}</Text>
      <Image
        style={[styles.laporanGajiSupirChild7, styles.laporanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-53.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild8, styles.laporanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-54.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild9, styles.laporanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-55.png")}
      />
      <Text style={[styles.rp72000000, styles.rp72000000Typo]}>
        Rp. 72.000.000
      </Text>
      <Text style={[styles.text4, styles.textPosition1]}>1</Text>
      <Text style={[styles.text5, styles.text5Typo]}>2</Text>
      <Text style={[styles.gajiAdmin, styles.gajiTypo]}>Gaji Admin</Text>
      <Text style={[styles.orang1, styles.orangLayout]}>16 Orang</Text>
      <Text style={[styles.rp6560000, styles.rp6560000Typo]}>
        Rp. 65.600.00
      </Text>
      <Text style={[styles.text6, styles.bbmPosition]}>3</Text>
      <Text style={[styles.bbm, styles.bbmPosition]}>BBM</Text>
      <Text style={[styles.liter, styles.literTypo]}>1.620 Liter</Text>
      <Text style={[styles.rp11160000, styles.bbmPosition]}>
        Rp. 11.160.000
      </Text>
      <Text style={[styles.text7, styles.textPosition1]}>4</Text>
      <Text style={[styles.biayaLainLain, styles.biayaLayout]}>
        Biaya Lain-lain
      </Text>
      <Text style={[styles.rp12000000, styles.rp6560000Typo]}>
        Rp. 12.000.000
      </Text>
      <Text style={[styles.total1, styles.total1Position]}>Total</Text>
      <Text style={[styles.rp10166000, styles.total1Position]}>
        Rp. 101.660.00
      </Text>
      <Text style={[styles.detailBulan, styles.detailTypo]}>
        Detail : Bulan 10 Tahun 2023
      </Text>
      <Image
        style={[styles.laporanGajiSupirChild10, styles.laporanLayout]}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View
        style={[styles.laporanGajiSupirChild11, styles.laporanChildPosition3]}
      />
      <View
        style={[styles.laporanGajiSupirChild12, styles.laporanChildPosition3]}
      />
      <View
        style={[styles.laporanGajiSupirChild13, styles.laporanChildPosition1]}
      />
      <View
        style={[styles.laporanGajiSupirChild14, styles.laporanChildPosition2]}
      />
      <Image
        style={[styles.laporanGajiSupirChild15, styles.laporanChildLayout2]}
        contentFit="cover"
        source={require("../assets/line-58.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild16, styles.laporanChildPosition2]}
        contentFit="cover"
        source={require("../assets/line-51.png")}
      />
      <View style={[styles.laporanGajiSupirChild17, styles.total2Position]} />
      <Text style={[styles.no1, styles.laporanChildPosition2]}>No</Text>
      <View
        style={[styles.laporanGajiSupirChild18, styles.laporanChildPosition]}
      />
      <Text style={[styles.namaPengeluaran1, styles.laporanChildPosition2]}>
        Nama Pengeluaran
      </Text>
      <Text style={[styles.jumlah1, styles.laporanChildPosition2]}>Jumlah</Text>
      <Text style={[styles.total2, styles.total2Position]}>Total</Text>
      <Text style={[styles.gajiSupir1, styles.lainPosition]}>Gaji Supir</Text>
      <Text style={[styles.orang2, styles.orangTypo]}>{`30 Orang `}</Text>
      <Image
        style={[styles.laporanGajiSupirChild19, styles.laporanChildPosition1]}
        contentFit="cover"
        source={require("../assets/line-62.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild20, styles.laporanChildPosition]}
        contentFit="cover"
        source={require("../assets/line-63.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild21, styles.laporanChildPosition]}
        contentFit="cover"
        source={require("../assets/line-64.png")}
      />
      <Text style={[styles.rp70000000, styles.rp9966000Position]}>
        Rp. 70.000.000
      </Text>
      <Text style={[styles.text8, styles.textPosition]}>1</Text>
      <Text style={[styles.text9, styles.text9Typo]}>2</Text>
      <Text style={[styles.gajiAdmin1, styles.gajiTypo]}>Gaji Admin</Text>
      <Text style={[styles.orang3, styles.text9Typo]}>16 Orang</Text>
      <Text style={[styles.rp65600001, styles.rp6560000Typo]}>
        Rp. 65.600.00
      </Text>
      <Text style={[styles.text10, styles.bbm1Position]}>3</Text>
      <Text style={[styles.bbm1, styles.bbm1Position]}>BBM</Text>
      <Text style={[styles.liter1, styles.literTypo]}>1.620 Liter</Text>
      <Text style={[styles.rp111600001, styles.bbm1Position]}>
        Rp. 11.160.000
      </Text>
      <Text style={[styles.text11, styles.textPosition]}>4</Text>
      <Text style={[styles.biayaLainLain1, styles.lainPosition]}>
        Biaya Lain-lain
      </Text>
      <Text style={[styles.rp120000001, styles.rp6560000Typo]}>
        Rp. 12.000.000
      </Text>
      <Text style={[styles.total3, styles.total3Position]}>Total</Text>
      <Text style={[styles.rp9966000, styles.total3Position]}>
        Rp. 99.660.00
      </Text>
      <Text style={[styles.detailBulan1, styles.detailTypo]}>
        Detail : Bulan 11 Tahun 2023
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  laporanLayout: {
    height: 10,
    width: 12,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  barcodeLayout: {
    height: 50,
    position: "absolute",
  },
  homePosition: {
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  newsPosition: {
    left: "27.47%",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppins,
    top: 704,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lineViewLayout: {
    height: 162,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  laporanChildLayout3: {
    height: 160,
    width: 1,
  },
  laporanChildLayout2: {
    width: 2,
    height: 161,
    position: "absolute",
  },
  noTypo: {
    height: 321,
    width: 22,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
  },
  laporanChildLayout1: {
    height: 1,
    width: 334,
  },
  namaTypo: {
    width: 130,
    height: 22,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
  },
  jumlahTypo: {
    height: 21,
    width: 52,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
  },
  totalTypo: {
    width: 84,
    height: 21,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
  },
  text4Position: {
    height: 16,
    top: 242,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  orangTypo: {
    width: 66,
    height: 15,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  laporanChildLayout: {
    width: 333,
    height: 1,
    left: 22,
    position: "absolute",
  },
  rp72000000Typo: {
    height: 14,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  textPosition1: {
    left: 23,
    width: 23,
  },
  text5Typo: {
    top: 263,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  gajiTypo: {
    height: 17,
    width: 157,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  orangLayout: {
    height: 18,
    width: 65,
  },
  rp6560000Typo: {
    height: 19,
    width: 82,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  bbmPosition: {
    top: 286,
    height: 17,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  literTypo: {
    height: 24,
    width: 67,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  biayaLayout: {
    width: 157,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  total1Position: {
    top: 346,
    height: 24,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  detailTypo: {
    width: 149,
    height: 18,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  laporanChildPosition3: {
    left: 16,
    top: 432,
    height: 215,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  laporanChildPosition1: {
    left: 19,
    top: 465,
    position: "absolute",
  },
  laporanChildPosition2: {
    top: 465,
    position: "absolute",
  },
  total2Position: {
    left: 269,
    top: 465,
    position: "absolute",
  },
  laporanChildPosition: {
    left: 20,
    height: 1,
    width: 334,
    position: "absolute",
  },
  lainPosition: {
    left: 46,
    textAlign: "left",
  },
  rp9966000Position: {
    left: 270,
    width: 83,
    textAlign: "center",
  },
  textPosition: {
    left: 21,
    width: 23,
  },
  text9Typo: {
    top: 513,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  bbm1Position: {
    top: 536,
    height: 17,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  total3Position: {
    top: 596,
    height: 24,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  laporanGajiSupirChild: {
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
  laporanDataPengeluaran: {
    top: 59,
    left: 59,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.colorWhite,
    width: 258,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  laporanGajiSupirItem: {
    top: 396,
    left: 324,
  },
  rectangleViewPosition: {
    height: 215,
    backgroundColor: Color.colorGainsboro_200,
    left: 18,
    top: 182,
    width: 340,
    position: "absolute",
  },
  rectangleView: {
    height: 215,
    backgroundColor: Color.colorGainsboro_200,
    left: 18,
    top: 182,
    width: 340,
    position: "absolute",
  },
  groupIcon: {
    top: 693,
    left: 329,
  },
  laporanGajiSupirChild1: {
    left: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
    height: 50,
    top: 762,
  },
  home: {
    left: "8.53%",
    right: "83.47%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
    position: "absolute",
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
  news: {
    right: "64.53%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
    width: "8%",
  },
  rectangleIcon: {
    left: 243,
    height: 6,
    top: 762,
    width: 30,
  },
  administrasiIcon: {
    width: "6.4%",
    right: "27.73%",
    left: "65.87%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  googleChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderColor: Color.colorBlack,
    backgroundColor: Color.colorWhite,
    borderWidth: 1,
    borderStyle: "solid",
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
  laporanGajiSupirChild2: {
    top: 703,
    left: 127,
    backgroundColor: Color.colorGainsboro_100,
    width: 19,
    height: 20,
    position: "absolute",
  },
  text: {
    left: 135,
  },
  text1: {
    left: 168,
  },
  text2: {
    left: 198,
  },
  text3: {
    left: 221,
  },
  iconchevronLeft1: {
    height: "1.8%",
    width: "2.67%",
    top: "86.58%",
    right: "69.87%",
    bottom: "11.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  iconchevronLeft2: {
    marginTop: 298,
    width: "2.69%",
    top: "50%",
    right: "30.37%",
    left: "66.93%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineView: {
    left: 22,
    top: 215,
    position: "absolute",
  },
  lineIcon: {
    left: 45,
    top: 215,
    position: "absolute",
  },
  laporanGajiSupirChild3: {
    top: 214,
    left: 355,
    height: 161,
  },
  laporanGajiSupirChild4: {
    left: 203,
    top: 215,
    position: "absolute",
  },
  laporanGajiSupirChild5: {
    left: 271,
    top: 215,
    position: "absolute",
  },
  no: {
    left: 24,
    top: 215,
    position: "absolute",
  },
  laporanGajiSupirChild6: {
    top: 238,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    left: 22,
    position: "absolute",
  },
  namaPengeluaran: {
    height: 22,
    left: 47,
    top: 215,
    position: "absolute",
  },
  jumlah: {
    left: 213,
    top: 215,
    position: "absolute",
  },
  total: {
    left: 271,
    top: 215,
    position: "absolute",
  },
  gajiSupir: {
    width: 155,
    left: 48,
    textAlign: "left",
  },
  orang: {
    top: 243,
    left: 205,
  },
  laporanGajiSupirChild7: {
    top: 215,
  },
  laporanGajiSupirChild8: {
    top: 375,
    left: 22,
    position: "absolute",
  },
  laporanGajiSupirChild9: {
    top: 344,
  },
  rp72000000: {
    top: 240,
    width: 83,
    textAlign: "center",
    left: 272,
  },
  text4: {
    width: 23,
    height: 16,
    top: 242,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
    textAlign: "center",
  },
  text5: {
    width: 23,
    left: 23,
    height: 22,
  },
  gajiAdmin: {
    top: 264,
    left: 47,
  },
  orang1: {
    left: 206,
    top: 263,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  rp6560000: {
    top: 262,
    left: 273,
  },
  text6: {
    width: 23,
    left: 24,
    textAlign: "center",
  },
  bbm: {
    width: 156,
    left: 48,
    textAlign: "left",
  },
  liter: {
    top: 285,
    left: 205,
  },
  rp11160000: {
    left: 273,
    width: 83,
    textAlign: "center",
  },
  text7: {
    top: 303,
    width: 23,
    height: 22,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  biayaLainLain: {
    top: 304,
    left: 48,
    textAlign: "left",
  },
  rp12000000: {
    top: 305,
    left: 273,
  },
  total1: {
    left: 49,
    width: 155,
    textAlign: "left",
  },
  rp10166000: {
    width: 83,
    textAlign: "center",
    left: 272,
  },
  detailBulan: {
    top: 194,
    left: 24,
  },
  laporanGajiSupirChild10: {
    top: 646,
    left: 322,
  },
  laporanGajiSupirChild11: {
    width: 340,
    left: 16,
    top: 432,
  },
  laporanGajiSupirChild12: {
    width: 341,
    borderWidth: 1,
    borderColor: Color.colorDarkgray_200,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  laporanGajiSupirChild13: {
    height: 162,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  laporanGajiSupirChild14: {
    left: 44,
    height: 161,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  laporanGajiSupirChild15: {
    top: 464,
    left: 353,
    height: 161,
  },
  laporanGajiSupirChild16: {
    left: 201,
    height: 160,
    width: 1,
  },
  laporanGajiSupirChild17: {
    height: 161,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  no1: {
    height: 321,
    width: 22,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    left: 22,
  },
  laporanGajiSupirChild18: {
    top: 488,
    borderTopWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  namaPengeluaran1: {
    height: 22,
    width: 130,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    left: 45,
  },
  jumlah1: {
    left: 211,
    height: 21,
    width: 52,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
  },
  total2: {
    width: 84,
    height: 21,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
  },
  gajiSupir1: {
    top: 492,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
    width: 155,
  },
  orang2: {
    top: 493,
    left: 203,
  },
  laporanGajiSupirChild19: {
    height: 1,
    width: 334,
  },
  laporanGajiSupirChild20: {
    top: 625,
  },
  laporanGajiSupirChild21: {
    top: 594,
  },
  rp70000000: {
    top: 490,
    height: 14,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  text8: {
    top: 492,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
    textAlign: "center",
  },
  text9: {
    left: 21,
    width: 23,
    height: 22,
  },
  gajiAdmin1: {
    top: 514,
    left: 45,
  },
  orang3: {
    left: 204,
    height: 18,
    width: 65,
  },
  rp65600001: {
    top: 512,
    left: 271,
  },
  text10: {
    width: 23,
    left: 22,
    textAlign: "center",
  },
  bbm1: {
    left: 46,
    textAlign: "left",
    width: 156,
  },
  liter1: {
    top: 535,
    left: 203,
  },
  rp111600001: {
    width: 83,
    textAlign: "center",
    left: 271,
  },
  text11: {
    top: 553,
    height: 22,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  biayaLainLain1: {
    top: 554,
    width: 157,
    height: 16,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  rp120000001: {
    top: 555,
    left: 271,
  },
  total3: {
    width: 155,
    left: 47,
    textAlign: "left",
  },
  rp9966000: {
    left: 270,
    width: 83,
    textAlign: "center",
  },
  detailBulan1: {
    top: 444,
    left: 22,
  },
  laporanGajiSupir: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporanGajiSupir;
