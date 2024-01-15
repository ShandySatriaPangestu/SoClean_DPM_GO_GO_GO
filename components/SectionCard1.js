import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard1 = ({
  imageAltText,
  imageDescription,
  imageDimensions,
  imageIdentifier,
  propTop,
  propLeft,
}) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View style={[styles.rectangleParent, groupView2Style]}>
      <View style={[styles.groupChild, styles.groupChildLayout4]} />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.groupChildLayout3]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.kamisTypo]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={[styles.text4, styles.textLayout]}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={[styles.groupItem, styles.groupChildPosition4]}
        contentFit="cover"
        source={require("../assets/rectangle-4203.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.groupChild20Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-4205.png")}
      />
      <Image
        style={[styles.groupChild1, styles.groupChildPosition2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupChildPosition1]}
        contentFit="cover"
        source={require("../assets/rectangle-4207.png")}
      />
      <Image
        style={[styles.groupChild3, styles.groupChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-4209.png")}
      />
      <Image
        style={[styles.groupChild4, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4210.png")}
      />
      <Text style={[styles.text7, styles.textLayout]}>30</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={imageAltText}
      />
      <Image
        style={[styles.groupChild5, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <View style={styles.groupChild27Position} />
      <Text style={[styles.mingguIni, styles.iniTypo]}>Minggu Ini</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <View style={[styles.groupChild6, styles.groupChildLayout4]} />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.groupChildLayout3]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.kamisTypo]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={[styles.text4, styles.textLayout]}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={[styles.groupChild7, styles.groupChildPosition4]}
        contentFit="cover"
        source={require("../assets/rectangle-4213.png")}
      />
      <Image
        style={[styles.groupChild8, styles.groupChildPosition3]}
        contentFit="cover"
        source={require("../assets/rectangle-4214.png")}
      />
      <Image
        style={[styles.groupChild9, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4215.png")}
      />
      <Image
        style={[styles.groupChild10, styles.groupChildPosition2]}
        contentFit="cover"
        source={require("../assets/rectangle-4216.png")}
      />
      <Image
        style={[styles.groupChild11, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-4217.png")}
      />
      <Image
        style={[styles.groupChild12, styles.groupChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-4218.png")}
      />
      <Image
        style={[styles.groupChild13, styles.groupChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Text style={[styles.text7, styles.textLayout]}>30</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={imageDescription}
      />
      <Image
        style={[styles.groupChild5, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <View style={styles.groupChild27Position} />
      <Text style={[styles.mingguIni, styles.iniTypo]}>Pilih Tanggal</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <View style={[styles.groupChild, styles.groupChildLayout4]} />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.groupChildLayout3]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.kamisTypo]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={[styles.text4, styles.textLayout]}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={[styles.groupItem, styles.groupChildPosition4]}
        contentFit="cover"
        source={require("../assets/rectangle-4203.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Image
        style={[styles.groupChild20, styles.groupChild20Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-4205.png")}
      />
      <Image
        style={[styles.groupChild1, styles.groupChildPosition2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupChildPosition1]}
        contentFit="cover"
        source={require("../assets/rectangle-4207.png")}
      />
      <Image
        style={[styles.groupChild3, styles.groupChildLayout3]}
        contentFit="cover"
        source={require("../assets/rectangle-4209.png")}
      />
      <Image
        style={[styles.groupChild4, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4210.png")}
      />
      <Text style={[styles.text7, styles.textLayout]}>30</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={imageDimensions}
      />
      <Image
        style={[styles.groupChild5, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <View style={[styles.groupChild27, styles.groupChild27Position]} />
      <Text style={[styles.mingguIni, styles.iniTypo]}>Minggu Ini</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.groupChildLayout3]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.kamisTypo]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={[styles.text4, styles.textLayout]}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={[styles.groupChild28, styles.groupChildPosition4]}
        contentFit="cover"
        source={require("../assets/rectangle-4285.png")}
      />
      <Image
        style={[styles.groupChild29, styles.groupChildPosition3]}
        contentFit="cover"
        source={require("../assets/rectangle-4286.png")}
      />
      <Image
        style={[styles.groupChild30, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4215.png")}
      />
      <Image
        style={[styles.groupChild31, styles.groupChildPosition2]}
        contentFit="cover"
        source={require("../assets/rectangle-4288.png")}
      />
      <Image
        style={[styles.groupChild11, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-4217.png")}
      />
      <Image
        style={[styles.groupChild33, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4290.png")}
      />
      <Image
        style={[styles.groupChild13, styles.groupChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Text style={[styles.text7, styles.textLayout]}>30</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={imageIdentifier}
      />
      <Image
        style={[styles.groupChild5, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <View style={[styles.groupChild27, styles.groupChild27Position]} />
      <Text style={[styles.hariIni, styles.iniTypo]}>Hari ini</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Text style={[styles.volumeSampah, styles.text6Typo]}>Volume Sampah</Text>
      <View style={styles.groupChild38} />
      <Text style={[styles.hariIni1, styles.groupChildLayout3]}>Hari ini</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout4: {
    width: 342,
    backgroundColor: Color.colorGainsboro_100,
    top: 0,
    height: 186,
    position: "absolute",
  },
  textTypo1: {
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
  },
  groupChildLayout3: {
    width: 15,
    position: "absolute",
  },
  kamisTypo: {
    width: 16,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 157,
    position: "absolute",
  },
  textTypo: {
    height: 8,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  textLayout: {
    width: 8,
    left: 24,
  },
  text6Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
  },
  groupChildPosition4: {
    left: 58,
    width: 15,
    position: "absolute",
  },
  groupChildLayout2: {
    height: 102,
    top: 52,
  },
  groupChild20Layout: {
    height: 72,
    left: 121,
    width: 15,
    position: "absolute",
  },
  groupChildPosition2: {
    left: 150,
    width: 15,
    position: "absolute",
  },
  groupChildPosition1: {
    left: 179,
    width: 15,
  },
  groupChildLayout1: {
    height: 113,
    top: 41,
    width: 15,
    position: "absolute",
  },
  lineIconLayout: {
    width: 258,
    left: 32,
  },
  groupChildPosition: {
    top: 53,
    position: "absolute",
  },
  iniTypo: {
    height: 15,
    width: 52,
    left: 16,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "5.22%",
    right: "92.46%",
    width: "2.32%",
    height: "3.23%",
    position: "absolute",
  },
  groupChildPosition3: {
    left: 90,
    width: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 103,
    left: 121,
    width: 15,
    position: "absolute",
  },
  groupChild27Position: {
    height: 9,
    width: 52,
    left: 16,
    backgroundColor: Color.colorWhite,
    top: 10,
    position: "absolute",
  },
  groupChild: {
    left: 0,
  },
  minggu: {
    width: 20,
    left: 237,
    top: 157,
    height: 7,
    position: "absolute",
  },
  senin: {
    left: 56,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 157,
  },
  selasa: {
    left: 88,
    width: 18,
    top: 157,
    height: 7,
    position: "absolute",
  },
  rabu: {
    left: 122,
    width: 14,
    top: 157,
    height: 7,
    position: "absolute",
  },
  kamis: {
    left: 149,
  },
  jumat: {
    left: 178,
  },
  sabtu: {
    left: 208,
  },
  text: {
    top: 31,
    width: 8,
    left: 24,
  },
  target: {
    left: 2,
    width: 17,
    top: 49,
    position: "absolute",
  },
  text1: {
    top: 136,
    left: 26,
    width: 4,
  },
  text2: {
    top: 120,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  text3: {
    top: 102,
    width: 8,
    left: 24,
  },
  text4: {
    top: 83,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  text5: {
    top: 66,
    width: 8,
    left: 24,
  },
  ton: {
    top: 144,
    left: 6,
    width: 10,
    position: "absolute",
  },
  text6: {
    top: 149,
    left: 25,
    fontSize: FontSize.size_5xs,
    letterSpacing: -0.2,
    width: 5,
    height: 10,
    position: "absolute",
  },
  hari: {
    top: 162,
    left: 30,
    width: 11,
    position: "absolute",
  },
  groupItem: {
    top: 76,
    height: 79,
  },
  groupInner: {
    left: 90,
    width: 15,
    position: "absolute",
  },
  rectangleIcon: {
    top: 83,
  },
  groupChild1: {
    height: 102,
    top: 52,
  },
  groupChild2: {
    top: 45,
    height: 109,
    position: "absolute",
  },
  groupChild3: {
    top: 74,
    height: 80,
    left: 208,
  },
  groupChild4: {
    left: 237,
  },
  text7: {
    top: 49,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  lineIcon: {
    top: 154,
    height: 1,
    position: "absolute",
  },
  groupChild5: {
    height: 0,
    width: 258,
    left: 32,
  },
  mingguIni: {
    top: 10,
    height: 15,
  },
  vectorIcon: {
    top: "5.91%",
    bottom: "90.86%",
  },
  groupChild6: {
    left: 3,
  },
  groupChild7: {
    top: 56,
    height: 99,
  },
  groupChild8: {
    top: 86,
    height: 69,
  },
  groupChild9: {
    top: 52,
    height: 103,
  },
  groupChild10: {
    height: 105,
    top: 49,
  },
  groupChild11: {
    height: 101,
    left: 179,
    width: 15,
  },
  groupChild12: {
    top: 71,
    height: 83,
    left: 208,
  },
  groupChild13: {
    width: 15,
    position: "absolute",
    left: 237,
  },
  groupChild20: {
    top: 82,
  },
  groupChild27: {
    borderRadius: Border.br_10xs,
  },
  groupChild28: {
    top: 39,
    height: 116,
  },
  groupChild29: {
    top: 70,
    height: 84,
  },
  groupChild30: {
    top: 37,
  },
  groupChild31: {
    top: 90,
    height: 64,
  },
  groupChild33: {
    left: 208,
  },
  hariIni: {
    top: 11,
  },
  vectorIcon3: {
    top: "6.45%",
    bottom: "90.32%",
  },
  volumeSampah: {
    top: 93,
    left: 281,
    letterSpacing: -0.1,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  groupChild38: {
    top: 20,
    borderRadius: Border.br_11xs,
    backgroundColor: Color.colorWhite,
    height: 8,
    left: 208,
    width: 15,
    position: "absolute",
  },
  hariIni1: {
    top: 21,
    fontSize: FontSize.size_9xs,
    height: 14,
    left: 208,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
  },
  rectangleParent: {
    top: 153,
    left: 12,
    width: 345,
    height: 186,
    position: "absolute",
  },
});

export default SectionCard1;
