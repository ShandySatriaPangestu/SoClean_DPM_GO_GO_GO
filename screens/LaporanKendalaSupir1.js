import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LaporanKendalaSupir1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporanKendalaSupir}>
      <View style={styles.laporanKendalaSupirChild} />
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
      <Text style={styles.laporanKendalaSupir1}>Laporan Kendala Supir</Text>
      <View
        style={[styles.laporanKendalaSupirItem, styles.barcodeIconLayout]}
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
        source={require("../assets/barcode.png")}
      />
      <Pressable
        style={styles.account}
        onPress={() => navigation.navigate("Acount")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/account.png")}
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
        <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <Text
          style={[styles.namaBudiono, styles.namaTypo]}
        >{`Nama                         : Budiono
ID                                : 2457201
Kendala                     : Izin Kendala kendaraan kurang baik
No Plat                       : bm 0321 r
Tanggal                     : 23-11-2022
`}</Text>
        <Text
          style={[styles.namaSatria, styles.namaTypo]}
        >{`Nama                         : Satria
ID                                : 5487205
Kendala                     : Kondisi badan kurang sehat
No Plat                       : bm 9934 fe
Tanggal                     : 22-11-2022
`}</Text>
        <View style={[styles.groupInner, styles.groupChildShadowBox]} />
        <Text
          style={[styles.namaHamdi, styles.namaTypo]}
        >{`Nama                         : Hamdi
ID                                : 9674899
Kendala                     : Izin untuk menghadiri acara keluarga
No Plat                       : bm 7834 ac
Tanggal                     : 20-11-2022
`}</Text>
        <View style={[styles.rectangleView, styles.groupChildShadowBox]} />
        <Text
          style={[styles.namaRusdi, styles.namaTypo]}
        >{`Nama                         : Rusdi
ID                                : 5387239
Kendala                     : Ban Mobil bocor
No Plat                       : bm 1043 ab
Tanggal                     : 19-11-2022
`}</Text>
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Text
          style={[styles.namaAgus, styles.namaTypo]}
        >{`Nama                         : Agus
ID                                : 3687289
Kendala                     : Izin Sakit
No Plat                       : bm 6753 ab
Tanggal                     : 15-11-2022
`}</Text>
      </View>
      <View style={styles.laporanKendalaSupirInner} />
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
  groupChildShadowBox: {
    height: 97,
    width: 351,
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
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 85,
    width: 317,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    left: 5,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo: {
    top: 727,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  laporanKendalaSupirChild: {
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
  laporanKendalaSupir1: {
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
  laporanKendalaSupirItem: {
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
    top: 0,
    left: 1,
    width: 351,
    borderColor: Color.colorDarkgray_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupItem: {
    top: 112,
    left: 1,
    width: 351,
    borderColor: Color.colorDarkgray_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  namaBudiono: {
    top: 9,
  },
  namaSatria: {
    top: 120,
  },
  groupInner: {
    top: 224,
    left: 1,
    width: 351,
    borderColor: Color.colorDarkgray_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  namaHamdi: {
    top: 232,
  },
  rectangleView: {
    top: 341,
    left: 1,
    width: 351,
    borderColor: Color.colorDarkgray_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  namaRusdi: {
    top: 353,
  },
  groupChild1: {
    top: 456,
    width: 351,
    borderColor: Color.colorDarkgray_200,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  namaAgus: {
    top: 462,
  },
  rectangleParent: {
    top: 153,
    left: 11,
    width: 352,
    height: 553,
    position: "absolute",
  },
  laporanKendalaSupirInner: {
    top: 726,
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
    top: "89.41%",
    right: "94.13%",
    bottom: "8.79%",
    left: "3.2%",
    position: "absolute",
  },
  iconchevronLeft2: {
    marginTop: 321,
    width: "2.69%",
    top: "50%",
    right: "54.64%",
    left: "42.67%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  laporanKendalaSupir: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporanKendalaSupir1;
