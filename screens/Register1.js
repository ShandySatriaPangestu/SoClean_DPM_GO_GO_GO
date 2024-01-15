import * as React from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Register1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.register}>
      <Pressable
        style={[styles.rectangleParent, styles.groupParentLayout]}
        onPress={() => navigation.navigate("LoginAdmin")}
      >
        <View style={[styles.groupChild, styles.groupLayout]} />
        <Text style={styles.registrasi}>Registrasi</Text>
      </Pressable>
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput style={[styles.alamatLegkap, styles.namaTypo]}
        placeholder='Nama' />
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput style={[styles.alamatLegkap, styles.namaTypo]}
        placeholder='Email' />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput style={[styles.alamatLegkap, styles.namaTypo]}
        placeholder='Alamat Lengkap' />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput style={[styles.alamatLegkap, styles.namaTypo]}
        placeholder='Password' />
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <TextInput style={[styles.alamatLegkap, styles.namaTypo]}
        placeholder='ID Kantor' />
      </View>
      <Text style={[styles.registrasi1, styles.textClr]}>Registrasi</Text>
      <Pressable
        style={styles.sudahPunyaAkunContainer}
        onPress={() => navigation.navigate("LoginAdmin")}
      >
        <Text style={[styles.text, styles.textClr]}>
          <Text style={styles.sudahPunyaAkun}>Sudah punya akun?</Text>
          <Text style={[styles.masuk, styles.masukTypo]}> Masuk</Text>
        </Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentLayout: {
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
  namaTypo: {
    textAlign: "left",
    color: Color.colorGray_700,
    left: 12,
    fontSize: FontSize.size_xs,
    height: 19,
    width: 122,
    fontFamily: FontFamily.poppins,
    position: "absolute",
  },
  textClr: {
    color: Color.colorBlack,
    textAlign: "center",
  },
  masukTypo: {
    fontWeight: "700",
    fontFamily: FontFamily.poppins,
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
  groupChild: {
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
  registrasi: {
    left: 69,
    fontSize: FontSize.size_sm,
    color: Color.colorGray_300,
    height: 19,
    width: 122,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    top: 11,
    position: "absolute",
  },
  rectangleParent: {
    top: 570,
  },
  groupItem: {
    backgroundColor: Color.colorAliceblue,
  },
  nama: {
    top: 12,
  },
  rectangleGroup: {
    top: 291,
  },
  rectangleContainer: {
    top: 403,
  },
  alamatLegkap: {
    top: 11,
    textAlign: "left",
    color: Color.colorGray_700,
    left: 12,
  },
  groupView: {
    top: 348,
  },
  rectangleParent1: {
    top: 460,
  },
  rectangleParent2: {
    top: 515,
  },
  registrasi1: {
    top: 200,
    left: 135,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    position: "absolute",
  },
  sudahPunyaAkun: {
    fontFamily: FontFamily.poppins,
  },
  masuk: {
    fontFamily: FontFamily.poppins,
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.colorBlack,
  },
  sudahPunyaAkunContainer: {
    left: 98,
    top: 721,
    position: "absolute",
  },
  vectorIcon: {
    top: -124,
    left: -98,
  },
  vectorIcon1: {
    top: -131,
    left: -79,
  },
  vectorIcon2: {
    top: 642,
    left: 66,
  },
  vectorIcon3: {
    top: 649,
    left: 41,
  },
  register: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Register1;
