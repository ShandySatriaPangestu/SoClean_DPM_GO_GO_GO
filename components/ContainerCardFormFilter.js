import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ContainerCardFormFilter = ({ carDimensions, propTop }) => {
  const news1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
    };
  }, [propTop]);

  return (
    <View style={[styles.news1, styles.news1Layout, news1Style]}>
      <View style={[styles.news1, styles.news1Layout]}>
        <View style={[styles.news1, styles.news1Layout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.republika, styles.republikaTypo]}>
            republika
          </Text>
          <Text style={[styles.pemkotDepokApresiasi, styles.republikaTypo]}>
            Pemkot Depok Apresiasi Pasar Online dan Bank Sampah Sawangan Elok
          </Text>
          <Text style={[styles.melakukanPemilihanSampah, styles.republikaTypo]}>
            melakukan pemilihan sampah juga bisa memberikan rezeki kepada orang
            lain
          </Text>
        </View>
      </View>
      <Image
        style={[styles.wakilWaliKotaDepokImamBudIcon, styles.groupChildLayout]}
        contentFit="cover"
        source={carDimensions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  news1Layout: {
    height: 138,
    width: 347,
    left: 0,
    top: 0,
  },
  groupChildLayout: {
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  republikaTypo: {
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
    width: 347,
    left: 0,
    top: 0,
  },
  republika: {
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
  pemkotDepokApresiasi: {
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
  melakukanPemilihanSampah: {
    top: 86,
    fontSize: FontSize.size_2xs,
    color: Color.colorSilver_100,
    width: 228,
    height: 34,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 8,
  },
  news1: {
    position: "absolute",
    height: 138,
    width: 347,
    left: 0,
    top: 0,
  },
  wakilWaliKotaDepokImamBudIcon: {
    top: 29,
    left: 231,
    width: 104,
    height: 80,
  },
});

export default ContainerCardFormFilter;
