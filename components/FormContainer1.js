import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormContainer1 = ({ reportTitle, propTop, propLeft, onMaps3Press }) => {
  const laporanKendalaSupirStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
    };
  }, [propTop, propLeft]);

  return (
    <Pressable
      style={[styles.maps3, styles.maps3Layout]}
      onPress={onMaps3Press}
    >
      <View style={[styles.maps3Child, styles.maps3Layout]} />
      <Text style={[styles.laporanKendalaSupir, laporanKendalaSupirStyle]}>
        {reportTitle}
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector16.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  maps3Layout: {
    height: 69,
    width: 362,
    position: "absolute",
  },
  maps3Child: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
  },
  laporanKendalaSupir: {
    top: 22,
    left: 10,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.colorBlack,
    textAlign: "left",
    width: 253,
    height: 18,
    position: "absolute",
  },
  vectorIcon: {
    height: "29.13%",
    width: "3.65%",
    top: "32.46%",
    right: "3.98%",
    bottom: "38.41%",
    left: "92.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  maps3: {
    top: 171,
    left: 1,
  },
});

export default FormContainer1;
