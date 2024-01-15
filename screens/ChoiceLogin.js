import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const ChoiceLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.choiceLogin}>
      <Text style={styles.hai}>Hai!</Text>
      <Pressable
        style={styles.rectangleParent}
        onPress={() => navigation.navigate("HalamanAwalSuperuser")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.loginSuperadmin, styles.loginTypo]}>
          Login SuperAdmin
        </Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectanglePosition]}
        onPress={() => navigation.navigate("HalamanAwalAdmin")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.loginAdmin, styles.loginTypo]}>Login Admin</Text>
      </Pressable>
      <Pressable
        style={[styles.rectangleContainer, styles.rectanglePosition]}
        onPress={() => navigation.navigate("HalamanAwalUser")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.loginAdmin, styles.loginTypo]}>Login Supir</Text>
      </Pressable>
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
      <Text style={styles.silahkanPilihLogin}>{`Silahkan Pilih 
Login Sebagai...`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    height: 19,
    color: Color.colorGray_300,
    fontSize: FontSize.size_sm,
    top: 11,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    position: "absolute",
  },
  rectanglePosition: {
    left: 68,
    height: 42,
    width: 261,
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
    top: 180,
    left: 163,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    position: "absolute",
  },
  groupShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorDarkslategray_100,
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 42,
    width: 261,
    position: "absolute",
  },
  loginSuperadmin: {
    left: 58,
    width: 147,
  },
  rectangleParent: {
    top: 477,
    left: 67,
    height: 42,
    width: 261,
    position: "absolute",
  },
  loginAdmin: {
    left: 69,
    width: 122,
  },
  rectangleGroup: {
    top: 406,
  },
  rectangleContainer: {
    top: 335,
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
  silahkanPilihLogin: {
    top: 228,
    left: 128,
    fontSize: FontSize.size_xl,
    fontWeight: "300",
    fontFamily: FontFamily.openSans,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  choiceLogin: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChoiceLogin;
