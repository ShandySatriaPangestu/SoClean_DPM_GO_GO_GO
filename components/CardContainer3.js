import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FormContainer2 from "./FormContainer2";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const CardContainer3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardview}>
      <FormContainer2 />
      <View style={[styles.button, styles.buttonPosition]}>
        <Pressable
          style={[styles.cs, styles.csLayout]}
          onPress={() => navigation.navigate("CustomerService1")}
        >
          <Image
            style={[styles.csChild, styles.csChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-1341.png")}
          />
          <Image
            style={[styles.vectorIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector31.png")}
          />
          <Text style={[styles.cs1, styles.cs1Typo]}>CS</Text>
        </Pressable>
        <Pressable
          style={[styles.about, styles.csLayout]}
          onPress={() => navigation.navigate("News3")}
        >
          <Image
            style={[styles.csChild, styles.csChildPosition]}
            contentFit="cover"
            source={require("../assets/ellipse-133.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector32.png")}
          />
          <Text style={[styles.about1, styles.about1Position]}>About</Text>
        </Pressable>
        <Pressable
          style={[styles.camera, styles.csLayout]}
          onPress={() => navigation.navigate("LaporSampah1")}
        >
          <Image
            style={[styles.csChild, styles.csChildPosition]}
            contentFit="cover"
            source={require("../assets/elipse2.png")}
          />
          <View style={[styles.kamera, styles.vectorIconPosition]}>
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/icon2.png")}
            />
            <Text style={[styles.lapor, styles.cs1Typo]}>Lapor</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.location, styles.csChildPosition]}
          onPress={() => navigation.navigate("Acount2")}
        >
          <Image
            style={[styles.csChild, styles.csChildPosition]}
            contentFit="cover"
            source={require("../assets/circle1.png")}
          />
          <Text style={[styles.location1, styles.cs1Typo]}>Location</Text>
          <Image
            style={[styles.arcticonsmapsgo, styles.about1Position]}
            contentFit="cover"
            source={require("../assets/arcticonsmapsgo2.png")}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonPosition: {
    top: 0,
    height: 76,
  },
  csLayout: {
    width: 60,
    position: "absolute",
  },
  csChildPosition: {
    left: 0,
    width: 60,
    top: 0,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  cs1Typo: {
    height: 11,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
  },
  about1Position: {
    left: 15,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "21.67%",
    right: "21.67%",
    width: "56.67%",
  },
  csChild: {
    height: 60,
  },
  vectorIcon: {
    height: "40.54%",
    top: "20.27%",
    bottom: "39.19%",
    left: "21.67%",
    right: "21.67%",
    width: "56.67%",
  },
  cs1: {
    top: 63,
    left: 23,
    width: 14,
    position: "absolute",
  },
  cs: {
    top: 2,
    left: 275,
    height: 74,
  },
  vectorIcon1: {
    height: "40%",
    top: "20%",
    bottom: "40%",
    left: "21.67%",
    right: "21.67%",
    width: "56.67%",
  },
  about1: {
    top: 64,
    width: 29,
    height: 11,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
  },
  about: {
    top: 1,
    left: 186,
    height: 75,
  },
  icon: {
    height: "49.18%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "50.82%",
    left: "0%",
  },
  lapor: {
    top: 50,
    left: 3,
    width: 27,
    position: "absolute",
  },
  kamera: {
    height: "80.26%",
    top: "19.74%",
    bottom: "0%",
    position: "absolute",
  },
  camera: {
    left: 97,
    height: 76,
    top: 0,
  },
  location1: {
    top: 65,
    left: 10,
    width: 41,
    position: "absolute",
  },
  arcticonsmapsgo: {
    top: 15,
    width: 30,
    height: 30,
    overflow: "hidden",
    left: 15,
  },
  location: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 76,
  },
  button: {
    left: 4,
    width: 335,
    height: 76,
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

export default CardContainer3;
