import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const LaporSampah4 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporSampah4}>
      <Pressable
        style={[styles.laporSampah4Child, styles.laporBg]}
        onPress={() => navigation.navigate("HomeUser")}
      />
      <Text style={styles.kembaliKeMenu}>kembali ke menu utama</Text>
      <View style={[styles.laporSampah4Item, styles.laporBg]} />
      <Text style={styles.lapor}>Lapor</Text>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Image
        style={styles.laporSampah4Inner}
        contentFit="cover"
        source={require("../assets/ellipse-150.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-4197.png")}
      />
      <Text style={[styles.terimakasih, styles.terimakasihTypo]}>
        terimakasih!
      </Text>
      <Text style={[styles.laporanAndaBerhasil, styles.terimakasihTypo]}>
        Laporan anda berhasil
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  laporBg: {
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  terimakasihTypo: {
    color: Color.colorBlack,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  laporSampah4Child: {
    top: 763,
    left: 14,
    borderRadius: Border.br_3xs,
    width: 344,
    height: 44,
  },
  kembaliKeMenu: {
    width: "52.8%",
    top: "95.57%",
    left: "23.73%",
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    height: "2.22%",
    position: "absolute",
  },
  laporSampah4Item: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 375,
    height: 105,
  },
  lapor: {
    width: "14.13%",
    top: "8.5%",
    left: "43.2%",
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    height: "2.22%",
    position: "absolute",
  },
  laporSampah4Inner: {
    top: 210,
    left: 109,
    width: 158,
    height: 158,
    position: "absolute",
  },
  rectangleIcon: {
    top: 238,
    left: 130,
    borderRadius: Border.br_11xs,
    width: 117,
    height: 112,
    position: "absolute",
  },
  terimakasih: {
    top: 457,
    left: 78,
    fontSize: FontSize.size_base,
    letterSpacing: -0.3,
    lineHeight: 16,
    width: 219,
    height: 22,
  },
  laporanAndaBerhasil: {
    top: 419,
    left: 59,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    lineHeight: 24,
    width: 258,
    height: 29,
  },
  laporSampah4: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LaporSampah4;
