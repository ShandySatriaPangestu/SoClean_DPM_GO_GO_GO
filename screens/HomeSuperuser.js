import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import CardContainer1 from "../components/CardContainer1";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const HomeSuperuser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeSuperuser}>
      <View style={[styles.header, styles.headerLayout]}>
        <View style={[styles.headerChild, styles.headerChildPosition]} />
        <View style={[styles.profile, styles.profileLayout]}>
          <Image
            style={[styles.characterbadrun6Icon, styles.profileLayout]}
            contentFit="cover"
            source={require("../assets/characterbadrun-6.png")}
          />
        </View>
        <View style={styles.halo}>
          <Text style={[styles.id8369709, styles.id8369709Typo]}>
            ID : 8369709
          </Text>
          <Text style={[styles.haloDanendra, styles.id8369709Typo]}>
            Halo!, Danendra
          </Text>
        </View>
      </View>
      <CardContainer1 />
      <View style={[styles.homeSuperuserChild, styles.homeLayout]} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.homeSuperuserItem, styles.homeLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-124.png")}
      />
      <Image
        style={styles.homeSuperuserInner}
        contentFit="cover"
        source={require("../assets/ellipse-125.png")}
      />
      <Image
        style={[styles.arcticonsmapsgo, styles.akunLayout]}
        contentFit="cover"
        source={require("../assets/arcticonsmapsgo.png")}
      />
      <Pressable
        style={[styles.akun, styles.akunLayout]}
        onPress={() => navigation.navigate("Acount1")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../assets/akun.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => navigation.navigate("News1")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
      </Pressable>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-4143.png")}
      />
      <Pressable
        style={[styles.vector1, styles.vectorPosition]}
        onPress={() => navigation.navigate("Laporan")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
      </Pressable>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={414}
        themeDarkNotchTrueCallIHeight={44}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="#276561"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    height: 290,
    width: 377,
    position: "absolute",
  },
  headerChildPosition: {
    left: 0,
    top: 0,
  },
  profileLayout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  id8369709Typo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  homeLayout: {
    height: 50,
    position: "absolute",
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  akunLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  vectorPosition: {
    bottom: "1.11%",
    top: "95.2%",
    height: "3.69%",
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  headerChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    height: 290,
    width: 377,
    position: "absolute",
  },
  characterbadrun6Icon: {
    borderRadius: Border.br_21xl,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  profile: {
    top: 82,
    left: 147,
  },
  id8369709: {
    top: 38,
    left: 12,
    width: 133,
    height: 19,
  },
  haloDanendra: {
    marginLeft: -72.3,
    left: "50%",
    width: 121,
    height: 22,
    top: 0,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_base,
  },
  halo: {
    top: 206,
    left: 135,
    width: 145,
    height: 57,
    position: "absolute",
  },
  header: {
    top: 1,
    left: -2,
  },
  homeSuperuserChild: {
    width: 375,
    top: 762,
    height: 50,
    left: 0,
    backgroundColor: Color.colorWhite,
  },
  vectorIcon: {
    right: "83.47%",
    left: "8.53%",
    bottom: "1.11%",
    top: "95.2%",
    height: "3.69%",
    position: "absolute",
    width: "8%",
  },
  homeSuperuserItem: {
    top: 750,
    left: 165,
    width: 50,
  },
  homeSuperuserInner: {
    top: 754,
    left: 169,
    width: 42,
    height: 42,
    position: "absolute",
  },
  arcticonsmapsgo: {
    top: 760,
    left: 175,
    overflow: "hidden",
  },
  akun: {
    left: 318,
    top: 773,
  },
  icon1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vector: {
    left: "27.47%",
    right: "64.53%",
    width: "8%",
    top: "95.2%",
    height: "3.69%",
  },
  rectangleIcon: {
    left: 32,
    height: 6,
    width: 30,
    top: 762,
    position: "absolute",
  },
  vector1: {
    left: "65.87%",
    right: "27.73%",
    width: "6.4%",
    top: "95.2%",
    height: "3.69%",
  },
  homeSuperuser: {
    flex: 1,
    height: 812,
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default HomeSuperuser;
