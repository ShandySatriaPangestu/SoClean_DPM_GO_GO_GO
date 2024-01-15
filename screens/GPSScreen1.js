import * as React from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import AlertSection from "../components/AlertSection";
import HinoForm from "../components/HinoForm";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const GPSScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.gpsScreen}>
      <View style={styles.gpsScreenChild} />
      <Text style={styles.gps}>GPS</Text>
      <View style={styles.body}>
        <Text style={styles.viewAll}>View all</Text>
        <Text style={styles.listDevice30}>List Device (30)</Text>
        <View style={styles.bodyChild} />
      </View>
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomeAdmin")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector7.png")}
        />
      </Pressable>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={66}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-20}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <AlertSection />
      <View style={styles.gpsScreenItem} />
      <Text style={[styles.text, styles.textTypo]}>1</Text>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>3</Text>
      <Text style={[styles.text3, styles.textTypo]}>...</Text>
      <Image
        style={[styles.iconchevronLeft, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/iconchevron-left1.png")}
      />
      <Image
        style={styles.iconchevronLeft1}
        contentFit="cover"
        source={require("../assets/iconchevron-left2.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupShadowBox]} />
        <View style={[styles.groupItem, styles.groupShadowBox]} />
        <View style={styles.groupInnerShadowBox} />
        <View style={styles.groupInnerShadowBox} />
        <View style={styles.groupChild1} />
        <View style={styles.groupChild2} />
        <Image
          style={[styles.rectangleIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4310.png")}
        />
        <Image
          style={[styles.groupChild3, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4310.png")}
        />
        <Image
          style={[styles.groupChild4, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4310.png")}
        />
        <Image
          style={[styles.groupChild5, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4310.png")}
        />
        <Text style={styles.track}>Track</Text>
        <Text style={[styles.track1, styles.trackTypo]}>Track</Text>
        <Text style={[styles.track2, styles.trackTypo]}>Track</Text>
        <Text style={[styles.track3, styles.trackTypo]}>Track</Text>
        <Text
          style={[styles.compactorHinoBmContainer, styles.hinoContainerTypo]}
        >
          {`Compactor `}
          <Text style={styles.hino}>{`Hino
`}</Text>
          BM 0321 RQ
        </Text>
        <Text
          style={[styles.compactorHinoBmContainer1, styles.hinoContainerTypo]}
        >
          {`Compactor `}
          <Text style={styles.hino}>{`Hino
`}</Text>
          BM 1321 RQ
        </Text>
        <Text
          style={[styles.compactorHinoBmContainer, styles.hinoContainerTypo]}
        >
          {`Compactor `}
          <Text style={styles.hino}>{`Hino
`}</Text>
          BM 0321 RQ
        </Text>
        <HinoForm propTop={18} propLeft={21} />
        <Text
          style={[styles.hinoDutro110, styles.hinoContainerTypo]}
        >{`Hino Dutro 110 SD Mini Compactor
 BM 7834 AC`}</Text>
        <Text
          style={[styles.hinoDutro1101, styles.hinoContainerTypo]}
        >{`Hino Dutro 110 SD Mini Compactor
 BM 9172 AC`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  textTypo: {
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    top: 758,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  groupShadowBox: {
    height: 97,
    width: 351,
    borderWidth: 1,
    borderColor: Color.colorSilver_300,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChildLayout: {
    height: 23,
    width: 51,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  trackTypo: {
    height: 18,
    width: 32,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    letterSpacing: 0.3,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  hinoContainerTypo: {
    left: 105,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  gpsScreenChild: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 375,
    height: 166,
    left: 0,
    top: 0,
    position: "absolute",
  },
  gps: {
    height: "3.51%",
    width: "13.07%",
    top: "9.24%",
    left: "46.13%",
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  viewAll: {
    height: "74.21%",
    width: "17.98%",
    left: "82.02%",
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_mini,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  listDevice30: {
    height: "73.68%",
    width: "31.88%",
    left: "0%",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  bodyChild: {
    top: 19,
    borderColor: Color.colorDarkslategray_100,
    borderTopWidth: 1,
    width: 59,
    height: 1,
    borderStyle: "solid",
    left: 299,
    position: "absolute",
  },
  body: {
    height: "2.34%",
    width: "97.87%",
    top: "26.6%",
    right: "-0.8%",
    bottom: "71.06%",
    left: "2.93%",
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxHeight: "100%",
  },
  vector: {
    left: "5.07%",
    top: "6.03%",
    right: "91.39%",
    bottom: "91.54%",
    width: "3.55%",
    height: "2.43%",
    position: "absolute",
  },
  gpsScreenItem: {
    top: 757,
    left: 128,
    width: 19,
    height: 20,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text: {
    left: 136,
  },
  text1: {
    left: 169,
  },
  text2: {
    left: 199,
  },
  text3: {
    left: 222,
  },
  iconchevronLeft: {
    height: "1.8%",
    width: "2.67%",
    top: "93.23%",
    right: "69.6%",
    bottom: "4.98%",
    left: "27.73%",
    position: "absolute",
  },
  iconchevronLeft1: {
    marginTop: 352,
    width: "2.69%",
    top: "50%",
    right: "30.11%",
    left: "67.2%",
    height: 15,
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 372,
  },
  groupItem: {
    top: 132,
  },
  groupInnerShadowBox: {
    left: 1,
    top: 252,
    height: 97,
    width: 351,
    borderWidth: 1,
    borderColor: Color.colorSilver_300,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChild1: {
    height: 109,
    width: 351,
    borderWidth: 1,
    borderColor: Color.colorSilver_300,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    left: 0,
    top: 0,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChild2: {
    borderColor: Color.colorDarkgray_200,
    height: 24,
    width: 51,
    left: 288,
    top: 10,
    borderWidth: 1,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleIcon: {
    left: 288,
    height: 23,
    top: 10,
  },
  groupChild3: {
    top: 143,
    left: 288,
    height: 23,
  },
  groupChild4: {
    top: 264,
    left: 288,
    height: 23,
  },
  groupChild5: {
    top: 384,
    left: 289,
  },
  track: {
    top: 15,
    width: 286,
    height: 85,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    letterSpacing: 0.3,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    left: 299,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  track1: {
    top: 146,
    left: 298,
  },
  track2: {
    top: 267,
    left: 299,
    height: 18,
    width: 32,
  },
  track3: {
    top: 387,
    left: 299,
    height: 18,
    width: 32,
  },
  hino: {
    textDecoration: "underline",
  },
  compactorHinoBmContainer: {
    top: 28,
  },
  compactorHinoBmContainer1: {
    top: 156,
  },
  hinoDutro110: {
    top: 278,
  },
  hinoDutro1101: {
    top: 396,
  },
  rectangleParent: {
    top: 251,
    left: 11,
    width: 585,
    height: 469,
    position: "absolute",
  },
  gpsScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
  },
});

export default GPSScreen1;
