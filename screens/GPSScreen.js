import * as React from "react";
import { StyleSheet, View, Text, Pressable, Linking } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import HinoForm from "../components/HinoForm";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const GPSScreen = () => {
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
        style={styles.iconchevronLeft}
        onPress={() => navigation.navigate("HomeSuperuser")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/iconchevron-left.png")}
        />
      </Pressable>
      <View style={[styles.gpsScreenItem, styles.gpsShadowBox]} />
      <View style={[styles.gpsScreenInner, styles.gpsShadowBox]} />
      <View style={[styles.rectangleView, styles.gpsShadowBox]} />
      <View style={[styles.gpsScreenChild1, styles.gpsShadowBox]} />
      <View style={styles.gpsChildShadowBox} />
      <View style={styles.gpsChildShadowBox} />
      <View style={styles.gpsScreenChild4} />
      <View style={styles.gpsScreenChild5} />
      <Image
        style={[styles.rectangleIcon, styles.gpsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4310.png")}
      />
      <Image
        style={[styles.gpsScreenChild6, styles.gpsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4310.png")}
      />
      <Image
        style={[styles.gpsScreenChild7, styles.gpsChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4310.png")}
      />
      <Text style={[styles.track, styles.trackTypo1]}>Track</Text>
      <Text style={[styles.track1, styles.trackTypo]}>Track</Text>
      <Text style={[styles.track2, styles.trackTypo]}>Track</Text>
      <View style={styles.iconchevronLeft1}>
        <Image
          style={[styles.iconchevronLeftChild, styles.gpsChildLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4310.png")}
        />
        <Text style={[styles.track3, styles.trackTypo1]}>Track</Text>
      </View>
      <Text style={[styles.compactorHinoBmContainer, styles.hinoContainerTypo]}>
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
      <Text style={[styles.compactorHinoBmContainer, styles.hinoContainerTypo]}>
        {`Compactor `}
        <Text style={styles.hino}>{`Hino
`}</Text>
        BM 0321 RQ
      </Text>
      <HinoForm propTop={269} propLeft={32} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.status, styles.alertTypo]}>Status</Text>
      <Text style={[styles.onlineDevice, styles.deviceTypo]}>
        Online Device
      </Text>
      <Text style={[styles.totalDevice, styles.deviceTypo]}>Total Device</Text>
      <Text style={[styles.offlineDevice, styles.deviceTypo]}>
        Offline Device
      </Text>
      <Text style={[styles.text, styles.textTypo1]}>24/30</Text>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={66}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-20}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Text style={[styles.text1, styles.textTypo1]}>6</Text>
      <Text style={[styles.text2, styles.textTypo1]}>30</Text>
      <Text style={[styles.device, styles.alertTypo]}>Device</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-45.png")}
      />
      <Image
        style={[styles.gpsScreenChild8, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-46.png")}
      />
      <Text style={[styles.alert, styles.alertTypo]}>Alert</Text>
      <View style={styles.gpsScreenChild9} />
      <Text style={[styles.text3, styles.textTypo]}>1</Text>
      <Text style={[styles.text4, styles.textTypo]}>2</Text>
      <Text style={[styles.text5, styles.textTypo]}>3</Text>
      <Text style={[styles.text6, styles.textTypo]}>...</Text>
      <Image
        style={styles.iconchevronLeft2}
        contentFit="cover"
        source={require("../assets/iconchevron-left1.png")}
      />
      <Image
        style={styles.iconchevronLeft3}
        contentFit="cover"
        source={require("../assets/iconchevron-left2.png")}
      />
      <Text
        style={[styles.hinoDutro110, styles.hinoContainerTypo]}
      >{`Hino Dutro 110 SD Mini Compactor
 BM 7834 AC`}</Text>
      <Text
        style={[styles.hinoDutro1101, styles.hinoContainerTypo]}
      >{`Hino Dutro 110 SD Mini Compactor
 BM 9172 AC`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gpsShadowBox: {
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
    left: 11,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  gpsChildLayout: {
    height: 23,
    width: 51,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  trackTypo1: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  trackTypo: {
    left: 310,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    height: 18,
    width: 32,
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  hinoContainerTypo: {
    left: 116,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  vectorIconLayout: {
    bottom: "84.24%",
    top: "14.53%",
    height: "1.23%",
    width: "2.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  alertTypo: {
    top: "13.92%",
    width: "12.8%",
    height: "1.72%",
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  deviceTypo: {
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    top: "20.81%",
    width: "21.07%",
    height: "1.72%",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  textTypo1: {
    top: "17.86%",
    fontSize: FontSize.size_xs,
    width: "12.8%",
    height: "1.72%",
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  lineIconLayout: {
    height: 72,
    width: 1,
    top: 121,
    position: "absolute",
  },
  textTypo: {
    top: 758,
    fontFamily: FontFamily.poppins,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  gpsScreenChild: {
    left: -1,
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 375,
    height: 166,
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
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
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
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  iconchevronLeft: {
    left: "5.07%",
    top: "6.03%",
    right: "91.39%",
    bottom: "91.54%",
    width: "3.55%",
    height: "2.43%",
    position: "absolute",
  },
  gpsScreenItem: {
    top: 103,
    height: 97,
  },
  gpsScreenInner: {
    top: 623,
  },
  rectangleView: {
    top: 103,
    height: 97,
  },
  gpsScreenChild1: {
    top: 383,
  },
  gpsChildShadowBox: {
    left: 12,
    top: 503,
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
  gpsScreenChild4: {
    top: 251,
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
    left: 11,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  gpsScreenChild5: {
    borderColor: Color.colorDarkgray_200,
    height: 24,
    width: 51,
    backgroundColor: Color.colorGainsboro_100,
    top: 261,
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
    borderStyle: "solid",
    left: 299,
    position: "absolute",
  },
  rectangleIcon: {
    top: 394,
    left: 299,
    height: 23,
  },
  gpsScreenChild6: {
    top: 515,
    left: 299,
    height: 23,
  },
  gpsScreenChild7: {
    top: 635,
    left: 300,
  },
  track: {
    top: 397,
    left: 309,
    height: 18,
    width: 32,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
  },
  track1: {
    top: 518,
  },
  track2: {
    top: 638,
  },
  iconchevronLeftChild: {
    left: 0,
    top: 0,
  },
  track3: {
    top: 5,
    width: 286,
    height: 85,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.poppins,
    letterSpacing: 0.3,
    fontSize: FontSize.size_3xs,
    left: 11,
  },
  iconchevronLeft1: {
    width: 297,
    height: 90,
    top: 261,
    left: 299,
    position: "absolute",
  },
  hino: {
    textDecoration: "underline",
  },
  compactorHinoBmContainer: {
    top: 279,
  },
  compactorHinoBmContainer1: {
    top: 407,
  },
  vectorIcon: {
    right: "90.13%",
    left: "7.2%",
  },
  vectorIcon1: {
    right: "58.93%",
    left: "38.4%",
  },
  vectorIcon2: {
    right: "26.93%",
    left: "70.4%",
  },
  status: {
    left: "11.2%",
  },
  onlineDevice: {
    left: "6.93%",
  },
  totalDevice: {
    left: "38.13%",
  },
  offlineDevice: {
    left: "70.4%",
  },
  text: {
    left: "7.2%",
  },
  text1: {
    left: "70.4%",
  },
  text2: {
    left: "38.4%",
  },
  device: {
    left: "42.4%",
  },
  lineIcon: {
    left: 120,
  },
  gpsScreenChild8: {
    left: 248,
  },
  alert: {
    left: "74.4%",
  },
  gpsScreenChild9: {
    top: 757,
    left: 128,
    width: 19,
    height: 20,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text3: {
    left: 136,
  },
  text4: {
    left: 169,
  },
  text5: {
    left: 199,
  },
  text6: {
    left: 222,
  },
  iconchevronLeft2: {
    height: "1.8%",
    top: "93.23%",
    right: "69.6%",
    bottom: "4.98%",
    left: "27.73%",
    width: "2.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconchevronLeft3: {
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
  hinoDutro110: {
    top: 529,
  },
  hinoDutro1101: {
    top: 647,
  },
  gpsScreen: {
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default GPSScreen;
