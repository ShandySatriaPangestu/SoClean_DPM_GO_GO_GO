import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionForm = ({ propTop, propLeft }) => {
  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <View
      style={[
        styles.rectangleParent,
        styles.groupChildLayout2,
        groupView1Style,
      ]}
    >
      <View style={[styles.groupChild, styles.groupChildLayout2]} />
      <Text style={[styles.minggu, styles.textTypo]}>Minggu</Text>
      <Text style={[styles.senin, styles.groupChildLayout1]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisPosition]}>Kamis</Text>
      <Text style={[styles.jumat, styles.meiPosition]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.textTypo]}>Sabtu</Text>
      <Text style={[styles.text, styles.textLayout]}>35</Text>
      <Text style={[styles.target, styles.text7Typo]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textLayout]}>15</Text>
      <Text style={[styles.text4, styles.textLayout]}>20</Text>
      <Text style={[styles.text5, styles.textLayout]}>25</Text>
      <Text style={[styles.ton, styles.textTypo]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.hariPosition]}>Hari</Text>
      <Image
        style={[styles.groupItem, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4222.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4223.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.groupChild9Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-4224.png")}
      />
      <Image
        style={[styles.groupChild1, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4223.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4215.png")}
      />
      <Image
        style={[styles.groupChild3, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4227.png")}
      />
      <Image
        style={[styles.groupChild4, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4228.png")}
      />
      <Text style={[styles.text7, styles.text7Typo]}>30</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-28.png")}
      />
      <Image
        style={[styles.groupChild5, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-29.png")}
      />
      <View style={styles.groupChild16Position} />
      <Text style={styles.mingguIni}>Minggu Ini</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <View style={[styles.groupChild, styles.groupChildLayout2]} />
      <Text style={[styles.juli, styles.meiTypo]}>Juli</Text>
      <Text style={[styles.januari, styles.meiTypo]}>Januari</Text>
      <Text style={[styles.februari, styles.meiTypo]}>Februari</Text>
      <Text style={[styles.maret, styles.meiTypo]}>Maret</Text>
      <Text style={[styles.april, styles.meiTypo]}>April</Text>
      <Text style={[styles.mei, styles.meiTypo]}>Mei</Text>
      <Text style={[styles.juni, styles.meiTypo]}>Juni</Text>
      <Text style={[styles.text, styles.textLayout]}>35</Text>
      <Text style={[styles.target, styles.text7Typo]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textLayout]}>15</Text>
      <Text style={[styles.text4, styles.textLayout]}>20</Text>
      <Text style={[styles.text5, styles.textLayout]}>25</Text>
      <Text style={[styles.ton, styles.textTypo]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.bulan, styles.hariPosition]}>Bulan</Text>
      <Image
        style={[styles.groupChild7, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4222.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4223.png")}
      />
      <Image
        style={[styles.groupChild9, styles.groupChild9Layout]}
        contentFit="cover"
        source={require("../assets/rectangle-4224.png")}
      />
      <Image
        style={[styles.groupChild1, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4223.png")}
      />
      <Image
        style={[styles.groupChild2, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4215.png")}
      />
      <Image
        style={[styles.groupChild12, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4236.png")}
      />
      <Image
        style={[styles.groupChild13, styles.groupChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4223.png")}
      />
      <Text style={[styles.text7, styles.text7Typo]}>30</Text>
      <Image
        style={[styles.lineIcon, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-28.png")}
      />
      <Image
        style={[styles.groupChild5, styles.lineIconPosition]}
        contentFit="cover"
        source={require("../assets/line-29.png")}
      />
      <View style={[styles.groupChild16, styles.groupChild16Position]} />
      <Text style={styles.mingguIni}>Bulan ini</Text>
      <Text style={[styles.volumeSampah, styles.text6Typo]}>Volume Sampah</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout2: {
    height: 175,
    width: 342,
    position: "absolute",
  },
  textTypo: {
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
  },
  groupChildLayout1: {
    width: 15,
    position: "absolute",
  },
  kamisPosition: {
    left: 149,
    width: 16,
  },
  meiPosition: {
    left: 178,
    width: 16,
  },
  textLayout: {
    width: 8,
    left: 24,
  },
  text7Typo: {
    top: 46,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  text6Typo: {
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  hariPosition: {
    left: 30,
    top: 152,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  groupLayout: {
    height: 75,
    left: 58,
    width: 15,
    position: "absolute",
  },
  groupChildLayout: {
    height: 96,
    top: 49,
    width: 15,
    position: "absolute",
  },
  groupChild9Layout: {
    height: 68,
    left: 121,
    width: 15,
    position: "absolute",
  },
  lineIconPosition: {
    width: 258,
    left: 32,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "5.26%",
    right: "92.4%",
    width: "2.34%",
    height: "3.43%",
    position: "absolute",
  },
  meiTypo: {
    top: 148,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  groupChild16Position: {
    height: 8,
    backgroundColor: Color.colorWhite,
    width: 52,
    left: 16,
    top: 10,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorGainsboro_100,
  },
  minggu: {
    width: 20,
    left: 237,
    top: 147,
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
    top: 147,
  },
  selasa: {
    left: 88,
    width: 18,
    top: 147,
    height: 7,
    position: "absolute",
  },
  rabu: {
    left: 122,
    width: 14,
    top: 147,
    height: 7,
    position: "absolute",
  },
  kamis: {
    width: 16,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 147,
    position: "absolute",
  },
  jumat: {
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 147,
    position: "absolute",
  },
  sabtu: {
    left: 208,
    width: 16,
    top: 147,
    height: 7,
    position: "absolute",
  },
  text: {
    top: 29,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  target: {
    left: 2,
    width: 17,
  },
  text1: {
    top: 128,
    left: 26,
    width: 4,
    position: "absolute",
  },
  text2: {
    top: 113,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  text3: {
    top: 96,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  text4: {
    top: 78,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  text5: {
    top: 62,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  ton: {
    top: 135,
    left: 6,
    width: 10,
    position: "absolute",
  },
  text6: {
    top: 140,
    left: 25,
    fontSize: FontSize.size_5xs,
    letterSpacing: -0.2,
    width: 5,
    height: 10,
  },
  hari: {
    width: 11,
  },
  groupItem: {
    top: 71,
  },
  groupInner: {
    left: 90,
  },
  rectangleIcon: {
    top: 78,
  },
  groupChild1: {
    left: 150,
  },
  groupChild2: {
    top: 42,
    left: 179,
    height: 103,
  },
  groupChild3: {
    top: 69,
    height: 76,
    left: 208,
  },
  groupChild4: {
    top: 39,
    height: 106,
    left: 237,
  },
  text7: {
    width: 8,
    left: 24,
  },
  lineIcon: {
    top: 145,
    height: 1,
  },
  groupChild5: {
    height: 0,
    top: 49,
    width: 258,
    left: 32,
  },
  mingguIni: {
    height: 13,
    width: 52,
    left: 16,
    top: 10,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    position: "absolute",
  },
  vectorIcon: {
    top: "5.71%",
    bottom: "90.86%",
  },
  juli: {
    width: 20,
    left: 237,
  },
  januari: {
    left: 53,
    width: 25,
  },
  februari: {
    left: 86,
    width: 24,
  },
  maret: {
    left: 120,
    width: 17,
  },
  april: {
    width: 16,
    left: 149,
  },
  mei: {
    left: 178,
    width: 16,
  },
  juni: {
    left: 208,
    width: 16,
  },
  bulan: {
    width: 16,
  },
  groupChild7: {
    top: 70,
  },
  groupChild9: {
    top: 77,
  },
  groupChild12: {
    top: 50,
    height: 95,
    left: 208,
  },
  groupChild13: {
    left: 237,
  },
  groupChild16: {
    borderRadius: Border.br_10xs,
  },
  volumeSampah: {
    top: 79,
    left: 278,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
  },
  vectorIcon1: {
    top: "6.29%",
    bottom: "90.29%",
  },
  rectangleParent: {
    top: 546,
    left: 15,
  },
});

export default SectionForm;
