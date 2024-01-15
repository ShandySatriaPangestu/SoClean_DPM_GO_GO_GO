import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const HalamanAwalUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.halamanAwalUser}>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("LoginUser")}
      >
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <Text style={[styles.masuk, styles.masukTypo]}>Masuk</Text>
      </Pressable>
      <Image
        style={styles.goGreenRecycling2}
        contentFit="cover"
        source={require("../assets/go-green-recycling-2.png")}
      />
      <View style={styles.selamatDatangParent}>
        <Text style={[styles.selamatDatang, styles.selamatDatangFlexBox]}>
          Selamat Datang
        </Text>
        <Text
          style={[styles.silahkanMasukUntuk, styles.selamatDatangFlexBox]}
        >{`Silahkan masuk untuk
melanjutkan.`}</Text>
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("Register2")}
      >
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <Text style={[styles.registrasi, styles.masukTypo]}>Registrasi</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 42,
    width: 261,
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
    borderRadius: Border.br_3xs,
    left: 0,
    top: 0,
    height: 42,
    width: 261,
    position: "absolute",
  },
  masukTypo: {
    height: 19,
    width: 122,
    fontSize: FontSize.size_sm,
    left: 69,
    top: 11,
    textAlign: "center",
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    position: "absolute",
  },
  selamatDatangFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChild: {
    borderStyle: "solid",
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1,
  },
  masuk: {
    color: Color.colorBlack,
    height: 19,
    width: 122,
    fontSize: FontSize.size_sm,
    left: 69,
    top: 11,
  },
  rectangleParent: {
    top: 622,
    left: 67,
  },
  goGreenRecycling2: {
    top: 292,
    left: 28,
    width: 339,
    height: 234,
    position: "absolute",
  },
  selamatDatang: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppins,
    fontWeight: "700",
    textAlign: "center",
    left: 0,
    top: 0,
  },
  silahkanMasukUntuk: {
    top: 38,
    left: 6,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    fontFamily: FontFamily.openSans,
  },
  selamatDatangParent: {
    top: 159,
    left: 113,
    width: 169,
    height: 82,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.colorDarkslategray_100,
  },
  registrasi: {
    color: Color.colorGray_300,
    height: 19,
    width: 122,
    fontSize: FontSize.size_sm,
    left: 69,
    top: 11,
  },
  rectangleGroup: {
    top: 681,
    left: 66,
  },
  halamanAwalUser: {
    backgroundColor: Color.colorGray_300,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default HalamanAwalUser;
