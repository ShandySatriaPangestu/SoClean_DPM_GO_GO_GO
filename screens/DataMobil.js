import * as React from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const DataMobil = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dataMobil}>
      <View style={styles.dataMobilChild} />
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
      <Text style={styles.dataDetailMobil}>Data Detail Mobil</Text>
      <View style={[styles.dataMobilItem, styles.barcodeLayout]} />
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
        style={[styles.dataMobilInner, styles.accountLayout]}
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
      <View style={[styles.rectangleView, styles.dataChildLayout]} />
      <View style={[styles.dataMobilChild1, styles.dataChildLayout]} />
      <Text style={styles.namaKendaraaanContainer}>
        {`Nama Kendaraaan : Hino
Type                            : Compactor `}
        <Text style={styles.hino}>{`Hino
`}</Text>
        {`Id mobil                      : 01
No Plat                        : BM 0321 RQ
Tahun Pembelian    : 2017
Kondisi                       :  Baik`}
      </Text>
      <Text style={[styles.namaKendaraaanContainer1, styles.namaTypo]}>
        {`Nama Kendaraaan : Hino
Type                            : Compactor `}
        <Text style={styles.hino}>{`Hino
`}</Text>
        {`Id mobil                      : 02
No Plat                        : BM 9934 FE
Tahun Pembelian    : 2017
Kondisi                       :  Baik`}
      </Text>
      <View style={[styles.dataMobilChild2, styles.dataChildLayout]} />
      <Text
        style={[styles.namaKendaraaan, styles.namaTypo]}
      >{`Nama Kendaraaan : Hino
Type                            : Hino Dutro 110 SD Mini Compactor
Id mobil                      : 03
No Plat                        : BM 7834 AC
Tahun Pembelian    : 2019
Kondisi                       :  Baik`}</Text>
      <View style={[styles.dataMobilChild3, styles.dataChildLayout]} />
      <Text
        style={[styles.namaKendaraaan1, styles.namaTypo]}
      >{`Nama Kendaraaan : Hino
Type                            : Hino Dutro 110 SD Mini Compactor
Id mobil                      : 04
No Plat                        : BM 1043 AB
Tahun Pembelian    : 2019
Kondisi                       :  Baik`}</Text>
      <View style={styles.dataMobilChild4} />
      <Text
        style={[styles.namaKendaraaan2, styles.namaTypo]}
      >{`Nama Kendaraaan : Hino
Type                            : Hino Dutro 110 SD Mini Compactor
Id mobil                      : 05
No Plat                        : BM 6753 AB
Tahun Pembelian    : 2019
Kondisi                       :  Baik`}</Text>
      <View style={styles.dataMobilChild5} />
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
  dataChildLayout: {
    height: 97,
    left: 12,
    width: 351,
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaTypo: {
    height: 90,
    width: 348,
    fontFamily: FontFamily.poppins,
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
  dataMobilChild: {
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
  dataDetailMobil: {
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
  dataMobilItem: {
    top: 762,
    left: 1,
    width: 375,
    backgroundColor: Color.colorWhite,
    height: 50,
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
  dataMobilInner: {
    top: 754,
    left: 244,
    height: 6,
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
  rectangleView: {
    top: 167,
  },
  dataMobilChild1: {
    top: 279,
  },
  hino: {
    textDecoration: "underline",
  },
  namaKendaraaanContainer: {
    top: 170,
    width: 232,
    height: 174,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    left: 16,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  namaKendaraaanContainer1: {
    top: 283,
    left: 16,
    width: 348,
  },
  dataMobilChild2: {
    top: 391,
  },
  namaKendaraaan: {
    top: 395,
    left: 16,
    width: 348,
  },
  dataMobilChild3: {
    top: 508,
  },
  namaKendaraaan1: {
    top: 512,
    left: 16,
    width: 348,
  },
  dataMobilChild4: {
    top: 615,
    left: 11,
    height: 102,
    width: 351,
    borderColor: Color.colorDarkgray_200,
    backgroundColor: Color.colorGainsboro_100,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  namaKendaraaan2: {
    top: 619,
    left: 15,
  },
  dataMobilChild5: {
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
  dataMobil: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default DataMobil;
