import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const AbsensiQR = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.absensiQr}>
      <View style={styles.absensiQrChild} />
      <View style={[styles.absensiQrItem, styles.myqr1Position]} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={414}
        themeDarkNotchTrueCallIHeight={44}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
      </Pressable>
      <Text style={[styles.absensi, styles.absensiTypo]}>Absensi</Text>
      <Text style={[styles.continue, styles.absensiTypo]}>Continue</Text>
      <View style={[styles.properties, styles.propertiesLayout]}>
        <View style={[styles.propertiesChild, styles.childBorder]} />
        <Text style={styles.bscoin}>BSCOIN</Text>
      </View>
      <View style={[styles.properties, styles.propertiesLayout]}>
        <View style={[styles.propertiesChild, styles.childBorder]} />
        <Text style={styles.scanDisini}>Scan Disini</Text>
      </View>
      <View style={styles.button}>
        <View style={styles.qr}>
          <View style={[styles.qrChild, styles.closePosition]} />
          <Text style={[styles.myqr, styles.myqrTypo]}>MyQR</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector11.png")}
          />
        </View>
        <Pressable
          style={[styles.close, styles.closePosition]}
          onPress={() => navigation.navigate("HomeAdmin")}
        >
          <View style={[styles.qrChild, styles.closePosition]} />
          <Text style={[styles.close1, styles.myqrTypo]}>{`Close
`}</Text>
          <Image
            style={[styles.vectorIcon1, styles.vectorIconPosition]}
            contentFit="cover"
            source={require("../assets/vector12.png")}
          />
        </Pressable>
      </View>
      <View style={[styles.sliding, styles.myqr1Layout]}>
        <View style={[styles.myqr1, styles.myqr1Layout]}>
          <View style={[styles.image5, styles.myqr1Layout]} />
          <Image
            style={styles.frame1Icon}
            contentFit="cover"
            source={require("../assets/frame-1.png")}
          />
          <Text style={styles.id4420153Container}>
            <Text style={styles.id}>{`ID : `}</Text>
            <Text style={styles.text}>4420153</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  myqr1Position: {
    left: 0,
    top: 0,
  },
  absensiTypo: {
    height: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  propertiesLayout: {
    height: 421,
    width: 336,
    position: "absolute",
  },
  childBorder: {
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
  },
  closePosition: {
    width: 51,
    left: 0,
    top: 0,
    position: "absolute",
  },
  myqrTypo: {
    top: 35,
    height: 12,
    color: Color.colorBlack,
    fontWeight: "800",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  vectorIconPosition: {
    bottom: "46.17%",
    top: "15.32%",
    height: "38.51%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  myqr1Layout: {
    height: 295,
    width: 247,
    position: "absolute",
  },
  absensiQrChild: {
    top: 744,
    left: 8,
    borderRadius: Border.br_xl,
    width: 362,
    height: 46,
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  absensiQrItem: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 375,
    height: 105,
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  icon: {
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "4.88%",
    top: "6.4%",
    right: "91.65%",
    bottom: "91.13%",
    width: "3.47%",
    height: "2.46%",
    position: "absolute",
  },
  absensi: {
    top: 69,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    width: 75,
    left: 150,
    height: 18,
  },
  continue: {
    top: 756,
    left: 140,
    fontSize: FontSize.size_5xl,
    letterSpacing: -0.5,
    lineHeight: 24,
    width: 103,
  },
  propertiesChild: {
    backgroundColor: Color.colorGray_200,
    borderTopWidth: 1,
    height: 421,
    width: 336,
    position: "absolute",
    left: 0,
    top: 0,
  },
  bscoin: {
    top: 33,
    width: 35,
    height: 12,
    color: Color.colorBlack,
    fontWeight: "800",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    left: 150,
    position: "absolute",
  },
  properties: {
    top: 124,
    left: 18,
  },
  scanDisini: {
    top: 32,
    left: 137,
    width: 66,
    height: 11,
    color: Color.colorBlack,
    fontSize: FontSize.size_3xs,
    fontWeight: "800",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  qrChild: {
    borderWidth: 1,
    height: 33,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorWhite,
    width: 51,
  },
  myqr: {
    left: 11,
    width: 44,
  },
  vectorIcon: {
    width: "32.55%",
    right: "36.55%",
    left: "30.91%",
  },
  qr: {
    left: 143,
    width: 55,
    height: 47,
    top: 0,
    position: "absolute",
  },
  close1: {
    left: 13,
    width: 34,
  },
  vectorIcon1: {
    width: "35.03%",
    right: "31.7%",
    left: "33.27%",
  },
  close: {
    height: 47,
  },
  button: {
    top: 490,
    left: 87,
    width: 198,
    height: 47,
    position: "absolute",
  },
  image5: {
    borderRadius: Border.br_8xs,
    left: 0,
    top: 0,
    backgroundColor: Color.colorDarkslategray_100,
  },
  frame1Icon: {
    top: 61,
    left: 32,
    width: 179,
    height: 181,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  id: {
    fontWeight: "800",
    fontFamily: FontFamily.nunito,
  },
  text: {
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
  },
  id4420153Container: {
    top: 14,
    left: 81,
    fontSize: FontSize.size_xs,
    width: 120,
    height: 16,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  myqr1: {
    left: 0,
    top: 0,
  },
  sliding: {
    top: 183,
    left: 64,
  },
  absensiQr: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default AbsensiQR;
