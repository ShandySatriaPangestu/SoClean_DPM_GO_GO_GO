import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import ContainerCardFormFilter from "./ContainerCardFormFilter";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const CardContainer1 = () => {
  return (
    <View style={styles.cardview}>
      <View style={styles.berita}>
        <ContainerCardFormFilter
          carDimensions={require("../assets/wakilwalikotadepokimambudihartonomenghadirikegiatan-220422203025848-1.png")}
          propTop={0}
        />
        <View style={[styles.news2, styles.news2Layout]}>
          <View style={[styles.rectangleParent, styles.news2Layout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.mojokco, styles.bankTypo]}>mojok.co</Text>
            <Text style={[styles.bankSampahYang, styles.bankTypo]}>
              Bank Sampah yang Memberikan Kesempatan Kedua pada Sampah
            </Text>
            <Text style={[styles.bankSampahDinilai, styles.bankTypo]}>
              Bank sampah dinilai jadi salah satu upaya untuk mengurangi beban
              tempat pembuangan akhir sampah yang selalu penuh
            </Text>
          </View>
          <Image
            style={[
              styles.checheSiMobilAngkutYangJaIcon,
              styles.groupChildLayout,
            ]}
            contentFit="cover"
            source={require("../assets/chechesimobilangkutyangjadiikonresikrahmaayunabilamojok-1.png")}
          />
        </View>
        <ContainerCardFormFilter
          carDimensions={require("../assets/wakilwalikotadepokimambudihartonomenghadirikegiatan-220422203025848-11.png")}
          propTop={314}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  news2Layout: {
    height: 138,
    left: 0,
    width: 347,
  },
  groupChildLayout: {
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  bankTypo: {
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 8,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    height: 138,
    left: 0,
    width: 347,
    top: 0,
  },
  mojokco: {
    top: 7,
    fontSize: FontSize.size_5xs,
    width: 40,
    height: 11,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 8,
  },
  bankSampahYang: {
    top: 24,
    fontSize: FontSize.size_sm,
    width: 223,
    height: 40,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 8,
  },
  bankSampahDinilai: {
    top: 72,
    fontSize: FontSize.size_2xs,
    color: Color.colorSilver_100,
    width: 228,
    height: 55,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 8,
  },
  rectangleParent: {
    top: 0,
    height: 138,
    position: "absolute",
  },
  checheSiMobilAngkutYangJaIcon: {
    top: 29,
    left: 231,
    width: 104,
    height: 80,
  },
  news2: {
    top: 158,
    position: "absolute",
  },
  berita: {
    left: 0,
    top: 0,
    height: 452,
    width: 347,
    position: "absolute",
  },
  cardview: {
    top: 308,
    left: 14,
    height: 452,
    width: 347,
    position: "absolute",
  },
});

export default CardContainer1;
