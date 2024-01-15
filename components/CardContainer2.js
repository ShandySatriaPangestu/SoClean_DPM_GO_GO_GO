import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FormContainer2 from "./FormContainer2";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CardContainer2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardview}>
      <FormContainer2 />
      <View style={styles.button}>
        <Pressable
          style={styles.cs}
          onPress={() => navigation.navigate("Administrasi")}
        >
          <Image
            style={[styles.csChild, styles.csChildLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-134.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector30.png")}
          />
          <Text style={[styles.administrasi, styles.crew1Typo]}>
            Administrasi
          </Text>
        </Pressable>
        <Pressable
          style={[styles.camera, styles.cameraPosition]}
          onPress={() => navigation.navigate("CustomerService4")}
        >
          <Image
            style={[styles.elipseIcon, styles.cameraPosition]}
            contentFit="cover"
            source={require("../assets/elipse1.png")}
          />
          <View style={styles.kamera}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon1.png")}
            />
            <Text style={[styles.lapor, styles.gpsTypo]}>Lapor</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.tiitkTiga}
          onPress={() => navigation.navigate("Administrasi")}
        >
          <View style={[styles.tiitkTigaChild, styles.tiitkLayout]} />
          <View style={[styles.tiitkTigaItem, styles.tiitkLayout]} />
          <View style={[styles.tiitkTigaInner, styles.tiitkLayout]} />
          <Text style={[styles.lainnya, styles.crew1Typo]}>Lainnya</Text>
        </Pressable>
        <Pressable
          style={[styles.location, styles.locationPosition]}
          onPress={() => navigation.navigate("GPSScreen1")}
        >
          <Image
            style={[styles.circleIcon, styles.locationPosition]}
            contentFit="cover"
            source={require("../assets/circle.png")}
          />
          <Text style={[styles.gps, styles.gpsTypo]}>GPS</Text>
          <Image
            style={styles.arcticonsmapsgo}
            contentFit="cover"
            source={require("../assets/arcticonsmapsgo1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.crew, styles.crewLayout]}
          onPress={() => navigation.navigate("Crew")}
        >
          <Image
            style={[styles.akunIcon, styles.crewLayout]}
            contentFit="cover"
            source={require("../assets/akun1.png")}
          />
          <Text style={[styles.crew1, styles.crew1Typo]}>Crew</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  csChildLayout: {
    height: 50,
    top: 0,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  crew1Typo: {
    height: 9,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  cameraPosition: {
    width: 52,
    top: 0,
    position: "absolute",
  },
  gpsTypo: {
    height: 10,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  tiitkLayout: {
    height: 11,
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_3xs,
    width: 43,
    left: 0,
    position: "absolute",
  },
  locationPosition: {
    width: 55,
    left: 0,
    top: 0,
    position: "absolute",
  },
  crewLayout: {
    width: 49,
    position: "absolute",
  },
  csChild: {
    left: 5,
    width: 50,
    position: "absolute",
  },
  vectorIcon: {
    height: "39.84%",
    width: "40.43%",
    top: "20%",
    right: "37%",
    bottom: "40.16%",
    left: "22.57%",
  },
  administrasi: {
    top: 54,
    left: 0,
    width: 70,
  },
  cs: {
    top: 3,
    left: 218,
    height: 63,
    width: 70,
    position: "absolute",
  },
  elipseIcon: {
    height: 52,
    left: 0,
  },
  icon: {
    height: "49.25%",
    width: "89.39%",
    top: "0%",
    right: "9.7%",
    bottom: "50.75%",
    left: "0.91%",
  },
  lapor: {
    top: 43,
    width: 33,
    left: 0,
  },
  kamera: {
    height: "80.3%",
    width: "63.46%",
    top: "19.7%",
    right: "15.38%",
    bottom: "0%",
    left: "21.15%",
    position: "absolute",
  },
  camera: {
    left: 76,
    height: 66,
  },
  tiitkTigaChild: {
    top: 0,
  },
  tiitkTigaItem: {
    top: 17,
  },
  tiitkTigaInner: {
    top: 33,
  },
  lainnya: {
    top: 50,
    left: 3,
    width: 38,
  },
  tiitkTiga: {
    top: 7,
    left: 297,
    height: 59,
    width: 43,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  circleIcon: {
    height: 52,
  },
  gps: {
    top: 56,
    left: 17,
    width: 27,
  },
  arcticonsmapsgo: {
    top: 13,
    left: 14,
    width: 28,
    height: 26,
    overflow: "hidden",
    position: "absolute",
  },
  location: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    height: 66,
  },
  akunIcon: {
    left: 0,
    height: 50,
    top: 0,
  },
  crew1: {
    marginLeft: -14.5,
    top: 55,
    left: "50%",
    width: 36,
  },
  crew: {
    top: 2,
    left: 153,
    height: 64,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  button: {
    left: 4,
    width: 340,
    height: 66,
    top: 0,
    position: "absolute",
  },
  cardview: {
    top: 320,
    left: 13,
    width: 347,
    height: 391,
    position: "absolute",
  },
});

export default CardContainer2;
