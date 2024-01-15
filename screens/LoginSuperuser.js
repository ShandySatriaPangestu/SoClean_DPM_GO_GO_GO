import * as React from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const LoginSuperuser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginSuperuser}>
      <Text style={styles.hai}>Hai!</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupLayout]}
          locations={[0, 1]}
          colors={["#ebf0f5", "rgba(235, 240, 245, 0)"]}
        />
        <TextInput style={[styles.alamatLegkap, styles.namaTypo]}
        placeholder='ID' />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("HomeSuperuser")}
      >
        <View style={[styles.groupItem, styles.groupLayout]} />
        <Text style={[styles.login, styles.loginPosition]}>Login</Text>
      </Pressable>
      <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupLayout]}
          locations={[0, 1]}
          colors={["#ebf0f5", "rgba(235, 240, 245, 0)"]}
        />
        <TextInput style={[styles.alamatLegkap, styles.namaTypo]}
        placeholder='Password' />
      </View>
      <Text style={[styles.lupaPassword, styles.lupaPasswordClr]}>
        Lupa Password
      </Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector21.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector22.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector23.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector24.png")}
      />
      <Pressable
        style={styles.belumPunyaAkunContainer}
        onPress={() => navigation.navigate("Register")}
      >
        <Text style={styles.text}>
          <Text style={styles.belumPunyaAkun}>Belum punya akun?</Text>
          <Text style={styles.daftar}> Daftar</Text>
        </Text>
      </Pressable>
      <Text
        style={[styles.selamatDatangKembali, styles.lupaPasswordClr]}
      >{`Selamat datang
kembali.`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 42,
    width: 261,
    left: 67,
    position: "absolute",
  },
  groupLayout: {
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 42,
    width: 261,
    position: "absolute",
  },
  loginPosition: {
    top: 11,
    height: 19,
    width: 122,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  lupaPasswordClr: {
    color: Color.colorBlack,
    textAlign: "center",
    position: "absolute",
  },
  vectorIconLayout1: {
    height: 255,
    width: 274,
    position: "absolute",
  },
  vectorIconLayout: {
    height: 451,
    width: 450,
    position: "absolute",
  },
  hai: {
    top: 193,
    left: 163,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: "transparent",
  },
  id: {
    top: 12,
    height: 19,
    width: 122,
    color: Color.colorGray_700,
    fontSize: FontSize.size_xs,
    left: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  rectangleParent: {
    top: 340,
  },
  groupItem: {
    backgroundColor: Color.colorDarkslategray_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
  },
  login: {
    left: 69,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    textAlign: "center",
    fontWeight: "700",
  },
  rectangleGroup: {
    top: 473,
  },
  password: {
    color: Color.colorGray_700,
    left: 12,
    top: 11,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  rectangleContainer: {
    top: 397,
  },
  lupaPassword: {
    top: 448,
    left: 253,
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
  },
  vectorIcon: {
    top: -121,
    left: -94,
  },
  vectorIcon1: {
    top: -128,
    left: -75,
  },
  vectorIcon2: {
    top: 642,
    left: 62,
  },
  vectorIcon3: {
    top: 649,
    left: 37,
  },
  belumPunyaAkun: {
    fontFamily: FontFamily.poppins,
  },
  daftar: {
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
  },
  text: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  belumPunyaAkunContainer: {
    left: 100,
    top: 721,
    position: "absolute",
  },
  selamatDatangKembali: {
    top: 241,
    left: 127,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.openSans,
    textAlign: "center",
  },
  loginSuperuser: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default LoginSuperuser;
