import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LaporanGajiSupir1 = () => {
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
        onPress={() => navigation.navigate("Administrasi")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left9.png")}
        />
      </Pressable>
      <Text style={styles.laporanGajiSupir1}>Laporan Gaji Supir</Text>
      <Image
        style={[styles.laporanGajiSupirItem, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View
        style={[styles.laporanGajiSupirInner, styles.rectangleViewLayout]}
      />
      <Text
        style={[styles.namaRinto, styles.namaTypo]}
      >{`Nama   : Rinto Ardianto
ID           : A71
Bagian : Supir

`}</Text>
      <Text style={[styles.detailGaji, styles.detailTypo]}>Detail Gaji</Text>
      <Text style={[styles.gaji15Container, styles.containerTypo]}>
        <Text style={styles.gaji}>{`Gaji  : 15 Pengangkutan               
Tunjangan BPJS   
Bonus
Lain-lain




Total
`}</Text>
        <Text style={styles.text}>{`                 `}</Text>
      </Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild1, styles.laporanChildLayout3]}
        contentFit="cover"
        source={require("../assets/line-13.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.laporanGajiSupirChild2, styles.laporanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <View
        style={[styles.laporanGajiSupirChild3, styles.laporanChildLayout2]}
      />
      <Image
        style={[styles.laporanGajiSupirChild4, styles.laporanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-17.png")}
      />
      <Text style={[styles.rp3000000Rp, styles.rp3000000RpTypo]}>{`Rp 3.000.000
Rp. 120.000
Rp 100.000
Rp 80.000




Rp 3.300.000.00`}</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.namaRidho, styles.namaTypo]}>{`Nama   : Ridho Tama
ID           : A23
Bagian : Supir

`}</Text>
      <Text style={[styles.detailGaji1, styles.detailTypo]}>Detail Gaji</Text>
      <Text style={[styles.gaji17Container, styles.gaji17ContainerPosition]}>
        <Text style={styles.gaji}>{`Gaji : 17 Pengangkutan              
Tunjangan BPJS   
Bonus
Lain-lain




Total
`}</Text>
        <Text style={styles.text}>{`                 `}</Text>
      </Text>
      <Image
        style={[styles.laporanGajiSupirChild5, styles.laporanChildPosition]}
        contentFit="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.laporanGajiSupirChild6, styles.laporanChildPosition]}
        contentFit="cover"
        source={require("../assets/line-13.png")}
      />
      <View
        style={[styles.laporanGajiSupirChild7, styles.laporanChildPosition]}
      />
      <Image
        style={[styles.laporanGajiSupirChild8, styles.laporanChildLayout1]}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <View
        style={[styles.laporanGajiSupirChild9, styles.laporanChildLayout2]}
      />
      <Image
        style={[styles.laporanGajiSupirChild10, styles.gaji17ContainerPosition]}
        contentFit="cover"
        source={require("../assets/line-17.png")}
      />
      <Text style={[styles.rp3400000Rp, styles.rp3000000RpTypo]}>{`Rp 3.400.000
Rp. 120.000
Rp 170.000
Rp 180.000




Rp 3.870.300.00`}</Text>
      <View style={[styles.laporanGajiSupirChild11, styles.barcodeLayout]} />
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
      <Pressable
        style={[styles.barcode, styles.barcodeLayout]}
        onPress={() => navigation.navigate("AbsensiQR")}
      >
        <Image
          style={styles.iconLayout1}
          contentFit="cover"
          source={require("../assets/barcode.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
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
      <View style={styles.laporanGajiSupirChild12} />
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
      <Text style={[styles.text4, styles.textTypo]}>3</Text>
      <Text style={[styles.text5, styles.textTypo]}>...</Text>
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
  groupIconLayout: {
    height: 10,
    width: 12,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 258,
    width: 340,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  namaTypo: {
    height: 61,
    width: 318,
    fontFamily: FontFamily.poppins,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  detailTypo: {
    height: 18,
    width: 327,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  containerTypo: {
    height: 133,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  lineIconLayout: {
    height: 143,
    width: 1,
  },
  laporanChildLayout3: {
    height: 1,
    width: 322,
  },
  lineViewLayout: {
    height: 144,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 1,
  },
  laporanChildLayout1: {
    width: 323,
    height: 1,
    position: "absolute",
  },
  laporanChildLayout2: {
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 143,
    width: 1,
    position: "absolute",
  },
  laporanChildLayout: {
    height: 2,
    width: 321,
  },
  rp3000000RpTypo: {
    height: 137,
    width: 229,
    textAlign: "right",
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  gaji17ContainerPosition: {
    left: 35,
    position: "absolute",
  },
  laporanChildPosition: {
    top: 546,
    position: "absolute",
  },
  barcodeLayout: {
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
  textTypo: {
    top: 715,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
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
  laporanGajiSupir1: {
    top: 71,
    left: 81,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    width: 209,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  laporanGajiSupirItem: {
    top: 396,
    left: 324,
  },
  laporanGajiSupirInner: {
    top: 148,
    left: 21,
  },
  namaRinto: {
    top: 164,
    left: 33,
  },
  detailGaji: {
    top: 226,
    left: 29,
  },
  gaji: {
    fontSize: FontSize.size_3xs,
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  gaji15Container: {
    width: 126,
    left: 30,
    position: "absolute",
    top: 250,
  },
  lineIcon: {
    left: 185,
    top: 249,
    position: "absolute",
  },
  laporanGajiSupirChild1: {
    top: 249,
    position: "absolute",
    left: 29,
  },
  lineView: {
    top: 249,
    position: "absolute",
    left: 29,
  },
  laporanGajiSupirChild2: {
    top: 391,
    left: 28,
  },
  laporanGajiSupirChild3: {
    left: 351,
    top: 250,
  },
  laporanGajiSupirChild4: {
    top: 370,
    left: 30,
    position: "absolute",
  },
  rp3000000Rp: {
    top: 251,
    left: 119,
  },
  groupIcon: {
    top: 693,
    left: 329,
  },
  rectangleView: {
    top: 445,
    left: 26,
  },
  namaRidho: {
    top: 461,
    left: 38,
  },
  detailGaji1: {
    top: 523,
    left: 34,
  },
  gaji17Container: {
    width: 135,
    top: 547,
    height: 133,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  laporanGajiSupirChild5: {
    left: 191,
    height: 143,
    width: 1,
  },
  laporanGajiSupirChild6: {
    left: 34,
    height: 1,
    width: 322,
  },
  laporanGajiSupirChild7: {
    left: 34,
    height: 144,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 1,
  },
  laporanGajiSupirChild8: {
    top: 688,
    left: 33,
  },
  laporanGajiSupirChild9: {
    left: 356,
    top: 547,
  },
  laporanGajiSupirChild10: {
    top: 667,
    height: 2,
    width: 321,
  },
  rp3400000Rp: {
    top: 548,
    left: 124,
  },
  laporanGajiSupirChild11: {
    left: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
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
    left: "27.47%",
    right: "64.53%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
  },
  rectangleIcon: {
    left: 243,
    height: 6,
    top: 762,
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
  googleChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    borderColor: Color.colorBlack,
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
  laporanGajiSupirChild12: {
    top: 714,
    left: 50,
    backgroundColor: Color.colorGainsboro_100,
    width: 19,
    height: 20,
    position: "absolute",
  },
  text2: {
    left: 58,
  },
  text3: {
    left: 91,
  },
  text4: {
    left: 121,
  },
  text5: {
    left: 144,
  },
  iconchevronLeft1: {
    height: "1.8%",
    width: "2.67%",
    top: "87.93%",
    right: "90.4%",
    bottom: "10.27%",
    left: "6.93%",
    position: "absolute",
  },
  iconchevronLeft2: {
    marginTop: 309,
    width: "2.69%",
    top: "50%",
    right: "50.91%",
    left: "46.4%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  laporanGajiSupir: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporanGajiSupir1;
