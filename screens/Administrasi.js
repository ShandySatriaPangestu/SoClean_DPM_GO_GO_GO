import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import FormContainer1 from "../components/FormContainer1";
import CardContainer from "../components/CardContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Administrasi = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.administrasi}>
      <View style={styles.administrasiChild} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-22}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.iconchevronLeft}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/iconchevron-left5.png")}
        />
      </Pressable>
      <Text style={styles.administrasi1}>Administrasi</Text>
      <View style={[styles.administrasiItem, styles.barcodeLayout]} />
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
        style={[styles.administrasiInner, styles.accountLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <Image
        style={[styles.administrasiIcon, styles.homePosition]}
        contentFit="cover"
        source={require("../assets/administrasi.png")}
      />
      <View style={styles.maps6Parent}>
        <Pressable
          style={[styles.maps6, styles.mapsLayout]}
          onPress={() => navigation.navigate("DataMobil1")}
        >
          <View style={[styles.maps6Child, styles.childBorder]} />
          <Text style={[styles.dataDetailMobil, styles.dataDetailMobilTypo]}>
            Data Detail Mobil
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.maps5, styles.mapsLayout]}
          onPress={() => navigation.navigate("LaporanGajiSupir1")}
        >
          <View style={[styles.maps6Child, styles.childBorder]} />
          <Text style={[styles.penggajianSupir, styles.dataDetailMobilTypo]}>
            Penggajian Supir
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.maps4, styles.mapsLayout]}
          onPress={() => navigation.navigate("LaporanPengeluaranMinyak")}
        >
          <View style={[styles.maps6Child, styles.childBorder]} />
          <Text style={[styles.pengeluaranMinyak, styles.dataDetailMobilTypo]}>
            Pengeluaran Minyak
          </Text>
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector16.png")}
          />
        </Pressable>
        <FormContainer1
          reportTitle="Rekapitulasi Laporan Sampah"
          propTop={22}
          propLeft={10}
          onMaps3Press={() => navigation.navigate("LaporanTargetSampah1")}
        />
        <CardContainer
          componentTitle="Manajemen Supir"
          propWidth={169}
          propTop={24}
          propLeft={13}
          onMaps2Press={() => navigation.navigate("ManagemenSupir")}
        />
        <Pressable
          style={[styles.groupChild, styles.childBorder]}
          onPress={() => navigation.navigate("CustomerService4")}
        />
        <Text style={styles.laporanUrgency}>{`Laporan Urgency `}</Text>
        <Image
          style={[styles.vectorIcon3, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector18.png")}
        />
      </View>
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
    bottom: "1.11%",
    top: "95.2%",
    position: "absolute",
  },
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  mapsLayout: {
    width: 362,
    height: 69,
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    width: 362,
    left: 0,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  dataDetailMobilTypo: {
    height: 19,
    left: 10,
    top: 24,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 18,
    letterSpacing: -0.4,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  administrasiChild: {
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
    left: "5.07%",
    top: "6.4%",
    right: "91.39%",
    bottom: "91.11%",
    width: "3.55%",
    height: "2.49%",
    position: "absolute",
  },
  administrasi1: {
    top: 67,
    left: 44,
    color: Color.colorWhite,
    textAlign: "center",
    width: 272,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  administrasiItem: {
    backgroundColor: Color.colorWhite,
    width: 375,
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
  administrasiInner: {
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
  maps6Child: {
    height: 69,
  },
  dataDetailMobil: {
    width: 147,
  },
  vectorIcon: {
    height: "29.13%",
    width: "3.65%",
    top: "35.36%",
    right: "3.98%",
    bottom: "35.51%",
    left: "92.37%",
    position: "absolute",
  },
  maps6: {
    top: 429,
    height: 69,
    left: 1,
    width: 362,
  },
  penggajianSupir: {
    width: 152,
  },
  maps5: {
    top: 343,
    height: 69,
    left: 1,
    width: 362,
  },
  pengeluaranMinyak: {
    width: 171,
  },
  maps4: {
    top: 257,
    height: 69,
    left: 0,
  },
  groupChild: {
    height: 68,
  },
  laporanUrgency: {
    top: 22,
    left: 17,
    width: 157,
    height: 18,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 18,
    letterSpacing: -0.4,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  vectorIcon3: {
    height: "4.04%",
    width: "3.64%",
    top: "4.42%",
    right: "4.25%",
    bottom: "91.55%",
    left: "92.11%",
    position: "absolute",
  },
  maps6Parent: {
    top: 120,
    left: 6,
    width: 363,
    height: 498,
    position: "absolute",
  },
  administrasi: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Administrasi;
