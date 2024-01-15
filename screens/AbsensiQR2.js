import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FormContainer from "../components/FormContainer";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const AbsensiQR2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.absensiQr2}>
      <Image
        style={styles.absensiQr2Child}
        contentFit="cover"
        source={require("../assets/rectangle-4191.png")}
      />
      <Text style={styles.kembaliKeMenu}>kembali ke menu utama</Text>
      <FormContainer iPhoneStatusBarLeft={-19} />
      <Image
        style={styles.absensiQr2Item}
        contentFit="cover"
        source={require("../assets/ellipse-150.png")}
      />
      <Image
        style={styles.absensiQr2Inner}
        contentFit="cover"
        source={require("../assets/rectangle-4197.png")}
      />
      <Text style={[styles.terimakasih, styles.terimakasihClr]}>
        terimakasih!
      </Text>
      <Pressable
        style={styles.rectanglePressable}
        onPress={() => navigation.navigate("HomeUser")}
      />
      <Text style={[styles.kembaliKeMenu1, styles.kembaliKeMenu1Typo]}>
        Kembali ke menu utama
      </Text>
      <Text style={[styles.absensiAndaBerhasil, styles.kembaliKeMenu1Typo]}>
        Absensi anda berhasil
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  terimakasihClr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  kembaliKeMenu1Typo: {
    lineHeight: 24,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  absensiQr2Child: {
    top: 763,
    left: 14,
    borderRadius: Border.br_3xs,
    width: 344,
    height: 44,
    position: "absolute",
  },
  kembaliKeMenu: {
    height: "2.22%",
    width: "52.8%",
    top: "95.57%",
    left: "23.73%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    textAlign: "center",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  absensiQr2Item: {
    top: 210,
    left: 109,
    width: 158,
    height: 158,
    position: "absolute",
  },
  absensiQr2Inner: {
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
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    color: Color.colorBlack,
    position: "absolute",
  },
  rectanglePressable: {
    top: 748,
    left: 7,
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorDarkslategray_100,
    width: 362,
    height: 46,
    position: "absolute",
  },
  kembaliKeMenu1: {
    top: 761,
    left: 65,
    textAlign: "left",
    width: 336,
    height: 18,
    color: Color.colorWhite,
    lineHeight: 24,
    letterSpacing: -0.5,
    fontSize: FontSize.size_5xl,
  },
  absensiAndaBerhasil: {
    top: 419,
    left: 59,
    width: 258,
    height: 29,
    color: Color.colorBlack,
    textAlign: "center",
  },
  absensiQr2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default AbsensiQR2;
