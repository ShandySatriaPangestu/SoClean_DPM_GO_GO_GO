import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const LaporanKendalaSupir = () => {
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
        onPress={() => navigation.navigate("Laporan")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left8.png")}
        />
      </Pressable>
      <Text style={styles.laporanKendalaSupir1}>Laporan Kendala Supir</Text>
      <View style={[styles.laporanKendalaSupirItem, styles.barcodeLayout]} />
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
        style={[styles.news, styles.homePosition]}
        onPress={() => navigation.navigate("News1")}
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
        style={[styles.laporanKendalaSupirInner, styles.accountLayout]}
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
        <View style={[styles.iconchevronLeft1, styles.iconchevronLayout]}>
          <Image
            style={[styles.iconchevronLeftChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-4309.png")}
          />
          <Text style={styles.beriTypo}>Beri Tanggapan</Text>
        </View>
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <View style={[styles.iconchevronLeft2, styles.iconchevronLayout]}>
          <Image
            style={[styles.iconchevronLeftChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-4309.png")}
          />
          <Text style={styles.beriTypo}>Beri Tanggapan</Text>
        </View>
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
        <View style={[styles.iconchevronLeft3, styles.iconchevronLayout]}>
          <Image
            style={[styles.iconchevronLeftChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-4309.png")}
          />
          <Text style={styles.beriTypo}>Beri Tanggapan</Text>
        </View>
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
        <View style={[styles.iconchevronLeft4, styles.iconchevronLayout]}>
          <Image
            style={[styles.iconchevronLeftChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-4309.png")}
          />
          <Text style={styles.beriTypo}>Beri Tanggapan</Text>
        </View>
        <View style={[styles.groupChild1, styles.childPosition]} />
        <View style={[styles.iconchevronLeft5, styles.iconchevronLayout]}>
          <Image
            style={[styles.iconchevronLeftChild, styles.childPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-4309.png")}
          />
          <Text style={styles.beriTypo}>Beri Tanggapan</Text>
        </View>
        <Text
          style={[styles.namaAgus, styles.namaTypo]}
        >{`Nama                         : Agus
ID                                : 3687289
Kendala                     : Izin Sakit
No Plat                       : bm 6753 ab
Tanggal                     : 15-11-2022
`}</Text>
      </View>
      <View style={styles.laporanKendalaSupirChild1} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>...</Text>
      <Image
        style={[styles.iconchevronLeft6, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconchevron-left1.png")}
      />
      <Image
        style={styles.iconchevronLeft7}
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
  barcodeLayout: {
    height: 50,
    position: "absolute",
  },
  homePosition: {
    height: "3.69%",
    bottom: "2.09%",
    top: "94.21%",
    position: "absolute",
  },
  accountLayout: {
    width: 30,
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
  },
  iconchevronLayout: {
    height: 89,
    width: 295,
    left: 243,
    position: "absolute",
  },
  childPosition: {
    left: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo: {
    width: 317,
    left: 5,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 85,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
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
    left: 1,
  },
  home: {
    left: "8.8%",
    right: "83.2%",
    width: "8%",
    height: "3.69%",
    bottom: "2.09%",
    top: "94.21%",
  },
  iconLayout1: {
    height: "100%",
    width: "100%",
  },
  barcode: {
    left: 166,
    top: 742,
    width: 50,
  },
  account: {
    left: 319,
    top: 765,
    height: 30,
  },
  news: {
    left: "27.73%",
    right: "64.27%",
    width: "8%",
    height: "3.69%",
    bottom: "2.09%",
    top: "94.21%",
  },
  administrasiIcon: {
    width: "6.4%",
    right: "27.47%",
    left: "66.13%",
    height: "3.69%",
    bottom: "2.09%",
    top: "94.21%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  laporanKendalaSupirInner: {
    top: 754,
    left: 244,
    height: 6,
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
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconchevronLeftChild: {
    width: 100,
    height: 23,
    top: 0,
  },
  beriTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 85,
    width: 286,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    left: 9,
    top: 4,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconchevronLeft1: {
    top: 65,
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
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconchevronLeft2: {
    top: 176,
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
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconchevronLeft3: {
    top: 288,
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
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaRusdi: {
    top: 353,
  },
  iconchevronLeft4: {
    top: 404,
  },
  groupChild1: {
    top: 456,
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
  },
  iconchevronLeft5: {
    top: 518,
  },
  namaAgus: {
    top: 462,
  },
  rectangleParent: {
    top: 153,
    left: 11,
    width: 538,
    height: 607,
    position: "absolute",
  },
  laporanKendalaSupirChild1: {
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
  iconchevronLeft6: {
    height: "1.8%",
    width: "2.67%",
    top: "89.41%",
    right: "94.13%",
    bottom: "8.79%",
    left: "3.2%",
    position: "absolute",
  },
  iconchevronLeft7: {
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

export default LaporanKendalaSupir;
