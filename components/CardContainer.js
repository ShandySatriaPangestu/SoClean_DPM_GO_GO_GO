import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardContainer = ({
  componentTitle,
  propWidth,
  propTop,
  propLeft,
  onMaps2Press,
}) => {
  const rekapitulasiSampahHarianStyle = useMemo(() => {
    return {
      ...getStyleValue("width", propWidth),
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propWidth, propTop, propLeft]);

  return (
    <Pressable
      style={[styles.maps2, styles.maps2Layout]}
      onPress={onMaps2Press}
    >
      <View style={[styles.maps2Child, styles.maps2Layout]} />
      <Text
        style={[styles.rekapitulasiSampahHarian, rekapitulasiSampahHarianStyle]}
      >
        {componentTitle}
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector17.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  maps2Layout: {
    height: 69,
    width: 362,
    left: 0,
    position: "absolute",
  },
  maps2Child: {
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
  },
  rekapitulasiSampahHarian: {
    top: 24,
    left: 13,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.colorBlack,
    textAlign: "left",
    width: 238,
    height: 16,
    position: "absolute",
  },
  vectorIcon: {
    height: "29.13%",
    width: "3.65%",
    top: "35.36%",
    right: "3.98%",
    bottom: "35.51%",
    left: "92.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  maps2: {
    top: 85,
  },
});

export default CardContainer;
