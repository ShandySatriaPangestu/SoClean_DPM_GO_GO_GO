import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SectionCard = ({
  imageAltText,
  imageDescription,
  imageDimensions,
  imageIdentifier,
  rectangleIconTop,
  rectangleIconLeft,
}) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", rectangleIconTop),
      ...getStyleValue("left", rectangleIconLeft),
    };
  }, [rectangleIconTop, rectangleIconLeft]);

  return (
    <View style={[styles.rectangleParent, groupViewStyle]}>
      <View style={[styles.groupChild, styles.groupChildLayout3]} />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.textTypo1]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.groupChildPosition3]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={styles.text4}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/rectangle-4203.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Image
        style={styles.rectangleIcon}
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
        style={[styles.groupChild3, styles.groupChildPosition3]}
        contentFit="cover"
        source={require("../assets/rectangle-4209.png")}
      />
      <Image
        style={styles.groupChild4}
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
      <View style={styles.groupChild38Position} />
      <Text style={[styles.mingguIni, styles.mingguTypo]}>Minggu Ini</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <View style={[styles.groupChild6, styles.groupChildLayout3]} />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.textTypo1]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.groupChildPosition3]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={styles.text4}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={[styles.groupChild7, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4213.png")}
      />
      <Image
        style={[styles.groupChild8, styles.groupPosition]}
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
        style={[styles.groupChild12, styles.groupChildPosition3]}
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
      <View style={styles.groupChild38Position} />
      <Text style={[styles.mingguIni, styles.mingguTypo]}>Pilih Tanggal</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <View style={[styles.groupChild, styles.groupChildLayout3]} />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.textTypo1]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.groupChildPosition3]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={styles.text4}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={styles.groupItem}
        contentFit="cover"
        source={require("../assets/rectangle-4203.png")}
      />
      <Image
        style={[styles.groupInner, styles.groupChildLayout2]}
        contentFit="cover"
        source={require("../assets/rectangle-4208.png")}
      />
      <Image
        style={styles.rectangleIcon}
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
        style={[styles.groupChild3, styles.groupChildPosition3]}
        contentFit="cover"
        source={require("../assets/rectangle-4209.png")}
      />
      <Image
        style={styles.groupChild4}
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
      <View style={styles.groupChild38Position} />
      <Text style={[styles.mingguIni, styles.mingguTypo]}>Minggu Ini</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <View style={[styles.groupChild6, styles.groupChildLayout3]} />
      <Text style={[styles.minggu, styles.textTypo1]}>Minggu</Text>
      <Text style={[styles.senin, styles.textTypo1]}>Senin</Text>
      <Text style={[styles.selasa, styles.textTypo1]}>Selasa</Text>
      <Text style={[styles.rabu, styles.textTypo1]}>Rabu</Text>
      <Text style={[styles.kamis, styles.kamisTypo]}>Kamis</Text>
      <Text style={[styles.jumat, styles.kamisTypo]}>Jumat</Text>
      <Text style={[styles.sabtu, styles.groupChildPosition3]}>Sabtu</Text>
      <Text style={[styles.text, styles.textTypo]}>35</Text>
      <Text style={[styles.target, styles.textTypo1]}>Target</Text>
      <Text style={[styles.text1, styles.textTypo]}>5</Text>
      <Text style={[styles.text2, styles.textLayout]}>10</Text>
      <Text style={[styles.text3, styles.textTypo]}>15</Text>
      <Text style={styles.text4}>20</Text>
      <Text style={[styles.text5, styles.textTypo]}>25</Text>
      <Text style={[styles.ton, styles.textTypo1]}>Ton</Text>
      <Text style={[styles.text6, styles.text6Typo]}>0</Text>
      <Text style={[styles.hari, styles.textTypo1]}>Hari</Text>
      <Image
        style={[styles.groupChild29, styles.groupChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-4213.png")}
      />
      <Image
        style={[styles.groupChild8, styles.groupPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-4214.png")}
      />
      <Image
        style={[styles.groupChild31, styles.groupChildLayout]}
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
        style={[styles.groupChild12, styles.groupChildPosition3]}
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
        source={imageIdentifier}
      />
      <Image
        style={[styles.groupChild5, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../assets/line-25.png")}
      />
      <View style={[styles.groupChild38, styles.groupChild38Position]} />
      <Text style={[styles.mingguIni2, styles.mingguTypo]}>Minggu Ini</Text>
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector19.png")}
      />
      <Text style={[styles.volumeSampah, styles.text6Typo]}>Volume Sampah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout3: {
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
  },
  groupChildPosition3: {
    left: 208,
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
    position: "absolute",
  },
  groupChildLayout2: {
    height: 102,
    top: 52,
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
  lineIconLayout: {
    width: 258,
    left: 32,
  },
  groupChildPosition: {
    top: 53,
    position: "absolute",
  },
  mingguTypo: {
    height: 15,
    width: 52,
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
  groupChildLayout1: {
    height: 99,
    left: 58,
    width: 15,
    position: "absolute",
  },
  groupPosition: {
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
  groupChild38Position: {
    height: 9,
    width: 52,
    backgroundColor: Color.colorWhite,
    left: 16,
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
  },
  senin: {
    left: 56,
    width: 15,
    top: 157,
    height: 7,
  },
  selasa: {
    left: 88,
    width: 18,
    top: 157,
    height: 7,
  },
  rabu: {
    left: 122,
    width: 14,
    top: 157,
    height: 7,
  },
  kamis: {
    left: 149,
    position: "absolute",
  },
  jumat: {
    left: 178,
    position: "absolute",
  },
  sabtu: {
    width: 16,
    height: 7,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    top: 157,
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
    width: 8,
    left: 24,
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
  },
  text6: {
    top: 149,
    left: 25,
    fontSize: FontSize.size_5xs,
    letterSpacing: -0.2,
    width: 5,
    height: 10,
  },
  hari: {
    top: 162,
    left: 30,
    width: 11,
  },
  groupItem: {
    top: 76,
    height: 79,
    left: 58,
    width: 15,
    position: "absolute",
  },
  groupInner: {
    left: 90,
    width: 15,
    position: "absolute",
  },
  rectangleIcon: {
    height: 72,
    left: 121,
    top: 83,
    width: 15,
    position: "absolute",
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
    width: 15,
  },
  groupChild4: {
    top: 41,
    height: 113,
    width: 15,
    left: 237,
    position: "absolute",
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
    left: 16,
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
    width: 15,
  },
  groupChild13: {
    width: 15,
    left: 237,
    position: "absolute",
  },
  groupChild29: {
    top: 55,
  },
  groupChild31: {
    top: 51,
  },
  groupChild38: {
    borderRadius: Border.br_10xs,
  },
  mingguIni2: {
    top: 11,
    left: 20,
  },
  vectorIcon3: {
    top: "6.45%",
    bottom: "90.32%",
  },
  volumeSampah: {
    top: 89,
    left: 278,
    letterSpacing: -0.1,
    fontSize: FontSize.size_7xs,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
  },
  rectangleParent: {
    top: 350,
    left: 15,
    width: 345,
    height: 186,
    position: "absolute",
  },
});

export default SectionCard;
