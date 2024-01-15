import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LaporanPengeluaranMinyak = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporanPengeluaranMinyak}>
      <View style={styles.laporanPengeluaranMinyakChild} />
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
        onPress={() => navigation.navigate("Administrasi")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left8.png")}
        />
      </Pressable>
      <Text style={styles.laporanPengeluaranMinyak1}>
        Laporan Pengeluaran Minyak
      </Text>
      <View
        style={[styles.laporanPengeluaranMinyakItem, styles.barcodeIconLayout]}
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
        style={[styles.account, styles.accountLayout]}
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
      <Image
        style={[styles.administrasiIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/administrasi.png")}
      />
      <Image
        style={[styles.laporanPengeluaranMinyakInner, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
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
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <Text
          style={[styles.namaSupir, styles.namaTypo1]}
        >{`Nama  Supir                   : Budiono
ID                                     : 2457201
Jenis Mobil                     : Compactor Hino
No Plat                            : BM 9821 AB
Penggunaan Minyak    : 8 liter / Rp 56.000
Tanggal                          : 02-11-2023
`}</Text>
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Text
          style={[styles.namaSupir1, styles.namaTypo1]}
        >{`Nama  Supir                   : Anto
ID                                     : 2157201
Jenis Mobil                     : Compactor Hino
No Plat                            : BM 1289 AC
Penggunaan Minyak    : 10 liter / Rp 70.000
Tanggal                          : 02-11-2023
`}</Text>
        <View style={[styles.groupInner, styles.groupShadowBox]} />
        <Text
          style={[styles.namaSupir2, styles.namaTypo]}
        >{`Nama  Supir                   : Toni
ID                                     : 2057201
Jenis Mobil                     : Hino Dutro 110 SD Mini Compactor
No Plat                            : BM 1321 AD
Penggunaan Minyak    : 15 liter / Rp 105.000
Tanggal                          : 02-11-2023
`}</Text>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Text
          style={[styles.namaSupir3, styles.namaTypo]}
        >{`Nama  Supir                   : Seki
ID                                     : 2257201
Jenis Mobil                     : Hino Dutro 110 SD Mini Compactor
No Plat                            : BM 6531 AQ
Penggunaan Minyak    : 21 liter / Rp 147.000
Tanggal                          : 02-11-2023
`}</Text>
      </View>
      <View style={styles.laporanPengeluaranMinyakChild1} />
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
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  groupChildShadowBox: {
    width: 327,
    borderColor: Color.colorDarkgray_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo1: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    width: 286,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupShadowBox: {
    height: 110,
    width: 327,
    borderColor: Color.colorDarkgray_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo: {
    width: 310,
    left: 7,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    top: 683,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  laporanPengeluaranMinyakChild: {
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
  laporanPengeluaranMinyak1: {
    top: 69,
    left: 55,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "center",
    width: 262,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  laporanPengeluaranMinyakItem: {
    width: 375,
    backgroundColor: Color.colorWhite,
    height: 50,
    left: 0,
    top: 762,
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
    height: 30,
  },
  news: {
    left: "27.47%",
    right: "64.53%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
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
    overflow: "hidden",
  },
  laporanPengeluaranMinyakInner: {
    left: 243,
    height: 6,
    top: 762,
    width: 30,
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
    top: 0,
    left: 5,
    height: 108,
  },
  namaSupir: {
    top: 8,
    left: 12,
    height: 94,
  },
  groupItem: {
    top: 118,
    left: 3,
  },
  namaSupir1: {
    top: 126,
    left: 10,
    height: 102,
  },
  groupInner: {
    top: 236,
    left: 0,
  },
  namaSupir2: {
    top: 244,
    height: 102,
  },
  rectangleView: {
    top: 354,
    height: 114,
    left: 0,
  },
  namaSupir3: {
    top: 362,
    height: 99,
  },
  rectangleParent: {
    top: 162,
    left: 22,
    width: 332,
    height: 468,
    position: "absolute",
  },
  laporanPengeluaranMinyakChild1: {
    top: 682,
    left: 130,
    width: 19,
    height: 20,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text: {
    left: 138,
  },
  text1: {
    left: 171,
  },
  text2: {
    left: 201,
  },
  text3: {
    left: 224,
  },
  iconchevronLeft1: {
    height: "1.8%",
    width: "2.67%",
    top: "83.99%",
    right: "69.07%",
    bottom: "14.21%",
    left: "28.27%",
    position: "absolute",
  },
  iconchevronLeft2: {
    marginTop: 277,
    width: "2.69%",
    top: "50%",
    right: "29.57%",
    left: "67.73%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  laporanPengeluaranMinyak: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporanPengeluaranMinyak;
