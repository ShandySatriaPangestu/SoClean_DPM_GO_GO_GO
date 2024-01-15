import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "./FormContainer1";
import CardContainer from "./CardContainer";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const FormContainer4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listMap}>
      <Pressable
        style={styles.maps5}
        onPress={() => navigation.navigate("LaporanGajiKaryawan")}
      >
        <View style={[styles.maps5Child, styles.childBorder]} />
        <Text
          style={[styles.penggajianAdminstrator, styles.dataPengeluaranLayout]}
        >
          Penggajian Adminstrator
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
      </Pressable>
      <Pressable
        style={styles.maps4}
        onPress={() => navigation.navigate("LaporanGajiSupir")}
      >
        <View style={[styles.maps5Child, styles.childBorder]} />
        <Text style={[styles.dataPengeluaran, styles.laporanUrgencyTypo]}>
          Data Pengeluaran
        </Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector16.png")}
        />
      </Pressable>
      <FormContainer1
        reportTitle="Data Detail Mobil"
        propTop={23}
        propLeft={16}
        onMaps3Press={() => navigation.navigate("DataMobil")}
      />
      <CardContainer
        componentTitle="Laporan Volume Sampah"
        propWidth={238}
        propTop={26}
        propLeft={17}
        onMaps2Press={() => navigation.navigate("LaporanTargetSampah")}
      />
      <Pressable
        style={[styles.listMapChild, styles.childBorder]}
        onPress={() => navigation.navigate("LaporanKendalaSupir")}
      />
      <Text
        style={[styles.laporanUrgency, styles.laporanUrgencyTypo]}
      >{`Laporan Urgency `}</Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorDimgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_3xs,
    top: 0,
    left: 0,
    width: 362,
    position: "absolute",
  },
  dataPengeluaranLayout: {
    height: 19,
    top: 24,
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  laporanUrgencyTypo: {
    left: 17,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  maps5Child: {
    height: 69,
  },
  penggajianAdminstrator: {
    left: 16,
    width: 216,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    height: 19,
    top: 24,
    position: "absolute",
  },
  vectorIcon: {
    height: "29.13%",
    width: "3.65%",
    top: "35.36%",
    right: "3.98%",
    bottom: "35.51%",
    left: "92.37%",
  },
  maps5: {
    top: 343,
    left: 1,
    height: 69,
    width: 362,
    position: "absolute",
  },
  dataPengeluaran: {
    width: 171,
    height: 19,
    top: 24,
    left: 17,
  },
  maps4: {
    top: 257,
    left: 0,
    height: 69,
    width: 362,
    position: "absolute",
  },
  listMapChild: {
    height: 68,
  },
  laporanUrgency: {
    top: 22,
    width: 157,
    height: 18,
  },
  vectorIcon2: {
    height: "4.88%",
    width: "3.64%",
    top: "5.34%",
    right: "4.25%",
    bottom: "89.78%",
    left: "92.11%",
  },
  listMap: {
    top: 120,
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 363,
    height: 412,
    position: "absolute",
  },
});

export default FormContainer4;
