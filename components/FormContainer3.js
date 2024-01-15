import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FormContainer1 from "./FormContainer1";
import CardContainer from "./CardContainer";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const FormContainer3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.listMap}>
      <FormContainer1
        reportTitle="Laporan Kendala Supir"
        propTop={22}
        propLeft={10}
        onMaps3Press={() => navigation.navigate("LaporanKendalaSupir1")}
      />
      <CardContainer
        componentTitle="Rekapitulasi Sampah Harian"
        propWidth={238}
        propTop={24}
        propLeft={13}
        onMaps2Press={() => navigation.navigate("LaporanTargetSampah1")}
      />
      <Pressable
        style={styles.listMapChild}
        onPress={() => navigation.navigate("LaporanAbsensiSupir")}
      />
      <Text style={styles.rekapitulasiAbsenSupir}>
        Rekapitulasi Absen Supir
      </Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector18.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listMapChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorDimgray_100,
    borderWidth: 1,
    width: 362,
    height: 68,
    position: "absolute",
  },
  rekapitulasiAbsenSupir: {
    top: 22,
    left: 17,
    fontSize: FontSize.size_lg,
    letterSpacing: -0.4,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.nunito,
    color: Color.colorBlack,
    textAlign: "left",
    width: 213,
    height: 18,
    position: "absolute",
  },
  vectorIcon: {
    height: "8.38%",
    width: "3.64%",
    top: "9.17%",
    right: "4.25%",
    bottom: "82.46%",
    left: "92.11%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  listMap: {
    top: 120,
    left: 6,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 363,
    height: 240,
    position: "absolute",
  },
});

export default FormContainer3;
