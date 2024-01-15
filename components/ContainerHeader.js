import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ContainerHeader = ({ userIdentification, greetingMessage }) => {
  return (
    <View style={[styles.header, styles.headerLayout]}>
      <View style={[styles.headerChild, styles.headerLayout]} />
      <View style={[styles.profile, styles.profileLayout]}>
        <Image
          style={[styles.characterbadrun6Icon, styles.profileLayout]}
          contentFit="cover"
          source={require("../assets/characterbadrun-6.png")}
        />
      </View>
      <View style={styles.halo}>
        <Text style={[styles.id4420153, styles.haloRobyTypo]}>
          {userIdentification}
        </Text>
        <Text style={[styles.haloRoby, styles.haloRobyTypo]}>
          {greetingMessage}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    height: 290,
    width: 377,
    position: "absolute",
  },
  profileLayout: {
    height: 100,
    width: 100,
    position: "absolute",
  },
  haloRobyTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  headerChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorDarkslategray_100,
    left: 0,
    top: 0,
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
  id4420153: {
    top: 37,
    height: 19,
    width: 133,
    left: 0,
  },
  haloRoby: {
    marginLeft: -62.7,
    left: "50%",
    width: 121,
    height: 22,
    top: 0,
  },
  halo: {
    top: 207,
    height: 56,
    width: 133,
    left: 147,
    position: "absolute",
  },
  header: {
    top: 1,
    left: -2,
  },
});

export default ContainerHeader;
