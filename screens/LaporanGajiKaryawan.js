import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LaporanGajiKaryawan = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporanGajiKaryawan}>
      <View style={styles.laporanGajiKaryawanChild} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={66}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-20}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Image
        style={[styles.iconchevronLeft, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/iconchevron-left.png")}
      />
      <Text style={styles.penggajianAdminstrator}>Penggajian Adminstrator</Text>
      <Image
        style={[styles.laporanGajiKaryawanItem, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View
        style={[styles.laporanGajiKaryawanInner, styles.rectangleViewLayout]}
      />
      <Text style={[styles.namaAngga, styles.namaTypo]}>{`Nama   : Angga
ID           : A10
Bagian : Staff Administrasi

`}</Text>
      <Text style={[styles.detailGaji, styles.detailTypo]}>Detail Gaji</Text>
      <Text
        style={[styles.gajiPokokTunjanganContainer, styles.gajiContainerLayout]}
      >
        <Text style={styles.gajiPokok}>{`Gaji Pokok                
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
        style={[styles.laporanGajiKaryawanChild1, styles.laporanChildLayout3]}
        contentFit="cover"
        source={require("../assets/line-13.png")}
      />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <Image
        style={[styles.laporanGajiKaryawanChild2, styles.laporanChildLayout2]}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <View
        style={[styles.laporanGajiKaryawanChild3, styles.laporanChildLayout1]}
      />
      <Image
        style={[styles.laporanGajiKaryawanChild4, styles.laporanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-17.png")}
      />
      <Text style={[styles.rp4300000Rp, styles.rp4300000RpTypo]}>{`Rp 4.300.000
Rp. 180.000
Rp 400.000
Rp 280.000




Rp 5.160.000.00`}</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.namaRizki, styles.namaTypo]}>{`Nama   : Rizki
ID           : A44
Bagian : Kepala Operasional

`}</Text>
      <Text style={[styles.detailGaji1, styles.detailTypo]}>Detail Gaji</Text>
      <Text style={[styles.gajiPokokTunjanganContainer1, styles.gajiPosition]}>
        <Text style={styles.gajiPokok}>{`Gaji Pokok                
Tunjangan BPJS   
Bonus
Lain-lain




Total
`}</Text>
        <Text style={styles.text}>{`                 `}</Text>
      </Text>
      <Image
        style={[styles.laporanGajiKaryawanChild5, styles.laporanChildPosition]}
        contentFit="cover"
        source={require("../assets/line-12.png")}
      />
      <Image
        style={[styles.laporanGajiKaryawanChild6, styles.laporanChildPosition]}
        contentFit="cover"
        source={require("../assets/line-13.png")}
      />
      <View
        style={[styles.laporanGajiKaryawanChild7, styles.laporanChildPosition]}
      />
      <Image
        style={[styles.laporanGajiKaryawanChild8, styles.laporanChildLayout2]}
        contentFit="cover"
        source={require("../assets/line-15.png")}
      />
      <View style={[styles.laporanGajiKaryawanChild9, styles.gajiPosition]} />
      <Image
        style={[styles.laporanGajiKaryawanChild10, styles.laporanChildLayout]}
        contentFit="cover"
        source={require("../assets/line-17.png")}
      />
      <Text style={[styles.rp5000000Rp, styles.rp4300000RpTypo]}>{`Rp 5.000.000
Rp. 220.000
Rp 270.000
Rp 110.000




Rp 5.600.000.00`}</Text>
      <View style={[styles.laporanGajiKaryawanChild11, styles.barcodeLayout]} />
      <View style={[styles.laporanGajiKaryawanChild11, styles.barcodeLayout]} />
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
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/barcode1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.account, styles.accountLayout]}
        onPress={() => navigation.navigate("Acount1")}
      >
        <Image
          style={styles.iconLayout}
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
        <View style={[styles.googleChild, styles.iconLayout]} />
        <Text style={[styles.pencarian, styles.pencarianPosition]}>
          Pencarian
        </Text>
        <Image
          style={[styles.vectorIcon, styles.pencarianPosition]}
          contentFit="cover"
          source={require("../assets/vector15.png")}
        />
      </View>
      <View style={styles.laporanGajiKaryawanChild13} />
      <Text style={[styles.text2, styles.textTypo]}>1</Text>
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
      <Text style={[styles.text4, styles.textTypo]}>3</Text>
      <Text style={[styles.text5, styles.textTypo]}>...</Text>
      <Image
        style={[styles.iconchevronLeft1, styles.iconLayout1]}
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
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIconLayout: {
    height: 10,
    width: 12,
    left: 324,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 258,
    width: 340,
    backgroundColor: Color.colorGainsboro_200,
    left: 21,
    position: "absolute",
  },
  namaTypo: {
    height: 61,
    width: 318,
    fontFamily: FontFamily.poppins,
    left: 33,
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  detailTypo: {
    height: 18,
    width: 327,
    left: 29,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    fontWeight: "700",
    position: "absolute",
  },
  gajiContainerLayout: {
    height: 133,
    width: 86,
    left: 30,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  lineIconLayout: {
    height: 143,
    width: 1,
    left: 115,
  },
  laporanChildLayout3: {
    height: 1,
    width: 322,
    left: 29,
  },
  lineViewLayout: {
    height: 144,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 1,
    left: 29,
  },
  laporanChildLayout2: {
    width: 323,
    left: 28,
    height: 1,
    position: "absolute",
  },
  laporanChildLayout1: {
    left: 351,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 143,
    width: 1,
  },
  laporanChildLayout: {
    height: 2,
    width: 321,
    left: 30,
    position: "absolute",
  },
  rp4300000RpTypo: {
    height: 137,
    width: 229,
    textAlign: "right",
    left: 119,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  gajiPosition: {
    top: 521,
    position: "absolute",
  },
  laporanChildPosition: {
    top: 520,
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
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  pencarianPosition: {
    top: "19.23%",
    position: "absolute",
  },
  textTypo: {
    top: 691,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  laporanGajiKaryawanChild: {
    top: -15,
    left: -2,
    backgroundColor: Color.colorDarkslategray_100,
    width: 377,
    height: 118,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iconchevronLeft: {
    height: "2.43%",
    width: "3.55%",
    top: "5.67%",
    right: "92.45%",
    bottom: "91.91%",
    left: "4%",
    position: "absolute",
  },
  penggajianAdminstrator: {
    top: 66,
    left: 43,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    width: 283,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  laporanGajiKaryawanItem: {
    top: 396,
  },
  laporanGajiKaryawanInner: {
    top: 148,
  },
  namaAngga: {
    top: 164,
  },
  detailGaji: {
    top: 226,
  },
  gajiPokok: {
    fontSize: FontSize.size_3xs,
  },
  text: {
    fontSize: FontSize.size_sm,
  },
  gajiPokokTunjanganContainer: {
    top: 250,
    position: "absolute",
  },
  lineIcon: {
    top: 249,
    position: "absolute",
  },
  laporanGajiKaryawanChild1: {
    top: 249,
    position: "absolute",
  },
  lineView: {
    top: 249,
    position: "absolute",
  },
  laporanGajiKaryawanChild2: {
    top: 391,
  },
  laporanGajiKaryawanChild3: {
    top: 250,
    position: "absolute",
  },
  laporanGajiKaryawanChild4: {
    top: 370,
  },
  rp4300000Rp: {
    top: 251,
  },
  groupIcon: {
    top: 667,
  },
  rectangleView: {
    top: 419,
  },
  namaRizki: {
    top: 435,
  },
  detailGaji1: {
    top: 497,
  },
  gajiPokokTunjanganContainer1: {
    height: 133,
    width: 86,
    left: 30,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
  },
  laporanGajiKaryawanChild5: {
    height: 143,
    width: 1,
    left: 115,
  },
  laporanGajiKaryawanChild6: {
    height: 1,
    width: 322,
    left: 29,
  },
  laporanGajiKaryawanChild7: {
    height: 144,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    width: 1,
    left: 29,
  },
  laporanGajiKaryawanChild8: {
    top: 662,
  },
  laporanGajiKaryawanChild9: {
    left: 351,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    height: 143,
    width: 1,
  },
  laporanGajiKaryawanChild10: {
    top: 641,
  },
  rp5000000Rp: {
    top: 522,
  },
  laporanGajiKaryawanChild11: {
    left: 0,
    width: 375,
    backgroundColor: Color.colorWhite,
    top: 762,
  },
  icon: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  home: {
    left: "8.53%",
    right: "83.47%",
    width: "8%",
    height: "3.69%",
    bottom: "1.11%",
    top: "95.2%",
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
    left: 244,
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
  },
  pencarian: {
    height: "54.23%",
    width: "19.3%",
    left: "14.04%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    top: "19.23%",
    fontFamily: FontFamily.nunito,
  },
  vectorIcon: {
    height: "57.69%",
    width: "4.39%",
    right: "92.4%",
    bottom: "23.08%",
    left: "3.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
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
  laporanGajiKaryawanChild13: {
    top: 690,
    left: 48,
    backgroundColor: Color.colorGainsboro_100,
    width: 19,
    height: 20,
    position: "absolute",
  },
  text2: {
    left: 56,
  },
  text3: {
    left: 89,
  },
  text4: {
    left: 119,
    top: 691,
  },
  text5: {
    left: 142,
  },
  iconchevronLeft1: {
    height: "1.8%",
    width: "2.67%",
    top: "84.98%",
    right: "90.93%",
    bottom: "13.23%",
    left: "6.4%",
    position: "absolute",
  },
  iconchevronLeft2: {
    marginTop: 285,
    width: "2.69%",
    top: "50%",
    right: "51.44%",
    left: "45.87%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  laporanGajiKaryawan: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporanGajiKaryawan;
